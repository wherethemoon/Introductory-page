//界面中每个物品的介绍存放位置

//分类标签
// equip:装备
// structure:建筑
// material:材料
// crop:作物
// seasoning:调味料
// dish:料理
// plant:植物
// creature:生物
// boss:boss
// character:角色
// terrain:地形
// decoration:装饰
// buff:增益
// event:奇遇
// crossover:联动

window.FENGYUN_ITEMS = [
  // ------------- 辉煌阵营 -------------
  {
    "class": "item",//固定格式不要更改
    "tag": "structure",//物品分类标签(可以同时添加多个标签,用空格隔开，这样物品会被多个标签同时显示)
    "image": "img/honor_machine.png",//图片路径
    "name": "自然亲和机器",//物品卡片里的<名称>
    "source": "[[自然辉煌]]x8,[[植物纤维]]x16,蜂巢x1,蜘蛛卵囊x1",//物品卡片里的<获取>，在字段左右添加[[]]，可以添加内链，点击可以跳转到这个物品
    "tech": "无科技要求",//物品卡片里的<科技>
    "details": "【自然亲和机器】可以解锁辉煌科技，从而制作出辉煌阵营的装备与工具。包括：[[辉煌法帽]]、[[辉煌护甲]]、[[辉煌法杖]]、[[辉煌多用工具]]、[[辉煌修补套件]]等。",//物品卡片里的<详细>
    "hasPopup": true,//当这个设置为true时,<详细>下方会有查看详情的按钮，可以展开弹窗，弹窗内容在fengyun_popups.js定义
    "popupId": "honor_machine"//弹窗绑定(也就是在fengyun_popups.js里)的id,
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_balance_maintainer.png",
    "name": "自然平衡维持器",
    "source": "[[自然辉煌]]x15,[[植物纤维]]x15,黄宝石x1,绿宝石x1",
    "tech": "辉煌科技",
    "details": "当【自然平衡维持器】的三个支柱各被插入一颗彩虹宝石时，可镇压[[凶险事件]],防止生物被激怒从而攻击您。",
    "hasPopup": true,
    "popupId": "honor_balance_maintainer"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_tower.png",
    "name": "自然亲和塔",
    "source": "[[自然辉煌]]x10,[[植物纤维]]x12,浇水壶x3,金丝雀x1,活木x6",
    "tech": "辉煌科技",
    "details": "【自然亲和塔】需要通过[[自然亲和子塔]]的遥控来工作。\n【自然亲和塔】的工作范围为20（单位：围墙占地）。\n【自然亲和塔】具有巨大的存储空间，但仅能存放他可收获的种子与蔬菜。",
    "hasPopup": true,
    "popupId": "honor_tower"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_stower.png",
    "name": "自然亲和子塔",
    "source": "[[自然辉煌]]x2,[[植物纤维]]x4,[[植物青汁]]x2,[[芦荟]]x3",
    "tech": "辉煌科技",
    "details": "【自然亲和子塔】每次遥控都会根据[[自然亲和塔]]的工作量扣除相应耐久度。\n【自然亲和子塔】可同时遥控其控制范围内的所有[[自然亲和塔]]，并扣除对应数量的耐久度。",
    "hasPopup": true,
    "popupId": "honor_stower"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_cookpot.png",
    "name": "辉煌炼化容器",
    "source": "[[自然辉煌]]x5,[[植物纤维]]x20,[[水稻精华]]x1,[[小麦精华]]x1",
    "tech": "辉煌科技",
    "details": "【辉煌炼化容器】利用莲花的特殊消化系统，将放置于其中的各种食材烹饪成更加精致的料理。并且会因其独特的植物结构，让放置于其中的食材免遭氧化于细菌等的侵蚀。",
    "hasPopup": true,
    "popupId": "honor_cookpot"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_hat.png",
    "name": "辉煌法帽",
    "source": "[[自然辉煌]]x10,[[植物纤维]]x20",
    "tech": "辉煌科技",
    "details": "【辉煌法帽】可不是用来抵挡伤害的哦~当你整天为影怪和潮湿的雨季而发愁时，可以试试这顶神奇的帽子。",
    "hasPopup": true,
    "popupId": "honor_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_armor.png",
    "name": "辉煌护甲",
    "source": "[[自然辉煌]]x12,[[植物纤维]]x24",
    "tech": "辉煌科技",
    "details": "【辉煌护甲】的霸体效果是不可多得的，它可以让你免受大部分来自伤害的僵直，但要注意它也会拖慢你行进的步伐",
    "hasPopup": true,
    "popupId": "honor_armor"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_staff.png",
    "name": "辉煌法杖",
    "source": "[[自然辉煌]]x22,[[植物纤维]]x4",
    "tech": "辉煌科技",
    "details": "【辉煌法杖】的升级后会具有更为强大的威力，努力获取升级材料吧！",
    "hasPopup": true,
    "popupId": "honor_staff"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_multitool.png",
    "name": "辉煌多用工具",
    "source": "[[自然辉煌]]x8,[[植物纤维]]x15",
    "tech": "辉煌科技",
    "details": "【辉煌多用工具】是一把实用的多功能工具，它兼具了砍伐、开采、捶打、耕地功能，可以满足探索者们日常的大部分工作需求。",
    "hasPopup": true,
    "popupId": "honor_multitool"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_kit.png",
    "name": "辉煌修补套件",
    "source": "[[自然辉煌]]x1,[[植物纤维]]x4",
    "tech": "辉煌科技",
    "details": "【辉煌修补套件】可以为我们节省很多成本，让我们可以进行更多工作！",
    "hasPopup": true,
    "popupId": "honor_kit"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_backpack.png",
    "name": "辉煌背包",
    "source": "[[自然辉煌]]x5,[[植物纤维]]x10,弹性空间制造器x1",
    "tech": "辉煌科技",
    "details": "丰收时的硕果累累不仅仅是一种开心，也是一种劳累。面对堆积成山的果实，先辈们有点手足无措了。但这并非没有办法，自然辉煌总是能给你意想不到的惊喜。",
    "hasPopup": true,
    "popupId": "honor_backpack"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_greenjuice.png",
    "name": "植物青汁",
    "source": "[[茶丛]]x1,[[椰汁]]x1",
    "tech": "辉煌科技",
    "details": "椰子与茶叶一同迸发出的味道可以充分的激发你的味蕾。",
    "hasPopup": true,
    "popupId": "honor_greenjuice"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_splendor.png",
    "name": "自然辉煌",
    "source": "",
    "tech": "",
    "details": "【自然辉煌】可以制作[[辉煌法帽]]、[[辉煌护甲]]、[[辉煌法杖]]、[[辉煌多用工具]]等多种辉煌阵营的装备。\n【自然辉煌】可通过敲开巨型的辉煌阵营农作物获取。",
    "hasPopup": true,
    "popupId": "honor_splendor"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_plantfibre.png",
    "name": "植物纤维",
    "source": "[[茶丛]]x10",
    "tech": "辉煌科技",
    "details": "【植物纤维】是辉煌阵营农作物产出的一种特殊材料，它不能被普通的工具切割或塑形，只能依靠[[自然辉煌]]内蕴含的强大力量进行编织。",
    "hasPopup": true,
    "popupId": "honor_plantfibre"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/honor_seeds.png",
    "name": "辉煌种子",
    "source": "花瓣x1,种子x1",
    "tech": "无科技要求",
    "details": "谜团种子，并不是所有的农作物都可成为辉煌阵营的一员，有些农作物因为可以凝聚出[[自然辉煌]]而被辉煌阵营所接洽，有些农作物因为可以产出与[[自然辉煌]]有高度契合的[[植物纤维]]而被先辈们归类为辉煌阵营农作物。",
    "hasPopup": true,
    "popupId": "honor_seeds"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_coconut_hat.png",
    "name": "巨大椰壳头盔",
    "source": "椰子x20,[[植物纤维]]x6",
    "tech": "辉煌科技",
    "details": "【巨大椰壳头盔】作为敲开巨型椰子就能获得的装备，却需要数十枚椰子制作，属实有些浪费。在前期，【巨型椰壳头盔】可以作为实用的防具使用。但随着玩家的阅历逐渐丰富，200点的耐久度逐渐满足不了玩家的战斗需求。不过【巨型椰壳头盔】仍旧是很实用的装备，对于鱼人来说。",
    "hasPopup": true,
    "popupId": "honor_coconut_hat"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_goldenlanternfruit_lamp.png",
    "name": "金灯果灯",
    "source": "[[自然辉煌]]x1,[[植物纤维]]x3,[[金灯果]]x3,[[金灯果皮]]x1",
    "tech": "辉煌科技",
    "details": "可以在【金灯果灯】中放置[[金灯果精华]]来实现永亮。",
    "hasPopup": true,
    "popupId": "honor_goldenlanternfruit_lamp"
  },
  {
    "class": "item",
    "tag": "event",
    "image": "img/honor_goldenlanternfruit_meteor.png",
    "name": "金灯果流星",
    "source": "",
    "tech": "",
    "details": "谁都不知道永恒大陆的天空到底还悬挂着什么。",
    "hasPopup": true,
    "popupId": "honor_goldenlanternfruit_meteor"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_goldenlanternfruit_peel.png",
    "name": "金灯果皮",
    "source": "",
    "tech": "",
    "details": "辉煌阵营的重要材料之一，他和[[植物纤维]]一起，可以编织成许多辉煌阵营的新鲜玩意儿。",
    "hasPopup": true,
    "popupId": "honor_goldenlanternfruit_peel"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/honor_hybrid_rice_seed.png",
    "name": "巨型杂交水稻种子",
    "source": "",
    "tech": "",
    "details": "将它培养长大，它会好好回报你！",
    "hasPopup": true,
    "popupId": "honor_hybrid_rice_seed"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/honor_hybrid_rice_vine.png",
    "name": "巨型杂交水稻稻穗",
    "source": "",
    "tech": "",
    "details": "惊喜还是饱餐一顿？",
    "hasPopup": true,
    "popupId": "honor_hybrid_rice_vine"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_aloe_mucous.png",
    "name": "芦荟胶",
    "source": "[[芦荟]]x8,[[椰汁]]x1,蜂王浆x1",
    "tech": "辉煌科技",
    "details": "【芦荟胶】的胶状形态让大多数人人看起来很没有食欲，但它却是沃姆伍德的最爱。事实上，他对任何冒险家都有好处！",
    "hasPopup": true,
    "popupId": "honor_aloe_mucous"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_goatmilk.png",
    "name": "带电的羊奶",
    "source": "[[植物青汁]]x2,[[夏威夷果]]x1",
    "tech": "无科技要求",
    "details": "用奶香味十足的[[夏威夷果]]榨奶。",
    "hasPopup": false,
    "popupId": "hmr_goatmilk"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_butter.png",
    "name": "黄油",
    "source": "[[带电的羊奶]]x1,[[腰果]]x3,[[巴旦木]]x2,[[核桃]]x10",
    "tech": "无科技要求",
    "details": "用奶和富含植物脂肪的坚果做的【黄油】。",
    "hasPopup": false,
    "popupId": "hmr_butter"
  },


  // ------------- 凶险阵营 -------------

  {
    "class": "item",
    "tag": "structure",
    "image": "img/terror_machine.png",
    "name": "凶险蔓延机器",
    "source": "[[自然凶险]]x2,[[恐怖粘液]]x10,食人花种子x1,尖刺灌木x1",
    "tech": "无科技要求",
    "details": "【凶险蔓延机器】可以解锁凶险科技，从而制作出凶险阵营的装备与工具。包括：[[凶险笼罩]]、[[凶险潜胄]]、[[凶险荆棘]]、[[凶险手杖]]、[[凶险修补套件]]等。",
    "hasPopup": true,
    "popupId": "terror_machine"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/terror_tower.png",
    "name": "凶险威澜台",
    "source": "[[自然凶险]]x10,[[恐怖粘液]]x2,鳞片x1,沙之石x1,独眼巨鹿眼球x1",
    "tech": "凶险科技",
    "details": "【凶险威澜台】自身具有防雷、防野火、防建筑破坏的效果，它的恒温、提速、控制潮湿度效果需要向其中添加对应的物品才可获得。",
    "hasPopup": true,
    "popupId": "terror_tower"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_staff.png",
    "name": "凶险手杖",
    "source": "[[自然凶险]]x3,[[恐怖粘液]]x6",
    "tech": "凶险科技",
    "details": "【凶险手杖】是一把集农耕与位移于一体的实用工具。拥有了它，我们可以在相距很远的两块农田之间灵活穿梭，并以极为高效方案耕作。",
    "hasPopup": true,
    "popupId": "terror_staff"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_sword.png",
    "name": "凶险荆棘",
    "source": "[[自然凶险]]x6,[[恐怖粘液]]x3",
    "tech": "凶险科技",
    "details": "【凶险荆棘】是用生长于凶险阵营土地上的荆棘尸体，辅以自然凶险编织而成。在凶险植物界，植物尸体就是先辈。故而凶险荆棘可以召唤凶险阵营的帮手前来助阵。",
    "hasPopup": true,
    "popupId": "terror_sword"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_hat.png",
    "name": "凶险笼罩",
    "source": "[[自然凶险]]x6,[[恐怖粘液]]x8",
    "tech": "凶险科技",
    "details": "【凶险笼罩】除了会赋予穿戴者战斗技巧外，还会让穿戴者陷入短暂的疯狂。",
    "hasPopup": true,
    "popupId": "terror_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_armor.png",
    "name": "凶险潜胄",
    "source": "[[自然凶险]]x5,[[恐怖粘液]]x10",
    "tech": "凶险科技",
    "details": "组成【凶险潜胄】的蓝紫色大叶片的能力可能会被严重低估。他们只是不知道应当如何更为有效地进行防守。",
    "hasPopup": true,
    "popupId": "terror_armor"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_bomb.png",
    "name": "凶险炸弹",
    "source": "[[自然凶险]]x1,[[恐怖粘液]]x8,火药x2",
    "tech": "凶险科技",
    "details": "【凶险炸弹】的伤害不高，但它解体后释放出的虞子花的作用可是伤害比不了的。",
    "hasPopup": true,
    "popupId": "terror_bomb"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_kit.png",
    "name": "凶险修补套件",
    "source": "[[自然凶险]]x1,[[恐怖粘液]]x3",
    "tech": "凶险科技",
    "details": "【凶险修补套件】可以为我们节省很多成本，让我们可以进行更多工作！",
    "hasPopup": true,
    "popupId": "terror_kit"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_dangerous.png",
    "name": "自然凶险",
    "source": "",
    "tech": "",
    "details": "【自然凶险】可以制作[[凶险笼罩]]、[[凶险潜胄]]、[[凶险手杖]]、[[凶险荆棘]]等多种凶险阵营的装备。\n【自然凶险】可通过敲开巨型[[蓝莓]]获取，巨大[[蓝莓]]掉落自然凶险的改率为5%。自然凶险更多地来自于[[凶险事件]]中暴动的生物，击杀他们可以有更高概率获得自然凶险。",
    "hasPopup": true,
    "popupId": "terror_dangerous"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_mucous.png",
    "name": "恐怖粘液",
    "source": "",
    "tech": "",
    "details": "【恐怖粘液】是凶险阵营农作物产出的一种特殊材料，它不能被直接使用，否则你会像粘鼠板上的老鼠一样无助。只有【自然凶险】才有约束恐怖粘液的力量。",
    "hasPopup": true,
    "popupId": "terror_mucous"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/terror_seeds.png",
    "name": "凶险种子",
    "source": "噩梦花瓣x1,种子x2",
    "tech": "无科技要求",
    "details": "煞光种子，并不是所有的农作物都可成为凶险阵营的一员，有些农作物因为可以像动物一样在体内凝聚出自然凶险而被认为是凶险阵营的一员，有些农作物因为可以产出与自然凶险有高度契合的恐怖粘液而被先辈们归类为凶险阵营农作物。",
    "hasPopup": true,
    "popupId": "terror_seeds"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_blueberry_hat.png",
    "name": "蓝莓帽",
    "source": "[[蓝莓]]x25,[[恐怖粘液]]x2",
    "tech": "凶险科技",
    "details": "对于对潮湿度有需求的冒险家来说，蓝莓帽绝对是一顶十分不错的帽子！",
    "hasPopup": true,
    "popupId": "terror_blueberry_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_lemon_bomb.png",
    "name": "柠檬炸弹",
    "source": "[[柠檬]]x16,火药x1",
    "tech": "凶险科技",
    "details": "【柠檬炸弹】依靠其内聚合的浓度极高的柠檬酸来对生物造成伤害，但它并不会对建筑造成任何影响！",
    "hasPopup": true,
    "popupId": "terror_lemon_bomb"
  },

  // ------------- 丰耘科技 -------------

  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_store.png",
    "name": "青衢纳宝箱",
    "source": "[[自然辉煌]]x1,[[植物纤维]]x2,冰x4",
    "tech": "丰耘科技",
    "details": "【青衢纳宝箱】不会被烧毁，但因其对庞大空间的结构需求，会消耗一些强度。需要小心地震等自然灾害！",
    "hasPopup": true,
    "popupId": "hmr_chest_store"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_transmit.png",
    "name": "云梭递运箱",
    "source": "[[自然辉煌]]x1,[[恐怖粘液]]x2,火药x2",
    "tech": "丰耘科技",
    "details": "如果不是因为丢三落四，还是不要传送物资了，毕竟这对体力的额消耗太大了！",
    "hasPopup": true,
    "popupId": "hmr_chest_transmit"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_recycle.png",
    "name": "龙龛探秘箱",
    "source": "[[自然凶险]]x1,废料x2",
    "tech": "丰耘科技",
    "details": "可以选择一片空旷的地方，建造一个专属的寻宝垃圾场！",
    "hasPopup": true,
    "popupId": "hmr_chest_recycle"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_factory.png",
    "name": "灵枢织造箱",
    "source": "[[自然辉煌]]x1,活木x15",
    "tech": "丰耘科技",
    "details": "【灵枢织造箱】自己本身不会产出物品，它依靠部署在其附近的[[灵枢织造箱核心]]为其传输物品。不过【灵枢织造箱】的容积可不大，如果【灵枢织造箱】被堆满了，[[灵枢织造箱核心]]会在一段时间后停止工作。",
    "hasPopup": true,
    "popupId": "hmr_chest_factory"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_factory_core.png",
    "name": "灵枢织造箱核心",
    "source": "[[自然辉煌]]x1,活木x3",
    "tech": "丰耘科技",
    "details": "[[灵枢织造箱]]自己本身不会产出物品，它依靠部署在其附近的【灵枢织造箱核心】为其传输物品。不过[[灵枢织造箱]]的容积可不大，如果[[灵枢织造箱]]被堆满了，【灵枢织造箱核心】会在一段时间后停止工作。",
    "hasPopup": true,
    "popupId": "hmr_chest_factory_core"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_display.png",
    "name": "华樽耀勋箱",
    "source": "[[自然辉煌]]x1,[[自然凶险]]x1,金块x10",
    "tech": "丰耘科技",
    "details": "还在发愁别人看不到自己的功勋吗？建造一个【华樽耀勋箱】来摆放他们吧！",
    "hasPopup": true,
    "popupId": "hmr_chest_display"
  },

  // ------------- 精华与调味 -------------

  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_aloe_prime.png",
    "name": "芦荟精华",
    "source": "[[芦荟]]x80,蜂蜜x3",
    "tech": "无科技要求",
    "details": "【芦荟精华】汇集了整整80个芦荟果肉的精华，其主要作用是为玩家疗伤。",
    "hasPopup": true,
    "popupId": "honor_aloe_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_aloe_prime.png",
    "name": "芦荟原浆",
    "source": "[[芦荟精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[芦荟精华]]的原理与将[[芦荟精华]]制作成调味料的原理相同，在使用[[芦荟精华]]时，使用者会通过不断摩擦[[芦荟精华]]，来使其发出芦荟的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_aloe_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_coconut_prime.png",
    "name": "椰子精华",
    "source": "[[椰肉]]x55,[[椰汁]]x10,[[植物青汁]]x3",
    "tech": "无科技要求",
    "details": "【椰子精华】汇集了大量椰子果肉的精华，其主要作用是为玩家提供攻击时的天降椰子效果。",
    "hasPopup": true,
    "popupId": "honor_coconut_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_coconut_prime.png",
    "name": "椰蓉",
    "source": "[[椰子精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[椰子精华]]的原理与将[[椰子精华]]制作成调味料的原理相同，在使用[[椰子精华]]时，使用者会通过不断摩擦[[椰子精华]]，来使其发出椰子的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_coconut_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_nut_prime.png",
    "name": "坚果精华",
    "source": "[[核桃]]x80,石果x2",
    "tech": "无科技要求",
    "details": "【坚果精华】汇集了多种坚果的精华，其主要作用是为玩家提供高额防御能力。",
    "hasPopup": true,
    "popupId": "honor_nut_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_nut_prime.png",
    "name": "坚果碎",
    "source": "[[坚果精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[坚果精华]]的原理与将[[坚果精华]]制作成调味料的原理相同，在使用[[坚果精华]]时，使用者会通过不断摩擦[[坚果精华]]，来使其发出坚果的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_nut_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_tea_prime.png",
    "name": "茶丛精华",
    "source": "[[茶丛]]x40,[[茉莉花]]x30,[[大红袍]]x5,花瓣x5",
    "tech": "无科技要求",
    "details": "【茶丛精华】汇集了茶丛叶片、茉莉花、大红袍的精华，其主要作用是为玩家提供定身敌人的能力。",
    "hasPopup": true,
    "popupId": "honor_tea_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_tea_prime.png",
    "name": "干茶叶",
    "source": "[[茶丛精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[茶丛精华]]的原理与将[[茶丛精华]]制作成调味料的原理相同，在使用[[茶丛精华]]时，使用者会通过不断摩擦[[茶丛精华]]，来使其发出茶丛的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_tea_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_wheat_prime.png",
    "name": "小麦精华",
    "source": "[[小麦]]x80,[[黄油]]x1",
    "tech": "无科技要求",
    "details": "【小麦精华】汇集了整整80个小麦颗粒的精华，其主要作用是为玩家提供寒冷免疫和冰冻敌人的能力。",
    "hasPopup": true,
    "popupId": "honor_wheat_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_wheat_prime.png",
    "name": "冻干面粉",
    "source": "[[小麦精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[小麦精华]]的原理与将[[小麦精华]]制作成调味料的原理相同，在使用[[小麦精华]]时，使用者会通过不断摩擦[[小麦精华]]，来使其发出小麦的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_wheat_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_rice_prime.png",
    "name": "水稻精华",
    "source": "[[水稻]]x80,辣椒x5",
    "tech": "无科技要求",
    "details": "【水稻精华】汇集了整整80个水稻谷粒的精华，其主要作用是为玩家恢复饱食度并提升工作效率。",
    "hasPopup": true,
    "popupId": "honor_rice_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_rice_prime.png",
    "name": "米酒糟",
    "source": "[[水稻精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[水稻精华]]的原理与将[[水稻精华]]制作成调味料的原理相同，在使用[[水稻精华]]时，使用者会通过不断摩擦[[水稻精华]]，来使其发出水稻的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_rice_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_goldenlanternfruit_prime.png",
    "name": "金灯果精华",
    "source": "[[金灯果]]x80,[[金灯果皮]]x1",
    "tech": "无科技要求",
    "details": "【金灯果精华】汇集了整整80个金灯果果肉的精华，其主要作用是为玩家提供发光效果并吸引萤火虫。",
    "hasPopup": true,
    "popupId": "honor_goldenlanternfruit_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_goldenlanternfruit_prime.png",
    "name": "金灯果酱",
    "source": "[[金灯果精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[金灯果精华]]的原理与将[[金灯果精华]]制作成调味料的原理相同，在使用[[金灯果精华]]时，使用者会通过不断摩擦[[金灯果精华]]，来使其发出金灯果的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_goldenlanternfruit_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/honor_hamimelon_prime.png",
    "name": "哈密瓜精华",
    "source": "[[哈密瓜]]x80,冰x5",
    "tech": "无科技要求",
    "details": "【哈密瓜精华】汇集了整整80个哈密瓜果肉的精华，其主要作用是为玩家提供伤害护盾保护。",
    "hasPopup": true,
    "popupId": "honor_hamimelon_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_honor_hamimelon_prime.png",
    "name": "哈密瓜脯",
    "source": "[[哈密瓜精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[哈密瓜精华]]的原理与将[[哈密瓜精华]]制作成调味料的原理相同，在使用[[哈密瓜精华]]时，使用者会通过不断摩擦[[哈密瓜精华]]，来使其发出哈密瓜的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_honor_hamimelon_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_blueberry_prime.png",
    "name": "蓝莓精华",
    "source": "[[蓝莓]]x80,浆果x5",
    "tech": "无科技要求",
    "details": "【蓝莓精华】汇集了整整80个蓝莓果肉的精华，其主要作用是为玩家调节并锁定潮湿度。",
    "hasPopup": true,
    "popupId": "terror_blueberry_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_blueberry_prime.png",
    "name": "蓝莓果酱",
    "source": "[[蓝莓精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[蓝莓精华]]的原理与将[[蓝莓精华]]制作成调味料的原理相同，在使用[[蓝莓精华]]时，使用者会通过不断摩擦[[蓝莓精华]]，来使其发出蓝莓的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_blueberry_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_ginger_prime.png",
    "name": "洋姜精华",
    "source": "[[洋姜]]x80,蜂蜜x5",
    "tech": "无科技要求",
    "details": "【洋姜精华】汇集了整整80个洋姜块茎的精华，其主要作用是为玩家提升烹饪能力和拓展烹饪食材。",
    "hasPopup": true,
    "popupId": "terror_ginger_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_ginger_prime.png",
    "name": "姜粉",
    "source": "[[洋姜精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[洋姜精华]]的原理与将[[洋姜精华]]制作成调味料的原理相同，在使用[[洋姜精华]]时，使用者会通过不断摩擦[[洋姜精华]]，来使其发出洋姜的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_ginger_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_snakeskinfruit_prime.png",
    "name": "蛇皮果精华",
    "source": "[[蛇皮果]]x80,火荨麻叶x1",
    "tech": "无科技要求",
    "details": "【蛇皮果精华】汇集了整整80个蛇皮果果肉的精华，其主要作用是为玩家提供火焰攻击能力和火焰免疫。",
    "hasPopup": true,
    "popupId": "terror_snakeskinfruit_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_snakeskinfruit_prime.png",
    "name": "蛇皮果酱",
    "source": "[[蛇皮果精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[蛇皮果精华]]的原理与将[[蛇皮果精华]]制作成调味料的原理相同，在使用[[蛇皮果精华]]时，使用者会通过不断摩擦[[蛇皮果精华]]，来使其发出蛇皮果的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_snakeskinfruit_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_coffee_prime.png",
    "name": "咖啡精华",
    "source": "[[咖啡]]x80,蜂蜜水晶x3",
    "tech": "无科技要求",
    "details": "【咖啡精华】汇集了整整80个咖啡豆的精华，其主要作用是为玩家提升移动和动作速度并抵御睡眠。",
    "hasPopup": true,
    "popupId": "terror_coffee_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_coffee_prime.png",
    "name": "咖啡粉",
    "source": "[[咖啡精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[咖啡精华]]的原理与将[[咖啡精华]]制作成调味料的原理相同，在使用[[咖啡精华]]时，使用者会通过不断摩擦[[咖啡精华]]，来使其发出咖啡的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_coffee_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_passionfruit_prime.png",
    "name": "百香果精华",
    "source": "[[百香果]]x80,火龙果x3",
    "tech": "无科技要求",
    "details": "【百香果精华】汇集了整整80个百香果果肉的精华，其主要作用是为玩家提供研究配方的能力。",
    "hasPopup": true,
    "popupId": "terror_passionfruit_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_passionfruit_prime.png",
    "name": "百香果露",
    "source": "[[百香果精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[百香果精华]]的原理与将[[百香果精华]]制作成调味料的原理相同，在使用[[百香果精华]]时，使用者会通过不断摩擦[[百香果精华]]，来使其发出百香果的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_passionfruit_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_hawthorn_prime.png",
    "name": "山楂精华",
    "source": "[[山楂]]x80,蜂蜜x5",
    "tech": "无科技要求",
    "details": "【山楂精华】汇集了整整80个山楂果肉的精华，其主要作用是为玩家提升食物的三维增益效果。",
    "hasPopup": true,
    "popupId": "terror_hawthorn_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_hawthorn_prime.png",
    "name": "山楂酱",
    "source": "[[山楂精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[山楂精华]]的原理与将[[山楂精华]]制作成调味料的原理相同，在使用[[山楂精华]]时，使用者会通过不断摩擦[[山楂精华]]，来使其发出山楂的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_hawthorn_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_litchi_prime.png",
    "name": "荔枝精华",
    "source": "[[荔枝]]x80,调味盐x2",
    "tech": "无科技要求",
    "details": "【荔枝精华】汇集了整整80个荔枝果肉的精华，其主要作用是为玩家提供重击AOE伤害的能力。",
    "hasPopup": true,
    "popupId": "terror_litchi_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_litchi_prime.png",
    "name": "荔枝脯",
    "source": "[[荔枝精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[荔枝精华]]的原理与将[[荔枝精华]]制作成调味料的原理相同，在使用[[荔枝精华]]时，使用者会通过不断摩擦[[荔枝精华]]，来使其发出荔枝的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_litchi_prime"
  },
  {
    "class": "item",
    "tag": "material buff",
    "image": "img/terror_lemon_prime.png",
    "name": "柠檬精华",
    "source": "[[柠檬]]x80,蜂蜜x8",
    "tech": "无科技要求",
    "details": "【柠檬精华】汇集了整整80个柠檬果肉的精华，其主要作用是为玩家提供隐身、移速提升和物品新鲜度恢复的能力。",
    "hasPopup": true,
    "popupId": "terror_lemon_prime"
  },
  {
    "class": "item",
    "tag": "seasoning buff",
    "image": "img/spice_terror_lemon_prime.png",
    "name": "柠檬汁",
    "source": "[[柠檬精华]]x1",
    "tech": "香料站",
    "details": "直接使用[[柠檬精华]]的原理与将[[柠檬精华]]制作成调味料的原理相同，在使用[[柠檬精华]]时，使用者会通过不断摩擦[[柠檬精华]]，来使其发出柠檬的香味，使用者轻嗅一口就会被其浓郁的气味所感染。",
    "hasPopup": true,
    "popupId": "spice_terror_lemon_prime"
  },

  // ------------- 地形与建筑 -------------

  {
    "class": "item",
    "tag": "plant terrain",
    "image": "img/honor_coconut_planted.png",
    "name": "倭椰树",
    "source": "",
    "tech": "",
    "details": "【倭椰树】生长在多肉戈壁，他还有一些仙人掌、多肉植物做伙伴，邻居是一堆堆坚硬的岩石。",
    "hasPopup": true,
    "popupId": "honor_coconut_planted"
  },
  {
    "class": "item",
    "tag": "plant terrain",
    "image": "img/terror_coffee_planted.png",
    "name": "咖啡枝",
    "source": "",
    "tech": "",
    "details": "【咖啡枝】生长在深色泥泞，他还有一些荧光花、蕨类植物做伙伴，周围是常见于地底的深渊。",
    "hasPopup": true,
    "popupId": "terror_coffee_planted"
  },
  {
    "class": "item",
    "tag": "structure decoration",
    "image": "img/hmr_cherry_flowerpot.png",
    "name": "樱花盆栽",
    "source": "[[粉晶石]]x1,[[樱绒球]]x2",
    "tech": "无科技要求",
    "details": "【樱花盆栽】可以用来移栽永恒大陆上的许多植物，当然，它塞不进去比它的盆口更为粗壮的植物。如果对移栽大型植物有兴趣的花，可以考虑一下[[樱花盆景]]，他是放大版的【樱花盆栽】。",
    "hasPopup": true,
    "popupId": "hmr_cherry_flowerpot"
  },
  {
    "class": "item",
    "tag": "structure decoration",
    "image": "img/hmr_cherry_flowerpot_large.png",
    "name": "樱花盆景",
    "source": "[[粉晶石]]x1,[[樱绒球]]x1",
    "tech": "无科技要求",
    "details": "【樱花盆景】可以用来移栽永恒大陆上的大多数植物，它可以满足我们在家中做园丁的愿望。",
    "hasPopup": true,
    "popupId": "hmr_cherry_flowerpot_large"
  },
  {
    "class": "item",
    "tag": "structure decoration",
    "image": "img/hmr_cherry_decor_pot.png",
    "name": "樱绒球盆栽",
    "source": "[[粉晶石]]x1,[[樱绒球]]x4,[[樱草芯]]x1,粪肥x4",
    "tech": "无科技要求",
    "details": "在建家时，可以用【樱绒球盆栽】摆放成一排，用来划分功能区域；也可以零星地摆放于各处作为装饰。",
    "hasPopup": true,
    "popupId": "hmr_cherry_decor_pot"
  },
  {
    "class": "item",
    "tag": "structure decoration",
    "image": "img/hmr_cherry_table.png",
    "name": "樱岩桌子",
    "source": "[[粉晶石]]x5,木板x3",
    "tech": "无科技要求",
    "details": "在建家时，可以用【樱岩桌子】摆放成一排，用来划分功能区域；也可以零星地摆放于各处作为装饰。",
    "hasPopup": true,
    "popupId": "hmr_cherry_table"
  },
  // {
  //   "class": "item",
  //   "tag": "structure decoration",
  //   "image": "img/hmr_blueberry_carpet_item.png",
  //   "name": "蓝莓地毯",
  //   "source": "蓝莓x15,蝴蝶x3,冰x2,蓝宝石x3",
  //   "tech": "丰耘科技",
  //   "details": "在建家时，可以用【蓝莓地毯】摆放成一排，用来划分功能区域；也可以零星地摆放于各处作为装饰。",
  //   "hasPopup": false,
  //   "popupId": "hmr_blueberry_carpet_item"
  // },
  {
    "class": "item",
    "tag": "structure decoration",
    "image": "img/hmr_cherry_lantern_post.png",
    "name": "樱花灯柱套件",
    "source": "[[粉晶石]]x3,[[樱绒球]]x4,木头x2",
    "tech": "无科技要求",
    "details": "【樱花灯柱套件】可以通过给予不同种类的光源物品发出樱花色的光。",
    "hasPopup": true,
    "popupId": "hmr_cherry_lantern_post"
  },
  {
    "class": "item",
    "tag": "terrain",
    "image": "img/hmr_cherry_island.png",
    "name": "樱海岛",
    "source": "",
    "tech": "",
    "details": "【樱海岛】是一个浪漫的地方，它上面生长着一些[[樱花树]]，[[樱草]]和[[粉晶石矿]]，还有樱花小径可以让你在岛上漫步。",
    "hasPopup": true,
    "popupId": "hmr_cherry_island"
  },
  {
    "class": "item",
    "tag": "decoration",
    "image": "img/turf_hmr_cherry_flower.png",
    "name": "樱花地皮",
    "source": "[[樱花树花]]x8,[[樱绒球]]x1",
    "tech": "无科技要求",
    "details": "用樱花花瓣滋养的土地，洋溢着樱海岛的浪漫气息。",
    "hasPopup": false,
    "popupId": "turf_hmr_cherry_flower"
  },
  {
    "class": "item",
    "tag": "decoration",
    "image": "img/turf_hmr_cherry_grass.png",
    "name": "樱草地皮",
    "source": "采下的草x6,[[樱绒球]]x4",
    "tech": "无科技要求",
    "details": "用樱草滋养的土地，置身于毛茸茸的樱草。",
    "hasPopup": false,
    "popupId": "turf_hmr_cherry_grass"
  },
  {
    "class": "item",
    "tag": "decoration",
    "image": "img/turf_hmr_cherry_mystery.png",
    "name": "樱海秘境地皮",
    "source": "[[樱花树花]]x2,[[樱绒球]]x4,[[粉晶石]]x1",
    "tech": "无科技要求",
    "details": "樱花地底，似乎有什么东西在里面。",
    "hasPopup": false,
    "popupId": "turf_hmr_cherry_mystery"
  },
  {
    "class": "item",
    "tag": "decoration",
    "image": "img/turf_hmr_cherry_road.png",
    "name": "樱花小径地皮",
    "source": "[[樱花树花]]x1,[[樱绒球]]x2,[[粉晶石]]x2",
    "tech": "无科技要求",
    "details": "看那些从石头里钻出来的樱花！",
    "hasPopup": false,
    "popupId": "turf_hmr_cherry_road"
  },
  {
    "class": "item",
    "tag": "",
    "image": "img/turf_hmr_cherry_xmm.png",
    "name": "悉樱樱地皮",
    "source": "[[樱花树花]]x1,[[樱绒球]]x4",
    "tech": "无科技要求",
    "details": "梦幻的樱花云朵。【悉樱樱地皮】不会自然生成。",
    "hasPopup": false,
    "popupId": "turf_hmr_cherry_xmm"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/hmr_cherry_grass.png",
    "name": "樱草",
    "source": "",
    "tech": "",
    "details": "毛茸茸的粉色小草，生长在[[樱海岛]]上。",
    "hasPopup": true,
    "popupId": "hmr_cherry_grass"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/hmr_cherry_grass_dug.png",
    "name": "樱草根",
    "source": "",
    "tech": "",
    "details": "把整棵毛绒草都挖下来了，通过铲除[[樱草]]获得。",
    "hasPopup": false,
    "popupId": "hmr_cherry_grass_dug"
  },
  {
    "class": "item",
    "tag": "plant material",
    "image": "img/hmr_cherry_grass_seeds.png",
    "name": "樱草芯",
    "source": "",
    "tech": "",
    "details": "永远不会生病的[[樱草根]]。",
    "hasPopup": false,
    "popupId": "hmr_cherry_grass_seeds"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_cherry_fluffy_ball.png",
    "name": "樱绒球",
    "source": "",
    "tech": "",
    "details": "毛茸茸的粉色小团团，通过收获[[樱草]]获得。",
    "hasPopup": false,
    "popupId": "hmr_cherry_fluffy_ball"
  },
  {
    "class": "item",
    "tag": "terrain",
    "image": "img/hmr_cherry_rock.png",
    "name": "粉晶石矿",
    "source": "",
    "tech": "",
    "details": "可以开采的粉色水晶。",
    "hasPopup": true,
    "popupId": "hmr_cherry_rock"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_cherry_rock_item.png",
    "name": "粉晶石",
    "source": "",
    "tech": "",
    "details": "坚硬的粉色石头，通过开采[[粉晶石矿]]获得。",
    "hasPopup": false,
    "popupId": "hmr_cherry_rock_item"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/hmr_cherry_tree.png",
    "name": "樱花树",
    "source": "",
    "tech": "",
    "details": "浪漫的粉色花花树，生长在[[樱海岛]]上。",
    "hasPopup": true,
    "popupId": "hmr_cherry_tree"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_cherry_tree_fruit.png",
    "name": "樱红果",
    "source": "",
    "tech": "",
    "details": "[[樱花树]]上长出来的红红的小球，亮晶晶的果子。",
    "hasPopup": false,
    "popupId": "hmr_cherry_tree_fruit"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/hmr_cherry_tree_seeds.png",
    "name": "樱花树种子",
    "source": "",
    "tech": "",
    "details": "[[樱花树]]的种子，祝愿它能像它的长辈们一样又粉又高。",
    "hasPopup": false,
    "popupId": "hmr_cherry_tree_seeds"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/hmr_cherry_tree_flower.png",
    "name": "樱花树花",
    "source": "",
    "tech": "",
    "details": "[[樱花树]]上长出来的漂亮的五片粉花瓣。",
    "hasPopup": false,
    "popupId": "hmr_cherry_tree_flower"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/hmr_cherry_tree_flower.png",
    "name": "樱簇团",
    "source": "",
    "tech": "",
    "details": "长在地上的花瓣。",
    "hasPopup": false,
    "popupId": "hmr_cherry_flower"
  },

  // ------------- 农作物 -------------

  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_coconut.png",
    "name": "椰子",
    "source": "",
    "tech": "",
    "details": "编织种子种成，硬邦邦的壳子，敲开了准有清甜的汁水，渴的时候就是救命的宝贝。",
    "hasPopup": true,
    "popupId": "farm_plant_honor_coconut"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_tea.png",
    "name": "茶丛",
    "source": "",
    "tech": "",
    "details": "叶包种子种成，叶子透着股清苦的香，泡壶水喝，能醒醒神，对付那些昏昏沉沉的日子。",
    "hasPopup": true,
    "popupId": "farm_plant_honor_tea"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_rice.png",
    "name": "水稻",
    "source": "",
    "tech": "",
    "details": "带壳种子种成，颗颗饱满，像浸了水的珍珠，煮一锅能暖到心窝里。",
    "hasPopup": true,
    "popupId": "farm_plant_honor_rice"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_wheat.png",
    "name": "小麦",
    "source": "",
    "tech": "",
    "details": "尖尖种子种成，金灿灿的颗粒，磨成粉烤成面包，能扛过好几个寒夜呢",
    "hasPopup": true,
    "popupId": "farm_plant_honor_wheat"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_goldenlanternfruit.png",
    "name": "金灯果",
    "source": "",
    "tech": "",
    "details": "发光种子种成，金闪闪的像小灯笼，摸起来暖暖的，说不定能驱驱夜里的寒气",
    "hasPopup": true,
    "popupId": "farm_plant_honor_goldenlanternfruit"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_aloe.png",
    "name": "芦荟",
    "source": "",
    "tech": "",
    "details": "翡翠种子种成，【芦荟】有黏糊糊的汁液，说不定能治治被怪物挠的小伤口。",
    "hasPopup": true,
    "popupId": "farm_plant_honor_aloe"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_hamimelon.png",
    "name": "哈密瓜",
    "source": "",
    "tech": "",
    "details": "玛瑙种子种成，【哈密瓜】果肉鲜嫩，吃下去能补气血，对付那些疲劳的日子。",
    "hasPopup": true,
    "popupId": "farm_plant_honor_hamimelon"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_honor_nut.png",
    "name": "坚果",
    "source": "",
    "tech": "",
    "details": "多棱种子种成，【坚果】说不定能敲出些有意思的小零碎，谁知道呢？",
    "hasPopup": true,
    "popupId": "farm_plant_honor_nut"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_snakeskinfruit.png",
    "name": "蛇皮果",
    "source": "",
    "tech": "",
    "details": "落叶种子种成，【蛇皮果】皮糙得像蛇蜕，剥开里头的果肉说不定藏着惊喜，也可能是惊吓。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_snakeskinfruit"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_blueberry.png",
    "name": "蓝莓",
    "source": "",
    "tech": "",
    "details": "蓝水晶种子种成，蓝盈盈的小果子，甜得发腻，吃几颗能扛过饿，还能染染手指。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_blueberry"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_ginger.png",
    "name": "洋姜",
    "source": "",
    "tech": "",
    "details": "脏脏种子种成，埋在土里的小家伙，挖出来闻着冲，烤熟了却香得很，能顶饿。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_ginger"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_lemon.png",
    "name": "柠檬",
    "source": "",
    "tech": "",
    "details": "溜溜种子种成，酸得龇牙咧嘴，嚼一口能把瞌睡虫都赶跑，就是牙有点遭罪。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_lemon"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_litchi.png",
    "name": "荔枝",
    "source": "",
    "tech": "",
    "details": "月牙种子种成，红通通的像小灯笼，剥开来肉嫩嫩的，甜得很，就是核大得占地方。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_litchi"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_coffee.png",
    "name": "咖啡",
    "source": "",
    "tech": "",
    "details": "黏黏种子种成，【咖啡】的味道很浓郁，带着点苦味，但也不苦，甜得很。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_coffee"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_hawthorn.png",
    "name": "山楂",
    "source": "",
    "tech": "",
    "details": "彤彤种子种成，【山楂】像个小山丘，挖出来果肉很嫩，甜得很，但也不甜。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_hawthorn"
  },
  {
    "class": "item",
    "tag": "crop",
    "image": "img/farm_plant_terror_passionfruit.png",
    "name": "百香果",
    "source": "",
    "tech": "",
    "details": "魔力种子种成，【百香果】果肉很嫩，甜得很，但也不甜。",
    "hasPopup": true,
    "popupId": "farm_plant_terror_passionfruit"
  },

  // ------------- 材料 -------------

  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_coconut_meat.png",
    "name": "椰肉",
    "source": "[[椰子]],[[倭椰树]]",
    "tech": "",
    "details": "白白嫩嫩的，嚼着有股子奶香，饿了能顶一阵子。",
    "hasPopup": true,
    "popupId": "honor_coconut_meat"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_coconut_juice.png",
    "name": "椰汁",
    "source": "[[椰子]],[[倭椰树]]",
    "tech": "",
    "details": "清亮亮的，喝一口甜丝丝的，比生水好喝多了。",
    "hasPopup": true,
    "popupId": "honor_coconut_juice"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_dhp.png",
    "name": "大红袍",
    "source": "[[茶丛]]",
    "tech": "",
    "details": "没想到能种出这玩意儿，泡壶茶喝着，比啥都舒坦。",
    "hasPopup": true,
    "popupId": "honor_dhp"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_jasmine.png",
    "name": "茉莉花",
    "source": "[[茶丛]]",
    "tech": "",
    "details": "香得钻心，摘几朵泡水，苦日子也能喝出点甜来。",
    "hasPopup": true,
    "popupId": "honor_jasmine"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_blowdart_fire.png",
    "name": "辉煌炽烈吹箭",
    "source": "[[小麦]]",
    "tech": "",
    "details": "积聚了火的力量的吹箭！",
    "hasPopup": true,
    "popupId": "honor_blowdart_fire"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_blowdart_ice.png",
    "name": "辉煌寒冰吹箭",
    "source": "[[小麦]]",
    "tech": "",
    "details": "拿着它居然一点都感觉不到他的寒气！",
    "hasPopup": true,
    "popupId": "honor_blowdart_ice"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_blowdart_cure.png",
    "name": "辉煌治愈吹箭",
    "source": "[[小麦]]",
    "tech": "",
    "details": "想不到如此锋利的麦芒，还可以为我疗伤！",
    "hasPopup": true,
    "popupId": "honor_blowdart_cure"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_nut.png",
    "name": "核桃",
    "source": "[[坚果]]",
    "tech": "",
    "details": "说不定能敲出些有意思的小零碎，谁知道呢？",
    "hasPopup": true,
    "popupId": "honor_nut"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_almond.png",
    "name": "巴旦木",
    "source": "[[坚果]]",
    "tech": "",
    "details": "硬得像块木头，看着就像是刚从地上捡来的。",
    "hasPopup": true,
    "popupId": "honor_almond"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_cashew.png",
    "name": "腰果",
    "source": "[[坚果]]",
    "tech": "",
    "details": "像是刚从地上捡来的，硬得像块木头，味道很甜。",
    "hasPopup": true,
    "popupId": "honor_cashew"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_macadamia.png",
    "name": "夏威夷果",
    "source": "[[坚果]]",
    "tech": "",
    "details": "果皮很厚，像是刚从地上捡来的，味道很甜。",
    "hasPopup": true,
    "popupId": "honor_macadamia"
  },

  // ------------- 料理 -------------

  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_wheat_bread.png",
    "name": "麦香烤面包",
    "source": "",
    "tech": "",
    "details": "小麦的香味，配上烘烤的暖意。",
    "hasPopup": true,
    "popupId": "honor_wheat_bread"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_rice_seafood.png",
    "name": "鲜龙金粟饭",
    "source": "",
    "tech": "",
    "details": "用龙虾壳装着的龙虾肉炒饭。",
    "hasPopup": true,
    "popupId": "honor_rice_seafood"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_nut_salted.png",
    "name": "盐焗珍果仁",
    "source": "",
    "tech": "",
    "details": "略带盐渍的坚果，夹杂着烤熟坚果的香气。",
    "hasPopup": true,
    "popupId": "honor_nut_salted"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_coconut_pudding.png",
    "name": "椰蓉凝玉膏",
    "source": "",
    "tech": "",
    "details": "椰蓉凝玉膏",
    "hasPopup": true,
    "popupId": "honor_coconut_pudding"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_goldenlanternfruit_cake.png",
    "name": "金灯糖霜盏",
    "source": "",
    "tech": "",
    "details": "像灯笼一样的金灯果小蛋糕。",
    "hasPopup": true,
    "popupId": "honor_goldenlanternfruit_cake"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_tea_drink.png",
    "name": "清润山茶饮",
    "source": "",
    "tech": "",
    "details": "清淡的山茶，挂着一缕甜蜜。",
    "hasPopup": true,
    "popupId": "honor_tea_drink"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_hamimelon_sorbet.png",
    "name": "密瓜凝玉沙",
    "source": "",
    "tech": "",
    "details": "冰冰凉凉，甜甜蜜蜜，黄黄绿绿。",
    "hasPopup": true,
    "popupId": "honor_hamimelon_sorbet"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_aloe_stick.png",
    "name": "蜜渍芦荟条",
    "source": "",
    "tech": "",
    "details": "原汁原味的芦荟叶子，但涂满蜂蜜。",
    "hasPopup": true,
    "popupId": "honor_aloe_stick"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_blueberry_sundae.png",
    "name": "蓝莓圣代",
    "source": "",
    "tech": "",
    "details": "蓝莓的酸甜与奶油的绵密，加上一些些冰凉，当然最好在夏天。",
    "hasPopup": true,
    "popupId": "terror_blueberry_sundae"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_coffee_mousse.png",
    "name": "咖啡慕斯",
    "source": "",
    "tech": "",
    "details": "咖啡的味道，牛奶的香气，起司的口感。",
    "hasPopup": true,
    "popupId": "terror_coffee_mousse"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_hawthorn_jelly.png",
    "name": "山楂蜜糕",
    "source": "",
    "tech": "",
    "details": "酸酸的，但是掩盖不出细品的甜味。",
    "hasPopup": true,
    "popupId": "terror_hawthorn_jelly"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_ginger_chickenwings.png",
    "name": "洋姜鸡翅",
    "source": "",
    "tech": "",
    "details": "用洋姜腌制的鸡翅，不辛辣也不油腻。",
    "hasPopup": true,
    "popupId": "terror_ginger_chickenwings"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_snakeskinfruit_kebab.png",
    "name": "蛇皮果烤串",
    "source": "",
    "tech": "",
    "details": "这可不是烤龙肉！这是美味的素食。",
    "hasPopup": true,
    "popupId": "terror_snakeskinfruit_kebab"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_lemon_tart.png",
    "name": "柠檬挞",
    "source": "",
    "tech": "",
    "details": "柠檬的清香与蛋液的嫩滑叠加起来了。",
    "hasPopup": true,
    "popupId": "terror_lemon_tart"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_litchi_sugared.png",
    "name": "荔枝蜜饯",
    "source": "",
    "tech": "",
    "details": "用蜂蜜炖的荔枝。",
    "hasPopup": true,
    "popupId": "terror_litchi_sugared"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/terror_passionfruit_soda.png",
    "name": "百香果气泡水",
    "source": "",
    "tech": "",
    "details": "酸爽的百香果和在舌尖爆炸的气泡。",
    "hasPopup": true,
    "popupId": "terror_passionfruit_soda"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/hmr_cherry_soda.png",
    "name": "樱花汽水",
    "source": "",
    "tech": "",
    "details": "来自樱味小岛的清爽气息。",
    "hasPopup": true,
    "popupId": "hmr_cherry_soda"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/hmr_cherry_litchi_congee.png",
    "name": "樱荔花粥",
    "source": "",
    "tech": "",
    "details": "樱花与荔枝的碰撞！",
    "hasPopup": true,
    "popupId": "hmr_cherry_litchi_congee"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/hmr_cherry_daifuku.png",
    "name": "樱花雪媚娘",
    "source": "",
    "tech": "",
    "details": "甜甜糯糯的，还有樱肉颗粒！",
    "hasPopup": true,
    "popupId": "hmr_cherry_daifuku"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/hmr_cherry_sorbet.png",
    "name": "樱花冰沙",
    "source": "",
    "tech": "",
    "details": "绵密的冰沙让我感觉樱花在抚摸我的舌尖！",
    "hasPopup": true,
    "popupId": "hmr_cherry_sorbet"
  },
  

  // ------------- 生物 -------------

  // {
  //   "class": "item",
  //   "tag": "creature",
  //   "image": "img/honor_coconuttree.png",
  //   "name": "椰树守卫",
  //   "source": "",
  //   "tech": "",
  //   "details": "看上去很可爱，不知道他会不会朝我扔他头上挂着的椰子。",
  //   "hasPopup": true,
  //   "popupId": "honor_coconuttree"
  // },
  // {
  //   "class": "item",
  //   "tag": "creature",
  //   "image": "img/honor_coconuttreeguard.png",
  //   "name": "椰树守护者",
  //   "source": "",
  //   "tech": "",
  //   "details": "它的嘴角像万圣节的南瓜！",
  //   "hasPopup": true,
  //   "popupId": "honor_coconuttreeguard"
  // },
  {
    "class": "item",
    "tag": "creature",
    "image": "img/honor_bee.png",
    "name": "辉煌蜂",
    "source": "",
    "tech": "",
    "details": "它似乎并不想伤害我。",
    "hasPopup": true,
    "popupId": "honor_bee"
  },
  {
    "class": "item",
    "tag": "creature",
    "image": "img/terror_bee.png",
    "name": "凶险蜂",
    "source": "",
    "tech": "",
    "details": "它好像被什么行为激怒了。",
    "hasPopup": true,
    "popupId": "terror_bee"
  },

  // ------------- 奇遇 -------------

  {
    "class": "item",
    "tag": "event",
    "image": "img/terror_event.png",
    "name": "凶险事件",
    "source": "",
    "tech": "",
    "details": "爷爷说会有蜜蜂来袭击我！",
    "hasPopup": true,
    "popupId": "terror_event"
  },

  // ------------- 角色 -------------

  // {
  //   "class": "item",
  //   "tag": "character",
  //   "image": "img/hmr_lingna.png",
  //   "name": "凌娜（等待揭秘）",
  //   "source": "",
  //   "tech": "",
  //   "details": "凶险刺客，没有人比她更了解那些蜿蜒的植物。",
  //   "hasPopup": false,
  //   "popupId": "hmr_lingna"
  // },
];
