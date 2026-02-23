
let currentTag = "all";
let currentQuery = "";

const ITEMS = Array.isArray(window.FENGYUN_ITEMS) ? window.FENGYUN_ITEMS : [];
const POPUPS = window.FENGYUN_POPUPS || {};
const LINGSHU_GROUPS = window.LINGSHU_GROUPS || [];
const CROPS = (typeof FENGYUN_CROPS !== "undefined" && Array.isArray(FENGYUN_CROPS)) ? FENGYUN_CROPS : [];

function makeAnchorId(name) {
  return "item-" + String(name || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^\u4e00-\u9fa5\w-]/g, "");
}

function escapeHTML(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function linkifyPlainText(text) {
  const s = String(text || "");
  const re = /\[\[([\s\S]*?)\]\]/g;

  let out = "";
  let last = 0;
  let m;

  while ((m = re.exec(s)) !== null) {
    out += escapeHTML(s.slice(last, m.index));

    const keyword = (m[1] || "").trim();
    const safeText = escapeHTML(keyword);
    const safeAttr = escapeHTML(keyword);

    out += `<span class="inner-link" data-target="${safeAttr}">${safeText}</span>`;
    last = re.lastIndex;
  }

  out += escapeHTML(s.slice(last));
  return out;
}

function linkifyHtmlFragment(html) {
  return String(html || "").replace(/\[\[([\s\S]*?)\]\]/g, (m, k) => {
    const keyword = (k || "").trim();
    const safeText = escapeHTML(keyword);
    const safeAttr = escapeHTML(keyword);
    return `<span class="inner-link" data-target="${safeAttr}">${safeText}</span>`;
  });
}

function renderItemsToPage() {
  const container = document.getElementById("item-container");
  if (!container) {
    console.error("renderItemsToPage: 找不到 #item-container");
    return;
  }

  container.innerHTML = "";

  ITEMS.forEach((it) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `item ${it.class || ""}`.trim();
    itemDiv.dataset.tag = it.tag || "";
    itemDiv.id = makeAnchorId(it.name); 

    const img = document.createElement("img");
    img.src = it.image || "";
    img.alt = it.name || "";
    img.loading = "lazy";
    img.decoding = "async";
    itemDiv.appendChild(img);

    const box = document.createElement("div");

    const pName = document.createElement("p");
    pName.innerHTML = `<span class="bst">名称:</span><span class="st">${escapeHTML(it.name || "")}</span>`;
    box.appendChild(pName);

    if (it.source) {
      const p = document.createElement("p");
      p.innerHTML = `<span class="bst">获取:</span><span class="st">${linkifyPlainText(it.source)}</span>`;
      box.appendChild(p);
    }

    if (it.tech) {
      const p = document.createElement("p");
      p.innerHTML = `<span class="bst">科技:</span><span class="st">${linkifyPlainText(it.tech)}</span>`;
      box.appendChild(p);
    }

    if (it.details) {
      const p = document.createElement("p");
      const html = linkifyPlainText(it.details).replace(/\n/g, "<br>");
      p.innerHTML = `<span class="bst">详细:</span><span class="st">${html}</span>`;
      box.appendChild(p);
    }

    if (it.hasPopup) {
      const btn = document.createElement("button");
      btn.className = "popup-button";
      btn.type = "button";
      btn.dataset.popupid = it.popupId || "";
      btn.textContent = "查看详解";
      box.appendChild(btn);
    }

    itemDiv.appendChild(box);
    container.appendChild(itemDiv);
  });
}

function applyFilters() {
  const items = document.querySelectorAll("#item-container .item");

  items.forEach((item) => {
    const raw = item.dataset.tag || "";
    const tags = raw.split(/\s+/).filter(Boolean);
    const text = (item.textContent || "").toLowerCase();

    const matchesTag = currentTag === "all" || tags.includes(currentTag);
    const matchesQuery = !currentQuery || text.includes(currentQuery);

    item.style.display = (matchesTag && matchesQuery) ? "" : "none";
  });
}

window.filterItems = function(btn, tag) {
  setButtonBG(btn);
  currentTag = tag;
  applyFilters();
};

window.showAllItems = function(btn) {
  setButtonBG(btn);
  currentTag = "all";
  applyFilters();
};

function jumpExact(keyword) {
  const k = String(keyword || "").trim();
  if (!k) return;

  currentTag = "all";
  currentQuery = "";
  const searchBox = document.getElementById("search-box");
  if (searchBox) searchBox.value = "";
  applyFilters();

  const id = makeAnchorId(k);
  const el = document.getElementById(id);

  if (!el) {
    alert(`未找到精确词条：${k}\n（要求存在同名“名称”卡片）`);
    return;
  }

    document.querySelectorAll(".popup-overlay").forEach(ov => {
        ov.style.display = "none";
    });

history.replaceState({}, "", "#" + id);

  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("flash-hit");
  setTimeout(() => el.classList.remove("flash-hit"), 900);
}

