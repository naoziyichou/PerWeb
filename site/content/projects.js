/* ==========================================================================
   作品集 · 项目 A / B / C
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
      <p class="lead">围绕<strong>移动体验、游戏机制、互动叙事与创意编程</strong>展开。先体验一片可以用手塑形的山水，再看各个项目的设计问题、关键取舍和当前成果。</p>

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

      <a class="card" href="#/work/a" style="margin-bottom:14px">
        <img class="card-cover" src="site/assets/img/wind-city-entry.webp" alt="风轮之旅实机：轮椅与灰烬城邦入口" width="1600" height="900" loading="lazy">
        <div class="k">项目 A · 个人探索 · UE 5.8</div>
        <div class="t">《风轮之旅》Wheel of the Wind — 轮椅机甲动作冒险</div>
        <p class="d">驾驶可切换形态的轮椅，在灰烬城邦中观察地形、选择路线。通过墙面移动、滑翔与雪橇等方式探索空间，已有 84 秒原型展示片。</p>
        <div class="foot">我的角色：叙事架构 · AI 工作流搭建 · 交互与关卡逻辑设计 →</div>
      </a>

      <a class="card" href="#/work/b" style="margin-bottom:14px">
        <img class="card-cover" src="site/assets/img/following-the-scent-greybox.png" alt="Following the Scent实机：狗狗捉迷藏灰盒" width="1600" height="900" loading="lazy">
        <div class="k">项目 B · 当前在做 · Godot</div>
        <div class="t">《Following the Scent》— 狗狗捉迷藏</div>
        <p class="d">只给方向、不揭示位置的嗅闻，能否让寻找与躲藏形成有趣的判断？从一对一灰盒开始，验证线索、遮挡与追逐，再逐步扩展到一对三。</p>
        <div class="foot">我的角色：玩法与信息边界设计 · AI 辅助原型开发 · 工具对照实验 →</div>
      </a>

      <a class="card" href="#/work/c" style="margin-bottom:14px">
        <img class="card-cover" src="site/assets/img/citong-2003-arcade.webp" alt="刺桐旧梦概念试稿：横向分层骑楼街景" width="1600" height="900" loading="lazy">
        <div class="k">项目 C · 归乡叙事 · 视觉开发</div>
        <div class="t">《刺桐旧梦》— 三个年代的归乡叙事</div>
        <p class="d">从 2003 年泉州到 1982 年老街、1940 年崇武，沿一只布香火袋寻找家族记忆。以横向场景、地方物件与线索核对组织探索。</p>
        <div class="foot">我的角色：叙事与线索结构 · 地方空间设计 · 视觉开发 →</div>
      </a>

      <h2 id="compare">横向对比</h2>
      ${T.table(
        ['项目', '类型', '工具', '核心问题', '当前状态'],
        [
          ['A · 风轮之旅', '动作冒险 / 移动体验', 'UE 5.8 · Blender · AI 辅助制作', '地形如何与轮椅移动方式形成选择', '移动与场景原型 · 84 秒展示片'],
          ['B · Following the Scent', '捉迷藏 / 机制设计', 'Godot · GDScript · Ollama 对照实验', '方向线索如何保留寻找的判断空间', '一对一 M0 灰盒 + 30 次模型实验'],
          ['C · 刺桐旧梦', '归乡叙事 / 地方探索', '叙事文档 · AI 辅助试稿 · 分层资源', '家族记忆如何通过地方与物件被发现', '叙事与视觉开发 · Unity 街景试搭'],
          ['掌中山水', 'Net Art / 手势互动', 'p5.js · MediaPipe · AI 辅助开发', '手的动作如何直接改变粒子山水', '网页互动原型 · 摄像头与鼠标体验']
        ]
      )}

      <h2 id="next">下一步验证</h2>
      <ul>
        <li>《风轮之旅》：验证一段连续的起点—障碍—目标路线，补齐关卡反馈与试玩记录。</li>
        <li>《刺桐旧梦》：把新版横向场景、调查动作和人物对话组合成一段可玩的切片。</li>
        <li>《Following the Scent》的无提示试玩：观察玩家能否理解方向嗅闻，再推进 AI 寻找者和三只躲藏者。</li>
      </ul>
    `
  };

  /* ======================================================== 项目 A */
  CONTENT['work/a'] = {
    id: 'work/a',
    nav: 'A · 风轮之旅',
    title: '项目 A · 风轮之旅',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 A' }],
    subs: [
      { id: 'a-demo', text: '84 秒实机展示' },
      { id: 'a-intent', text: '让选择道路成为冒险' },
      { id: 'a-world', text: '人物、轮椅与城邦' },
      { id: 'a-form', text: '地形与移动方式' },
      { id: 'a-bugs', text: '两次实现取舍' },
      { id: 'a-result', text: '当前成果与下一步' }
    ],
    html: `
      <div class="page-eyebrow">项目 A · 移动体验与空间探索</div>
      <h1>《风轮之旅》Wheel of the Wind</h1>
      <p class="lead">驾驶可切换形态的轮椅，在灰烬覆盖的城邦中观察地形、选择路线，向城市深处探索。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">第三人称动作冒险 · 以地形穿越和路线判断为核心</div></div>
        <div class="row"><div class="k">我的工作</div><div class="v">世界观与人物改编 · 移动机制和空间设计 · AI 辅助制作流程 · 原型整合与迭代</div></div>
        <div class="row"><div class="k">工具</div><div class="v">Unreal Engine 5.8 蓝图 · Blender · AI 生图 / 生模 · AI Agent 与 MCP 辅助实现 · 现成环境资产</div></div>
        <div class="row"><div class="k">阶段</div><div class="v">移动与场景原型；已有实机截图及 84 秒剪辑展示片</div></div>
        <div class="row"><div class="k">资料依据</div><div class="v">2026 年 9–10 月实施记录、10 月 9 日实机截图及 10 月 20 日视频交付资料</div></div>
      </div>

      <h2 id="a-demo">先看一段轮椅探索</h2>
      <figure>
        <video class="project-video" controls playsinline preload="none" poster="site/assets/img/wind-video-poster.webp" aria-label="风轮之旅，84 秒灰盒原型展示片">
          <source src="site/assets/video/wheel-of-the-wind-demo.mp4" type="video/mp4">
          你的浏览器暂不支持内嵌播放，可<a href="site/assets/video/wheel-of-the-wind-demo.mp4">打开展示片</a>。
        </video>
        <figcaption>原型展示片 · v3，84 秒。由实机录屏、灰盒场景航拍与渲染剪辑而成，音乐与音效为后期添加。片中保留素材类型和动作说明。</figcaption>
      </figure>
      <p class="media-link"><a href="site/assets/video/wheel-of-the-wind-demo.mp4">单独打开视频 →</a></p>

      <h2 id="a-intent">让选择道路，成为冒险本身</h2>
      <div class="quote"><p>我想让轮椅上的移动拥有<strong>轻盈、自由、由自己决定方向</strong>的感觉。</p></div>
      <p>玩家的主要问题是“从哪里过去、何时切换移动方式”。高差、断墙、连廊与灰面各自提供不同的路径，让观察地形与掌握动作共同构成探索。</p>
      <figure>
        <img src="site/assets/img/wind-city-entry.webp" alt="风轮之旅原型中，主角驾驶轮椅接近城邦入口" width="1600" height="900" loading="lazy">
        <figcaption>实机截图 · 2026-10-09，城邦入口。拍摄时在运行中的关卡内定位角色与镜头，用于说明人物、入口和场地的关系。</figcaption>
      </figure>

      <h2 id="a-world">人物、轮椅与城邦，如何连成一个设计</h2>
      <p><strong>人物：</strong>我以俄狄浦斯为改编起点，保留脚伤、预言与命运冲突，将他设定为由工匠赫菲斯托斯抚养的轮椅使用者。旅程围绕追寻身世和营救养父展开，主题落在他如何选择自己的道路。</p>
      <p><strong>轮椅：</strong>四足轮腿结构保留清楚的座椅、扶手与摇杆。它既连接父子之间的照料，也把主角的行动方式变成玩家可以操作的机制。</p>
      <p><strong>城邦：</strong>架空港口风港 Aeolia 经历地热装置“日辇”事故。灰烬淤塞旧通路，露出的屋顶、柱廊和外墙成为新的路线。坡道、宽通道、连桥与升降设施构成世界设定中的无障碍网络。</p>
      <p>三章故事和配角关系已形成设计文档；目前展示的实机成果集中在移动与场景，完整叙事流程仍待落实。</p>

      <h2 id="a-form">地形不同，移动方式也不同</h2>
      ${T.table(
        ['移动方式', '设计用途', '当前展示依据'],
        [
          ['轮行 / 步足基础行动', '沿地面通行，借跳跃应对高差', '原型移动与场地录屏'],
          ['墙面移动', '利用竖向表面延续路线', '实机贴墙滑行截图与视频'],
          ['滑翔', '从高处下降并向前移动', '实机滑翔状态、展翼截图与视频'],
          ['雪橇', '在覆盖灰烬的地表快速前进', '实机雪橇状态与位移截图']
        ]
      )}
      <div class="shot-grid">
        <figure>
          <img src="site/assets/img/wind-wall-slide.webp" alt="主角在墙面旁进入贴墙滑行状态" width="1600" height="900" loading="lazy">
          <figcaption>实机动作 · 贴墙滑行。截图记录的是空中的墙面滑行状态。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/wind-gliding.webp" alt="轮椅展开滑翔结构，在城邦建筑之间向前移动" width="1600" height="900" loading="lazy">
          <figcaption>实机动作 · 空中滑翔。画面可确认展翼与滑翔状态；具体缺口的可通过性需要连续路线测试。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/wind-sled.webp" alt="主角驾驶切换为雪橇形态的轮椅在灰面上前进" width="1600" height="900" loading="lazy">
          <figcaption>实机动作 · 雪橇移动。拍摄记录已确认雪橇状态及实际位移。</figcaption>
        </figure>
      </div>

      <h2 id="a-bugs">两次实现取舍：先让动作和角色关系成立</h2>
      <div class="stage">
        <h3>骑手装配：坐得稳，才能继续验证移动</h3>
        <p>骑手动画导入后出现比例异常。排查发现骨骼绑定与动画平移的单位不一致；最终将坐姿烘焙为参考姿势，通过轮椅的座位挂点带动骑手起伏。这样先稳定了角色装配，独立坐姿待机动画留到后续处理。</p>
      </div>
      <div class="stage">
        <h3>形态切换：让能力变化与模型显示同步</h3>
        <p>步足与雪橇先通过模型显隐、轻微下沉和回位表现切换，再修正不同座椅造成的骑手悬空。滑翔触发与落地收翼也接到同一套显示更新流程，让移动状态与外形对应。现阶段使用短促的切换表现，完整机械变形动画仍待制作。</p>
      </div>
      <p>制作中，我用 AI 工具生成和整理候选资产，以现成资产补足环境，并在 Blender 与 UE 中完成装配、检查和迭代。我的重点是把人物、地形与操作组织成可展示的体验。</p>

      <h2 id="a-result">当前成果与下一步</h2>
      ${T.table(
        ['当前已有', '下一步验证'],
        [
          ['城邦场景、角色装配与多种移动方式', '整理一段明确的起点—障碍—目标路线，完成连续实测'],
          ['步足 / 雪橇切换及滑翔显示联动的实施记录', '继续验证键盘操作、碰撞与地形中的切换手感'],
          ['实机动作截图与 84 秒展示片', '补齐终点反馈、关卡流程和陌生玩家试玩记录']
        ]
      )}
      <p>当前作品是<strong>移动与场景原型</strong>。完整三章、任务闭环与配角交互属于设计规划；无障碍是空间设计的目标，实际输入适配及残障玩家体验仍需专项验证。</p>
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

  /* ======================================================== 项目 C */
  CONTENT['work/c'] = {
    id: 'work/c',
    nav: 'C · 刺桐旧梦',
    title: '项目 C · 刺桐旧梦',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 C' }],
    subs: [
      { id: 'c-oneline', text: '从归乡展开的故事' },
      { id: 'c-story', text: '三个年代，一只布袋' },
      { id: 'c-play', text: '地方如何进入玩法' },
      { id: 'c-visual', text: '横向场景与视觉试验' },
      { id: 'c-build', text: 'Unity 街景与昼夜试验' },
      { id: 'c-ai', text: '蔡师傅：有边界的 AI 对话' },
      { id: 'c-progress', text: '当前制作进度' }
    ],
    html: `
      <div class="page-eyebrow">项目 C · 归乡叙事与地方空间</div>
      <h1>《刺桐旧梦》</h1>
      <p class="lead">一位在槟城长大的养女来到泉州，沿着三段时空与一只布香火袋，重新认识自己的家。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">叙事探索 · 侧视横向场景 · 观察、对话与线索核对</div></div>
        <div class="row"><div class="k">我的工作</div><div class="v">故事与人物关系 · 跨年代线索结构 · 地方空间转译 · 美术方向与 AI 辅助试稿 · NPC 交互方案</div></div>
        <div class="row"><div class="k">场景方向</div><div class="v">二维分层剪影背景；人物表现方式仍在比较</div></div>
        <div class="row"><div class="k">阶段</div><div class="v">叙事与视觉开发、Unity 分层街景试搭；保留旧版 Godot 对话样片</div></div>
        <div class="row"><div class="k">设定依据</div><div class="v">2026-11-07 校订大纲：2003 → 1982 → 1940 → 2003</div></div>
      </div>

      <figure>
        <img src="site/assets/img/citong-2003-arcade.webp" alt="刺桐旧梦的2003年横向骑楼场景光色试稿，采用蓝色剪影和连续立面" width="1600" height="902">
        <figcaption>AI 辅助概念试稿 · 2003 年骑楼街段的光色探索。以横排立面与蓝色层次研究行走空间，图中人物仅作尺度占位。</figcaption>
      </figure>

      <h2 id="c-oneline">从“回到哪里”，走向“我与谁相连”</h2>
      <p>念安在马来西亚槟城长大，知道自己是养女。2003 年，21 岁的她来到泉州旅行，从一位游客逐步走进亲生家庭的过去。寻根也让她重新理解：亲生父母与养父母的照料，如何共同构成自己的家。</p>
      <div class="quote"><p>我希望玩家通过<strong>重访同一条街、辨认同一件物品、理解同一个人的不同处境</strong>，逐步拼出家族记忆。</p></div>
      <p>药厂调查推动她接近真相，跨年代的救助与赠予让她成为守护家人的人。叙事重心放在归乡、身份认回与三代人的相互照料。</p>

      <h2 id="c-story">三个年代，一只布袋</h2>
      ${T.table(
        ['时间与地点', '玩家在做什么', '故事中的变化'],
        [
          ['2003 · 泉州骑楼与小庙', '旅行、观察街巷、买到一只新布香火袋', '白发女人引路，上香后进入过去'],
          ['1982 · 同一街段与虚构药厂', '结识永强与秀兰，核对箱签、批次和记录', '发现同款旧袋与送养线索，开始怀疑身世'],
          ['1940 · 崇武救助点', '在医护指挥下协助救助、寻找物资和判断转移路线', '结识年轻祖父，将自己的新袋赠给他'],
          ['2003 · 再次归来', '领取封存的旧袋与信，重访药厂旧址并查证', '认回家族关系，也理解自己曾经给予的守护']
        ]
      )}
      <p><strong>布袋的线索：</strong>同一件物品经历不同年龄状态——念安带来的新袋赠给祖父，后来传给父亲，再由母亲封存，最后交还念安。红布、绿边和袋角一针略歪的黄线是辨认依据，磨损与修补体现时间。</p>
      <p>布袋承担家族辨认的作用。章节转换只在规定节点、指定庙宇上香后触发；赠出新袋后，主角仍能返回。这样的规则让道具经历、人物行动和时空顺序可以分别核对。</p>

      <h2 id="c-play">让地方空间，进入玩家的动作</h2>
      <p>场景按横向行走、观察、交谈、进入地点与核对线索设计。2003 与 1982 年保留同一街段的空间骨架，让玩家借熟悉的巷口和门洞，识别生活与年代的变化。</p>
      ${T.table(
        ['空间', '设计中的玩家动作', '希望形成的体验'],
        [
          ['骑楼街巷', '沿柱廊探索，从巷口进入小庙或药厂', '在熟悉的空间中察觉年代变化'],
          ['药厂收货与记录区', '观察箱签、核对批次、比较原始单据与登记页', '从具体物件的异常逐步建立证据'],
          ['崇武救助场景', '寻找物资、协助转移、判断通往避难地点的路线', '在有限能力下理解救助与守护']
        ]
      )}
      <p>关键人物命运按既定故事推进，玩家的行动改变救助过程、对话与结尾细节。真实地方提供空间参照，陈家、药厂案件、小庙及具体救助点按虚构场景设计。</p>

      <h2 id="c-visual">横向场景：先确定可读的空间，再完善风格</h2>
      <p>当前背景采用<strong>二维分层剪影</strong>：前景柱廊、人物行走带、店内暗部与远景分开组织。人物的手绘二维、实时三维和三维预渲染二维方案，仍需在实际游玩尺度下比较。</p>
      <div class="shot-grid">
        <figure>
          <img src="site/assets/img/citong-1982-arcade.webp" alt="1982年同一骑楼街段的暖灰陶红光色试稿" width="1600" height="902" loading="lazy">
          <figcaption>AI 辅助概念试稿 · 1982 年同街段的暖灰陶红探索。与页首 2003 年试稿对照，当前主要验证色彩；店面、道具与年代细节还需继续设计。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/citong-factory-study.webp" alt="虚构药厂的横向收货记录区，台账、称重和药包按区域排列" width="1600" height="902" loading="lazy">
          <figcaption>AI 辅助概念试稿 · 1982 年虚构药厂的收货与记录区。用于探索台账、称重与批次物件的布局；人物和衣着为试稿内容。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/citong-chongwu-study.webp" alt="崇武救助点概念试稿，灰蓝海岸和石城轮廓后是棚架与转移通道" width="1600" height="902" loading="lazy">
          <figcaption>AI 辅助概念试稿 · 1940 年虚构救助点的灰蓝剪影探索，研究近层行动空间与后层石城、海岸的关系。</figcaption>
        </figure>
      </div>
      <h3>正在试验的视觉语言：“刻出的光”</h3>
      <p>我尝试把刻纸与花灯研究转译为<strong>完整轮廓、门窗负形与局部透光</strong>：远看能读懂建筑与道路，靠近或调查时再显出局部纹理和线索。灯光承担观看引导，线索核对仍依靠物件上的真实信息。</p>
      <p>这套方法仍在试稿阶段。现有骑楼已拆分为天空、远楼、树木、巷道、店内、占位人物、前景立面、小物件与路面九层。分层和生成补画仍有边缘差异，视差幅度与场景拼接需要继续验证。</p>

      <h2 id="c-build">从一张背景，走向可调整的街景</h2>
      <p>在 Unity 街景试验场景中，分层资源已与昼夜时间、二维天空、店面暖光和整体调色脚本组合。把建筑、暗部与光分开，便于反复比较同一街段在白天、黄昏和夜晚的可读性。</p>
      <figure>
        <img src="site/assets/img/citong-layer-composite.webp" alt="骑楼街景九层素材校色后的合成预览" width="1600" height="900" loading="lazy">
        <figcaption>资源合成预览 · 九层街景素材校色后的叠合，用于检查轮廓、透明开口与层间关系。人物剪影为静止占位。</figcaption>
      </figure>
      <figure>
        <img src="site/assets/img/citong-dusk-preview.webp" alt="同一分层街景在18点25分与18点45分的黄昏光色预览对照" width="1304" height="402" loading="lazy">
        <figcaption>光色试验预览 · 同一街段的两个黄昏时刻。用于比较天空、立面和路面的变化，仍需结合正式人物与交互焦点调整。</figcaption>
      </figure>
      <p>这部分用于资源与光色验证，新版剧情、可控人物、碰撞及调查交互仍需进一步整合</p>

      <h2 id="c-ai">蔡师傅：让 AI 丰富对话，给关键剧情明确边界</h2>
      <p>在 1982 年药厂调查中，我为蔡师傅设计了一段可选对话：他看见过异常，却害怕作证会牵连家人与生计。玩家可询问、出示布袋或沉默等待，通过他的回避、停顿与动作理解处境。</p>
      ${T.table(
        ['设计范围', '职责'],
        [
          ['AI 候选职责', '生成符合当时知识与信任程度的台词、语气及动作'],
          ['固定剧情职责', '交付关键物证、确认身份、推进章节与决定关键人物命运'],
          ['对话结果', '取得补充证言或关系细节；错过、退出或失败仍可继续主线']
        ]
      )}
      <p><strong>当前是候选方案：</strong>已整理角色卡、知识边界和评测场景；真实模型接入及新版剧情集成尚未完成，评测场景也尚未实跑。</p>

      <h2 id="c-progress">当前制作进度</h2>
      ${T.table(
        ['部分', '当前成果', '下一步'],
        [
          ['故事与线索', '已校订三年代大纲、人物关系、布袋传递与案件证据链', '把观察、核对与章节转换落实为可玩的短流程'],
          ['视觉与资源', '场景概念试稿；九层街景资源与 Unity 昼夜光色试验场景', '确定人物媒介，验证实际尺度、视差、光照与交互'],
          ['旧版样片', 'Godot 对话与场景切换的历史实现及截图', '按新版叙事与横向场景重新整合并验证'],
          ['AI NPC', '蔡师傅对话结构、信息边界与待测用例', '先验证离线台词，再评估模型接入']
        ]
      )}
      <figure>
        <img src="site/assets/img/citong-dialogue.png" alt="刺桐旧梦旧版Godot样片的对话界面" loading="lazy">
        <figcaption>历史样片截图 · Godot 对话界面，保留为制作过程记录。它与本页新版剧情、横向场景试稿分属不同阶段。</figcaption>
      </figure>
      <p>当前最需要验证的是：<strong>玩家能否通过一个街段、一次调查和一段对话，理解自己为何要继续寻找。</strong>新版尚未形成经过完整试玩验证的可玩切片。</p>
    `
  };

})();
