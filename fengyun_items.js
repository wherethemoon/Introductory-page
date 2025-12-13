//界面中每个物品的介绍存放位置

//分类标签
// equip:装备
// structure:建筑
// material:材料
// crop:作物
// seasoning:调味料
// dishdish:料理
// plant:植物
// creature:生物
// boss:boss
// humanoid:人形
// terrain:地形
// buff:增益
// event:奇遇
// crossover:联动

window.FENGYUN_ITEMS = [
  {
    "class": "item",//固定格式不要更改
    "tag": "structure",//物品分类标签(可以同时添加多个标签,用空格隔开，这样物品会被多个标签同时显示)
    "image": "img/honor_machine.png",//图片路径
    "name": "自然亲和机器",//物品卡片里的<名称>
    "source": "自然辉煌x8,植物纤维x16,蜂巢x1,蜘蛛卵囊x1",//物品卡片里的<获取>
    "tech": "无科技要求",//物品卡片里的<科技>
    "details": "自然亲和机器可以解锁辉煌科技，从而制作出辉煌阵营的装备与工具。包括：辉煌法帽、辉煌护甲、辉煌法杖、辉煌多用工具、辉煌修补套件等。",//物品卡片里的<详细>
    "hasPopup": true,//当这个设置为true时,<详细>下方会有查看详情的按钮，可以展开弹窗，弹窗内容在fengyun_popups.js定义
    "popupId": "honor_machine"//弹窗绑定(也就是在fengyun_popups.js里)的id,
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_balance_maintainer.png",
    "name": "自然平衡维持器",
    "source": "自然辉煌x15,植物纤维x15,黄宝石x1,绿宝石x1",
    "tech": "辉煌科技",
    "details": "当自然平衡维持器的三个支柱各被插入一颗【彩虹宝石】时，可镇压【凶险事件】,防止生物被激怒从而攻击您。",
    "hasPopup": true,
    "popupId": "honor_balance_maintainer"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_tower.png",
    "name": "自然亲和塔",
    "source": "自然辉煌x10,植物纤维x12,浇水壶x3,金丝雀x1,活木x6",
    "tech": "辉煌科技",
    "details": "【自然亲和塔】需要通过【自然亲和子塔】的遥控来工作。\n【自然亲和塔】的工作范围为20（单位：围墙占地）。\n【自然亲和塔】具有巨大的存储空间，但仅能存放他可收获的种子与蔬菜。",
    "hasPopup": false,
    "popupId": "honor_tower"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_stower.png",
    "name": "自然亲和子塔",
    "source": "自然辉煌x2,植物纤维x4,植物青汁x2,芦荟x3",
    "tech": "辉煌科技",
    "details": "【自然亲和子塔】每次遥控都会根据自然亲和塔的工作量扣除相应耐久度。\n【自然亲和子塔】可同时遥控其控制范围内的所有【自然亲和塔】，并扣除；对应数量的耐久度。",
    "hasPopup": false,
    "popupId": "honor_stower"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_cookpot.png",
    "name": "辉煌炼化容器",
    "source": "自然辉煌x5,植物纤维x20,水稻精华x1,小麦精华x1",
    "tech": "辉煌科技",
    "details": "【辉煌炼化容器利用莲花的特殊消化系统，将放置于其中的各种食材烹饪成更加精致的料理。并且会因其独特的植物结构，让放置于其中的食材免遭氧化于细菌等的侵蚀。",
    "hasPopup": false,
    "popupId": "honor_cookpot"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_hat.png",
    "name": "辉煌法帽",
    "source": "自然辉煌x10,植物纤维x20",
    "tech": "辉煌科技",
    "details": "【辉煌法帽】可不是用来抵挡伤害的哦~当你整天为影怪和潮湿的雨季而发愁时，可以试试这顶神奇的帽子。",
    "hasPopup": false,
    "popupId": "honor_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_armor.png",
    "name": "辉煌护甲",
    "source": "自然辉煌x12,植物纤维x24",
    "tech": "辉煌科技",
    "details": "【辉煌护甲】的霸体效果是不可多得的，它可以让你免受大部分来自伤害的僵直，但要注意它也会拖慢你行进的步伐",
    "hasPopup": false,
    "popupId": "honor_armor"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_staff.png",
    "name": "辉煌法杖",
    "source": "自然辉煌x22,植物纤维x4",
    "tech": "辉煌科技",
    "details": "【辉煌法杖】的升级后会具有更为强大的威力，努力获取升级材料吧！",
    "hasPopup": false,
    "popupId": "honor_staff"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_multitool.png",
    "name": "辉煌多用工具",
    "source": "自然辉煌x8,植物纤维x15",
    "tech": "辉煌科技",
    "details": "【辉煌多用工具】是一把实用的多功能工具，它兼具了砍伐、开采、捶打、耕地功能，可以满足探索者们日常的大部分工作需求。",
    "hasPopup": false,
    "popupId": "honor_multitool"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_kit.png",
    "name": "辉煌修补套件",
    "source": "自然辉煌x1,植物纤维x4",
    "tech": "辉煌科技",
    "details": "【辉煌修补套件】可以为我们节省很多成本，让我们可以进行更多工作！",
    "hasPopup": false,
    "popupId": "honor_kit"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_backpack.png",
    "name": "辉煌背包",
    "source": "自然辉煌x5,植物纤维x10,堆叠升级组件x1",
    "tech": "辉煌科技",
    "details": "丰收时的硕果累累不仅仅是一种开心，也是一种劳累。面对堆积成山的果实，先辈们有点手足无措了。但这并非没有办法，自然辉煌总是能给你意想不到的惊喜。",
    "hasPopup": false,
    "popupId": "honor_backpack"
  },
  {
    "class": "item",
    "tag": "dish",
    "image": "img/honor_greenjuice.png",
    "name": "植物青汁",
    "source": "茶丛x1,椰汁x1",
    "tech": "辉煌科技",
    "details": "椰子与茶叶一同迸发出的味道可以充分的激发你的味蕾。",
    "hasPopup": false,
    "popupId": "honor_greenjuice"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_splendor.png",
    "name": "自然辉煌",
    "source": "",
    "tech": "",
    "details": "【自然辉煌】可以制作辉煌法帽、辉煌护甲、辉煌法杖、辉煌多用工具等多种辉煌阵营的装备。\n自然辉煌可通过敲开巨大化的辉煌阵营农作物获取，其中巨大化芦荟掉落自然辉煌的改率为30%，巨大化茶丛、金灯果，巨大化椰子、水稻、小麦、甘蔗、坚果掉落自然辉煌的概率为10%",
    "hasPopup": false,
    "popupId": "honor_splendor"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/honor_plantfibre.png",
    "name": "植物纤维",
    "source": "茶丛x10",
    "tech": "辉煌科技",
    "details": "植物纤维是辉煌阵营农作物产出的一种特殊材料，它不能被普通的工具切割或塑形，只能依靠自然辉煌内蕴含的强大力量进行编织。",
    "hasPopup": false,
    "popupId": "honor_plantfibre"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/honor_seeds.png",
    "name": "辉煌种子",
    "source": "花瓣x1,种子x1",
    "tech": "无科技要求",
    "details": "并不是所有的农作物都可成为辉煌阵营的一员，有些农作物因为可以凝聚出自然辉煌而被辉煌阵营所接洽，有些农作物因为可以产出与自然辉煌有高度契合的植物纤维而被先辈们归类为辉煌阵营农作物。",
    "hasPopup": false,
    "popupId": "honor_seeds"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/honor_coconut_hat.png",
    "name": "巨大椰壳头盔",
    "source": "椰子x20,植物纤维x6",
    "tech": "辉煌科技",
    "details": "巨大椰壳头盔作为敲开巨型椰子就能获得的装备，却需要数十枚椰子制作，属实有些浪费。在前期，巨型椰壳头盔可以作为实用的防具使用。但随着玩家的阅历逐渐丰富，70%的防护值逐渐满足不了玩家的战斗需求。不过巨型椰壳头盔仍旧是很实用的装备，对于鱼人来说。",
    "hasPopup": false,
    "popupId": "honor_coconut_hat"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/honor_goldenlanternfruit_lamp.png",
    "name": "金灯果灯",
    "source": "自然辉煌x1,植物纤维x3,金灯果x3,金灯果皮x1",
    "tech": "辉煌科技",
    "details": "可以在金灯果灯中放置金灯果精华来实现永亮。",
    "hasPopup": false,
    "popupId": "honor_goldenlanternfruit_lamp"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/honor_hybrid_rice_seed.png",
    "name": "巨型杂交水稻种子",
    "source": "",
    "tech": "",
    "details": "将它培养长大，它会好好回报你！",
    "hasPopup": false,
    "popupId": "honor_hybrid_rice_seed"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/terror_machine.png",
    "name": "凶险蔓延机器",
    "source": "自然凶险x2,恐怖粘液x10,食人花种子x1,尖刺灌木x1",
    "tech": "无科技要求",
    "details": "凶险蔓延机器可以解锁凶险科技，从而制作出凶险阵营的装备与工具。包括：凶险笼罩、凶险潜胄、凶险荆棘、凶险法杖、凶险修补套件等。",
    "hasPopup": false,
    "popupId": "terror_machine"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/terror_tower.png",
    "name": "凶险威澜台",
    "source": "自然凶险x10,恐怖粘液x2,龙鳞x1,沙之石x1,独眼巨鹿眼球x1",
    "tech": "凶险科技",
    "details": "【凶险威澜台】自身具有防雷、防野火、防建筑破坏的效果，它的恒温、提速、控制潮湿度效果需要向其中添加对应的物品才可获得。",
    "hasPopup": false,
    "popupId": "terror_tower"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_staff.png",
    "name": "凶险手杖",
    "source": "自然凶险x3,恐怖粘液x6",
    "tech": "凶险科技",
    "details": "凶险手杖是一把集农耕与位移于一体的实用工具。拥有了它，我们可以在相距很远的两块农田之间灵活穿梭，并以极为高效方案耕作。",
    "hasPopup": false,
    "popupId": "terror_staff"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_sword.png",
    "name": "凶险荆棘",
    "source": "自然凶险x6,恐怖粘液x3",
    "tech": "凶险科技",
    "details": "凶险荆棘是用生长于凶险阵营土地上的荆棘尸体，辅以自然凶险编织而成。在凶险植物界，植物尸体就是先辈。故而凶险荆棘可以召唤凶险阵营的帮手前来助阵。",
    "hasPopup": false,
    "popupId": "terror_sword"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_hat.png",
    "name": "凶险笼罩",
    "source": "自然凶险x6,恐怖粘液x8",
    "tech": "凶险科技",
    "details": "【凶险笼罩】除了会赋予穿戴者战斗技巧外，还会让穿戴者陷入短暂的疯狂。",
    "hasPopup": false,
    "popupId": "terror_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_armor.png",
    "name": "凶险潜胄",
    "source": "自然凶险x5,恐怖粘液x10",
    "tech": "凶险科技",
    "details": "组成【凶险护甲】的蓝紫色大叶片的能力可能会被严重低估。他们只是不知道应当如何更为有效地进行防守。",
    "hasPopup": false,
    "popupId": "terror_armor"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_bomb.png",
    "name": "凶险炸弹",
    "source": "自然凶险x1,恐怖粘液x8,火药x2",
    "tech": "凶险科技",
    "details": "凶险炸弹的伤害不高，但它解体后释放出的虞子花的作用可是伤害比不了的。",
    "hasPopup": false,
    "popupId": "terror_bomb"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_kit.png",
    "name": "凶险修补套件",
    "source": "自然凶险x1,恐怖粘液x3",
    "tech": "凶险科技",
    "details": "【凶险修补套件】可以为我们节省很多成本，让我们可以进行更多工作！",
    "hasPopup": false,
    "popupId": "terror_kit"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_dangerous.png",
    "name": "自然凶险",
    "source": "",
    "tech": "",
    "details": "【自然凶险】可以制作凶险笼罩、凶险潜胄、凶险手杖、凶险荆棘等多种凶险阵营的装备。\n自然凶险可通过敲开巨大化蓝莓获取，巨大蓝莓掉落自然凶险的改率为5%。自然凶险更多地来自于凶险事件中暴动的生物，击杀他们可以有更高概率获得自然凶险。",
    "hasPopup": false,
    "popupId": "terror_dangerous"
  },
  {
    "class": "item",
    "tag": "material",
    "image": "img/terror_mucous.png",
    "name": "恐怖粘液",
    "source": "",
    "tech": "",
    "details": "恐怖粘液是凶险阵营农作物产出的一种特殊材料，它不能被直接使用，否则你会像粘鼠板上的老鼠一样无助。只有自然凶险才有约束恐怖粘液的力量。",
    "hasPopup": false,
    "popupId": "terror_mucous"
  },
  {
    "class": "item",
    "tag": "plant",
    "image": "img/terror_seeds.png",
    "name": "凶险种子",
    "source": "噩梦花瓣x1,种子x2",
    "tech": "无科技要求",
    "details": "并不是所有的农作物都可成为凶险阵营的一员，有些农作物因为可以像动物一样在体内凝聚出自然凶险而被认为是凶险阵营的一员，有些农作物因为可以产出与自然凶险有高度契合的恐怖粘液而被先辈们归类为凶险阵营农作物。",
    "hasPopup": false,
    "popupId": "terror_seeds"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_blueberry_hat.png",
    "name": "蓝莓帽",
    "source": "蓝莓x25,恐怖粘液x2",
    "tech": "凶险科技",
    "details": "对于对潮湿度有需求的冒险家来说，蓝莓帽绝对是一顶十分不错的帽子！",
    "hasPopup": false,
    "popupId": "terror_blueberry_hat"
  },
  {
    "class": "item",
    "tag": "equip",
    "image": "img/terror_lemon_bomb.png",
    "name": "柠檬炸弹",
    "source": "柠檬x16,火药x1",
    "tech": "凶险科技",
    "details": "柠檬炸弹依靠其内聚合的浓度极高的柠檬酸来对生物造成伤害，但它并不会对建筑造成任何影响！",
    "hasPopup": false,
    "popupId": "terror_lemon_bomb"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_store.png",
    "name": "青衢纳宝箱",
    "source": "自然辉煌x1,植物纤维x2,冰x4",
    "tech": "丰耘科技",
    "details": "青衢纳宝箱不会被烧毁，但因其对庞大空间的结构需求，会消耗一些强度。需要小心地震等自然灾害！",
    "hasPopup": false,
    "popupId": "hmr_chest_store"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_transmit.png",
    "name": "云梭递运箱",
    "source": "自然辉煌x1,恐怖粘液x2,火药x2",
    "tech": "丰耘科技",
    "details": "如果不是因为丢三落四，还是不要传送物资了，毕竟这对体力的额消耗太大了！",
    "hasPopup": false,
    "popupId": "hmr_chest_transmit"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_recycle.png",
    "name": "龙龛探秘箱",
    "source": "自然辉煌x1,恐怖粘液x2,火药x2",
    "tech": "丰耘科技",
    "details": "可以选择一片空旷的地方，建造一个专属的寻宝垃圾场！",
    "hasPopup": false,
    "popupId": "hmr_chest_recycle"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_factory.png",
    "name": "灵枢织造箱",
    "source": "自然辉煌x1,活木x15",
    "tech": "丰耘科技",
    "details": "灵枢织造箱自己本身不会产出物品，它依靠部署在其附近的灵枢织造箱核心为其传输物品。不过灵枢织造箱的容积可不大，如果灵枢织造箱被堆满了，灵枢织造箱核心会在一段时间后停止工作。",
    "hasPopup": false,
    "popupId": "hmr_chest_factory"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_factory_core_item.png",
    "name": "灵枢织造箱核心",
    "source": "自然辉煌x1,活木x3",
    "tech": "丰耘科技",
    "details": "灵枢织造箱自己本身不会产出物品，它依靠部署在其附近的灵枢织造箱核心为其传输物品。不过灵枢织造箱的容积可不大，如果灵枢织造箱被堆满了，灵枢织造箱核心会在一段时间后停止工作。",
    "hasPopup": false,
    "popupId": "hmr_chest_factory_core_item"
  },
  {
    "class": "item",
    "tag": "structure",
    "image": "img/hmr_chest_display.png",
    "name": "华樽耀勋箱",
    "source": "自然辉煌x1,自然凶险x1,金块x10",
    "tech": "丰耘科技",
    "details": "还在发愁别人看不到自己的功勋吗？建造一个华樽耀勋箱来摆放他们吧！",
    "hasPopup": false,
    "popupId": "hmr_chest_display"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/honor_tea_prime.png",
    "name": "茶丛精华",
    "source": "茶丛x40,茉莉x30,大红袍x5,花瓣x5",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "honor_tea_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/honor_coconut_prime.png",
    "name": "椰子精华",
    "source": "椰肉x55,椰汁x10,植物青汁x3",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "honor_coconut_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/honor_wheat_prime.png",
    "name": "小麦精华",
    "source": "小麦x80,黄油x1",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "honor_wheat_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/honor_rice_prime.png",
    "name": "水稻精华",
    "source": "水稻x80,辣椒x5",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "honor_rice_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/terror_blueberry_prime.png",
    "name": "蓝莓精华",
    "source": "蓝莓x80,浆果x5",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "terror_blueberry_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/terror_ginger_prime.png",
    "name": "洋姜精华",
    "source": "洋姜x80,蜂蜜x5",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "terror_ginger_prime"
  },
  {
    "class": "item",
    "tag": "dish dish buff buff",
    "image": "img/terror_snakeskinfruit_prime.png",
    "name": "蛇皮果精华",
    "source": "蛇皮果x80,火荨麻x1",
    "tech": "无科技要求",
    "details": "等待揭秘",
    "hasPopup": false,
    "popupId": "terror_snakeskinfruit_prime"
  }
];
