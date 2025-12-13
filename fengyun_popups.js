// 专门存放弹窗详细说明
window.FENGYUN_POPUPS = {
  // 示例：自然亲和机器
  honor_machine: {
    title: "自然亲和机器",//标题
    // blocks 决定 顺序 和 类型
    blocks: [
      // 第 1 块：图片
      {
        type: "image",//类型
        src: "img/honor_machine.png",//图片路径
        alt: "自然亲和机器"//图片描述（可以在图片未加载出来的时候看到，显示在图片上，其余时间意义不大）
      },
      // 第 2 块：文字
      {
        type: "text",//类型
        html: `
          <p><strong>自然亲和机器</strong> 是辉煌阵营的原型站。</p>
          <p>解锁辉煌科技后，可以制作辉煌法帽、护甲、多用工具等关键装备。</p>
        `
      },
      // 第 3 块：再来一张图
      {
        type: "image",
        src: "img/honor_machine_range.png",
        alt: "自然亲和机器覆盖范围示意"
      },
      // 第 4 块：再来一段说明
      {
        type: "text",
        html: `
          <p>建议放置在主基地农田附近，便于边耕作边制作装备。</p>
        `
      }
    ]
  },

  honor_balance_maintainer: {
    title: "自然平衡维持器",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_factory.png",
        alt: "自然平衡维持器"
      },
      {
        type: "text",
        html: `
          <p><strong>自然平衡维持器</strong> 是自动化生产核心。</p>
          <p>根据生产组配置，自动把原料转换为成品。</p>
        `
      },
      {
        type: "image",
        src: "img/hmr_chest_factory_ui.png",
        alt: "自然平衡维持器"
      },
      {
        type: "text",
        html: `
          <p>配合青衢纳宝箱、云梭递运箱等，可以搭建半自动物流网络。</p>
        `
      }
    ]
  }

  // …其余物品同理，想插多少“图/文/图/文”都可以
};