function buildPopupHtml(info) {
  if (!info) return "";

  if (!Array.isArray(info.blocks) || info.blocks.length === 0) {
    return info.content ? linkifyHtmlFragment(info.content) : "";
  }

  const title = info.title || "";

  return info.blocks.map((block) => {
    if (!block || !block.type) return "";

    if (block.type === "image") {
      const src = block.src || "";
      const alt = block.alt || title;
      if (!src) return "";
      return `
        <div class="popup-block popup-block-image">
          <img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}">
        </div>
      `;
    }

    if (block.type === "text") {
      return `
        <div class="popup-block popup-block-text">
          ${linkifyHtmlFragment(block.html || "")}
        </div>
      `;
    }

    return "";
  }).join("");
}

function setupItemPopups() {
  const overlay = document.getElementById("popup-item");
  if (!overlay) return;

  const titleEl = overlay.querySelector("#popup-item-title");
  const contentEl = overlay.querySelector("#popup-item-content");
  const closeBtn = overlay.querySelector(".popup-close");

  document.body.addEventListener("click", (event) => {
    const btn = event.target.closest(".popup-button");
    if (!btn) return;

    const popupId = btn.dataset.popupid;
    if (!popupId) return;

    const info = POPUPS[popupId];
    if (!info) {
      console.warn("未找到对应的弹窗内容：", popupId);
      return;
    }

    if (titleEl) titleEl.textContent = info.title || "";
    if (contentEl) contentEl.innerHTML = buildPopupHtml(info);

    overlay.style.display = "flex";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });

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
  const res = await fetch("./md.md", { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`md.md 请求失败：${res.status} ${res.statusText}`);
  }

  const ct = res.headers.get("content-type") || "";
  console.log("[md.md] content-type =", ct);

  const text = await res.text();
  console.log("[md.md] length =", text.length);

  const html = escapeHTML(text).replace(/\n/g, "<br>");
  content.innerHTML = linkifyHtmlFragment(html);

  loaded = true;
} catch (e) {
  console.error(e);
  content.textContent = "加载模组简介失败：请打开控制台查看 md.md 的请求状态（Network）";
}

    }
    overlay.style.display = "flex";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });

  const closeBtn = overlay.querySelector(".popup-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }
}

function renderLingShuTable() {
  const tbody = document.getElementById("lingshu-table-body");
  if (!tbody) return;
  if (!Array.isArray(LINGSHU_GROUPS)) return;

  tbody.innerHTML = "";

  LINGSHU_GROUPS.forEach((g) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${linkifyHtmlFragment(escapeHTML(g.group || ""))}</td>
      <td>${escapeHTML(g.priority ?? "")}</td>
      <td>${linkifyHtmlFragment((g.inputs || []).map(escapeHTML).join("<br>"))}</td>
      <td>${linkifyHtmlFragment((g.outputs || []).map(escapeHTML).join("<br>"))}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderCropTable() {
  const tbody = document.getElementById("crop-table-body");
  if (!tbody) return;
  if (!Array.isArray(CROPS)) return;

  tbody.innerHTML = "";

  CROPS.forEach((crop) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${linkifyHtmlFragment(escapeHTML(crop.name || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.spring || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.summer || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.autumn || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.winter || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.faction || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.booster || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.compost || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.manure || ""))}</td>
      <td>${linkifyHtmlFragment(escapeHTML(crop.moisture || ""))}</td>
    `;
    tbody.appendChild(tr);
  });
}

function setupExtraPopups() {
  const map = {
    "btn-lingshu": "popup-lingshu",
    "btn-crops": "popup-crops",
  };

  Object.keys(map).forEach((btnId) => {
    const overlayId = map[btnId];
    const btn = document.getElementById(btnId);
    const overlay = document.getElementById(overlayId);
    if (!btn || !overlay) return;

    btn.addEventListener("click", () => {
      overlay.style.display = "flex";
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });

    const closeBtn = overlay.querySelector(".popup-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderItemsToPage();

  const searchInput = document.getElementById("search-box");
  if (searchInput) {
        let _searchTimer = null;
        searchInput.addEventListener("input", () => {
        clearTimeout(_searchTimer);
        _searchTimer = setTimeout(() => {
            currentQuery = searchInput.value.trim().toLowerCase();
            applyFilters();

            if (location.hash) {
            const id = location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.classList.add("flash-hit");
                setTimeout(() => el.classList.remove("flash-hit"), 900);
            }
            }

        }, 120);
        });

  }

  setupItemPopups();
  setupModIntroPopup();
  renderLingShuTable();
  renderCropTable();
  setupExtraPopups();

  document.body.addEventListener("click", (e) => {
    const el = e.target.closest(".inner-link");
    if (!el) return;
    const target = el.dataset.target || el.textContent || "";
    setAllActive();
    jumpExact(target);
  });

  applyFilters();
});

function setButtonBG(button) {
  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.classList.remove("active");
  })

  button.classList.add("active")
}

function setAllActive() {
  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.classList.remove("active")
  })

  const allBtn = document.querySelector('.filter-pill[data-filter="all"]')
  if (allBtn) allBtn.classList.add("active")
}