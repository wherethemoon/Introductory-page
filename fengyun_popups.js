//// 专门存放弹窗详细说明
window.FENGYUN_POPUPS = {
  // ------------- 辉煌阵营 -------------

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
        type: "text",
        html: `
          <p><strong>自然亲和机器</strong> 是辉煌阵营的原型站。</p>
          <p>解锁辉煌科技后，可以制作辉煌法帽、护甲、多用工具等关键装备。</p>
        `
      },
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
        src: "img/honor_balance_maintainer.png",
        alt: "自然平衡维持器"
      },
      {
        type: "text",
        html: `
          <p>当<strong>自然平衡维持器</strong>的三个支柱各被插入一颗彩虹宝石时,可镇压凶险事件,防止生物被激怒从而攻击您。</p>
        `
      },
      {
        type: "text",
        html: `
          <p>可向基座上布置或摘取彩虹宝石以开启或关闭自然平衡维持器。</p>
        `
      }
    ]
  },

  honor_tower: {
    title: "自然亲和塔",
    blocks: [
      {
        type: "image",
        src: "img/honor_tower.png",
        alt: "自然亲和塔"
      },
      {
        type: "text",
        html: `
        <strong>自然亲和塔</strong>拥有两个 6x6 的容器，分别容纳农产品和种子。
        `
      },
      {
        type: "text",
        html: `
        可以通过<strong>自然亲和子塔</strong>对<strong>自然亲和塔</strong>进行遥控来对半径20格内的作物进行照料、收获、敲碎、收纳。
        `
      },
      {
        type: "text",
        html: `
        当塔内盛放的物品种类增加时，自然亲和塔的保鲜能力会随之上升。具体如下：</br>
        种类大于等于  <b>3</b> 时：具有 <b>0.75</b> 的保鲜倍率； </br>
        种类大于等于  <b>8</b> 时：具有 <b>0.5</b> 的保鲜倍率； </br> 
        种类大于等于 <b>10</b> 时：物品停止腐烂； </br>
        种类大于等于 <b>15</b> 时：具有 <b>0.5</b> 的反鲜倍率； </br>
        种类大于等于 <b>20</b> 时：具有   <b>1</b> 的反鲜倍率； </br>
        种类大于等于 <b>32</b> 时：具有   <b>2</b> 的反鲜倍率； </br>
        种类大于等于 <b>50</b> 时：具有  <b>10</b> 的反鲜倍率。
        `
      }
    ]
  },
  honor_stower: {
    title: "自然亲和子塔",
    blocks: [
      {
        type: "image",
        src: "img/honor_stower.png",
        alt: "自然亲和子塔"
      },
      {
        type: "text",
        html: `
        <strong>自然亲和子塔</strong>可以通过蕴藏在其中的力量，驱动自然亲和塔完成以下工作： </br>
        捶打：将半径20范围内的所有巨大化作物敲碎；
        照料：为半径20范围内的所有具有浇水、施肥、对话需求的植物提供服务；
        收获：收获半径20范围内的所有植物；
        收纳：将半径20范围内的所有可以放入自然亲和塔的物品收纳其中。
        `
      },
      {
        type: "text",
        html: `
        <strong>自然亲和子塔</strong>每次遥控都会根据自然亲和塔的工作量扣除相应耐久度。 </br>
        <strong>自然亲和子塔</strong>可同时遥控其控制范围内的所有自然亲和塔，并扣除对应数量的耐久度。
        `
      }
    ]
  },

  honor_cookpot: {
    title: "辉煌炼化容器",
    blocks: [
      {
        type: "image",
        src: "img/honor_cookpot.png",
        alt: "辉煌炼化容器"
      },
      {
        type: "text",
        html: `
        <strong>辉煌炼化容器</strong>在每次烹饪的过程中都会成长，增加自己的保鲜能力，每次烹饪会为放置于其中的物品降低1%的新鲜度流失速率。
        `
      },
      {
        type: "image",
        src: "img/honor_cookpot_ui.png",
        alt: "辉煌炼化容器界面"
      },
      {
        type: "text",
        html: `
        左侧4个格子可以烹饪各种食物：点击<strong>开始</strong>按钮后开始循环烹饪，直至有一格食材消耗完毕或点击<strong>暂停</strong>按钮停止烹饪，产品将放置于左下角的格子。 </br>
        右侧格子可以研磨调料：在格子中放置食材后，点击<strong>研磨</strong>后立即生成对应调料，产品将放置于右下角的格子。 </br>
        下方各自可以调味：可将烹饪产品格与研磨调料产品格中的食材进行调味，点击<strong>调味</strong>按钮后立即生成调味品，产品将放置于下侧的格子。
        `
      }
    ]
  },

  honor_hat: {
    title: "辉煌法帽",
    blocks: [
      {
        type: "image",
        src: "img/honor_hat.png",
        alt: "辉煌法帽"
      },
      {
        type: "text",
        html: `
        亮茄不会攻击穿戴<strong>辉煌法帽</strong>的玩家，即使玩家主动攻击它。
        `
      },
      {
        type: "text",
        html: `
        装备效果：</br>
        抵御60%的物理伤害；</br>
        抵御3%来自月亮阵营的伤害；</br>
        抵御7%来自暗影阵营的伤害；</br>
        拥有100%的防水效果。
        `
      },
      {
        type: "text",
        html: `
        与辉煌阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        <strong>辉煌法帽</strong>每秒恢复0.5（单位：生命值）耐久度， </br>
        <strong>辉煌法帽</strong>的穿戴者每秒恢复，0.25理智值。
        `
      }
    ]
  },

  honor_armor: {
    title: "辉煌护甲",
    blocks: [
      {
        type: "image",
        src: "img/honor_armor.png",
        alt: "辉煌护甲"
      },
      {
        type: "text",
        html: `
        <strong>辉煌护甲</strong>平时的防护能力为85%，当开启辉煌护甲的技能时（默认键位为 <i>Alt</i>），护甲的防护能力提升到98%。
        `
      },
      {
        type: "text",
        html: `
        <strong>辉煌护甲</strong>会对其穿戴者造成20%的减速效果，但这也不是不可避免的。
        与辉煌阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时且当穿戴者受到致命伤害时，辉煌护甲会竭尽所能保护穿戴者，将穿戴者的生命值提升至100%，但辉煌护甲自身会直接损坏。</br>
        当触发套装效果时解除减速的负面效果，穿戴者可以更方便地行走。
        `
      }
    ]
  },

  honor_staff: {
    title: "辉煌法杖",
    blocks: [
      {
        type: "image",
        src: "img/honor_staff.png",
        alt: "辉煌法杖"
      },
      {
        type: "text",
        html: `
        <strong>辉煌法杖</strong>的攻击距离为10，属于远程武器。</br>
        <strong>辉煌法杖</strong>具有5点位面伤害。</br>
        <strong>辉煌法杖</strong>可进行400次攻击，次数消耗完毕后会损坏，不再可穿戴。可使用辉煌修补套件修补。
        `
      },
      {
        type: "text",
        html: `
        与辉煌阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        <strong>辉煌法杖</strong>的伤害会提升至2倍。
        `
      },
      {
        type: "text",
        html: `
        <strong>辉煌法杖</strong>由于与辉煌阵营的几种农作物有极高的亲和度而可以接受它们的献礼。<strong>辉煌法杖</strong>总共可接收8枚精华，可以重复接收同种精华。<strong>辉煌法杖</strong>接收精华后，会提升对应法球的发射概率，最高提升至100%。</br>
        <table>
          <thead>
            <tr>
              <th>给予物品</th>
              <th>法球类型</th>
              <th>命中效果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>芦荟精华</td>
              <td>芦荟法球</td>
              <td>为法杖持有者恢复造成伤害的25%血量</td>
            </tr>
            <tr>
              <td>椰子精华</td>
              <td>椰子法球</td>
              <td>在目标周围天降2枚椰子，每枚椰子对敌人造成10点伤害</td>
            </tr>
            <tr>
              <td>茶丛精华</td>
              <td>茶丛法球</td>
              <td>降低目标的防御值，此时攻击目标对其造成的伤害可能会高于攻击者自身的攻击力</td>
            </tr>
            <tr>
              <td>小麦精华</td>
              <td>小麦法球</td>
              <td>伤害降低为原先的0.4倍，增加目标3点冰冻值</td>
            </tr>
            <tr>
              <td>水稻精华</td>
              <td>水稻法球</td>
              <td>伤害提升为原先的2倍</td>
            </tr>
            <tr>
              <td>金灯果精华</td>
              <td>金灯果法球</td>
              <td>召唤一颗金灯果流星对目标进行轰炸，流星落地后对附近半径3单位长度范围内的所有敌对目标造成30点伤害，</br>
              流星存在180s后消失，期间会提供大范围照明并周期性提供理智光环</td>
            </tr>
            <tr>
              <td>哈密瓜精华</td>
              <td>哈密瓜法球</td>
              <td>为攻击者提供对目标造成的伤害*50%的护盾，护盾持续30s后消失</td>
            </tr>
          </tbody>
        </table>
        `
      }
    ]
  },

  honor_multitool: {
    title: "辉煌多用工具",
    blocks: [
      {
        type: "image",
        src: "img/honor_multitool.png",
        alt: "辉煌多用工具"
      },
      {
        type: "text",
        html: `
        <strong>辉煌多用工具</strong> </br>
        可砍伐800次，效率为120%。
        可开采400次，效率为120%
        可挖掘267次，效率为120%
        可捶打800次，效率为120%
        可耕地800次，当<strong>辉煌多用工具</strong>处于不同模式时，每耕地一个坑所消耗的次数不同。一次性耕地越多，消耗的次数越多。
        <strong>辉煌多用工具</strong>的攻击伤害为21点，每次攻击消耗一点耐久度。
        `
      },
      {
        type: "text",
        html: `
        与辉煌阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        使用者在对目标进行工作时，每次工作后目标有概率掉落该目标的随机一个掉落物。具体数值如下：<br>
        <table>
          <thead>
            <tr>
              <th>工作</th>
              <th>概率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>砍伐</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>开采</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>挖掘</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>捶打</td>
              <td>8%</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        按下<u><i>R</i></u>键可切换<strong>辉煌多用工具</strong>的耕地模式，可在模组设置界面调整按键。</br>
        耕地模式共4种，每种模式的效果与耕地消耗次数如下：</br>
        <table>
          <thead>
            <tr>
              <th>坑数</th>
              <th>消耗（次）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>9</td>
              <td>14</td>
            </tr>
            <tr>
              <td>10</td>
              <td>18</td>
            </tr>
            <tr>
              <td>16</td>
              <td>28</td>
            </tr>
          </tbody>
        </table>
        `
      }
    ]
  },

  honor_kit: {
    title: "辉煌修补套件",
    blocks: [
      {
        type: "image",
        src: "img/honor_kit.png",
        alt: "辉煌修补套件"
      },
      {
        type: "text",
        html: `
        辉煌修补套件在修复工具耐久度的同时，还会永久性提升这把工具的上限！修补后，会随机提升工具的耐久上限、工作效率、护甲保护度，具体数值如下：</br>
        护甲保护度：10%概率触发，提升1%原始保护度或1%护甲保护度（取最小值），最高提升至99% </br>
        耐久上限：50%概率触发，根据目标的耐久类型不同，提升5%~15%的耐久上限
        <ul>
          <li>燃料型提升15%，最高提升至3000%，如火把</li>
          <li>护甲型提升5%，最高提升至3000%，如大理石甲</li>
          <li>使用次数型提升10%，最高提升至2000%，如锤子</li>
          <li>新鲜度型提升10%，最高提升至2000%，如火腿棒</li>
        </ul>
        工作效率：40%概率触发，提升原始工作效率的6%或6%的工作效率（取最小值），最高提升至初始值的1000% </br>
        `
      }
    ]
  },

  honor_backpack: {
    title: "辉煌背包",
    blocks: [
      {
        type: "image",
        src: "img/honor_backpack.png",
        alt: "辉煌背包"
      },
      {
        type: "text",
        html: `
        <strong>辉煌背包</strong>内物品数量越多，移速降低越多，当背包内物品大于等于18个时，移速降低至最低值0.5。</br>
        `
      },
      {
        type: "text",
        html: `
        与辉煌阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        反转辉煌背包随其容纳物品数量增多时对移速的降低效果，移速最高提升至1.5。
        `
      },
      {
        type: "text",
        html: `
        <strong>辉煌背包</strong>提供20%的防水效果。
        `
      },
      {
        type: "text",
        html: `
        <strong>辉煌背包</strong>功能性格子在存储了对应类型的能量之后才会生效：</br>
        <table>
          <thead>
            <tr>
              <th>格子位置</th>
              <th>效果</th>
              <th>能量消耗</th>
              <th>最高能量</th>
              <th>补充能量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>倒数第四行</td>
              <td>具有温度属性物品：每秒下降4℃，最低5℃，</br>
                  可保鲜物品：腐烂速度会放慢至20%
              </td>
              <td>具有温度属性物品：0.4/秒。</td>
              <td>2000</td>
              <td>椰蓉凝玉膏：100，</br>密瓜凝玉沙：120。</td>
            </tr>
            <tr>
              <td>倒数第三行</td>
              <td>具有温度属性物品：每秒升高2℃，最高55℃，</br>
                  可烹饪物品：每秒烹饪一个物品为灰（9.5%）、烹饪物（70%）、双份烹饪物（13%）、料理（2%）、沃利专属料理（2.5%）、调味料理（3%）。
              </td>
              <td>具有温度属性物品：0.4/秒，</br>可烹饪物品：8/次。</td>
              <td>5000</td>
              <td>盐焗珍果仁：130，</br>清润山茶饮：100。</td>
            </tr>
            <tr>
              <td>倒数第二行</td>
              <td>格子处于空闲状态超过6分钟，则会随机刷新一个礼物包裹，每个礼物包裹内容至多4个礼物。</br>
                <ul>
                  <li>
                  <i>高级材料包（5.88%）</i>:自然辉煌（22.99%）；植物纤维（45.97%）；自然凶险（1.15%）；恐怖粘液（5.75%）；纯粹辉煌（5.75%）；亮茄外壳（11.49%）；纯粹恐惧（3.45%）；暗影碎布（3.45%）。
                  </li>
                  <li>
                  <i>宝石包（5.88%）</i>：红宝石（28.57%）；蓝宝石（38.10%）；绿宝石（4.76%）；黄宝石（7.62%）；紫宝石（9.52%）；橙宝石（5.71%）；彩虹玉石（0.95%）。
                  </li>
                  <li>
                  <i>石材类材料包（17.64%）</i>：黄金矿石（7.14%）；冰块（21.43%）；大理石（14.29%）；硝石（7.14%）；燧石（14.29%）；岩石（35.71%）。
                  </li>
                  <li>
                  <i>低级材料包（29.41%）</i>：草（31.58%）；绳子（10.53%）；木头（21.05%）；木板（10.53%）；岩石（21.05%）；石块（5.26%）。
                  </li>
                  <li>
                  <i>发光植物包（11.76%）</i>：厥叶（8.33%）；荧光果（41.67%）；发光浆果（16.67%）；较小发光浆果（8.33%）；绿色孢子（8.33%）；红色孢子（8.33%）；蓝色孢子（8.33%）。
                  </li>
                  <li>
                  <i>纸（5.88%）</i>：芦苇（25%）；莎草纸（12.5%）；蜡纸（12.5%）；蜜蜡（25%）；礼物包装纸（25%）。
                  </li>
                  <li>
                  <i>隐士的礼物包（包含壳）（5.88%）</i>。
                  </li>
                  <li>
                  <i>春节种子包（5.88%）</i>。
                  </li>
                  <li>
                  <i>稀有春节种子包（5.88%）</i>。
                  </li>
                  <li>
                  <i>嘉年华活动种子包（5.88%）</i>。
                  </li>
                  <li>
                  <i>起皱的包裹（5.88%）</i>。
                  </li>
                </ul>
              </td>
              <td>80/个礼物。</td>
              <td>4000</td>
              <td>金灯糖霜盏：90，</br>鲜龙金粟饭：100。</td>
            </tr>
            <tr>
              <td>倒数第一行</td>
              <td>新鲜度：每秒恢复2秒新鲜度，</br>
                  护甲：每秒修复5生命值单位耐久度，</br>
                  使用次数：每秒修复2使用次数，</br>
                  燃料：每秒恢复2.5秒持续时间，</br>
                  不可修补：拆解法杖，建造护符。
              </td>
              <td>10/秒/件物品。</td>
              <td>6500</td>
              <td>麦香烤面包：150，</br>蜜渍芦荟条：180。</td>
            </tr>
          </tbody>
        </table>
        `
      }
    ]
  },

  honor_greenjuice: {
    title: "植物青汁",
    blocks: [
      {
        type: "image",
        src: "img/honor_greenjuice.png",
        alt: "植物青汁"
      },
      {
        type: "text",
        html: `
        <strong>植物青汁</strong>作为食物回复5点饱食度，30点精神值，1点生命值，</br>
        <strong>植物青汁</strong>作为水源可以为浇水壶填充4次使用次数。
        `
      },
      {
        type: "text",
        html: `
        每个巨大化杂交水稻稻穗可以收获1个<strong>植物青汁</strong>。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位甜味剂。
        `
      }
    ]
  },

  honor_splendor: {
    title: "自然辉煌",
    blocks: [
      {
        type: "image",
        src: "img/honor_splendor.png",
        alt: "自然辉煌"
      },
      {
        type: "text",
        html: `
        <strong>自然辉煌</strong>常规掉落途径：
        <ul>
          <li>
          巨大化芦荟：40%，
          </li>
          <li>
          巨大化哈密瓜：15%，
          </li>
          <li>
          巨大化椰子、巨大化金灯果、巨大化核桃、巨大化水稻、巨大化茶丛、巨大化小麦：10%，
          </li>
          <li>
          巨大化杂交水稻稻穗：1-2个/稻穗。
          </li>
        </ul>
        `
      }
    ]
  },

  honor_plantfibre: {
    title: "植物纤维",
    blocks: [
      {
        type: "image",
        src: "img/honor_plantfibre.png",
        alt: "植物纤维"
      },
      {
        type: "text",
        html: `
        <strong>植物纤维</strong>常规掉落途径：
        <ul>
          <li>
          巨大化椰子：30%，
          </li>
          <li>
          椰子：20%，
          </li>
        </ul>
        `
      }
    ]
  },

  honor_seeds: {
    title: "辉煌种子",
    blocks: [
      {
        type: "image",
        src: "img/honor_seeds.png",
        alt: "辉煌种子"
      },
      {
        type: "text",
        html: `
        <strong>辉煌种子</strong>可以种植出辉煌阵营的农作物，</br>
        芦荟、椰子、金灯果、小麦、水稻、哈密瓜、坚果、茶丛都由此而来。
        `
      }
    ]
  },

  honor_coconut_hat: {
    title: "巨大椰壳头盔",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_hat.png",
        alt: "巨大椰壳头盔"
      },
      {
        type: "text",
        html: `
        敲开巨大化椰子有5%概率掉落<strong>巨大椰壳头盔</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>巨大椰壳头盔</strong>有95%的防护值，</br>
        <strong>巨大椰壳头盔</strong>有200点的耐久度，</br>
        <strong>巨大椰壳头盔</strong>提供20%的防水效果。
        `
      }
    ]
  },

  honor_goldenlanternfruit_lamp: {
    title: "金灯果灯",
    blocks: [
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_lamp.png",
        alt: "金灯果灯"
      },
      {
        type: "text",
        html: `
        <strong>金灯果灯</strong>中可以放四个物品。当其中有物品时，<strong>金灯果灯</strong>可以发出光芒，并且光照范围会随着其中存放的物品数量的增加而变大。</br>
        <strong>金灯果灯</strong>的容器并不是什么都可以容纳，只有金灯果家族的成员们才可以入内哦~（金灯果、烤熟的金灯果、金灯果种子、金灯果精华）。
        `
      }
    ]
  },

  honor_goldenlanternfruit_meteor: {
    title: "金灯果流星",
    blocks: [
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_meteor.png",
        alt: "金灯果流星"
      },
      {
        type: "text",
        html: `
        <strong>金灯果流星</strong>会在辉煌法杖发射金灯果法球攻击目标后从天而降。<strong>金灯果流星</strong>具有超大的照明范围，并且可以周期性为附近的玩家提供理智光环。</br>
        来自于辉煌法杖法球的<strong>金灯果流星</strong>会在存在180s后消失。
        `
      },
      {
        type: "text",
        html: `
        <strong>金灯果流星</strong>可以被锤子敲毁，玩家敲击4下后会摧毁金灯果流星并掉落1个物品（30%概率掉落金块，69%概率掉落金灯果，1%概率掉落金灯果皮）。</br>
        非玩家单位对<strong>金灯果流星</strong>的工作效率将会减少为1/4，但要注意，多数boss摧毁建筑时，不论建筑的工作次数是多少，都会直接摧毁建筑，所以<strong>金灯果流星</strong>一般可以抵挡4次来自于生物的摧毁动作。
        `
      }
    ]
  },

  honor_goldenlanternfruit_peel: {
    title: "金灯果皮",
    blocks: [
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_peel.png",
        alt: "金灯果皮"
      },
      {
        type: "text",
        html: `
        敲碎巨大化金灯果时，有30%概率掉落<strong>金灯果皮</strong>。
        `
      }
    ]
  },

  honor_hybrid_rice_seed: {
    title: "巨型杂交水稻种子",
    blocks: [
      {
        type: "image",
        src: "img/honor_hybrid_rice_seed.png",
        alt: "巨型杂交水稻种子"
      },
      {
        type: "text",
        html: `
        <strong>巨型杂交水稻种子</strong>培养方式：</br>
        <table>
          <thead>
            <tr>
              <th>阶段</th>
              <th>给予物品</th>
              <th>等待时长</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>幼苗期</td>
              <td>10个植物青汁</td>
              <td>8分钟</td>
            </tr>
            <tr>
              <td>成长期</td>
              <td>12个植物纤维</td>
              <td>12分钟</td>
            </tr>
            <tr>
              <td>抽穗期</td>
              <td>5~8个自然辉煌（额外给予的自然辉煌将使巨型杂交水稻在成熟期额外垂下稻穗）</td>
              <td>16分钟</td>
            </tr>
            <tr>
              <td>成熟期</td>
              <td>3个水稻精华</td>
              <td>巨型杂交水稻立刻消失并且变成一个自然辉煌，所有未收获的稻穗会直接掉落对应的收获物</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        成熟期的巨型杂交水稻为玩家提供半径范围为20的恒温、避雷、防野火效果。
        `
      }
    ]
  },

  honor_hybrid_rice_vine: {
    title: "巨型杂交水稻稻穗",
    blocks: [
      {
        type: "image",
        src: "img/honor_hybrid_rice_vine.png",
        alt: "巨型杂交水稻稻穗"
      },
      {
        type: "text",
        html: `
        <strong>巨型杂交水稻稻穗</strong>收获时会给予玩家：</br>
        3个水稻种子，1个水稻种子，1个植物青汁，1个自然辉煌（40%）</br>
        1个水稻种子，1个水稻种子，1个植物青汁，2个自然辉煌（60%）
        `
      }
    ]
  },

  honor_aloe_mucous: {
    title: "芦荟胶",
    blocks: [
      {
        type: "image",
        src: "img/honor_aloe_mucous.png",
        alt: "芦荟胶"
      },
      {
        type: "text",
        html: `
        <strong>芦荟胶</strong>可为土壤提供三种肥料各32点。
        `
      },
      {
        type: "text",
        html: `
        沃姆伍德使用<strong>芦荟胶</strong>时，会立即恢复12点生命值，同时每2秒回复2点生命值，持续30秒。</br>
        不可对自己施肥的角色使用<strong>芦荟胶</strong>时，会立即为自己恢复30点血量。
        `
      }
    ]
  },

  // ------------- 凶险阵营 -------------

  terror_machine: {
    title: "凶险蔓延机器",
    blocks: [
      {
        type: "image",
        src: "img/terror_machine.png",
        alt: "凶险蔓延机器"
      },
      {
        type: "text",
        html: `
          <p><strong>凶险蔓延机器</strong> 是凶险阵营的原型站。</p>
          <p>解锁凶险科技后，可以制作凶险法帽、护甲、多用工具等关键装备。</p>
        `
      },
      {
        type: "text",
        html: `
          <p>建议放置在主基地农田附近，便于边耕作边制作装备。</p>
        `
      }
    ]
  },

  terror_tower: {
    title: "凶险威澜台",
    blocks: [
      {
        type: "image",
        src: "img/terror_tower.png",
        alt: "凶险威澜台"
      },
      {
        type: "text",
        html: `
        上侧有1x3的容器，容器内仅可放置对应的精华。具体如下：\n
        第一格：可装载蓝莓精华，装载后半径20范围内的所有玩家可自由调控自身潮湿度（按移动键【↑】【↓】调节，可在设置中更改按键）。</br>
        第二格：可装载洋姜精华，装载后半径20范围内的所有玩家获得移速150%加成。</br>
        第三格：可装载蛇皮果精华，装载后半径20范围内的所有玩家获得恒温效果。</br>
        </br>
        下侧有4x4的容器，容器内仅可存储具有温度的物品，如暖石。</br>
        若当前世界的温度高于40℃，凶险威澜台会冰冻4x4容器内的物体。</br>
        若当前世界的温度低于10℃，凶险威澜台会加热4x4容器内的物体。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险威澜台</strong>半径20范围内防止野火生成，</br>
        <strong>凶险威澜台</strong>半径20范围内防止建筑被自然力量破坏，</br>
        <strong>凶险威澜台</strong>半径20范围内避雷。
        `
      }
    ]
  },

  terror_staff: {
    title: "凶险手杖",
    blocks: [
      {
        type: "image",
        src: "img/terror_staff.png",
        alt: "凶险手杖"
      },
      {
        type: "text",
        html: `
        <strong>凶险手杖</strong>可装填恐怖粘液作为空间跃迁的消耗品。每次空间跃迁消耗1单位恐怖粘液。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险手杖</strong>具有20点攻击力。</br>
        <strong>凶险手杖</strong>具有5点位面伤害。</br>
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险手杖</strong>最大可使用400次，每次攻击或跃迁消耗1次使用次数。</br>
        使用次数消耗完毕后不会消失，但无法装备。使用凶险修补套件可以恢复使用次数。
        `
      },
      {
        type: "text",
        html: `
        与凶险阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        使用者会自动照料附近半径10单位内的农作物。
        `
      }
    ]
  },

  terror_sword: {
    title: "凶险荆棘",
    blocks: [
      {
        type: "image",
        src: "img/terror_sword.png",
        alt: "凶险荆棘"
      },
      {
        type: "text",
        html: `
        <strong>凶险荆棘</strong>具有60点攻击力。</br>
        <strong>凶险荆棘</strong>具有15点位面伤害。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险荆棘</strong>最大可使用400次，每次攻击消耗1次使用次数。</br>
        使用次数消耗完毕后不会消失，但无法装备。使用凶险修补套件可以恢复使用次数。
        `
      },
      {
        type: "text",
        html: `
        与凶险阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        使用者每累计攻击3次，若此时召唤者的生命值高于50点，且生命值百分比高于40%，则会召唤一条凶险藤蔓协助战斗，同时汲取召唤者20生命值，当凶险荆棘消失或被击败时，会将这20点生命值返还给玩家。</br>
        凶险藤蔓具有200点血量，每次攻击造成伤害120点。凶险藤蔓直至被击杀或被召唤60秒后才会消失。
        `
      }
    ]
  },

  terror_hat: {
    title: "凶险笼罩",
    blocks: [
      {
        type: "image",
        src: "img/terror_hat.png",
        alt: "凶险笼罩"
      },
      {
        type: "text",
        html: `
        装备效果：</br>
        抵御30%的物理伤害；</br>
        抵御7%来自月亮阵营的伤害；</br>
        抵御3%来自暗影阵营的伤害；</br>
        拥有100%的防水效果；</br>
        攻击力提升至200%；</br>
        收到伤害放大至400%。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险笼罩</strong>会召唤出3个光球环绕穿戴者，凶险光球的伤害为10点，当凶险光球打击到目标时，会为穿戴者恢复1单位生命值。
        `
      },
      {
        type: "text",
        html: `
        与凶险阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        <strong>凶险笼罩</strong>召唤出的光球数量将提升为6个。
        `
      }
    ]
  },

  terror_armor: {
    title: "凶险潜胄",
    blocks: [
      {
        type: "image",
        src: "img/terror_armor.png",
        alt: "凶险潜胄"
      },
      {
        type: "text",
        html: `
        装备效果：</br>
        抵御60%的物理伤害；</br>
        抵御10点位面伤害。
        `
      },
      {
        type: "text",
        html: `
        当穿戴者受到致命伤害时，<strong>凶险潜胄</strong>会将穿戴者传送至附近更为安全的地点。但同时<strong>凶险潜胄</strong>会直接消耗掉一半的耐久。
        `
      },
      {
        type: "text",
        html: `
        与凶险阵营的其他装备同时穿戴，可获得额外的效果。</br>
        当触发套装效果时：</br>
        穿戴者受到的伤害会减少为20%。凶险笼罩会通过它发达的植物触手告知<strong>凶险潜胄</strong>如何更为有效地规避伤害。
        `
      }
    ]
  },

  terror_sower: {
    title: "凶险裹挟者",
    blocks: [
      {
        type: "image",
        src: "img/terror_sower.png",
        alt: "凶险裹挟者"
      },
      {
        type: "text",
        html: `
        <strong>凶险裹挟者</strong>不仅可以在土壤中播种农作物种子，也可以在其他地面上播种农作物，甚至还可以播种一些可移栽作物。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险裹挟者</strong>在九格模式时，可以根据使用者的镜头朝向改变播撒排列。装备凶险裹挟者后，可以右键它来改变模式，也可将其放置于地面来改变模式。</br>
        <strong>凶险裹挟者</strong>在十格模式时，可以根据当前目标土地的位置改变播撒排列，保证严格密铺。装备凶险裹挟者后，可以右键它来改变模式，也可将其放置于地面来改变模式。
        `
      },
      {
        type: "text",
        html: `
        在<strong>凶险裹挟者</strong>损坏后，仍然可以打开它来拿取被困在其中的种子。
        `
      },
      {
        type: "text",
        html: `
        手持<strong>凶险裹挟者</strong>时，可以通过右键地面使用状态，当出现耕地对齐的图标后可以点击左键播种。
        `
      }
    ]
  },

  terror_bomb: {
    title: "凶险炸弹",
    blocks: [
      {
        type: "image",
        src: "img/terror_bomb.png",
        alt: "凶险炸弹"
      },
      {
        type: "text",
        html: `
        <strong>凶险炸弹</strong>会对半径3单位的范围内造成10点爆炸伤害；并在爆炸点中央生成一朵虞子花，虞子花拥有500点生命值并且会持续吸引半径20单位内的敌对生物的仇恨。
        `
      }
    ]
  },

  terror_kit: {
    title: "凶险修补套件",
    blocks: [
      {
        type: "image",
        src: "img/terror_kit.png",
        alt: "凶险修补套件"
      },
      {
        type: "text",
        html: `
        <strong>凶险修补套件</strong>在修复工具耐久度的同时，还会永久性提升这把工具的上限！</br>
        修补后，会随机提升工具的移速加成、伤害，具体数值如下：</br>
        移动速度：75%概率触发，提升初始移速的1%或1.5%移速（取最小值），最高提升至200%； </br>
        伤害：25%概率触发，提升初始伤害的1%伤害或1.5单位伤害（取最小值），最高提升至250%。
        `
      }
    ]
  },

  terror_dangerous: {
    title: "自然凶险",
    blocks: [
      {
        type: "image",
        src: "img/terror_dangerous.png",
        alt: "自然凶险"
      },
      {
        type: "text",
        html: `
        <strong>自然凶险</strong>常规掉落途径：
        <ul>
          <li>
          巨大化蓝莓：3%，
          </li>
          <li>
          凶险蜜蜂：10%。
          </li>
        </ul>
        `
      }
    ]
  },

  terror_mucous: {
    title: "恐怖粘液",
    blocks: [
      {
        type: "image",
        src: "img/terror_mucous.png",
        alt: "恐怖粘液"
      },
      {
        type: "text",
        html: `
        <strong>恐怖粘液</strong>常规掉落途径：
        <ul>
          <li>
          巨大化百香果：80%，
          </li>
          <li>
          巨大化咖啡：25%，
          </li>
          <li>
          巨大化荔枝：15%，
          </li>
          <li>
          巨大化山楂：10%，
          </li>
          <li>
          巨大化蓝莓：5%，
          </li>
          <li>
          蓝莓帽腐烂：1个。
          </li>
        </ul>
        `
      }
    ]
  },

  terror_seeds: {
    title: "凶险种子",
    blocks: [
      {
        type: "image",
        src: "img/terror_seeds.png",
        alt: "凶险种子"
      },
      {
        type: "text",
        html: `
        <strong>凶险种子</strong>可以种植出凶险阵营的农作物，</br>
        蓝莓、荔枝、洋姜、蛇皮果、山楂、百香果、柠檬、咖啡都由此而来。
        `
      }
    ]
  },

  terror_blueberry_hat: {
    title: "蓝莓帽",
    blocks: [
      {
        type: "image",
        src: "img/terror_blueberry_hat.png",
        alt: "蓝莓帽"
      },
      {
        type: "text",
        html: `
        <strong>蓝莓帽</strong>会让穿戴者每秒增长1单位潮湿度</br>
        <strong>蓝莓帽</strong>的新鲜度可以维持2天。在两天后会腐败，并掉落蓝宝石和恐怖粘液。
        `
      }
    ]
  },

  terror_lemon_bomb: {
    title: "柠檬炸弹",
    blocks: [
      {
        type: "image",
        src: "img/terror_lemon_bomb.png",
        alt: "柠檬炸弹"
      },
      {
        type: "text",
        html: `
        投掷出的<strong>柠檬炸弹</strong>具有100点攻击力，可以用其极酸的果汁溅伤半径为3的范围内的所有生物。但建筑物是免疫果汁的！
        `
      }
    ]
  },

  // ------------- 丰耘科技 -------------

  hmr_chest_store: {
    title: "青衢纳宝箱",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_store.png",
        alt: "青衢纳宝箱"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗蓝莓精华x5。
        `
      },
      {
        type: "text",
        html: `
        未组成阵列的<strong>青衢纳宝箱</strong>容积很小，虽然可以无限堆叠，但只能容纳3组物品。</br>
        当半径为5的范围内同时存在9~12个青衢纳宝箱时，箱子之间会相互作用，形成复杂的空间结构。此时这些箱子会组成一个阵列，容积大幅提升。</br>
        当阵列中存在9个箱子时，可以容纳9x12组物品；</br>
        当阵列中存在10个箱子时，可以容纳9x14组物品；</br>
        当阵列中存在11个箱子时，可以容纳9x16组物品；</br>
        当阵列中存在12个箱子时，可以容纳9x18组物品。
        `
      },
      {
        type: "text",
        html: `
        当摧毁处于阵列中的<strong>青衢纳宝箱</strong>时，这个阵列会相应地降级或解体。</br>
        阵列降级时，若原阵列中存储的物品过多，现阵列不能完全容纳，则会掉落一个青衢纳宝箱降级包，这个包中会容纳未能容下的所有物品，并于2天后消失并弹出所有其中的物品。</br>
        阵列解体时，若原阵列中存储的物品过多，不能完全分配给余下的8个箱子，则会掉落一个青衢纳宝箱解体包，这个包中会容纳未能容下的所有物品，并于2天后消失并弹出所有其中的物品。
        `
      },
      {
        type: "text",
        html: `
        组成阵列后的<strong>青衢纳宝箱</strong>会根据阵列成员个数，在左右两侧多出18~54个格子。</br>
        多出来的每一列格子，由内至外分别具有保鲜（腐烂率20%）、暂停腐烂、反鲜（反鲜率1000%）的效果。
        `
      }
    ]
  },

  hmr_chest_transmit: {
    title: "云梭递运箱",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_transmit.png",
        alt: "云梭递运箱"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗蛇皮果精华x5（需先解锁青衢纳宝箱）。
        `
      },
      {
        type: "text",
        html: `
        <strong>云梭递运箱</strong>具有传送物品的功能，但这个功能需要通过辉煌背包来触发。</br>
        当玩家在辉煌背包的搜索框中输入想要的物品的中文或代码并点击“传送”按钮后，该玩家所在世界中所有的<strong>云梭递运箱</strong>都会检测箱子内是否含有玩家想要的物资。</br>
        如果没有任何一个<strong>云梭递运箱</strong>拥有该玩家请求的物资，所有的<strong>云梭递运箱</strong>会开始寻找其附近半径20单位范围内的所有青衢纳宝箱，</br>
        若找到玩家所需的物资，<strong>云梭递运箱</strong>会将距离玩家最近的一组物资传送给玩家，并根据距离扣除该玩家的饥饿值，每5单位距离扣除1点饥饿值，最多扣除50点。</br>
        若最终没有找到玩家请求的物资，玩家会因对物资的记忆偏差扣除5点理智值。
        `
      },
      {
        type: "text",
        html: `
        
        `
      }
    ]
  },

  hmr_chest_recycle: {
    title: "龙龛探秘箱",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_recycle.png",
        alt: "龙龛探秘箱"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗椰子精华x5。
        `
      },
      {
        type: "text",
        html: `
        <strong>龙龛探秘箱</strong>本身就是一个聚合过的小型垃圾堆，它可以容纳5个单位的特定材料和4个单位的垃圾。</br>
        存放特定材料的5个格子会随机排列，并根据其位置高低，从下到上分为1、2、3级。</br>
        当存放特定材料的格子被占用后，<strong>龙龛探秘箱</strong>会周期性地在其周围生成大小不一的垃圾堆，垃圾堆的大小以及其内掩藏的“礼物”与格子的等级、被占用的格子数相关。</br>
        具体如下：</br>
        格子级别 </br>
        <ul>
          <li>1级格子每隔2天生成一个垃圾堆；</li>
          <li>2级格子每隔1.5天生成一个垃圾堆；</li>
          <li>3级格子每隔0.8天生成一个垃圾堆。</li>
        </ul>
        被占用的格子数量 </br>
        <ul>
          <li>当被占用的格子小于或等于2个时，只会生成初级垃圾堆；</li>
          <li>当被占用的格子超过2个但小于或等于4个时，会生成中级垃圾堆；</li>
          <li>当被占用的格子超过4个时，会根据格子内的物品类型生成不同类型的大型垃圾堆：
          <ul>
            <li>如果废料大于等于2个，会优先生成高级零件垃圾堆；</li>
            <li>当玩具类型的物品大于等于3个时，会生成高级玩具垃圾堆；</li>
            <li>否则会生成高级常规垃圾堆。</li>
          </ul>
          </li>
        </ul>
        `
      }
    ]
  },

  hmr_chest_factory: {
    title: "灵枢织造箱",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_factory.png",
        alt: "灵枢织造箱"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗茶丛精华x5（需先解锁龙龛探秘箱）。
        `
      },
      {
        type: "text",
        html: `
        建造<strong>灵枢织造箱</strong>时，箱子内会附赠1~5个灵枢织造箱核心，获得概率（所有概率相互独立）如下</br>
        <table>
          <thead>
            <tr>
              <th>个数</th>
              <th>概率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>第一个</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>第二个</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>第三个</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>第四个</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>第五个</td>
              <td>0.5%</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        <strong>灵枢织造箱</strong>附赠的核心会与该箱子绑定，在核心给予绑定的箱子产品时，会有额外20%的概率多给予1个产品。</br>
        当灵枢织造箱核心位于一个封闭空间内时，灵枢织造箱核心会自动检测空间内的物品，若空间内的物品属于先辈记载的工厂的原材料，则灵枢织造箱核心会开始生产该原材料所能产出的物品，并传输给附近的灵枢织造箱。</br>
        灵枢织造箱核心产出产品的效率与封闭空间的面积大小以及空间内原材料的数量有关，请合理安排工厂的空间！
        `
      },
      {
        type: "text",
        html: `
        <strong>灵枢织造箱</strong>与织造核心联系范围：25个单位 </br>
        灵枢织造箱核心最小房间大小：10个单位 </br>
        灵枢织造箱核心最大房间大小：400个单位
        `
      },
      {
        type: "text",
        html: `
        当且仅当<strong>灵枢织造箱</strong>容量满的时候，并且附近有云梭递运箱，且云梭递运箱附近有青衢纳宝箱阵列时，<strong>灵枢织造箱</strong>内产物会收纳到青衢纳宝箱阵列中。
        `
      }
    ]
  },

  hmr_chest_factory_core: {
    title: "灵枢织造箱核心",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_factory_core.png",
        alt: "灵枢织造箱核心"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗茶丛精华x5（需先解锁龙龛探秘箱）。
        `
      },
      {
        type: "text",
        html: `
        <strong>灵枢织造箱核心</strong>可被右键部署至合适位置。部署后的灵枢织造箱核心若位于符合要求的封闭空间内（如被石墙和木门围起的地方），则会自动开始工作，生产原材料所对应的产品。
        `
      },
      {
        type: "text",
        html: `
        灵枢织造箱与织造核心联系范围：25个单位 </br>
        <strong>灵枢织造箱核心</strong>最小房间大小：10个单位 </br>
        <strong>灵枢织造箱核心</strong>最大房间大小：400个单位
        `
      }
    ]
  },

  hmr_chest_display: {
    title: "华樽耀勋箱",
    blocks: [
      {
        type: "image",
        src: "img/hmr_chest_display.png",
        alt: "华樽耀勋箱"
      },
      {
        type: "text",
        html: `
        通过丰耘科技面板解锁，需要消耗金灯果精华x5（需先解锁云梭递运箱和灵枢织造箱）。
        `
      },
      {
        type: "text",
        html: `
        <strong>华樽耀勋箱</strong>可以展示巨大化农作物以及雕像。</br>
        当<strong>华樽耀勋箱</strong>摆放了巨大化农作物或雕像后，会发光并提供一个半径为10的范围理智光环。
        `
      }
    ]
  },

  // ------------- 精华与调味 -------------

  honor_aloe_prime: {
    title: "芦荟精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_aloe_prime.png",
        alt: "芦荟精华"
      },
      {
        type: "text",
        html: `
        BUFF：受伤后在 5 秒内缓慢回复被伤害血量的50%，</br>
        若回复时再次受伤，则回复本次被伤害血量的50%，以及上次未回复完的血量的220%</br>
        实际回复效果受全局玩家受伤倍率影响。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>芦荟精华</strong>可以使用8次。
        `
      }
    ]
  },
  spice_honor_aloe_prime: {
    title: "芦荟原浆",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_aloe_prime.png",
        alt: "芦荟原浆"
      },
      {
        type: "text",
        html: `
        BUFF：受伤后在 5 秒内缓慢回复被伤害血量的50%，</br>
        若回复时再次受伤，则回复本次被伤害血量的50%，以及上次未回复完的血量的220%</br>
        实际回复效果受全局玩家受伤倍率影响。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个芦荟精华可以磨成12份<strong>芦荟原浆</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>芦荟原浆</strong>调过味的料理会带有芦荟浆前缀。
        `
      }
    ]
  },
  honor_coconut_prime: {
    title: "椰子精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_prime.png",
        alt: "椰子精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家攻击时，有30%概率在目标周围天降1~2个椰子，对命中的目标造成10点伤害。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>椰子精华</strong>可以使用6次。
        `
      }
    ]
  },
  spice_honor_coconut_prime: {
    title: "椰蓉",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_coconut_prime.png",
        alt: "椰蓉"
      },
      {
        type: "text",
        html: `
        BUFF：玩家攻击时，有30%概率在目标周围天降1~2个椰子，对命中的目标造成10点伤害。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个椰子精华可以磨成12份<strong>椰蓉</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>椰蓉</strong>调过味的料理会带有椰蓉前缀。
        `
      }
    ]
  },
  honor_nut_prime: {
    title: "坚果精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_nut_prime.png",
        alt: "坚果精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家超过5s没有发生位移后，获得96%的防御力。</br>
        BUFF持续时间：120s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>坚果精华</strong>可以使用7次。
        `
      }
    ]
  },
  spice_honor_nut_prime: {
    title: "坚果碎",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_nut_prime.png",
        alt: "坚果碎"
      },
      {
        type: "text",
        html: `
        BUFF：玩家超过5s没有发生位移后，获得96%的防御力。</br>
        BUFF持续时间：120s。
        `
      },
      {
        type: "text",
        html: `
        一个坚果精华可以磨成10份<strong>坚果碎</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>坚果碎</strong>调过味的料理会带有坚果碎前缀。
        `
      }
    ]
  },
  honor_tea_prime: {
    title: "茶丛精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_tea_prime.png",
        alt: "茶丛精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每次攻击会增加目标1点定身值，定身值满后，目标会被定身6s。</br>
        期间收到的伤害超过最大生命值20%后会立刻解除定身。</br>
        BUFF持续时间：120s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>茶丛精华</strong>可以使用8次。
        `
      }
    ]
  },
  spice_honor_tea_prime: {
    title: "干茶叶",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_tea_prime.png",
        alt: "干茶叶"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每次攻击会增加目标1点定身值，定身值满后，目标会被定身6s。</br>
        期间收到的伤害超过最大生命值20%后会立刻解除定身。</br>
        BUFF持续时间：120s。
        `
      },
      {
        type: "text",
        html: `
        一个茶丛精华可以磨成12份<strong>干茶叶</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>干茶叶</strong>调过味的料理会带有茶香前缀。
        `
      }
    ]
  },
  honor_wheat_prime: {
    title: "小麦精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_wheat_prime.png",
        alt: "小麦精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家免疫寒冷和冰冻。</br>
        每次攻击有40%的概率为目标增加2点冰冻值。</br>
        BUFF持续时间：360s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>小麦精华</strong>可以使用5次。
        `
      }
    ]
  },
  spice_honor_wheat_prime: {
    title: "冻干面粉",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_wheat_prime.png",
        alt: "冻干面粉"
      },
      {
        type: "text",
        html: `
        BUFF：玩家免疫寒冷和冰冻。</br>
        每次攻击有40%的概率为目标增加2点冰冻值。</br>
        BUFF持续时间：360s。
        `
      },
      {
        type: "text",
        html: `
        一个小麦精华可以磨成8份<strong>冻干面粉</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>冻干面粉</strong>调过味的料理会带有炒面粉前缀。
        `
      }
    ]
  },
  honor_rice_prime: {
    title: "水稻精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_rice_prime.png",
        alt: "水稻精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每秒回复0.4饱食度，</br>
        并且提升200%工作效率。</br>
        BUFF持续时间：480s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>水稻精华</strong>可以使用8次。
        `
      }
    ]
  },
  spice_honor_rice_prime: {
    title: "米酒糟",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_rice_prime.png",
        alt: "米酒糟"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每秒回复0.4饱食度，</br>
        并且提升200%工作效率。</br>
        BUFF持续时间：480s。
        `
      },
      {
        type: "text",
        html: `
        一个水稻精华可以磨成12份<strong>米酒糟</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>米酒糟</strong>调过味的料理会带有米酒前缀。
        `
      }
    ]
  },
  honor_goldenlanternfruit_prime: {
    title: "金灯果精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_prime.png",
        alt: "金灯果精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家持续发光，发光范围逐渐减小。</br>
        若持续2s未移动，且不在冬天，且附近半径范围2格石墙内不存在萤火虫，则会吸引萤火虫倒身边。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>金灯果精华</strong>可以使用10次。
        `
      }
    ]
  },
  spice_honor_goldenlanternfruit_prime: {
    title: "金灯果酱",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_goldenlanternfruit_prime.png",
        alt: "金灯果酱"
      },
      {
        type: "text",
        html: `
        BUFF：玩家持续发光，发光范围逐渐减小。</br>
        若持续2s未移动，且不在冬天，且附近半径范围2格石墙内不存在萤火虫，则会吸引萤火虫倒身边。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个金灯果精华可以磨成16份<strong>金灯果酱</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>金灯果酱</strong>调过味的料理会带有金灯果酱前缀。
        `
      }
    ]
  },
  honor_hamimelon_prime: {
    title: "哈密瓜精华",
    blocks: [
      {
        type: "image",
        src: "img/honor_hamimelon_prime.png",
        alt: "哈密瓜精华"
      },
      {
        type: "text",
        html: `
        BUFF：为玩家提供可吸收100点伤害的护盾。</br>
        然后每6s护盾增长20点，120s后停止增长。</br>
        护盾于停止增长后的240s消失。</br>
        BUFF持续时间：120s+240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>哈密瓜精华</strong>可以使用5次。
        `
      }
    ]
  },
  spice_honor_hamimelon_prime: {
    title: "哈密瓜脯",
    blocks: [
      {
        type: "image",
        src: "img/spice_honor_hamimelon_prime.png",
        alt: "哈密瓜脯"
      },
      {
        type: "text",
        html: `
        BUFF：为玩家提供可吸收100点伤害的护盾。</br>
        然后每6s护盾增长20点，120s后停止增长。</br>
        护盾于停止增长后的240s消失。</br>
        BUFF持续时间：120s+240s。
        `
      },
      {
        type: "text",
        html: `
        一个哈密瓜精华可以磨成8份<strong>哈密瓜脯</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>哈密瓜脯</strong>调过味的料理会带有哈密瓜脯前缀。
        `
      }
    ]
  },
  terror_blueberry_prime: {
    title: "蓝莓精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_blueberry_prime.png",
        alt: "蓝莓精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家可以通过移动键【↑】【↓】自由调节自身潮湿度且一旦玩家调节了潮湿度，在buff持续时间内潮湿度不会改变。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>蓝莓精华</strong>可以使用6次。
        `
      }
    ]
  },
  spice_terror_blueberry_prime: {
    title: "蓝莓果酱",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_blueberry_prime.png",
        alt: "蓝莓果酱"
      },
      {
        type: "text",
        html: `
        BUFF：玩家可以通过移动键【↑】【↓】自由调节自身潮湿度且一旦玩家调节了潮湿度，在buff持续时间内潮湿度不会改变。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个蓝莓精华可以磨成10份<strong>蓝莓果酱</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>蓝莓果酱</strong>调过味的料理会带有蓝莓酱前缀。
        `
      }
    ]
  },
  terror_ginger_prime: {
    title: "洋姜精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_ginger_prime.png",
        alt: "洋姜精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家获得大厨沃利的能力，且能将地皮（菜度）木头（肉度）作为食材烹饪。</br>
        BUFF持续时间：360s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>洋姜精华</strong>可以使用5次。
        `
      }
    ]
  },
  spice_terror_ginger_prime: {
    title: "姜粉",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_ginger_prime.png",
        alt: "姜粉"
      },
      {
        type: "text",
        html: `
        BUFF：玩家获得大厨沃利的能力，且能将地皮（菜度）木头（肉度）作为食材烹饪。</br>
        BUFF持续时间：360s。
        `
      },
      {
        type: "text",
        html: `
        一个洋姜精华可以磨成8份<strong>姜粉</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>姜粉</strong>调过味的料理会带有姜粉前缀。
        `
      }
    ]
  },
  terror_snakeskinfruit_prime: {
    title: "蛇皮果精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_snakeskinfruit_prime.png",
        alt: "蛇皮果精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家获得薇洛火女掌控火焰的能力。</br>
        玩家每次攻击时有30%的概率向面朝方向劈出一道火焰，对火焰路径上的生物立刻造成5点伤害并点燃，</br>
        火焰的路径终点会发生爆炸，对范围内生物立刻造成60点伤害，</br>
        四溅的火花会对落点范围内的生物造成10点伤害。</br>
        玩家免疫火焰伤害和过热。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>蛇皮果精华</strong>可以使用3次。
        `
      }
    ]
  },
  spice_terror_snakeskinfruit_prime: {
    title: "蛇皮果酱",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_snakeskinfruit_prime.png",
        alt: "蛇皮果酱"
      },
      {
        type: "text",
        html: `
        BUFF：玩家获得薇洛火女掌控火焰的能力。</br>
        玩家每次攻击时有30%的概率向面朝方向劈出一道火焰，对火焰路径上的生物立刻造成5点伤害并点燃，</br>
        火焰的路径终点会发生爆炸，对范围内生物立刻造成60点伤害，</br>
        四溅的火花会对落点范围内的生物造成10点伤害。</br>
        玩家免疫火焰伤害和过热。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个蛇皮果精华可以磨成6份<strong>蛇皮果酱</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>蛇皮果酱</strong>调过味的料理会带有蛇皮果酱前缀。
        `
      }
    ]
  },
  terror_coffee_prime: {
    title: "咖啡精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_coffee_prime.png",
        alt: "咖啡精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家移速提升50%，并且提升100%部分工作动作和攻击动作速度。</br>
        玩家抵御睡眠和由于困倦引起的减速。</br>
        BUFF持续时间：480s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>咖啡精华</strong>可以使用6次。
        `
      }
    ]
  },
  spice_terror_coffee_prime: {
    title: "咖啡粉",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_coffee_prime.png",
        alt: "咖啡粉"
      },
      {
        type: "text",
        html: `
        BUFF：玩家移速提升50%，并且提升100%部分工作动作和攻击动作速度。</br>
        玩家抵御睡眠和由于困倦引起的减速。</br>
        BUFF持续时间：480s。
        `
      },
      {
        type: "text",
        html: `
        一个咖啡精华可以磨成10份<strong>咖啡粉</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>咖啡粉</strong>调过味的料理会带有咖啡粉前缀。
        `
      }
    ]
  },
  terror_passionfruit_prime: {
    title: "百香果精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_passionfruit_prime.png",
        alt: ""
      },
      {
        type: "text",
        html: `
        BUFF：赋予玩家读书的能力，同时玩家获得3个研究点。</br>
        具有研究点的玩家可以通过右键可制作物品进行研究。</br>
        可解锁配方的物品会消耗1个研究点。</br>
        不可解锁配方的物品会消耗6个研究点。</br>
        研究后可永久解锁物品的配方。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>百香果精华</strong>可以使用10次。
        `
      }
    ]
  },
  spice_terror_passionfruit_prime: {
    title: "百香果露",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_passionfruit_prime.png",
        alt: "百香果露"
      },
      {
        type: "text",
        html: `
        BUFF：赋予玩家读书的能力，同时玩家获得3个研究点。</br>
        具有研究点的玩家可以通过右键可制作物品进行研究。</br>
        可解锁配方的物品会消耗1个研究点。</br>
        不可解锁配方的物品会消耗6个研究点。</br>
        研究后可永久解锁物品的配方。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个百香果精华可以磨成16份<strong>百香果露</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>百香果露</strong>调过味的料理会带有百香果露前缀。
        `
      }
    ]
  },
  terror_hawthorn_prime: {
    title: "",
    blocks: [
      {
        type: "image",
        src: "img/terror_hawthorn_prime.png",
        alt: "山楂精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家食用食物对三维的增益提升50%。</br>
        BUFF持续时间：600s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>山楂精华</strong>可以使用8次。
        `
      }
    ]
  },
  spice_terror_hawthorn_prime: {
    title: "山楂酱",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_hawthorn_prime.png",
        alt: "山楂酱"
      },
      {
        type: "text",
        html: `
        BUFF：玩家食用食物对三维的增益提升50%。</br>
        BUFF持续时间：600s。
        `
      },
      {
        type: "text",
        html: `
        一个山楂精华可以磨成12份<strong>山楂酱</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>山楂酱</strong>调过味的料理会带有山楂酱前缀。
        `
      }
    ]
  },
  terror_litchi_prime: {
    title: "荔枝精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_litchi_prime.png",
        alt: "荔枝精华"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每累计攻击3次后，下次攻击会触发重击，对面前圆形范围内造成AOE伤害，伤害翻倍。</br>
        若下次攻击为重击且手持近战武器，则攻击者会跳跃至目标上方进行攻击，最远跳跃16单位长度（墙点）</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>荔枝精华</strong>可以使用3次。
        `
      }
    ]
  },
  spice_terror_litchi_prime: {
    title: "荔枝脯",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_litchi_prime.png",
        alt: "荔枝脯"
      },
      {
        type: "text",
        html: `
        BUFF：玩家每累计攻击3次后，下次攻击会触发重击，对面前圆形范围内造成AOE伤害，伤害翻倍。</br>
        若下次攻击为重击且手持近战武器，则攻击者会跳跃至目标上方进行攻击，最远跳跃16单位长度（墙点）</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个荔枝精华可以磨成6份<strong>荔枝脯</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>荔枝脯</strong>调过味的料理会带有荔枝脯前缀。
        `
      }
    ]
  },
  terror_lemon_prime: {
    title: "柠檬精华",
    blocks: [
      {
        type: "image",
        src: "img/terror_lemon_prime.png",
        alt: "柠檬精华"
      },
      {
        type: "text",
        html: `
        BUFF：持续回复玩家身上所有物品的新鲜度。</br>
        玩家不与任何物品碰撞，移速增加15%，期间玩家持续隐身，不会被任何单位主动攻击，但攻击目标后会暴露6s视野，期间会被正常攻击。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个<strong>柠檬精华</strong>可以使用10次。
        `
      }
    ]
  },
  spice_terror_lemon_prime: {
    title: "柠檬汁",
    blocks: [
      {
        type: "image",
        src: "img/spice_terror_lemon_prime.png",
        alt: "柠檬汁"
      },
      {
        type: "text",
        html: `
        BUFF：持续回复玩家身上所有物品的新鲜度。</br>
        玩家不与任何物品碰撞，移速增加15%，期间玩家持续隐身，不会被任何单位主动攻击，但攻击目标后会暴露6s视野，期间会被正常攻击。</br>
        BUFF持续时间：240s。
        `
      },
      {
        type: "text",
        html: `
        一个柠檬精华可以磨成16份<strong>柠檬汁</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>柠檬汁</strong>调过味的料理会带有柠檬汁前缀。
        `
      }
    ]
  },

  // ------------- 地形与建筑 -------------

  honor_coconut_planted: {
    title: "倭椰树",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_planted.png",
        alt: "倭椰树"
      },
      {
        type: "text",
        html: `
        <strong>倭椰树</strong>为一次性采摘物品。</br>
        采摘<strong>倭椰树</strong>时会有一个椰子掉落的动画，被椰子砸中时会造成3点伤害。</br>
        采摘<strong>倭椰树</strong>概率掉落如下物品：</br>
        <table>
          <thead>
            <tr>
              <th>物品</th>
              <th>概率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>椰子</td>
              <td>42.11%</td>
            </tr>
            <tr>
              <td>椰肉</td>
              <td>21.05%</td>
            </tr>
            <tr>
              <td>椰汁</td>
              <td>5.26%</td>
            </tr>
            <tr>
              <td>椰子种子</td>
              <td>10.53%</td>
            </tr>
            <tr>
              <td>采下的芦苇</td>
              <td>21.05%</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        <strong>倭椰树</strong>有两种生成方式：</br>
        聚集生成：</br>
        在下列群系中有概率生成<strong>倭椰树</strong>模板（HonorCoconut），在模板中会使用岩石海滩地皮。</br>
        <ul>
          <li>如果生成在混合地群系时会生成2-3个模板；</li>
          <li>如果生成在海象平原群系时会生成1个模板；</li>
          <li>如果生成在鼹鼠桦树林群系时会生成2个模板。</li>
        </ul>
        该模板的生成物品密度为 0.3。</br>
        具体生成内容如下：</br>
        <table>
          <thead>
            <tr>
              <th>物品</th>
              <th>概率/个数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>倭椰树</strong></td>
              <td>13-17个</td>
            </tr>
            <tr>
              <td>仙人掌（恶地）</td>
              <td>17.38%</td>
            </tr>
            <tr>
              <td>仙人掌（绿洲沙漠）</td>
              <td>8.70%</td>
            </tr>
            <tr>
              <td>多肉植物</td>
              <td>26.09%</td>
            </tr>
            <tr>
              <td>硝矿岩石</td>
              <td>8.70%</td>
            </tr>
            <tr>
              <td>金矿岩石</td>
              <td>4.35%</td>
            </tr>
            <tr>
              <td>落石岩石</td>
              <td>8.70%</td>
            </tr>
            <tr>
              <td>燧石</td>
              <td>8.70%</td>
            </tr>
            <tr>
              <td>石头</td>
              <td>17.38%</td>
            </tr>
          </tbody>
        </table>
        分散生成：</br>
        只要有陨石矿区区块（Rocky）以及矿区背景区块（BGRocky），<strong>倭椰树</strong>就会有概率生成在这些区块的地形中。</br>
        包含陨石矿区区块的生物群系有：混合地群系、繁花陨石区群系；包含矿区背景区块的生物群系有：蜘蛛矿区群系、海象平原群系、大矿区群系。</br>
        陨石矿区区块生成<strong>倭椰树</strong>的概率为：1.81%（仅加入丰耘秘境时）；</br>
        矿区背景区块生成<strong>倭椰树</strong>的概率为：3.02%（仅加入丰耘秘境时）。
        `
      }
    ]
  },
  terror_coffee_planted: {
    title: "咖啡枝",
    blocks: [
      {
        type: "image",
        src: "img/terror_coffee_planted.png",
        alt: "咖啡枝"
      },
      {
        type: "text",
        html: `
        <strong>咖啡枝</strong>为一次性采摘物品。</br>
        采摘<strong>咖啡枝</strong>概率掉落如下物品：</br>
        <table>
          <thead>
            <tr>
              <th>物品</th>
              <th>概率</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>咖啡</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>咖啡种子</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>树枝</td>
              <td>40%</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        采摘<strong>咖啡枝</strong>会提供一个加速的BUFF，采摘的瞬间会将速度提升到3倍，持续10秒，并且以特定的方式逐渐减速。</br>
        减速计算方式：每0.2秒进行一次计算，新的速度 = 1 + (当前速度 - 1) x 0.9 。</br>
        重复采摘只会将速度重置为原来的3倍，而不是速度提高后的三倍。
        `
      },
      {
        type: "text",
        html: `
        <strong>咖啡枝</strong>有两种生成方式：</br>
        聚集生成：</br>
        在下列群系中有概率生成<strong>咖啡枝</strong>模板（TerrorCoffee），在模板中会使用泥泞地皮。</br>
        <ul>
          <li>如果生成在泥泞世界群系时会生成2-3个模板；</li>
          <li>如果生成在泥泞洞穴群系时会生成1个模板；</li>
          <li>如果生成在泥泞光照区群系时会生成2个模板；</li>
          <li>如果生成在泥坑区群系时会生成1个模板。</li>
        </ul>
        该模板的生成物品密度为 0.2。</br>
        具体生成内容如下：</br>
        <table>
          <thead>
            <tr>
              <th>物品</th>
              <th>概率/个数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>咖啡枝</strong></td>
              <td>13-17个</td>
            </tr>
            <tr>
              <td>荧光花</td>
              <td>41.67%</td>
            </tr>
            <tr>
              <td>蕨类植物</td>
              <td>16.67%</td>
            </tr>
            <tr>
              <td>红蘑菇</td>
              <td>8.33%</td>
            </tr>
            <tr>
              <td>石笋</td>
              <td>8.33%</td>
            </tr>
            <tr>
              <td>草</td>
              <td>25%</td>
            </tr>
          </tbody>
        </table>
        分散生成：</br>
        只要有光源植物区块（LightPlantField）、蠕虫植物区块（WormPlantField）、泥泞兔人区块（MudWithRabbit）、泥泞背景区块（BGMud）、以及泥泞背景模板区块（BGMudRoom），<strong>咖啡枝</strong>就会有概率生成在这些区块的地形中。</br>
        包含光源植物区块的生物群系有：泥泞世界群系、泥泞光照区群系；</br>
        包含蠕虫植物区块的生物群系有：泥泞世界群系、泥泞洞穴群系、泥泞光照区群系、泥泞光照区群系；</br>
        包含泥泞兔人区块的生物群系有：泥泞世界群系、泥泞洞穴群系；</br>
        包含泥泞背景区块的生物群系有：泥泞世界群系；</br>
        包含泥泞背景模板区块的生物群系有：泥泞世界群系。</br>
        光源植物区块生成<strong>咖啡枝</strong>的概率为：4.10%（仅加入丰耘秘境时）；</br>
        蠕虫植物区块生成<strong>咖啡枝</strong>的概率为：7.57%（仅加入丰耘秘境时）；</br>
        泥泞兔人区块生成<strong>咖啡枝</strong>的概率为：3.12%（仅加入丰耘秘境时）；</br>
        泥泞背景区块生成<strong>咖啡枝</strong>的概率为：2.30%（仅加入丰耘秘境时）；</br>
        泥泞背景模板区块生成<strong>咖啡枝</strong>的概率为：2.30%（仅加入丰耘秘境时）。
        `
      }
    ]
  },
  hmr_cherry_flowerpot: {
    title: "樱花盆栽",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_flowerpot.png",
        alt: "樱花盆栽"
      },
      {
        type: "text",
        html: `
        一次可以制作3个<strong>樱花盆栽</strong>；拿起<strong>樱花盆栽</strong>对需要移植的物品左键可以移植物品到<strong>樱花盆栽</strong>上，再拿起<strong>樱花盆栽</strong>右键即可摆放。
        `
      },
      {
        type: "text",
        html: `
        <strong>樱花盆栽</strong>可以移植草、树苗、农作物、巨型农作物等。
        `
      }
    ]
  },
  hmr_cherry_flowerpot_large: {
    title: "樱花盆景",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_flowerpot_large.png",
        alt: "樱花盆景"
      },
      {
        type: "text",
        html: `
        一次可以制作1个<strong>樱花盆景</strong>；拿起<strong>樱花盆景</strong>对需要移植的物品左键可以移植物品到<strong>樱花盆景</strong>上，再拿起<strong>樱花盆景</strong>右键即可摆放。
        `
      },
      {
        type: "text",
        html: `
        <strong>樱花盆景</strong>不仅可以移植草、树苗、农作物、巨型农作物等樱花盆栽可以移植的物品，还可以移植浆果等物品。
        `
      }
    ]
  },
  hmr_cherry_decor_pot: {
    title: "樱绒球盆栽",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_decor_pot.png",
        alt: "樱绒球盆栽"
      },
      {
        type: "text",
        html: `
        一次可以制作8个<strong>樱绒球盆栽</strong>，这是一种更小巧可爱用移植的樱草做装饰的方法。
        `
      }
    ]
  },
  hmr_cherry_table: {
    title: "樱岩桌子",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_table.png",
        alt: "樱岩桌子"
      },
      {
        type: "text",
        html: `
        一个<strong>樱岩桌子</strong>上可以摆放5格物品进行展示。
        `
      }
    ]
  },
  hmr_cherry_lantern_post: {
    title: "樱花灯柱套件",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_lantern_post.png",
        alt: "樱花灯柱套件"
      },
      {
        type: "text",
        html: `
        <strong>樱花灯柱套件</strong>内自带一个粉晶石，并且<strong>樱花灯柱套件</strong>放下后的樱花灯柱可以使用用于照明的材料，比如：蘑菇孢子、荧光果、启迪碎片等。
        `
      }
    ]
  },
  hmr_cherry_island: {
    title: "樱海岛",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_island.png",
        alt: "樱海岛"
      },
      {
        type: "text",
        html: `
        <strong>樱海岛</strong>由一个主岛和一个副岛一起生成在海面上，主岛占用35x29个地皮，副岛占用9x8个地皮，整个地形需要39x39的空海域生成。</br>
        <strong>樱海岛</strong>主岛地皮由樱花地皮，樱草地皮和樱花小径地皮组成。</br>
        <strong>樱海岛</strong>上生态由樱草、粉晶石矿、樱花树和樱簇团组成。</br>
        <strong>樱海岛</strong>副岛使用樱海秘境地皮。
        `
      },
      {
        type: "text",
        html: `
        <strong>樱海岛</strong>上不生成可以翻的脚印，不判定为主岛，无骚扰事件。
        `
      },
      {
        type: "text",
        html: `
        <strong>樱海岛</strong>生态生成如下：
        <ul>
          <li>樱花树：至多50棵：
          <ul>
            <li>第一阶段：15~25棵；</li>
            <li>第二阶段：15~25棵；</li>
            <li>第三阶段：10~20棵；</li>
            <li>第四阶段：10~20棵；</li>
          </ul>
          </li>
          <li>樱草：50~70棵；</li>
          <li>粉晶石矿：至多50个：
          <ul>
            <li>第一阶段：20~30个；</li>
            <li>第二阶段：5~15个；</li>
            <li>第三阶段：10~20个；</li>
          </ul>
          </li>
          <li>樱簇团：20~30个。</li>
        </ul>
        `
      }
    ]
  },
  hmr_cherry_grass: {
    title: "樱草",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_grass.png",
        alt: "樱草"
      },
      {
        type: "text",
        html: `
        施肥后的樱草根可以收获5次，种植的樱草芯可以一直收获，收获时会获得如下物品（概率之间独立计算）：
        <ul>
          <li>第一个樱绒球：100%；</li>
          <li>第二个樱绒球：50%；</li>
          <li>第三个樱绒球：10%；</li>
          <li>采下的草：50%；</li>
          <li>樱草芯：5%。</li>
        </ul>
        `
      }
    ]
  },
  hmr_cherry_rock: {
    title: "粉晶石矿",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_rock.png",
        alt: "粉晶石矿"
      },
      {
        type: "text",
        html: `
        <strong>粉晶石矿</strong>有三个生长阶段，每个阶段都可以开采，最小的阶段开采后会消失。</br>
        开采第一阶段<strong>粉晶石矿</strong>掉落概率（如果数值大于100%，则视为固定数量 + 额外概率）：
        <ul>
          <li>石头：100%；</li>
        </ul>
        开采第二阶段<strong>粉晶石矿</strong>掉落概率：
        <ul>
          <li>石头：200%；</li>
          <li>粉晶石：50%；</li>
        </ul>
        开采第三阶段<strong>粉晶石矿</strong>掉落概率：
        <ul>
          <li>石头：200%；</li>
          <li>粉晶石：250%；</li>
          <li>冰：120%。</li>
        </ul>
        `
      }
    ]
  },
  hmr_cherry_tree: {
    title: "樱花树",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_tree.png",
        alt: "樱花树"
      },
      {
        type: "text",
        html: `
        <strong>樱花树</strong>有四个生长阶段，每个阶段都可以砍伐，只有最后一个阶段可以采摘。</br>
        挖掘第一阶段<strong>樱花树</strong>掉落概率（如果数值大于100%，则视为固定数量 + 额外概率）：
        <ul>
          <li>树枝：100%；</li>
        </ul>
        砍伐第二阶段<strong>樱花树</strong>掉落概率：
        <ul>
          <li>木头：250%；</li>
        </ul>
        砍伐第三阶段<strong>樱花树</strong>掉落概率：
        <ul>
          <li>樱花树花：320%；</li>
          <li>木头：350%；</li>
        </ul>
        砍伐第四阶段<strong>樱花树</strong>掉落概率：
        <ul>
          <li>樱花树种子：150%；</li>
          <li>木头：450%；</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        <strong>樱花树</strong>第三个阶段和第四个阶段都有可以采摘的时候，在采摘的时候会有额外掉落和触发额外事件。</br>
        第三阶段：砍伐时额外掉落一个樱花树花；采摘时掉落1~3个樱花树花，并且会召唤一个以玩家为目标敌对的坎普斯；</br>
        第四阶段：砍伐时额外掉落一个樱花树种子（60%）或者一个樱红果（40%），采摘时会掉落树上生成的对应樱红果的数量。
        `
      },
      {
        type: "text",
        html: `
        樱花树花入锅时可以提供0.5单位甜味剂。</br>
        樱红果入锅时可以提供0.5单位甜味剂。</br>
        `
      }
    ]
  },

  

  // ------------- 农作物 -------------

  farm_plant_honor_coconut: {
    title: "椰子",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_coconut.png",
        alt: "椰子"
      },
      {
        type: "image",
        src: "img/honor_coconut_seeds.png",
        alt: "椰子种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：编织种子；</br>
        肥料使用：催长剂+2，堆肥+2，粪肥-4；</br>
        季节：春、秋、冬；</br>
        水分要求：低；</br>
        可收获：椰子、椰肉、椰汁、椰子种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>巨大椰壳头盔：5%；</li>
          <li>植物纤维：30%。</li>
        </ul>
        `
      }
    ]
  },
  farm_plant_honor_tea: {
    title: "茶丛",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_tea.png",
        alt: "茶丛"
      },
      {
        type: "image",
        src: "img/honor_tea_seeds.png",
        alt: "茶丛种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：叶包种子；</br>
        肥料使用：催长剂+4，堆肥-8，粪肥+4；</br>
        季节：春、秋；</br>
        水分要求：低；</br>
        可收获：茶丛、大红袍、茉莉花、茶丛种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>大红袍：20%；</li>
          <li>茉莉花：40%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+0，精神值+15，生命值+5；</br>
        煮熟后食用：饱食度+10，精神值+20，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位甜味剂和1单位蔬菜度。
        `
      }
    ]
  },
  farm_plant_honor_rice: {
    title: "水稻",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_rice.png",
        alt: "水稻"
      },
      {
        type: "image",
        src: "img/honor_rice_seeds.png",
        alt: "水稻种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：带壳种子；</br>
        肥料使用：催长剂+2，堆肥-4，粪肥+2；</br>
        季节：春、夏；</br>
        水分要求：低；</br>
        可收获：水稻、水稻种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>杂交水稻种子：5%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+10，精神值+2，生命值+2；</br>
        煮熟后食用：饱食度+35，精神值+5，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1.5单位蔬菜度，煮熟后为2单位蔬菜度。
        `
      }
    ]
  },
  farm_plant_honor_wheat: {
    title: "小麦",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_wheat.png",
        alt: "小麦"
      },
      {
        type: "image",
        src: "img/honor_wheat_seeds.png",
        alt: "小麦种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：尖尖种子；</br>
        肥料使用：催长剂-2，堆肥+4，粪肥-2；</br>
        季节：春、夏、秋；</br>
        水分要求：低；</br>
        可收获：小麦、小麦种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>辉煌炽烈吹箭：5%；</li>
          <li>辉煌寒冰吹箭：5%；</li>
          <li>辉煌治愈吹箭：2.5%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+10，精神值+0，生命值+5；</br>
        烤熟后食用：饱食度+20，精神值+10，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1.5单位蔬菜度，烤熟后为2单位蔬菜度。
        `
      }
    ]
  },
  farm_plant_honor_goldenlanternfruit: {
    title: "金灯果",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_goldenlanternfruit.png",
        alt: "金灯果"
      },
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_seeds.png",
        alt: "金灯果种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：发光种子；</br>
        肥料使用：催长剂-2，堆肥-2，粪肥+4；</br>
        季节：春、夏、秋；</br>
        水分要求：低；</br>
        可收获：金灯果、金灯果种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>金灯果皮：30%；</li>
          <li>黄宝石：5%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+5，精神值+10，生命值+0；</br>
        烤熟后食用：饱食度+7，精神值+15，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位水果度和1单位魔法度，烤熟后仅提供2单位魔法度。
        `
      }
    ]
  },
  farm_plant_honor_aloe: {
    title: "芦荟",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_aloe.png",
        alt: "芦荟"
      },
      {
        type: "image",
        src: "img/honor_aloe_seeds.png",
        alt: "芦荟种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：翡翠种子；</br>
        肥料使用：催长剂-8，堆肥+4，粪肥+4；</br>
        季节：秋、冬；</br>
        水分要求：低；</br>
        可收获：芦荟、芦荟种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：40%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+2，精神值-10，生命值+20；</br>
        烤熟后食用：饱食度+10，精神值+5，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位肉度和1单位蔬菜度，烤熟后仅提供1单位肉度。
        `
      }
    ]
  },
  farm_plant_honor_hamimelon: {
    title: "哈密瓜",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_hamimelon.png",
        alt: "哈密瓜"
      },
      {
        type: "image",
        src: "img/honor_hamimelon_seeds.png",
        alt: "哈密瓜种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：玛瑙种子；</br>
        肥料使用：催长剂+4，堆肥+4，粪肥-8；</br>
        季节：夏、秋；</br>
        水分要求：低；</br>
        可收获：哈密瓜、哈密瓜种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：15%；</li>
          <li>绿宝石：5%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+20，精神值+30，生命值+5；</br>
        烤熟后食用：饱食度+30，精神值+5，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位蔬菜度和1单位水果度，烤熟后仅提供1.5单位蔬菜度。
        `
      }
    ]
  },
  farm_plant_honor_nut: {
    title: "坚果",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_honor_nut.png",
        alt: "坚果"
      },
      {
        type: "image",
        src: "img/honor_nut_seeds.png",
        alt: "坚果种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：多棱种子；</br>
        肥料使用：催长剂-2，堆肥-2，粪肥+4；</br>
        季节：春、秋、冬；</br>
        水分要求：低；</br>
        可收获：核桃、巴旦木、腰果、夏威夷果、坚果种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>自然辉煌：10%；</li>
          <li>巴旦木：50%；</li>
          <li>腰果：30%；</li>
          <li>夏威夷果：10%。</li>
        </ul>
        `
      }
    ]
  },
  farm_plant_terror_snakeskinfruit: {
    title: "蛇皮果",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_snakeskinfruit.png",
        alt: "蛇皮果"
      },
      {
        type: "image",
        src: "img/terror_snakeskinfruit_seeds.png",
        alt: "蛇皮果种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：落叶种子；</br>
        肥料使用：催长剂+4，堆肥-2，粪肥-2；</br>
        季节：夏、秋、冬；</br>
        水分要求：低；</br>
        可收获：蛇皮果、蛇皮果种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>鳞片：8%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+20，精神值-10，生命值+0；</br>
        烤熟后食用：饱食度+30，精神值-5，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位怪物度，1单位水果度和1单位肉度，烤熟后仅提供1.5单位肉度和1单位水果度。
        `
      }
    ]
  },
  farm_plant_terror_blueberry: {
    title: "蓝莓",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_blueberry.png",
        alt: "蓝莓"
      },
      {
        type: "image",
        src: "img/terror_blueberry_seeds.png",
        alt: "蓝莓种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：蓝水晶种子；</br>
        肥料使用：催长剂+2，堆肥-4，粪肥+2；</br>
        季节：夏、秋、冬；</br>
        水分要求：低；</br>
        可收获：蓝莓、蓝莓种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>蓝莓帽：10%；</li>
          <li>恐怖粘液：5%；</li>
          <li>自然凶险：3%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+5，精神值+8，生命值+0；</br>
        烤熟后食用：饱食度+10，精神值+15，生命值+2。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位甜味剂和1单位水果度，烤熟后仅提供1单位水果度。
        `
      }
    ]
  },
  farm_plant_terror_ginger: {
    title: "洋姜",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_ginger.png",
        alt: "洋姜"
      },
      {
        type: "image",
        src: "img/terror_ginger_seeds.png",
        alt: "洋姜种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：脏脏种子；</br>
        肥料使用：催长剂-4，堆肥+2，粪肥+2；</br>
        季节：秋、冬；</br>
        水分要求：低；</br>
        可收获：洋姜、洋姜种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>橙宝石：10%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+1，精神值-15，生命值+5；</br>
        烤熟后食用：饱食度+5，精神值+10，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位怪物度和1单位蔬菜度，烤熟后仅提供1单位蔬菜度。
        `
      }
    ]
  },
  farm_plant_terror_lemon: {
    title: "柠檬",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_lemon.png",
        alt: "柠檬"
      },
      {
        type: "image",
        src: "img/terror_lemon_seeds.png",
        alt: "柠檬种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：溜溜种子；</br>
        肥料使用：催长剂+2，堆肥-4，粪肥+2；</br>
        季节：春、夏、秋；</br>
        水分要求：低；</br>
        可收获：柠檬、柠檬种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>橙宝石：8%；</li>
          <li>柠檬炸弹：10%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+5，精神值-10，生命值-10；</br>
        烤熟后食用：饱食度+10，精神值+0，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位水果度，烤熟后仅提供1.5单位魔法度。
        `
      }
    ]
  },
  farm_plant_terror_litchi: {
    title: "荔枝",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_litchi.png",
        alt: "荔枝"
      },
      {
        type: "image",
        src: "img/terror_litchi_seeds.png",
        alt: "荔枝种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：月牙种子；</br>
        肥料使用：催长剂-4，堆肥+8，粪肥-4；</br>
        季节：春、夏、秋；</br>
        水分要求：低；</br>
        可收获：荔枝、荔枝种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>恐怖粘液：15%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+5，精神值+15，生命值+2；</br>
        烤熟后食用：饱食度+2，精神值+5，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位魔法度和1单位水果度，烤熟后仅提供1.5单位水果度。
        `
      }
    ]
  },
  farm_plant_terror_coffee: {
    title: "咖啡",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_coffee.png",
        alt: "咖啡"
      },
      {
        type: "image",
        src: "img/terror_coffee_seeds.png",
        alt: "咖啡种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：黏黏种子；</br>
        肥料使用：催长剂-4，堆肥+2，粪肥+2；</br>
        季节：春、秋、冬；</br>
        水分要求：低；</br>
        可收获：咖啡、咖啡种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>恐怖粘液：25%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+2，精神值+5，生命值+0；</br>
        烤熟后食用：饱食度+5，精神值+40，生命值+1。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位蔬菜度，烤熟后提供1.5单位魔法度。
        `
      }
    ]
  },
  farm_plant_terror_hawthorn: {
    title: "山楂",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_hawthorn.png",
        alt: "山楂"
      },
      {
        type: "image",
        src: "img/terror_hawthorn_seeds.png",
        alt: "山楂种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：彤彤种子；</br>
        肥料使用：催长剂+8，堆肥-4，粪肥-4；</br>
        季节：秋、冬；</br>
        水分要求：低；</br>
        可收获：山楂、山楂种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>红宝石：15%；</li>
          <li>恐怖粘液：15%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度-5，精神值-5，生命值+20；</br>
        烤熟后食用：饱食度-10，精神值+0，生命值+30。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位水果度，烤熟后提供1.5单位水果度。
        `
      }
    ]
  },
  farm_plant_terror_passionfruit: {
    title: "百香果",
    blocks: [
      {
        type: "image",
        src: "img/farm_plant_terror_passionfruit.png",
        alt: "百香果"
      },
      {
        type: "image",
        src: "img/terror_passionfruit_seeds.png",
        alt: "百香果种子"
      },
      {
        type: "text",
        html: `
        未知种子名称：魔力种子；</br>
        肥料使用：催长剂-4，堆肥-4，粪肥+8；</br>
        季节：春、冬；</br>
        水分要求：低；</br>
        可收获：百香果、百香果种子；</br>
        巨大化特殊掉落：
        <ul>
          <li>恐怖粘液：80%。</li>
        </ul>
        `
      },
      {
        type: "text",
        html: `
        食用：饱食度+10，精神值+30，生命值+5；</br>
        烤熟后食用：饱食度+15，精神值+10，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位魔法度和1单位水果度，烤熟后仅提供1.5单位水果度。
        `
      }
    ]
  },

  // ------------- 材料 -------------

  honor_coconut_meat: {
    title: "椰肉",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_meat.png",
        alt: "椰肉"
      },
      {
        type: "text",
        html: `
        食用：饱食度+10，精神值+10，生命值+0；</br>
        烤熟后食用：饱食度+10，精神值-2，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位水果度和1单位肉度，烤熟后仅提供1.5单位肉度。
        `
      }
    ]
  },
  honor_coconut_juice: {
    title: "椰汁",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_juice.png",
        alt: "椰汁"
      },
      {
        type: "text",
        html: `
        食用：饱食度+0，精神值+20，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位甜味剂和1单位水果度。
        `
      }
    ]
  },
  honor_dhp: {
    title: "大红袍",
    blocks: [
      {
        type: "image",
        src: "img/honor_dhp.png",
        alt: "大红袍"
      },
      {
        type: "text",
        html: `
        食用：饱食度+2，精神值+17，生命值+7；</br>
        烤熟后食用：饱食度+15，精神值+30，生命值+15。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位魔法度和1单位蔬菜度，烤熟后仅提供2单位魔法度。
        `
      }
    ]
  },
  honor_jasmine: {
    title: "茉莉花",
    blocks: [
      {
        type: "image",
        src: "img/honor_jasmine.png",
        alt: "茉莉花"
      },
      {
        type: "text",
        html: `
        食用：饱食度+0，精神值+20，生命值+6；</br>
        烤熟后食用：饱食度+10，精神值+50，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位魔法度和1单位水果度，烤熟后仅提供2单位魔法度。
        `
      }
    ]
  },
  honor_blowdart_fire: {
    title: "辉煌炽烈吹箭",
    blocks: [
      {
        type: "image",
        src: "img/honor_blowdart_fire.png",
        alt: "辉煌炽烈吹箭"
      },
      {
        type: "text",
        html: `
        最大使用次数：3;</br>
        伤害：10（并且点燃）;</br>
        速度：30。</br>
        `
      }
    ]
  },
  honor_blowdart_ice: {
    title: "辉煌寒冰吹箭",
    blocks: [
      {
        type: "image",
        src: "img/honor_blowdart_ice.png",
        alt: "辉煌寒冰吹箭"
      },
      {
        type: "text",
        html: `
        最大使用次数：3;</br>
        伤害：1（并施加1点冰冻值）;</br>
        速度：20。</br>
        `
      }
    ]
  },
  honor_blowdart_cure: {
    title: "辉煌治愈吹箭",
    blocks: [
      {
        type: "image",
        src: "img/honor_blowdart_cure.png",
        alt: "辉煌治愈吹箭"
      },
      {
        type: "text",
        html: `
        最大使用次数：3;</br>
        伤害：100（单位）;</br>
        治疗：10（玩家）；</br>
        速度：15；</br>
        复活玩家所需次数：10；
        `
      }
    ]
  },
  honor_nut: {
    title: "核桃",
    blocks: [
      {
        type: "image",
        src: "img/honor_nut.png",
        alt: "核桃"
      },
      {
        type: "text",
        html: `
        食用：饱食度+5，精神值+10，生命值+10；</br>
        烤熟后食用：饱食度+10，精神值+5，生命值+15。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位脂肪度，烤熟后提供1.5单位脂肪度。
        `
      }
    ]
  },
  honor_almond: {
    title: "巴旦木",
    blocks: [
      {
        type: "image",
        src: "img/honor_almond.png",
        alt: "巴旦木"
      },
      {
        type: "text",
        html: `
        食用：饱食度+15，精神值+20，生命值-5；</br>
        烤熟后食用：饱食度+15，精神值+25，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位蔬菜度和1单位脂肪度，烤熟后相同。
        `
      }
    ]
  },
  honor_cashew: {
    title: "腰果",
    blocks: [
      {
        type: "image",
        src: "img/honor_cashew.png",
        alt: "腰果"
      },
      {
        type: "text",
        html: `
        食用：饱食度+20，精神值+10，生命值-5；</br>
        烤熟后食用：饱食度+30，精神值+15，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供0.5单位怪物度，1单位蔬菜度，烤熟后仅提供2单位蔬菜度。
        `
      }
    ]
  },
  honor_macadamia: {
    title: "夏威夷果",
    blocks: [
      {
        type: "image",
        src: "img/honor_macadamia.png",
        alt: "夏威夷果"
      },
      {
        type: "text",
        html: `
        食用：饱食度+20，精神值+10，生命值+3；</br>
        烤熟后食用：饱食度+25，精神值+15，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        入锅时可以提供1单位乳制品，1单位蔬菜度，烤熟后相同。
        `
      }
    ]
  },

  // ------------- 料理 -------------

  honor_wheat_bread: {
    title: "麦香烤面包",
    blocks: [
      {
        type: "image",
        src: "img/honor_wheat_bread.png",
        alt: "麦香烤面包"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）小麦>=2；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：130；</br>
        食用：饱食度+100，精神值+5，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化小麦掉落概率：50%小麦、10%自然辉煌和1%小麦精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_rice_seafood: {
    title: "鲜龙金粟饭",
    blocks: [
      {
        type: "image",
        src: "img/honor_rice_seafood.png",
        alt: "鲜龙金粟饭"
      },
      {
        type: "text",
        html: `
        配方：（煮熟的）水稻>=2，鱼度>=1；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+70，精神值+50，生命值+10。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化水稻掉落概率：50%水稻、10%自然辉煌和1%水稻精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_nut_salted: {
    title: "盐焗珍果仁",
    blocks: [
      {
        type: "image",
        src: "img/honor_nut_salted.png",
        alt: "盐焗珍果仁"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）核桃>=2，盐晶>=1；</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+50，精神值+30，生命值+40。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化坚果掉落概率：30%核桃、10%巴旦木、10%腰果、10%夏威夷果、10%自然辉煌和1%坚果精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_coconut_pudding: {
    title: "椰蓉凝玉膏",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconut_pudding.png",
        alt: "椰蓉凝玉膏"
      },
      {
        type: "text",
        html: `
        配方：椰肉/烤熟的椰子>=2，蛋度>=0.5；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+20，精神值+90，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化椰子掉落概率：50%椰子、10%自然辉煌和1%椰子精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_goldenlanternfruit_cake: {
    title: "金灯糖霜盏",
    blocks: [
      {
        type: "image",
        src: "img/honor_goldenlanternfruit_cake.png",
        alt: "金灯糖霜盏"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）金灯果>=2，甜味剂>=0.5；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+20，精神值+80，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家持续发光；增加巨大化金灯果掉落概率：50%金灯果、10%自然辉煌和1%金灯果精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_tea_drink: {
    title: "清润山茶饮",
    blocks: [
      {
        type: "image",
        src: "img/honor_tea_drink.png",
        alt: "清润山茶饮"
      },
      {
        type: "text",
        html: `
        配方：茶丛/煮熟的茶>=2，甜味剂>=0.5，植物青汁>=1；</br>
        不允许出现的物品：无；</br>
        优先度：130；</br>
        食用：饱食度+0，精神值+100，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家升温持续15秒；增加巨大化茶丛掉落概率：30%茶丛、10%茉莉花、5%大红袍、30%自然辉煌和1%茶丛精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_hamimelon_sorbet: {
    title: "密瓜凝玉沙",
    blocks: [
      {
        type: "image",
        src: "img/honor_hamimelon_sorbet.png",
        alt: "密瓜凝玉沙"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）哈密瓜>=2，甜味剂>=0.5，冰>=1；</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+2，精神值+90，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家降温持续15秒；增加巨大化哈密瓜掉落概率：50%哈密瓜、10%自然辉煌和1%哈密瓜精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  honor_aloe_stick: {
    title: "蜜渍芦荟条",
    blocks: [
      {
        type: "image",
        src: "img/honor_aloe_stick.png",
        alt: "蜜渍芦荟条"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）芦荟>=2，甜味剂>=0.5；</br>
        不允许出现的物品：蛋度；</br>
        优先度：30；</br>
        食用：饱食度+30，精神值-10，生命值+80。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化芦荟掉落概率：30%芦荟、4%芦荟胶、35%自然辉煌和1%芦荟精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_blueberry_sundae: {
    title: "蓝莓圣代",
    blocks: [
      {
        type: "image",
        src: "img/terror_blueberry_sundae.png",
        alt: "蓝莓圣代"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）蓝莓>=2，冰>=0.5，甜味剂>=0.5；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+10，精神值+50，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化蓝莓掉落概率：50%蓝莓、10%恐怖粘液、3%自然凶险和1%蓝莓精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_coffee_mousse: {
    title: "咖啡慕斯",
    blocks: [
      {
        type: "image",
        src: "img/terror_coffee_mousse.png",
        alt: "咖啡慕斯"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）咖啡>=2，冰>=1；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+5，精神值+30，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家移速增加30%；增加巨大化咖啡掉落概率：50%咖啡、10%恐怖粘液和1%咖啡精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_hawthorn_jelly: {
    title: "山楂蜜糕",
    blocks: [
      {
        type: "image",
        src: "img/terror_hawthorn_jelly.png",
        alt: ""
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）山楂>=2，冰>=1，甜味剂>=0.5；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度-10，精神值+50，生命值+50。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化山楂掉落概率：50%山楂、10%恐怖粘液和1%山楂精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_ginger_chickenwings: {
    title: "洋姜鸡翅",
    blocks: [
      {
        type: "image",
        src: "img/terror_ginger_chickenwings.png",
        alt: "洋姜鸡翅"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）洋姜>=2，鸟腿>=1；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+30，精神值+10，生命值+60。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家升温持续5秒；增加巨大化洋姜掉落概率：50%洋姜和1%洋姜精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_snakeskinfruit_kebab: {
    title: "蛇皮果烤串",
    blocks: [
      {
        type: "image",
        src: "img/terror_snakeskinfruit_kebab.png",
        alt: "蛇皮果烤串"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）蛇皮果>=2，肉度>=0.5，树枝>=1；</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+120，精神值+0，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家升温持续15秒；增加巨大化蛇皮果掉落概率：50%蛇皮果和1%蛇皮果精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_lemon_tart: {
    title: "柠檬挞",
    blocks: [
      {
        type: "image",
        src: "img/terror_lemon_tart.png",
        alt: "柠檬挞"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）柠檬>=2，蛋度>=0.5;</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+50，精神值+50，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化柠檬掉落概率：50%柠檬和1%柠檬精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_litchi_sugared: {
    title: "荔枝蜜饯",
    blocks: [
      {
        type: "image",
        src: "img/terror_litchi_sugared.png",
        alt: "荔枝蜜饯"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）荔枝>=2，甜味剂>=0.5;</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+20，精神值+100，生命值+40。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化荔枝掉落概率：10%荔枝、50%恐怖粘液和1%荔枝精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  terror_passionfruit_soda: {
    title: "百香果气泡水",
    blocks: [
      {
        type: "image",
        src: "img/terror_passionfruit_soda.png",
        alt: "百香果气泡水"
      },
      {
        type: "text",
        html: `
        配方：（烤熟的）百香果>=2，冰>=1；</br>
        不允许出现的物品：不可食用物品；</br>
        优先度：30；</br>
        食用：饱食度+2，精神值+80，生命值+0。
        `
      },
      {
        type: "text",
        html: `
        BUFF：增加巨大化百香果掉落概率：50%百香果、5%自然凶险和1%百香果精华；</br>
        BUFF持续时间：240s。
        `
      }
    ]
  },
  hmr_cherry_soda: {
    title: "樱花汽水",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_soda.png",
        alt: "樱花汽水"
      },
      {
        type: "text",
        html: `
        配方：冰x1，植物青汁x1，樱花树花x1，柠檬x1；</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+2，精神值+50，生命值+0。
        `
      }
    ]
  },
  hmr_cherry_litchi_congee: {
    title: "樱荔花粥",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_litchi_congee.png",
        alt: "樱荔花粥"
      },
      {
        type: "text",
        html: `
        配方：樱花树花x1，樱红果x1，荔枝x1，植物青汁x1</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+20，精神值+30，生命值+40。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家升温；</br>
        BUFF持续时间：16分钟。
        `
      }
    ]
  },
  hmr_cherry_daifuku: {
    title: "樱花雪媚娘",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_daifuku.png",
        alt: "樱花雪媚娘"
      },
      {
        type: "text",
        html: `
        配方：樱花树花>=1，樱红果>=1，水稻>=1，甜味剂>=0.5；</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+40，精神值+80，生命值+10。
        `
      }
    ]
  },
  hmr_cherry_sorbet: {
    title: "樱花冰沙",
    blocks: [
      {
        type: "image",
        src: "img/hmr_cherry_sorbet.png",
        alt: "樱花冰沙"
      },
      {
        type: "text",
        html: `
        配方：樱花树花x1，樱红果x1，冰x2</br>
        不允许出现的物品：无；</br>
        优先度：30；</br>
        食用：饱食度+5，精神值+40，生命值+5。
        `
      },
      {
        type: "text",
        html: `
        BUFF：玩家降温；</br>
        BUFF持续时间：16分钟。
        `
      }
    ]
  },

  // ------------- 生物 -------------

  honor_coconuttree: {
    title: "椰树守卫",
    blocks: [
      {
        type: "image",
        src: "img/honor_coconuttree.png",
        alt: "椰树守卫"
      },
      {
        type: "text",
        html: `
        使用椰子精华时，每次普攻会记录次数，当普攻满52次时，必定会召唤<strong>椰树守卫</strong>。
        `
      }
    ]
  },
  // honor_coconuttreeguard: {
  //   title: "椰树守护者",
  //   blocks: [
  //     {
  //       type: "image",
  //       src: "img/honor_coconuttreeguard.png",
  //       alt: "椰树守护者"
  //     },
  //     {
  //       type: "text",
  //       html: `
  //       击败<strong>椰树守护者</strong>掉落：</br>
  //       活木：3-6个（第四个为50%，第五个为20%，第六个为5%，概率之间相互独立）；</br>
  //       椰子：2个。
  //       `
  //     },
  //     {
  //       type: "text",
  //       html: `
  //       <strong>椰树守护者</strong>有2000点血量，伤害为49.5。
  //       `
  //     }
  //   ]
  // },
  honor_bee: {
    title: "辉煌蜂",
    blocks: [
      {
        type: "image",
        src: "img/honor_bee.png",
        alt: "辉煌蜂"
      },
      {
        type: "text",
        html: `
        生命：200，伤害：4。</br>
        击杀掉落：蜂蜜（30%），针刺（65%）或者自然辉煌（5%）。
        `
      }
    ]
  },
  terror_bee: {
    title: "凶险蜂",
    blocks: [
      {
        type: "image",
        src: "img/terror_bee.png",
        alt: "凶险蜂"
      },
      {
        type: "text",
        html: `
        生命：30，伤害：85。</br>
        击杀掉落：蜂蜜（30%），针刺（60%）或者自然凶险（10%）。
        `
      }
    ]
  },

  // ------------- 奇遇 -------------

  terror_event: {
    title: "凶险事件",
    blocks: [
      {
        type: "image",
        src: "img/terror_event.png",
        alt: "凶险事件"
      },
      {
        type: "text",
        html: `
        直接采摘成熟的凶险作物，已经挖掘各种阶段生长的凶险作物时，并且世界上没有可以阻止<strong>凶险事件</strong>发生的物品，以及<strong>凶险事件</strong>不在冷却时，会引发<strong>凶险事件</strong>。
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险事件</strong>会根据每个玩家存活天数生成对应数量的生物：</br>
        当玩家存活天数小于等于10天时，不生成生物；</br>
        当玩家存活天数大于10天且小于等于70天时，则根据玩家存活天数生成对应数量的生物；</br>
        当玩家存活天数大于70天最大生成70个生物。</br>
        生成生物权重如下：
        <table>
          <thead>
            <tr>
              <th>生物</th>
              <th>权重（生成概率为权重/总权重和）</th>
            <tr>
          </thead>
          <tbody>
            <tr>
              <td>蜜蜂</td>
              <td>5</td>
            </tr>
            <tr>
              <td>杀人蜂</td>
              <td>10</td>
            </tr>
            <tr>
              <td>辉煌蜂</td>
              <td>20</td>
            </tr>
            <tr>
              <td>凶险蜂</td>
              <td>50</td>
            </tr>
            <tr>
              <td>蜂王</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        type: "text",
        html: `
        <strong>凶险事件</strong>开始时屏幕会有<strong>凶险事件</strong>的滤镜，每个玩家都有自己生成生物的数量和种类。
        `
      },
      {
        type: "text",
        html: `
        当所有玩家的生物都生成后或者在自然平衡维持器里插入3个宝石时，<strong>凶险事件</strong>结束，<strong>凶险事件</strong>结束后有120秒冷却时间不会再发生<strong>凶险事件</strong>。
        `
      }
    ]
  },

  // ------------- 角色 -------------

  hmr_lingna: {
    title: "凌娜",
    blocks: [
      {
        type: "image",
        src: "img/hmr_lingna.png",
        alt: "凌娜"
      },
      {
        type: "text",
        html: `
        等待揭秘
        `
      }
    ]
  },
  
  // …其余物品同理，想插多少“图/文/图/文”都可以

  model: {
    title: "",
    blocks: [
      {
        type: "image",
        src: "img/.png",
        alt: ""
      },
      {
        type: "text",
        html: `
        
        `
      }
    ]
  },
};
