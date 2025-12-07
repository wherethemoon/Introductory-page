let currentTag = "all";
let currentQuery = "";

function applyFilters() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const tag = item.dataset.tag || "all";
        const text = item.textContent.toLowerCase();

        const matchesTag = currentTag === "all" || tag === currentTag;
        const matchesQuery = !currentQuery || text.includes(currentQuery);

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

document.addEventListener("DOMContentLoaded", async () => {
    // 物品列表：先把 source / details 留空，后面可以按实际效果补充
    const items = [
        { class: "item", tag: "yiqi", image: "img/blueberry.png",                name: "蓝莓",           source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/ginger.png",                   name: "洋姜",           source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_armor.png",              name: "辉煌护甲",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_coconut.png",            name: "椰子",           source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_balance_maintainer.png", name: "自然平衡维持器", source: "", details: "", hasPopup: true, popupId: 1 },
        { class: "item", tag: "yiqi", image: "img/honor_coconut_prime.png",      name: "椰子精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_greenjuice.png",         name: "植物清汁",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_hybird_rice_tree.png",   name: "巨型杂交水稻",   source: "", details: "", hasPopup: true, popupId: 2 },
        { class: "item", tag: "yiqi", image: "img/honor_kit.png",                name: "辉煌修补套件",   source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_multitool.png",          name: "辉煌多用工具",   source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_plantfibre.png",         name: "植物纤维",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_rice_prime.png",         name: "大米精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_seed.png",               name: "辉煌种子",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_splendor.png",           name: "自然辉煌",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_stower.png",             name: "自然亲和子塔",   source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_tea.png",                name: "茶丛",           source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_tea_prime.png",          name: "茶丛精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/honor_wheat_prime.png",        name: "小麦精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/swap_hat-0.png",               name: "辉煌法帽",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_blueberry_prime.png",   name: "蓝莓精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_dangerous.png",         name: "自然凶险",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_ginger_prime.png",      name: "洋姜精华",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_mucous.png",            name: "恐怖粘液",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_seed.png",              name: "凶险种子",       source: "", details: "" },
        { class: "item", tag: "yiqi", image: "img/terror_snakeskinfruit.png",    name: "蛇皮果",         source: "", details: "" },
        { class: "item", tag: "erqi", image: "img/terror_snakeskinfruit_prime.png", name: "蛇皮果精华", source: "", details: "" }
    ];

    // 弹窗里展示更详细的“图解”内容
    const popupDetails = [
        {
            popupId: 1,
            imagesAndTexts: [
                {
                    image: "img/honor_balance_maintainer.png",
                    text: "示例说明：自然平衡维持器是本模组的核心装置，用于稳定农田与自然能量的平衡。"
                }
            ]
        },
        {
            popupId: 2,
            imagesAndTexts: [
                {
                    image: "img/honor_hybird_rice_tree.png",
                    text: "示例说明：巨型杂交水稻展示了一条高收益作物的成长链路，可搭配自然辉煌线玩法使用。"
                }
            ]
        }
    ];

    // 读取模板文件并渲染
    try {
        const response = await fetch("template.mustache");
        const template = await response.text();
        const rendered = Mustache.render(template, { items, popupDetails });

        const container = document.getElementById("item-container");
        if (container) {
            container.innerHTML = rendered;
        }
    } catch (err) {
        console.error("加载模板失败：", err);
        return;
    }

    // 搜索功能
    const searchInput = document.getElementById("search-box");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            currentQuery = searchInput.value.trim().toLowerCase();
            applyFilters();
        });
    }

    // 初始展示（全部 + 空搜索）
    applyFilters();

    // 弹窗显示/关闭
    document.body.addEventListener("click", (event) => {
        const target = event.target;

        // 打开弹窗
        if (target.classList.contains("popup-button")) {
            const popupId = target.dataset.popupid;
            if (!popupId) return;

            const overlay = document.getElementById(`global-popup-${popupId}`);
            if (overlay) {
                overlay.classList.remove("hidden");
            }
        }

        // 关闭弹窗：点击关闭按钮 或 点击遮罩空白处
        if (
            target.classList.contains("popup-close") ||
            (target.classList.contains("popup-overlay") && !target.closest(".popup"))
        ) {
            const popupId = target.dataset.popupid;

            if (popupId) {
                const overlay = document.getElementById(`global-popup-${popupId}`);
                if (overlay) {
                    overlay.classList.add("hidden");
                }
            } else {
                // 没有携带 id 的情况，保险起见关所有弹窗
                document.querySelectorAll(".popup-overlay").forEach(el => {
                    el.classList.add("hidden");
                });
            }
        }
    });
});
