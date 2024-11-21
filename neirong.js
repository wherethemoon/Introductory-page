document.addEventListener("DOMContentLoaded", async () => {
    const items = [
        { class:"item", tag: "yiqi", image: "img/blueberry.png", name: "蓝莓", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/ginger.png", name: "洋姜", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_armor.png", name: "辉煌护甲", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_coconut.png", name: "椰子", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_balance_maintainer.png", name: "自然平衡维持器", source: "", details: "", hasPopup: true , popupId: 1},
        { class:"item", tag: "yiqi", image: "img/honor_coconut_prime.png", name: "椰子精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_greenjuice.png", name: "植物清汁", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_hybird_rice_tree.png", name: "巨型杂交水稻", source: "", details: "" , hasPopup: true, popupId: 2},
        { class:"item", tag: "yiqi", image: "img/honor_kit.png", name: "辉煌修补套件", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_multitool.png", name: "辉煌多用工具", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_plantfibre.png", name: "植物纤维", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_rice_prime.png", name: "大米精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_seed.png", name: "辉煌种子", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_splendor.png", name: "自然辉煌", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_stower.png", name: "自然亲和子塔", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_tea.png", name: "茶丛", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_tea_prime.png", name: "茶丛精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/honor_wheat_prime.png", name: "小麦精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/swap_hat-0.png", name: "辉煌法帽", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_blueberry_prime.png", name: "蓝莓精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_dangerous.png", name: "自然凶险", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_ginger_prime.png", name: "洋姜精华", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_mucous.png", name: "恐怖粘液", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_seed.png", name: "凶险种子", source: "", details: "" },
        { class:"item", tag: "yiqi", image: "img/terror_snakeskinfruit.png", name: "蛇皮果", source: "", details: "" },
        { class:"item", tag: "erqi", image: "img/terror_snakeskinfruit_prime.png", name: "蛇皮果精华", source: "", details: "" },
    ];

    const popupDetails = [
        { popupId: 1, imagesAndTexts: [
        {
          "image": "img/honor_balance_maintainer.png",
          "text": "This is the first text."
        },
        {
          "image": "img/",
          "text": "This is the second text."
        },

      ]},


      { popupId: 2, imagesAndTexts: [
        {
          "image": "img/honor_hybird_rice_tree.png",
          "text": "This is the first text."
        },
        {
          "image": "img/",
          "text": "This is the second text."
        }
      ]},

    ];
        

    // 读取模板文件
    const response = await fetch('template.mustache');
    const template = await response.text();
    const rendered = Mustache.render(template, { items, popupDetails });

    // 插入渲染内容到指定容器
    document.getElementById('item-container').innerHTML = rendered;


    // 搜索功能
    document.getElementById('search-box').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const items = document.querySelectorAll('main .item');
        items.forEach(item => {
            if (!item.classList.contains('hidden') && item.textContent.toLowerCase().includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

//弹窗的出现
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("popup-button")) {
            const popupId = event.target.dataset.popupid; // 获取按钮的 popupId
            const popupDetail = popupDetails.find(p => String(p.popupId) === popupId); // 查找对应弹窗数据
    
            if (popupDetail) {
                // 更新弹窗内容
                 popupDetail.imagesAndTexts.forEach((item, index) => {
                    // 获取每个 img 元素
                    let imgElements = document.querySelectorAll(`#global-popup-${popupId} img`);
        let textElements = document.querySelectorAll(`#global-popup-${popupId} .popup-content p span`);

        // 确保索引存在
        if (imgElements[index] && textElements[index]) {
            // 更新图片的 src 属性
            imgElements[index].src = item.image;
            // 更新文本的内容
            textElements[index].textContent = item.text;
        }
                });
    
                // 显示弹窗
                document.getElementById(`global-popup-${popupId}`).style.display = "flex";
            } else {
                console.error(`未找到 popupId 为 ${popupId} 的弹窗内容`);
            }

            
            document.getElementById(`popup-close-${popupId}`).addEventListener("click", () => {
                document.getElementById(`global-popup-${popupId}`).style.display = "none";
            });
        }
    });



    
}); 

//上方筛选框
function filterItems(filterTag) {
    const items = document.querySelectorAll(".item"); // 获取所有物品
    items.forEach(item => {
        const matchesFilter = item.dataset.tag === filterTag; // 检查标签是否匹配
        item.style.display = matchesFilter ? "" : "none"; // 显示或隐藏
    });
}

function showAllItems() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.display = ""; // 显示所有物品
    });
}


