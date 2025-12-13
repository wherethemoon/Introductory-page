// 农作物一览数据
const FENGYUN_CROPS = [
  {
    name: "椰子",        // 作物名字
    spring: "✔",        // 春
    summer: "✖",        // 夏
    autumn: "✔",        // 秋
    winter: "✔",        // 冬
    faction: "辉煌",  // 阵营
    booster: "2",       // 催长剂
    compost: "2",       // 堆肥
    manure: "-4"         // 粪肥
  },
  {
    name: "金灯果",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: "✖",
    faction: "辉煌",
    booster: "-2",
    compost: "-2",
    manure: "4"
  },
  {
    name: "小麦",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: "✖",
    faction: "辉煌",
    booster: "-2",
    compost: "4",
    manure: "-2"
  },
  {
    name: "茶",
    spring: "✔",
    summer: "✖",
    autumn: "✔",
    winter: "✖",
    faction: "辉煌",
    booster: "0",
    compost: "8",
    manure: "0"
  },
  {
    name: "水稻",        // 作物名字
    spring: "✔",        // 春
    summer: "✔",        // 夏
    autumn: "✖",        // 秋
    winter: "✖",        // 冬
    faction: "辉煌",  // 阵营
    booster: "2",       // 催长剂（你想放啥就放啥）
    compost: "-4",       // 堆肥
    manure: "2"         // 粪肥
  },
  {
    name: "芦荟",
    spring: "✖",
    summer: "✖",
    autumn: "✔",
    winter: "✔",
    faction: "辉煌",
    booster: "-8",
    compost: "4",
    manure: "4"
  },
  {
    name: "哈密瓜",
    spring: "✖",
    summer: "✔",
    autumn: "✔",
    winter: "✖",
    faction: "辉煌",
    booster: "4",
    compost: "4",
    manure: "-8"
  },
  {
    name: "核桃",
    spring: "✔",
    summer: "✖",
    autumn: "✔",
    winter: "✔",
    faction: "辉煌",
    booster: "-2",
    compost: "-2",
    manure: "4"
  },
  {
    name: "咖啡",        // 作物名字
    spring: "✔",        // 春
    summer: "✖",        // 夏
    autumn: "✔",        // 秋
    winter: "✔",        // 冬
    faction: "凶险",  // 阵营
    booster: "4",       // 催长剂（你想放啥就放啥）
    compost: "0",       // 堆肥
    manure: "0"         // 粪肥
  },
  {
    name: "百香果",
    spring: "✔",
    summer: "✖",
    autumn: "✖",
    winter: "✔",
    faction: "凶险",
    booster: "4",
    compost: "4",
    manure: "0"
  },
  {
    name: "蓝莓",
    spring: "✖",
    summer: "✔",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "0",
    compost: "4",
    manure: "0"
  },
  {
    name: "柠檬",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: "✖",
    faction: "凶险",
    booster: "0",
    compost: "4",
    manure: "0"
  },
  {
    name: "蛇皮果",        // 作物名字
    spring: "✖",        // 春
    summer: "✔",        // 夏
    autumn: "✔",        // 秋
    winter: "✔",        // 冬
    faction: "凶险",  // 阵营
    booster: "0",       // 催长剂（你想放啥就放啥）
    compost: "2",       // 堆肥
    manure: "2"         // 粪肥
  },
  {
    name: "洋姜",
    spring: "✖",
    summer: "✖",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "4",
    compost: "0",
    manure: "0"
  },
  {
    name: "荔枝",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: "✖",
    faction: "凶险",
    booster: "4",
    compost: "0",
    manure: "4"
  },
  {
    name: "山楂",
    spring: "✖",
    summer: "✖",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "0",
    compost: "4",
    manure: "4"
  },
  // ……后面每个作物都按这个结构来
];
