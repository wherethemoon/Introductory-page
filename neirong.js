
let currentTag = "all";   
let currentQuery = "";    

function openOverlayById(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.style.display = "flex";   
}

function closeOverlayById(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.style.display = "none";
}

function applyFilters() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const raw = item.dataset.tag || "";                 
        const tags = raw.split(/\s+/).filter(Boolean);      
        const text = item.textContent.toLowerCase();

        const matchesTag =
            currentTag === "all" ||
            tags.includes(currentTag);                      

        const matchesQuery =
            !currentQuery || text.includes(currentQuery);

        item.style.display = matchesTag && matchesQuery ? "" : "none";
    });
}

function filterItems(tag) {
    currentTag = tag;
    applyFilters();
}

function showAllItems() {
    currentTag = "all";
    applyFilters();
}

const items = Array.isArray(window.FENGYUN_ITEMS) ? window.FENGYUN_ITEMS : [];
const popupDetails = window.FENGYUN_POPUPS || {};

document.addEventListener("DOMContentLoaded", async () => {



    try {
        const response = await fetch("template.mustache");
        const template = await response.text();
        const rendered = Mustache.render(template, { items, popupDetails });

        const container = document.getElementById("item-container");
        if (container) {
            container.innerHTML = rendered;
        }
    } catch (err) {
        console.error("加载 template.mustache 失败：", err);
    }


    const searchInput = document.getElementById("search-box");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentQuery = searchInput.value.trim().toLowerCase();
            applyFilters();
        });
    }


    applyFilters();


    setupItemPopups();


    setupModIntroPopup();


    renderLingShuTable();
    renderCropTable();
    setupExtraPopups();
});


function buildPopupHtml(info) {
    // 如果没定义 blocks，就兼容旧的 content 字段
    if (!info || !Array.isArray(info.blocks) || info.blocks.length === 0) {
        return info && info.content ? info.content : "";
    }

    const title = info.title || "";

    return info.blocks.map(block => {
        if (!block || !block.type) return "";

        // 图片块
        if (block.type === "image") {
            const src = block.src || "";
            const alt = block.alt || title;
            if (!src) return "";
            return `
                <div class="popup-block popup-block-image">
                    <img src="${src}" alt="${alt}">
                </div>
            `;
        }

        // 文字块（内容是 HTML 片段）
        if (block.type === "text") {
            const html = block.html || "";
            return `
                <div class="popup-block popup-block-text">
                    ${html}
                </div>
            `;
        }

        // 其他类型暂不处理
        return "";
    }).join("");
}

function setupItemPopups() {
    const overlay = document.getElementById("popup-item");
    if (!overlay) return;

    const titleEl = overlay.querySelector("#popup-item-title");
    const contentEl = overlay.querySelector("#popup-item-content");
    const closeBtn = overlay.querySelector(".popup-close");

    // 事件代理：点任何一个 .popup-button（查看图解按钮）
    document.body.addEventListener("click", (event) => {
        const btn = event.target.closest(".popup-button");
        if (!btn) return;

        const popupId = btn.dataset.popupid;
        if (!popupId) return;

        const info = popupDetails[popupId];
        if (!info) {
            console.warn("未找到对应的弹窗内容：", popupId);
            return;
        }

        if (titleEl) {
            titleEl.textContent = info.title || "";
        }
        if (contentEl) {
            // ✅ 这里改成用 blocks 生成 HTML
            contentEl.innerHTML = buildPopupHtml(info);
        }

        overlay.style.display = "flex";
    });

    // 点遮罩关闭
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // 点 × 关闭
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
}



function setupModIntroPopup() {
    const btn = document.getElementById("btn-mod-intro");
    const overlay = document.getElementById("popup-mod-intro");
    const content = document.getElementById("mod-intro-content");
    if (!btn || !overlay || !content) return;

    let loaded = false;

    btn.addEventListener("click", async () => {
        if (!loaded) {
            try {
                const res = await fetch("md.md");
                const text = await res.text();
                content.innerHTML = text
                    .split("\n")
                    .map(line => line.trim() === "" ? "<br>" : line)
                    .join("<br>");
                loaded = true;
            } catch (e) {
                console.error(e);
                content.textContent = "加载模组简介失败，请检查 img/md.md 是否存在。";
            }
        }
        overlay.style.display = "flex";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    const closeBtn = overlay.querySelector(".popup-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
}






// ……前面是别的函数

function renderLingShuTable() {
    const tbody = document.getElementById("lingshu-table-body");
    if (!tbody) return;

    const groups = window.LINGSHU_GROUPS;
    if (!Array.isArray(groups)) {
        console.warn("renderLingShuTable: window.LINGSHU_GROUPS 不存在或不是数组");
        return;
    }

    // 调试一下现在拿到的数据
    console.log("renderLingShuTable 使用的组数 =", groups.length);

    tbody.innerHTML = "";

    groups.forEach(g => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${g.group || ""}</td>
            <td>${g.priority ?? ""}</td>
            <td>${(g.inputs || []).join("<br>")}</td>
            <td>${(g.outputs || []).join("<br>")}</td>
        `;
        tbody.appendChild(tr);
    });
}



function renderCropTable() {
    const tbody = document.getElementById("crop-table-body");
    if (!tbody || !Array.isArray(FENGYUN_CROPS)) return;

    tbody.innerHTML = "";
    FENGYUN_CROPS.forEach(crop => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${crop.name || ""}</td>
            <td>${crop.spring || ""}</td>
            <td>${crop.summer || ""}</td>
            <td>${crop.autumn || ""}</td>
            <td>${crop.winter || ""}</td>
            <td>${crop.faction || ""}</td>
            <td>${crop.booster || ""}</td>
            <td>${crop.compost || ""}</td>
            <td>${crop.manure || ""}</td>
        `;
        tbody.appendChild(tr);
    });
}


function setupExtraPopups() {
    const map = {
        "btn-lingshu": "popup-lingshu",
        "btn-crops": "popup-crops"
    };

    Object.keys(map).forEach(btnId => {
        const overlayId = map[btnId];
        const btn = document.getElementById(btnId);
        const overlay = document.getElementById(overlayId);
        if (!btn || !overlay) return;

        // 打开弹窗
        btn.addEventListener("click", () => {
            overlay.style.display = "flex";
        });

        // 点击遮罩关闭
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
            }
        });

        // 点 × 关闭
        const closeBtn = overlay.querySelector(".popup-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                overlay.style.display = "none";
            });
        }
    });
}
