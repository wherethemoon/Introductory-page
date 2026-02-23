// 农作物一览数据
const FENGYUN_CROPS = [
  {
    name: "椰子",       // 作物名字
    spring: "✔",       // 春
    summer: " ",        // 夏
    autumn: "✔",        // 秋
    winter: "✔",        // 冬
    faction: "辉煌",     // 阵营
    booster: "+2",       // 催长剂
    compost: "+2",       // 堆肥
    manure: "-4",       // 粪肥
    moisture: "-0.45/min"
  },
  {
    name: "茶丛",
    spring: "✔",
    summer: " ",
    autumn: "✔",
    winter: " ",
    faction: "辉煌",
    booster: "+4",
    compost: "-8",
    manure: "+4",
    moisture: "-0.45/min"
  },
  {
    name: "水稻",
    spring: "✔",
    summer: "✔",
    autumn: " ", 
    winter: " ", 
    faction: "辉煌",
    booster: "+2", 
    compost: "-4", 
    manure: "+2",
    moisture: "-0.45/min"
  },
  {
    name: "小麦",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: " ",
    faction: "辉煌",
    booster: "-2",
    compost: "+4",
    manure: "-2",
    moisture: "-0.45/min"
  },
  {
    name: "金灯果",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: " ",
    faction: "辉煌",
    booster: "-2",
    compost: "-2",
    manure: "+4",
    moisture: "-0.45/min"
  },
  {
    name: "芦荟",
    spring: " ",
    summer: " ",
    autumn: "✔",
    winter: "✔",
    faction: "辉煌",
    booster: "-8",
    compost: "+4",
    manure: "+4",
    moisture: "-0.45/min"
  },
  {
    name: "哈密瓜",
    spring: " ",
    summer: "✔",
    autumn: "✔",
    winter: " ",
    faction: "辉煌",
    booster: "+4",
    compost: "+4",
    manure: "-8",
    moisture: "-0.45/min"
  },
  {
    name: "坚果",
    spring: "✔",
    summer: " ",
    autumn: "✔",
    winter: "✔",
    faction: "辉煌",
    booster: "-2",
    compost: "-2",
    manure: "+4",
    moisture: "-0.45/min"
  },
  {
    name: "蛇皮果",
    spring: " ", 
    summer: "✔", 
    autumn: "✔",
    winter: "✔",
    faction: "凶险", 
    booster: "+4",
    compost: "-2",
    manure: "-2",
    moisture: "-0.45/min"
  },
  {
    name: "蓝莓",
    spring: " ",
    summer: "✔",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "+2",
    compost: "-4",
    manure: "+2",
    moisture: "-0.45/min"
  },
  {
    name: "洋姜",
    spring: " ",
    summer: " ",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "-4",
    compost: "+2",
    manure: "+2",
    moisture: "-0.45/min"
  },
  {
    name: "柠檬",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: " ",
    faction: "凶险",
    booster: "+2",
    compost: "-4",
    manure: "+2",
    moisture: "-0.45/min"
  },
  {
    name: "荔枝",
    spring: "✔",
    summer: "✔",
    autumn: "✔",
    winter: " ",
    faction: "凶险",
    booster: "-4",
    compost: "+8",
    manure: "-4",
    moisture: "-0.45/min"
  },
  {
    name: "咖啡", 
    spring: "✔",
    summer: " ", 
    autumn: "✔",
    winter: "✔", 
    faction: "凶险",
    booster: "-4", 
    compost: "+2", 
    manure: "+2",
    moisture: "-0.45/min"
  },
  {
    name: "山楂",
    spring: " ",
    summer: " ",
    autumn: "✔",
    winter: "✔",
    faction: "凶险",
    booster: "+8",
    compost: "-4",
    manure: "-4",
    moisture: "-0.45/min"
  },
  {
    name: "百香果",
    spring: "✔",
    summer: " ",
    autumn: " ",
    winter: "✔",
    faction: "凶险",
    booster: "-4",
    compost: "-4",
    manure: "+8",
    moisture: "-0.45/min"
  },
];
