document.addEventListener("DOMContentLoaded", async () => {
    const items = [
        { tag: "yiqi", image: "img/blueberry.png", name: "蓝莓", source: "", details: "" },
        { tag: "yiqi", image: "img/ginger.png", name: "洋姜", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_armor.png", name: "辉煌护甲", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_coconut.png", name: "椰子", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_balance_maintainer.png", name: "自然平衡维持器", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_coconut_prime.png", name: "椰子精华", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_greenjuice.png", name: "植物清汁", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_hybird_rice_tree.png", name: "巨型杂交水稻", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_kit.png", name: "辉煌修补套件", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_multitool.png", name: "辉煌多用工具", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_plantfibre.png", name: "植物纤维", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_rice_prime.png", name: "大米精华", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_seed.png", name: "辉煌种子", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_splendor.png", name: "自然辉煌", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_stower.png", name: "自然亲和子塔", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_tea.png", name: "茶丛", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_tea_prime.png", name: "茶丛精华", source: "", details: "" },
        { tag: "yiqi", image: "img/honor_wheat_prime.png", name: "小麦精华", source: "", details: "" },
        { tag: "yiqi", image: "img/swap_hat-0.png", name: "辉煌法帽", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_blueberry_prime.png", name: "蓝莓精华", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_dangerous.png", name: "自然凶险", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_ginger_prime.png", name: "洋姜精华", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_mucous.png", name: "恐怖粘液", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_seed.png", name: "凶险种子", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_snakeskinfruit.png", name: "蛇皮果", source: "", details: "" },
        { tag: "yiqi", image: "img/terror_snakeskinfruit_prime.png", name: "蛇皮果精华", source: "", details: "" },
    ];

    // 读取模板文件
    const response = await fetch('template.mustache');
    const template = await response.text();

    // 渲染模板
    const rendered = Mustache.render(template, { items });

    // 将渲染的内容插入页面
    document.getElementById('item-container').innerHTML = rendered;
});
