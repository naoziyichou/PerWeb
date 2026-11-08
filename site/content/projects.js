/* ==========================================================================
   作品集 · 当前公开项目
   ========================================================================== */
(function () {
  window.CONTENT = window.CONTENT || {};
  const T = window.T;

  /* ======================================================== 作品集总览 */
  CONTENT.work = {
    id: 'work',
    nav: '作品集总览',
    icon: '🗂',
    title: '作品集',
    crumb: [],
    html: `
      <div class="page-eyebrow">WORK</div>
      <h1>作品集</h1>
      <p class="lead">围绕<strong>游戏机制与创意编程</strong>展开。先体验一片可以用手塑形的山水，再看各个项目的设计问题、关键取舍和当前成果。</p>

      <div class="note">
        <b>开发中的作品：</b>每个项目标明当前可体验的内容与下一步计划，图片注明是实机截图还是概念示意。
      </div>

      <h2 id="list">项目与互动作品</h2>

      <a class="card" href="#/work/landscape" style="margin-bottom:14px">
        <img class="card-cover" src="site/assets/img/landscape-in-hand.webp" alt="掌中山水在线作品：粒子等高线、山峰与湖泊" width="1200" height="833" loading="lazy">
        <div class="k">Living Studio · NetArt 02 · p5.js / MediaPipe</div>
        <div class="t">《掌中山水》Landscape in Hand — 用手塑造一片山水</div>
        <p class="d">从摄像头亮度驱动的山水发展为手势塑形。镜像背景显示自己的脸和手，捏合抓取、上下造山与成谷，水面和河流随地形改变。</p>
        <div class="foot">内嵌互动作品 · 支持摄像头手势与鼠标体验 →</div>
      </a>

      <a class="card" href="#/work/b" style="margin-bottom:14px">
        <img class="card-cover" src="site/assets/img/following-the-scent-greybox.png" alt="Following the Scent实机：狗狗捉迷藏灰盒" width="1600" height="900" loading="lazy">
        <div class="k">项目 B · 当前在做 · Godot</div>
        <div class="t">《Following the Scent》— 狗狗捉迷藏</div>
        <p class="d">只给方向、不揭示位置的嗅闻，能否让寻找与躲藏形成有趣的判断？从一对一灰盒开始，验证线索、遮挡与追逐，再逐步扩展到一对三。</p>
        <div class="foot">我的角色：玩法与信息边界设计 · AI 辅助原型开发 · 工具对照实验 →</div>
      </a>

      <h2 id="compare">横向对比</h2>
      ${T.table(
        ['项目', '类型', '工具', '核心问题', '当前状态'],
        [
          ['B · Following the Scent', '捉迷藏 / 机制设计', 'Godot · GDScript · Ollama 对照实验', '方向线索如何保留寻找的判断空间', '一对一 M0 灰盒 + 30 次模型实验'],
          ['掌中山水', 'Net Art / 手势互动', 'p5.js · MediaPipe · AI 辅助开发', '手的动作如何直接改变粒子山水', '网页互动原型 · 摄像头与鼠标体验']
        ]
      )}

      <h2 id="next">下一步验证</h2>
      <ul>
        <li>《Following the Scent》的无提示试玩：观察玩家能否理解方向嗅闻，再推进 AI 寻找者和三只躲藏者。</li>
      </ul>
    `
  };

  /* ======================================================== 项目 B */
  CONTENT['work/b'] = {
    id: 'work/b',
    nav: 'B · Following the Scent',
    title: '项目 B · Following the Scent',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 B' }],
    subs: [
      { id: 'b-play', text: '当前原型' },
      { id: 'b-design', text: '核心设计：线索留白' },
      { id: 'b-iteration', text: '从俯视到第三人称' },
      { id: 'b-experiment', text: '一次模型对照实验' },
      { id: 'b-scope', text: '已实现与下一步' },
      { id: 'b-role', text: '我的工作与 AI 协作' }
    ],
    html: `
      <div class="page-eyebrow">项目 B · 当前在做 · 游戏机制设计</div>
      <h1>Following the Scent</h1>
      <p class="lead">在小村庄里，跟着一瞬间的气味方向，寻找一只会换地方躲藏的狗。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">3D 狗狗捉迷藏 · 规则 AI · 开发中的游戏原型</div></div>
        <div class="row"><div class="k">我的工作</div><div class="v">玩法设计 · 嗅闻的信息边界 · 制作范围与迭代取舍 · AI 工具实验与结果判断</div></div>
        <div class="row"><div class="k">工具</div><div class="v">Godot 4.7 · GDScript · AI Agent 辅助开发；Ollama + Llama 3.2 3B 用于独立对照实验</div></div>
        <div class="row"><div class="k">当前阶段</div><div class="v">M0 可运行灰盒：一名真人寻找者 vs 一名规则 AI 躲藏者</div></div>
        <div class="row"><div class="k">记录更新</div><div class="v">2026 年 11 月 2 日 · 本页依据现有开发记录整理</div></div>
      </div>

      <h2 id="b-play">当前原型：先让一次寻找成立</h2>
      <figure class="shot">
        <img src="site/assets/img/following-the-scent-greybox.png" alt="Following the Scent 灰盒实机：第三人称狗狗、池塘、棚屋，以及搜索倒计时和嗅闻罗盘">
        <figcaption>实机截图 · 2026-11-01，M0 搜索阶段。一名玩家、一只 AI 躲藏狗；场景与角色使用占位体块。</figcaption>
      </figure>
      <p>玩家用第三人称视角在约 38 × 30 米的场地里寻找对手。棚屋、院墙和灌木阻挡视线，三条环路提供绕行机会。躲藏狗在被看见或被靠近后会转移，寻找者需要重新判断路线。</p>
      <div class="stage">
        <h3>一局的流程</h3>
        <p><strong>12 秒准备 → 150 秒搜索 → 抓到对手或时间结束 → 结算。</strong>寻找者在准备阶段无法移动或观察场地，搜索阶段可使用带冷却的嗅闻。WASD 移动，鼠标调整视角，空格 / E 嗅闻，Esc 打开暂停菜单。</p>
      </div>

      <h2 id="b-design">核心设计：线索留白，保留判断</h2>
      <p>我想验证：<strong>知道大致方向，却不知道准确位置，能否让每次嗅闻都带来一个路线选择？</strong>直接画出气味路径会替玩家完成寻找，所以我把技能设计成短时、有限的信息。</p>
      ${T.table(
        ['设计', '玩家得到的信息', '要保留的判断'],
        [
          ['8 个固定方向扇区', '目标所在的大致方向', '检查棚屋，还是绕到墙后？'],
          ['提示持续约 2 秒，之后冷却 10 秒', '短暂线索，目标仍可移动', '现在追过去，还是等下一次提示？'],
          ['不显示距离、轮廓或气味路线', '无法直接定位目标', '结合掩体和视线缩小搜索范围'],
          ['近距离 + 无遮挡 + 持续接触才能抓到', '看见对手之后仍需接近', '如何绕行截住它？']
        ]
      )}
      <p>这些是当前用于验证的参数，仍需试玩调整。狗的行为研究启发角色表现；捉迷藏规则是游戏设计。</p>

      <h2 id="b-iteration">一次关键迭代：从俯视到第三人称</h2>
      <p><strong>问题：</strong>早期俯视镜头暴露了太多场地信息，玩家容易直接看到躲藏者，嗅闻和掩体就失去了作用。</p>
      <p><strong>调整：</strong>把镜头移到狗身后，让墙体和灌木真正挡住视线；镜头遇到障碍时拉近，移动与嗅闻罗盘的方向也跟随相机。</p>
      <p><strong>下一步验证：</strong>邀请未接触过原型的玩家，在没有讲解的情况下尝试寻找，观察他们能否理解嗅闻、选择路线和完成抓捕。目前还没有完成这轮无提示试玩。</p>

      <h2 id="b-experiment">一次工具取舍：能输出 JSON，不等于会躲藏</h2>
      <p>我还测试了一个具体问题：本地小模型能否代替规则 AI 选择藏身点？实验给模型七个候选点、寻找者的位置和上一次藏身点，比较它与规则打分的选择。</p>
      ${T.table(
        ['指标', 'Llama 3.2 3B', '现有规则代码基线', '文档规则基线'],
        [
          ['所选点与寻找者的平均直线距离', '13.72 米', '19.43 米', '21.43 米'],
          ['选中最远候选点的比例', '17%', '90%', '100%']
        ]
      )}
      <p><strong>实验记录：</strong>2026-11-02，10 个场景各重复 3 次，共 30 次有效调用；模型 30/30 次首次输出合法 JSON，中位延迟 365 毫秒。首次加载的预热调用不计入结果。</p>
      <div class="quote">
        <p><strong>我的取舍：</strong>保留规则 AI 作为运行时选点方案。这个实验里，模型能稳定遵守输出格式，但它选的藏身点通常更靠近寻找者；接入模型并没有带来更好的空间决策。</p>
      </div>
      <p>两条规则基线分别来自现有代码与设计文档，计算方式不同，因此单独列出。实验只使用简化坐标与距离，没有评估寻路和掩体质量；这 30 次结果用于本项目的工具选择，不代表模型在所有空间任务中的表现。</p>

      <h2 id="b-scope">已实现与下一步</h2>
      ${T.table(
        ['阶段', '范围', '状态'],
        [
          ['M0 · 当前可运行', '一名真人寻找者、一只规则 AI 躲藏狗；灰盒地图、第三人称移动、遮挡、方向嗅闻、抓捕、计时与结算', '已实现'],
          ['M1-lite · 近期目标', '扩展到一对三；加入 AI 寻找者，让单人可选身份；补充观战和声音反馈', '待实现、待试玩'],
          ['后续扩展', '四人局域网与远程联机', '规划阶段']
        ]
      )}
      <p>目前脚步线索以界面文字提示，音频尚未接入。下一步优先做无提示试玩，再依据观察调整嗅闻与地图。</p>

      <h2 id="b-role">我的工作与 AI 协作</h2>
      <p>我负责确定玩家要做什么、技能可以透露多少信息、每一阶段做到哪里，以及根据反馈和实验决定保留或放弃哪些方案。AI Agent 辅助脚本实现、环境搭建、排错、实验执行与材料整理。</p>
      <p>这个项目目前最值得继续追问的，是<strong>玩家能否读懂线索，并据此做出有意义的选择</strong>。这也是下一轮试玩要回答的问题。</p>
    `
  };


})();
