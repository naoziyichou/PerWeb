/* ==========================================================================
   作品集 · 项目 A / B / C / D
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
      <p class="lead">这里不展示"完整成品"，只展示<strong>限制 → 工具 → 过程 → 结果 → 反思</strong>。每个项目都写清楚：我遇到什么限制、怎么绕过、学到了什么。</p>

      <div class="note">
        <b>统一口径：</b>所有项目都按<strong>可演示原型</strong>描述，不写"最终成品"；概念图、目标效果、实机截图会分开标注。
      </div>

      <h2 id="list">四个项目</h2>

      <a class="card" href="#/work/a" style="margin-bottom:14px">
        <div class="k">项目 A · 个人探索 · UE 5.8</div>
        <div class="t">《风轮之旅》Wheel of the Wind — 轮椅机甲动作冒险</div>
        <p class="d">一台轮椅机甲，穿行在被火山灰掩埋的无障碍之城。把轮椅从"拐杖"做成"座驾"，用移动与形态切换构成全部玩法。产出：四形态移动的可演示原型。</p>
        <div class="foot">我的角色：叙事架构 · AI 工作流搭建 · 交互与关卡逻辑设计 →</div>
      </a>

      <a class="card" href="#/work/b" style="margin-bottom:14px">
        <div class="k">项目 B · 技术探索 · 4060 8G</div>
        <div class="t">本地部署 Kimodo：从文字到 UE 里的动画</div>
        <p class="d">在 4060 8G 上把 NVIDIA 的动作生成模型跑通，再把 SOMA77 动作重定向到 Tripo 骨架、导进 UE5。附完整安装记录与 12 条踩坑清单。</p>
        <div class="foot">我的角色：环境搭建 · 依赖排查 · 重定向管线 · UE 导入验证 →</div>
      </a>

      <a class="card" href="#/work/c" style="margin-bottom:14px">
        <div class="k">项目 C · 叙事设计 · Godot 4.7</div>
        <div class="t">《刺桐旧梦》互动叙事原型 — 序章「夜谒」</div>
        <p class="d">用一段 5 分钟可交互序章，验证一个世界观能否被"走进去"：不靠旁白解释，让玩家自己拼出暗示。</p>
        <div class="foot">我的角色：世界观拆解 · 分支设计 · 信息释放节奏 →</div>
      </a>

      <a class="card" href="#/work/d" style="margin-bottom:14px">
        <div class="k">项目 D · 研究笔记</div>
        <div class="t">AI 工具趋势观察：把流行工具挨个试一遍</div>
        <p class="d">Agent、生图、生视频、生音乐、生 3D——记录每类工具解决什么问题、我实际怎么用、效果如何。</p>
        <div class="foot">形式：清单 + 短评 →</div>
      </a>

      <h2 id="compare">横向对比</h2>
      ${T.table(
        ['项目', '类型', '工具', '核心问题', '当前状态'],
        [
          ['A · 风轮之旅', '个人探索 / 动作冒险', 'UE 5.8 · Blender · AI 生图生模', '不会建模不会代码，想法能不能被"体验"到', '可演示原型（进行中）'],
          ['B · 动作生成部署', '技术探索', '本地模型 · 4060 8G · Python', '显存不够，怎么把模型跑起来并出片', '跑通管线 + 踩坑清单'],
          ['C · 刺桐旧梦', '叙事设计 / 互动叙事', 'Godot 4.7 · 自研对话系统', '世界观能否被"走进去"', '5 分钟序章 Demo'],
          ['D · 工具观察', '研究笔记', '各类 AI 工具', '这些工具各自解决什么问题', '持续更新']
        ]
      )}

      <h2 id="next">接下来要补的</h2>
      <ul>
        <li>项目 A / C 的<strong>实机录像</strong>（现在是"能跑"，还没有能给人看的视频）。</li>
        <li>项目 C 的<strong>盲测记录</strong>——"世界观能不能走进去"要等盲测结论，不提前下结论。</li>
        <li>项目 B 的完整安装与生成管线文档（工作区里目前只有一张 Kimodo 论文主页截图）。</li>
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
      { id: 'a-oneline', text: '一句话定位' },
      { id: 'a-problem', text: '问题：我想验证什么' },
      { id: 'a-process', text: '过程' },
      { id: 'a-form', text: '· 四形态移动设计' },
      { id: 'a-art', text: '· AI 素材与灰盒' },
      { id: 'a-bugs', text: '两个弯路故事' },
      { id: 'a-result', text: '结果：现在能玩什么' },
      { id: 'a-reflect', text: '反思' },
      { id: 'a-honest', text: '展示口径提醒' }
    ],
    html: `
      <div class="page-eyebrow">项目 A · 个人探索</div>
      <h1>《风轮之旅》Wheel of the Wind</h1>
      <p class="lead">一台轮椅机甲，穿行在被火山灰掩埋的无障碍之城。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">个人探索 · 第三人称动作冒险（无战斗）· 灰没之城虚拟漫游 / 交互媒体原型</div></div>
        <div class="row"><div class="k">我的角色</div><div class="v">叙事架构 · AI 工作流搭建 · 交互与关卡逻辑设计（设计 + 实现一人承担）</div></div>
        <div class="row"><div class="k">工具</div><div class="v">UE 5.8 蓝图 · Blender（低模）· 即梦 / Tripo 等 AI 生图生模 · Blender / UE MCP + AI Agent 辅助实现 · PolyHaven 现成资产</div></div>
        <div class="row"><div class="k">阶段</div><div class="v">原型阶段（进行中）</div></div>
        <div class="row"><div class="k">链接</div><div class="v">${T.ph('实机录像 / 可玩包：待补')}</div></div>
      </div>

      <h2 id="a-oneline">一句话定位</h2>
      <p>我以轮椅为核心，设计了一场穿越灰烬城邦的移动冒险，把<strong>人物、机械形态与城市路径</strong>组织成同一种探索体验。</p>
      <div class="quote">
        <p>把轮椅从"拐杖"变成"座驾（机甲）"——<strong>残疾不是减损，是另一种形态的力量。</strong></p>
      </div>

      <h2 id="a-problem">问题：我想验证什么</h2>
      <p>出行不便的残障群体在现实里面临巨大的旅行障碍，而现有的虚拟旅游大多是被动的 360° 视频或泛泛的步行模拟，缺乏有意义的深度互动。</p>
      <p>我想验证的不是"能不能做一个游戏"，而是一个更具体的想法能不能被<strong>体验到</strong>。反转点在于：不围绕玩家"做不到什么"设计，而是创造一个<strong>以轮椅这一移动方式为核心</strong>的世界——一座城市本身为不能行走的人而建，主角也不是靠特殊能力，而是靠匠人打造的座驾和自己一公里一公里练出来的技术。</p>

      <h2 id="a-process">过程</h2>

      <div class="stage">
        <h3>1 · 拆世界观（风港 Aeolia）</h3>
        <p>一条"古希腊没有消亡"的 if 线：港口城市靠帆船起家、把"造风与驯风"发展成核心技术，风是信仰、日辇（地热装置）是工程。日辇失控喷发火山灰，掩埋大半城市，城邦分裂为封存派 / 守望派 / 离岸派。</p>
        <ul>
          <li>主角取神话原型<strong>俄狄浦斯</strong>做颠覆式改编：婴儿时期被父亲用铁钉刺穿双脚致残，被工匠<strong>赫菲斯托斯</strong>在城缘工坊收养长大，十七岁得到一生最特别的一台轮椅——四足轮腿的轮椅机甲"战车座驾"。</li>
          <li>其余人物同样从残缺出发赋予"权柄"：赫菲斯托斯（瘸腿匠神 → 养父与锻造者）、提瑞西阿斯（盲眼先知 → 引路者）、珀耳塞福涅（死过一次 → 园丁与入殓师）。</li>
          <li>全城按<strong>无障碍设计</strong>：盲道、平缓坡道、天桥与升降梯、宽通道——让轮椅使用者能顺畅穿行，这是世界观里最核心的一条空间规则。</li>
        </ul>
      </div>

      <div class="stage">
        <h3>2 · 设计互动：移动即冒险</h3>
        <p>难度来自"移动与形态切换的时机"，而不是对抗敌人。所有变形都是<strong>"轮与腿的重新组合"</strong>这一条语法。</p>
      </div>

      <h3 id="a-form">四形态移动设计</h3>
      ${T.table(
        ['形态', '用途'],
        [
          ['轮行（基础）', '全地形移动'],
          ['步足', '跳跃强化、跨越高差'],
          ['滑翔', '高处下落自动展翼、跨越间隔'],
          ['墙跑', '利用竖向表面爬升、贴墙滑行'],
          ['雪橇', '灰海低摩擦面滑行']
        ]
      )}
      <p>关键技术思路：用枚举 <code>WW_EFormState</code> + <strong>参数集中表</strong>（<code>GetFormParams</code>），形态只改数据不改逻辑；唯一入口 <code>SwitchForm</code> 统一处理冷却与幂等，新增形态只改一张表。</p>

      <div class="stage">
        <h3 id="a-art">3 · 用 AI 生成素材</h3>
        <p>不会建模，所以走 AI 生图 / 生模路线：即梦出场景概念图，Tripo 出角色与轮椅网格，再在 Blender 里整理、导出 FBX 进 UE。</p>
      </div>

      <div class="stage">
        <h3>4 · 搭灰盒原型</h3>
        <p>在 UE 5.8（工程名 <code>轮子</code>，从 Godot 4 迁移而来）里搭灰盒关卡与角色 Pawn，自己写 <strong>Kinematic 移动</strong>——现成的 Character 移动模式在蓝图里改不动，而几个形态的物理手感需求完全不同。</p>
      </div>

      <div class="shot-grid">
        <figure>
          <img src="site/assets/img/ue-greybox-city.png" alt="UE 编辑器中的灰盒城邦主场景">
          <figcaption>实机截图 · UE 5.8 编辑器里的灰盒城邦主场景（工程 <code>轮子</code> / 关卡 <code>GreyBoxing5</code>）：沙丘、海面、柱廊与工坊区，约 500 个 Actor。这一版是<strong>灰盒</strong>，不是最终美术。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/wheelchair-mecha-corridor.png" alt="轮椅机甲在城邦通道中">
          <figcaption>实机截图 · 轮椅机甲在城邦通道中，坐姿跟随由 <code>Seat</code> socket 驱动。左上角是光照需要重建的编辑器提示，属于工程状态，不是设计效果。</figcaption>
        </figure>
      </div>

      <h2 id="a-bugs">我最想讲的两个"弯路故事"</h2>
      <p>来自实际排查记录。这类过程比成品更能说明我在做什么。</p>

      <h3>故事 1 · 射线在打自己（滑翔永远不触发）</h3>
      <ul>
        <li><strong>问题</strong>：向下做射线测距触发滑翔，但射线永远命中。</li>
        <li><strong>排查</strong>：打印结果一直为真，才发现用的是 <code>LineTraceComponent</code>——它对<strong>组件自身</strong>做检测（起始点在胶囊内），射线永远打在胶囊内壁上。</li>
        <li><strong>解决</strong>：换成 <code>LineTraceByChannel</code>（世界射线）+ 勾 <code>bIgnoreSelf=true</code>。</li>
        <li><strong>收获</strong>：搜到的节点不只是名字对，还要看它<strong>对谁</strong>做检测。</li>
      </ul>

      <h3>故事 2 · 关碰撞把地面也关掉了（切形态穿地）</h3>
      <ul>
        <li><strong>问题</strong>：每次切形态角色穿地下落。</li>
        <li><strong>排查</strong>：<code>SwitchForm</code> 里有 <code>SetCollisionEnabled(NoCollision)</code>——本意是"清重叠"，但关掉的是<strong>全部碰撞</strong>，包括地面。</li>
        <li><strong>解决</strong>：删除该逻辑，"清重叠"改用更轻的手段（胶囊微调位置）。</li>
        <li><strong>收获</strong>：碰撞开关是全局的，不区分地面 / 墙；不要为清重叠禁用整个碰撞。</li>
      </ul>

      <div class="note">
        <b>备用素材：</b>另有落地判定（细射线穿接缝 → 改用 Sweep 体积检测）、墙跑误触发、<code>FormState</code> 赋值延迟导致跳跃用错参数、以及 AI 写蓝图时 DSL 整图覆盖清空函数等故事。
      </div>

      <h2 id="a-result">结果：现在能玩什么</h2>

      <h3>已实现（原型阶段）</h3>
      <ul>
        <li>四形态移动（轮行 / 步足 / 滑翔 / 墙跑 / 雪橇）可切换、可演示。</li>
        <li>滑翔：空中按跳跃 + 离地超过一定高度即展开；下落用临时降重力 + 下沉封顶做平滑飘落。</li>
        <li>墙跑：改为"空中撞墙"才爬，可爬高墙、沿墙横移、到顶自动脱离。</li>
        <li>主角坐姿已能正确跟随轮椅起伏（靠 <code>Seat</code> socket 随车身驱动）。</li>
        <li>城邦主场景有统一冷灰风格（光照 + 指数高度雾 + 灰调后处理）。</li>
      </ul>

      <h3>未实现（设计计划）</h3>
      <ul>
        <li>可玩闭环（工坊菜单 → 接委托 → L1 → 完成 → 返回）——仍在待办里，<strong>尚未做出</strong>。</li>
        <li>三关主线：只有 L1"进城与预言"有设计文档，尚无可通关流程。</li>
        <li>地下空间、过场叙事、锻造系统：均为概念目标。</li>
      </ul>

      <p><strong>一句话口径</strong>：这是一个<strong>可演示原型</strong>，不是最终成品；能跑起来的是移动系统与角色装配。</p>

      <h2 id="a-reflect">反思</h2>
      <ul>
        <li>我更擅长<strong>整合与推进</strong>，而非单点精通。把一个想法从"设定"推到"能跑"，比把任何单点做到精通更像我。</li>
        <li>最典型的一次取舍：<strong>AI 建模失败后果断止损</strong>——生成的模型模糊、无法直接用于游戏控制，我放弃这条路线，改用现成模型先把机制跑通。</li>
        <li>学到的优先级：<strong>先验证机制，再谈美术。</strong></li>
        <li>我意识到自己的强项是<strong>叙事架构 &gt; 文采</strong>：能快速搭起世界观与信息释放节奏，但要接受自己在建模、代码、审美上的不足，并用工具绕过去。</li>
      </ul>

      <h2 id="a-honest">展示口径提醒（避免夸大）</h2>
      <ul>
        <li>统一写"当前成果 / 可演示原型"，不写"最终成品"。</li>
        <li>区分概念图、目标效果、实机截图、实机录像；形态切换与完整变形动画不混称。</li>
        <li>关注残障议题 <strong>≠</strong> 已证明残障玩家可用：尚无试玩与输入适配验证，不写"解决了残障群体的出行问题"。</li>
        <li>项目阶段写"原型阶段（进行中）"，不直接照搬规划周期。</li>
      </ul>
    `
  };

  /* ======================================================== 项目 B */
  CONTENT['work/b'] = {
    id: 'work/b',
    nav: 'B · 本地动作生成',
    title: '项目 B · 本地部署动作生成模型',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 B' }],
    subs: [
      { id: 'b-oneline', text: '一句话定位' },
      { id: 'b-problem', text: '问题：显存装不下编码器' },
      { id: 'b-model', text: 'Kimodo 是什么' },
      { id: 'b-install', text: '安装记录（可复现）' },
      { id: 'b-install-env', text: '· 建环境与装 PyTorch' },
      { id: 'b-usage', text: '怎么用' },
      { id: 'b-pipeline', text: 'UE5 动画管线' },
      { id: 'b-map', text: '· SOMA77 → Tripo 映射' },
      { id: 'b-details', text: '三个必须处理的细节' },
      { id: 'b-files', text: '脚本与文件清单' },
      { id: 'b-result', text: '结果' },
      { id: 'b-pitfalls', text: '踩坑清单' },
      { id: 'b-reflect', text: '反思' },
      { id: 'b-license', text: '许可与来源' },
      { id: 'b-todo', text: '待补' }
    ],
    html: `
      <div class="page-eyebrow">项目 B · 技术探索</div>
      <h1>本地部署 Kimodo：从文字到 UE 里的动画</h1>
      <p class="lead">在 4060 Laptop <strong>8G 显存</strong>上跑通 NVIDIA 的人体动作生成模型，再重定向到 UE5 角色骨架，做成游戏内能用的动画。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">技术探索 · 本地部署 · 生成式动作 · 动画管线</div></div>
        <div class="row"><div class="k">我的角色</div><div class="v">环境搭建 · 依赖与编译排查 · 显存 / 内存优化 · 重定向管线搭建 · UE 导入验证（一人承担）</div></div>
        <div class="row"><div class="k">工具</div><div class="v">Kimodo（nv-tlabs，Apache-2.0）· uv / Python 3.11 · PyTorch 2.9.1+cu128 · Blender 5.2.1 LTS · UE 5.8 · MinGW + CMake 3.29</div></div>
        <div class="row"><div class="k">环境</div><div class="v">Windows 11 家庭版（26200）· RTX 4060 Laptop 8G · 31GB 内存 · 驱动 581.08（CUDA 13.0）</div></div>
        <div class="row"><div class="k">阶段</div><div class="v">管线跑通（2026-09-13 记录，进行中）</div></div>
        <div class="row"><div class="k">链接</div><div class="v">${T.ph('生成结果录像：待补')}</div></div>
      </div>

      <h2 id="b-oneline">一句话定位</h2>
      <p>我不满足于"在网页上点一下生成"。我想验证的是：<strong>一条从文字指令到游戏内动画的本地管线，能不能在我这台 8G 显存的笔记本上真的跑起来</strong>——包括生成、重定向、导入引擎、确认动作没坏。</p>
      <div class="quote">
        <p>这条管线正好补上我最短的那块板：<strong>我不会手 K 动画</strong>，但我可以让文字变成骨骼的运动，再让运动进到我的工程里。</p>
      </div>

      <h2 id="b-problem">问题：8G 显存装不下 16G 的编码器</h2>
      <ul>
        <li>Kimodo 的文本编码器是 <strong>LLM2Vec，基座 Llama-3-8B</strong>——权重约 <strong>15.3GB</strong>，而本机显存只有 <strong>8GB</strong>，装不下就是装不下，没有"调小一点"的余地。</li>
        <li>解法不是优化模型，而是<strong>换设备</strong>：把编码器整个放到 <strong>CPU</strong>（<code>TEXT_ENCODER_DEVICE=cpu</code>），代价是需要约 <strong>16GB 空闲内存</strong>——所以运行前得先关掉浏览器、Figma、会议软件。31GB 内存刚好够，但不宽裕。</li>
        <li>下载环节本身也是障碍：<code>download.pytorch.org</code> 直连会断、HuggingFace 镜像不支持 Xet 传输、官方基座是 gated 拿不到——每一步都要找替代路径。</li>
        <li>目标不是"跑通 demo"，而是<strong>跑通一条能重复使用的管线</strong>：换一段提示词就能出新的游戏动画。</li>
      </ul>

      <h2 id="b-model">Kimodo 是什么</h2>
      <p><strong>Kimodo</strong> 是 NVIDIA 官方开源的 <strong>kine</strong>matic <strong>mo</strong>tion <strong>d</strong>iffusi<strong>o</strong>n 模型（仓库 <code>nv-tlabs/kimodo</code>，Apache-2.0）。它不是生成画面，而是生成<strong>骨骼的运动</strong>。</p>
      <ul>
        <li><strong>输入</strong>：自然语言文本（可选叠加约束：全身关键帧、末端执行器位置 / 旋转、2D 路径与路点）。</li>
        <li><strong>输出</strong>：3D 人体 / 人形机器人动作。</li>
        <li><strong>骨架</strong>：SOMA 77 关节（人体）· Unitree G1 34 关节（机器人）· SMPL-X 22 关节。</li>
        <li><strong>训练数据</strong>：700 小时商用友好的光学动捕（Bones Rigplay 1）。</li>
        <li><strong>模型家族</strong>：<code>Kimodo-SOMA-RP-v1.1</code>（推荐，人体）、<code>Kimodo-G1-*</code>（机器人）、<code>Kimodo-SMPLX-*</code>（研究用途）。</li>
      </ul>
      <pre><code>文本提示 ──► LLM2Vec 文本编码器(基于 Llama-3-8B) ──► 文本嵌入
                                                      │
约束(可选) ───────────────────────────────────────────┤
                                                      ▼
                              Kinematic Motion Diffusion 去噪 ──► 动作
                                                      │
                                        后处理(脚滑/约束清理) ──► NPZ / BVH / CSV</code></pre>
      <ul>
        <li><strong>文本编码器</strong>：LLM2Vec，基座是 <code>meta-llama/Meta-Llama-3-8B-Instruct</code>（gated），上面挂两个 LoRA 适配器（McGill-NLP 的 mntp / mntp-supervised）。</li>
        <li><strong>扩散模型</strong>：在 SOMA 骨架的运动表示上做扩散去噪，可控性强。</li>
        <li><strong>后处理</strong>：<code>MotionCorrection</code>（C++ / CMake 扩展）做脚滑修正与约束清理。</li>
      </ul>
      <figure>
        <img src="site/assets/img/kimodo-homepage.png" alt="Kimodo 项目主页截图">
        <figcaption>参考来源截图（非本人作品）· Kimodo: Scaling Controllable Human Motion Generation 项目主页，用于说明我在部署的是什么模型。</figcaption>
      </figure>

      <h2 id="b-install">安装记录（可复现）</h2>

      <h3 id="b-install-env">1 · 建虚拟环境与 CUDA 版 PyTorch</h3>
      <pre><code>$env:UV_CACHE_DIR='E:/Kimodo/uv-cache'
uv venv 'E:/Kimodo/venv' --python 3.11

# 直连 download.pytorch.org 不稳 → 走阿里云镜像 + 断点续传
curl.exe -L -C - -o torch-2.9.1+cu128-cp311-cp311-win_amd64.whl ^
  'https://mirrors.aliyun.com/pytorch-wheels/cu128/torch-2.9.1%2Bcu128-cp311-cp311-win_amd64.whl'
curl.exe -L -C - -o torchvision-0.24.1+cu128-cp311-cp311-win_amd64.whl ^
  'https://mirrors.aliyun.com/pytorch-wheels/cu128/torchvision-0.24.1%2Bcu128-cp311-cp311-win_amd64.whl'

uv pip install --python 'E:/Kimodo/venv/Scripts/python.exe' ^
  'E:/Kimodo/wheels/torch-2.9.1+cu128-cp311-cp311-win_amd64.whl' ^
  'E:/Kimodo/wheels/torchvision-0.24.1+cu128-cp311-cp311-win_amd64.whl' --no-index</code></pre>
      <div class="note">
        <b>坑：</b>混用 PyPI 会拉到 <strong>CPU 版 torch</strong>。必须指定 <code>+cu128</code> 本地版本号，或只走 PyTorch 索引。
      </div>

      <h3 id="b-install-src">2 · 源码与依赖（走清华镜像加速）</h3>
      <pre><code>git clone https://github.com/nv-tlabs/kimodo.git E:/Kimodo/repo
git clone https://github.com/nv-tlabs/kimodo-viser.git E:/Kimodo/repo/kimodo-viser
git clone --depth 1 https://github.com/NVlabs/SOMA-X.git E:/Kimodo/repo/SOMA-X
git -C E:/Kimodo/repo/SOMA-X lfs pull        # SOMA-X 用 git-lfs，需补全

$env:SKIP_MOTION_CORRECTION_IN_SETUP='1'     # 先跳过需要编译的后处理
uv pip install --python 'E:/Kimodo/venv/Scripts/python.exe' -e 'E:/Kimodo/repo' ^
  --index-url https://pypi.tuna.tsinghua.edu.cn/simple</code></pre>

      <h3 id="b-install-mc">3 · 编译后处理模块 MotionCorrection（可选但推荐）</h3>
      <pre><code>winget install -e --id BrechtSanders.WinLibs.POSIX.UCRT   # 含 g++ / cmake / make
uv pip install --python 'E:/Kimodo/venv/Scripts/python.exe' "cmake==3.29.6" pybind11

cmake -S E:/Kimodo/repo/MotionCorrection -B E:/Kimodo/mc-build -G "MinGW Makefiles" ^
  -DCMAKE_BUILD_TYPE=Release ^
  -DCMAKE_LIBRARY_OUTPUT_DIRECTORY=E:/Kimodo/repo/MotionCorrection/python/motion_correction ^
  -DPython3_EXECUTABLE=E:/Kimodo/venv/Scripts/python.exe ^
  -Dpybind11_DIR=E:/Kimodo/venv/Lib/site-packages/pybind11/share/cmake/pybind11 ^
  -DFETCHCONTENT_SOURCE_DIR_EIGEN=E:/Kimodo/mc-deps/eigen-3.4.0
cmake --build E:/Kimodo/mc-build -j 8</code></pre>
      <p>编译完还要：把 MinGW 运行时 DLL（<code>libstdc++-6.dll</code> / <code>libgcc_s_seh-1.dll</code> / <code>libwinpthread-1.dll</code>）拷到 <code>.pyd</code> 旁，并写 <code>motion_correction.pth</code> 注册包路径。</p>

      <h3 id="b-install-te">4 · 文本编码器（免授权方案）</h3>
      <p>官方基座 <code>meta-llama/Meta-Llama-3-8B-Instruct</code> 是 gated 的，用<strong>同权重的免授权复刻</strong>绕过：</p>
      <pre><code>$env:HF_ENDPOINT='https://hf-mirror.com'
$env:HF_HUB_DISABLE_XET='1'      # 镜像不支持 Xet 传输，必须禁用

hf download NousResearch/Meta-Llama-3-8B-Instruct ^
  --local-dir E:/Kimodo/models/text-encoders/Meta-Llama-3-8B-Instruct ^
  --include "*.json" "*.safetensors" "tokenizer*"
hf download McGill-NLP/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp ^
  --local-dir E:/Kimodo/models/text-encoders/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp
hf download McGill-NLP/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp-supervised ^
  --local-dir E:/Kimodo/models/text-encoders/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp-supervised</code></pre>
      <p>然后把两个适配器的 <code>adapter_config.json</code> 里 <code>base_model_name_or_path</code> 改成本地绝对路径（JSON 里反斜杠要双写，且<strong>文件不能带 BOM</strong>），再改 Kimodo 源码里<strong>两处</strong>预设指向本地路径：</p>
      <ul>
        <li><code>kimodo/model/load_model.py</code> 的 <code>TEXT_ENCODER_PRESETS</code></li>
        <li><code>kimodo/scripts/run_text_encoder_server.py</code> 的 <code>TEXT_ENCODER_PRESETS</code></li>
      </ul>
      <div class="note">
        <b>可以忽略的噪音：</b>加载时会打印一堆 <code>MISSING</code> / <code>UNEXPECTED</code> 层警告，官方文档明确说<strong>安全可忽略</strong>。第一次看到会以为装坏了。
      </div>

      <h3 id="b-install-envvars">5 · 常用环境变量</h3>
      ${T.table(
        ['变量', '值', '作用'],
        [
          ['<code>TEXT_ENCODER_DEVICE</code>', '<code>cpu</code>', '编码器放内存（8GB 显存必需）'],
          ['<code>TEXT_ENCODER_MODE</code>', '<code>local</code>', '跳过远程服务探测，本地加载编码器'],
          ['<code>HF_ENDPOINT</code>', '<code>https://hf-mirror.com</code>', '国内镜像下载模型'],
          ['<code>HF_HUB_DISABLE_XET</code>', '<code>1</code>', '禁用镜像不支持的 Xet 传输'],
          ['<code>HF_HOME</code>', '<code>E:/Kimodo/hf-cache</code>', '模型缓存不占 C 盘']
        ]
      )}

      <h2 id="b-usage">怎么用</h2>
      <p>Kimodo 提供四种用法，我按场景切换：</p>
      ${T.table(
        ['方式', '命令 / 入口', '我什么时候用'],
        [
          ['网页 demo（本地）', '<code>start_demo.bat</code> → <code>127.0.0.1:7860</code>', '需要时间轴编辑器时：文本 + 关键帧 + 2D 路径 + 手脚末端约束 + 3D 预览 + 导出'],
          ['命令行生成', '<code>start_cli.bat "A person walks forward." 5.0</code>', '确定要什么动作，直接出文件'],
          ['编码器常驻服务', '<code>kimodo_textencoder</code>（127.0.0.1:9550）', '批量生成时复用编码器，省掉每次 30 秒加载'],
          ['Python API', '<code>load_model("Kimodo-SOMA-RP-v1.1")</code>', '要接进我自己的脚本 / 管线时']
        ]
      )}
      <pre><code>kimodo_gen "A person walks forward." --model Kimodo-SOMA-RP-v1.1 ^
  --duration 5.0 --output E:/Kimodo/output/walk --bvh</code></pre>
      <h3>输出格式</h3>
      ${T.table(
        ['骨架', '格式'],
        [
          ['SOMA（人体）', '<code>.npz</code>（默认）、<code>.bvh</code>（<code>--bvh</code>）'],
          ['G1（机器人）', '<code>.npz</code>、MuJoCo <code>.csv</code>'],
          ['SMPL-X', '<code>.npz</code>、AMASS <code>.npz</code>']
        ]
      )}
      <p>格式互转：<code>kimodo_convert in out</code></p>

      <h2 id="b-pipeline">UE5 动画管线</h2>
      <p>生成出来只是"一段动作数据"，要变成游戏里能用的动画，中间隔着<strong>骨架不同</strong>这道墙。</p>
      <pre><code>① Kimodo 生成动作 (SOMA77, NPZ)
        │
② 补 NPZ 元数据 (joint_names / neutral_joints)
        │
③ Blender 重定向 (SOMA77 → Tripo 骨架, 去根, 30fps)
        │
④ 导出 FBX
        │
⑤ UE5 导入到现有 Skeleton → AnimSequence → 游戏内使用</code></pre>

      <h3 id="b-retarget">为什么要重定向</h3>
      <p>Kimodo 的动作在 <strong>SOMA 77 关节</strong>骨架上，而我的游戏角色是 <strong>Tripo 标准人形（54 骨）</strong>。重定向 = 把源骨架每根骨的<strong>世界旋转</strong>换算到目标骨架的对应骨上。Kimodo 输出的 <code>posed_joints</code> / <code>global_rot_mats</code> 就是各关节的全局位置与旋转矩阵，所以可以逐帧驱动目标骨架。</p>
      <p>原理（<code>kimodo_motion</code> 插件的 <code>retarget/bpy_retarget.py</code>）：</p>
      <ul>
        <li>SOMA 是 <strong>Y-up</strong>，Blender 是 <strong>Z-up</strong> → 固定基变换 <code>C = +90° about X</code>。</li>
        <li>SOMA 的 T-pose 全局旋转为单位矩阵，因此目标骨的世界朝向为 <code>t_world[f] = (C · s_world_soma[f] · C⁻¹) · off[t]</code>，其中 <code>off[t]</code> 是目标骨的 rest 世界朝向。</li>
        <li>用 Blender 的 <code>pose_bone.matrix</code> setter 反解局部通道，逐帧 <code>keyframe_insert</code>。</li>
        <li>根骨（Hips）可选是否写入位移——<strong>我设 <code>with_root=False</code> 做原地动画</strong>，位移交给 UE 的移动组件。</li>
        <li>假设目标骨架是 T-pose；A-pose 骨架需要额外 rest 匹配。</li>
      </ul>

      <h3 id="b-map">关键映射（SOMA77 → Tripo）</h3>
      ${T.table(
        ['SOMA', 'Tripo', 'SOMA', 'Tripo'],
        [
          ['Hips', 'Pelvis', 'LeftShoulder', 'L_Clavicle'],
          ['Spine1', 'Spine01', 'LeftArm', 'L_Upperarm'],
          ['Spine2', 'Spine02', 'LeftForeArm', 'L_Forearm'],
          ['Chest', 'Spine02', 'LeftHand', 'L_Hand'],
          ['Neck1', 'NeckTwist01', 'LeftLeg（大腿）', 'L_Thigh'],
          ['Neck2', 'NeckTwist02', 'LeftShin（小腿）', 'L_Calf'],
          ['Head', 'Head', 'LeftFoot / Toe', 'L_Foot / L_ToeBase'],
          ['RightShoulder', 'R_Clavicle', 'RightArm', 'R_Upperarm'],
          ['RightForeArm', 'R_Forearm', 'RightHand', 'R_Hand'],
          ['RightLeg', 'R_Thigh', 'RightShin', 'R_Calf'],
          ['RightFoot / Toe', 'R_Foot / R_ToeBase', '—', '—']
        ]
      )}
      <div class="note">
        <b>两个容易踩的点：</b>
        <ul>
          <li>Tripo 骨架<strong>没有手指骨骼</strong> → 手保持绑定姿态；<code>*Twist01/02</code> 扭转骨不映射、自动跟随。</li>
          <li>插件的<strong>自动骨骼匹配对 Tripo 无效</strong>（SOMA 叫 <code>Hips/LeftArm</code>，Tripo 叫 <code>Pelvis/L_Upperarm</code>），必须写自定义映射。</li>
        </ul>
      </div>

      <h2 id="b-details">三个必须处理的细节</h2>
      <div class="stage">
        <h3>1 · 去根平移（原地动画）</h3>
        <p><code>with_root=False</code>，只保留旋转，Pelvis 位移不写入 → 配合 UE 移动组件使用，避免"动画自己跑出去"。</p>
      </div>
      <div class="stage">
        <h3>2 · 帧率：动作慢了 1.25 倍</h3>
        <p>Kimodo 是 <strong>30fps</strong>。Blender 导入角色 FBX 时会把场景 fps 改回 <strong>24</strong>，导致 30 帧的动作被当 24 帧播 → 慢 <strong>1.25 倍</strong>。必须在<strong>导入角色之后</strong>再设 <code>scene.render.fps = 30</code>。</p>
      </div>
      <div class="stage">
        <h3>3 · NPZ 元数据缺失</h3>
        <p>CLI 输出的 NPZ 缺 <code>joint_names</code> / <code>neutral_joints</code>，要从 Kimodo 骨架注册表补上（<code>add_npz_metadata.py</code>），否则重定向脚本找不到骨骼。</p>
      </div>

      <h3 id="b-ue">UE 导入</h3>
      <ul>
        <li>用 <code>UnrealEditor-Cmd.exe</code> + Python 脚本自动导入（<code>.uproject</code> 需启用 <code>PythonScriptPlugin</code>，已改并留了 <code>.bak</code> 备份）。</li>
        <li>导入类型设为 <strong>Animation</strong>，绑定到现有 <code>Sitting_Idle_Skeleton</code>（<strong>不新建骨架</strong>）。</li>
        <li><code>enable_root_motion = False</code>；循环动作在 UE 里勾 Loop。</li>
      </ul>

      <h2 id="b-files">脚本与文件清单</h2>
      ${T.table(
        ['文件', '作用'],
        [
          ['<code>launch.ps1</code>', '内存检测 / 一键释放白名单程序 + 设置环境变量 + 启动 gen 或 demo'],
          ['<code>make_anim.ps1</code>', '<strong>一键总控</strong>：生成 → 补元数据 → Blender 重定向 → 导出 FBX → UE 导入'],
          ['<code>add_npz_metadata.py</code>', '给 NPZ 补 <code>joint_names</code> / <code>neutral_joints</code>'],
          ['<code>retarget_tripo.py</code>', 'Blender 重定向 + 去根 + 30fps + 导出 FBX'],
          ['<code>preview_tripo.py</code>', '渲染预览帧，验证动作'],
          ['<code>ue_import_anim.py</code>', 'UE 命令行动画导入'],
          ['<code>ue_verify_anim.py</code> / <code>ue_verify_all.py</code>', '验证 UE 资产（骨架绑定 / 时长 / 根运动）']
        ]
      )}
      <pre><code>powershell -ExecutionPolicy Bypass -File E:/Kimodo/make_anim.ps1 ^
  -Prompt "A person jumps and lands." -Name jump -Duration 4</code></pre>

      <h2 id="b-result">结果</h2>
      <ul>
        <li><strong>一条从文字到游戏动画的本地管线跑通了</strong>：<code>make_anim.ps1</code> 一条命令完成 生成 → 补元数据 → 重定向 → FBX → UE 导入。</li>
        <li>产物：<code>output/jump.npz / .bvh / _rt.npz / .fbx</code>，以及 UE 资产 <code>/Game/Core/Mesh/Animations/jump</code>（绑定到 <code>Sitting_Idle_Skeleton</code>，无根运动）。</li>
        <li>为了让它可复现，我把每一步的报错与解法都记成了清单（下面那张表），换机器能照着做。</li>
      </ul>
      <div class="note">
        <b>口径：</b>这是<strong>技术管线原型</strong>，不是"做了一个动画系统"。目前验证的是"能生成、能重定向、能进引擎"，还没有做动作质量评估、状态机接入和大批量生成。
      </div>

      <h2 id="b-pitfalls">踩坑清单</h2>
      ${T.table(
        ['问题', '原因 / 解决'],
        [
          ['内存不足加载失败', '8GB 显存装不下 8B 编码器 → 编码器跑 CPU，需约 16GB 空闲内存；用 <code>launch.ps1</code> 关掉浏览器 / Figma / 会议软件'],
          ['torch 装成 CPU 版', '混用了 PyPI；必须用 pytorch 索引或 <code>+cu128</code> 版本号'],
          ['<code>download.pytorch.org</code> 下载中断', '用阿里云镜像 + <code>curl -C -</code> 断点续传'],
          ['HF 下载 401 / Xet 报错', '设 <code>HF_HUB_DISABLE_XET=1</code>，走镜像'],
          ['gated 模型无法访问', '用免授权复刻 <code>NousResearch/Meta-Llama-3-8B-Instruct</code> + 改适配器基座指向'],
          ['JSON 解析报错', 'PowerShell <code>Set-Content -Encoding UTF8</code> 会加 BOM，需去掉（用 .NET <code>UTF8Encoding($false)</code>）'],
          ['PowerShell 脚本中文路径乱码', 'PowerShell 5.1 把无 BOM 的 .ps1 当 ANSI 读 → 存为 <strong>UTF-8 with BOM</strong>'],
          ['CMake 4.x 编译失败', '旧依赖 <code>cmake_minimum_required</code> 过低 → 用 CMake 3.29'],
          ['MotionCorrection 拉 Eigen 慢', '预下 <code>eigen-3.4.0.tar.gz</code>，用 <code>-DFETCHCONTENT_SOURCE_DIR_EIGEN</code>'],
          ['动作慢 1.25 倍', '导入角色 FBX 改了场景 fps → 导入后再设 <code>scene.render.fps=30</code>'],
          ['UE 自动导入需 Python', '<code>.uproject</code> 启用 <code>PythonScriptPlugin</code>（已改，含备份）'],
          ['插件自动匹配对 Tripo 无效', '改用自定义 <code>tripo</code> 映射（见上方映射表）']
        ]
      )}
      <h3>性能参考</h3>
      <ul>
        <li>编码器加载：约 <strong>30 秒</strong>（CPU，占用约 16GB 内存）。</li>
        <li>单次生成 5 秒动作：约 <strong>1–2 分钟</strong>（含加载）。</li>
        <li>模型下载量：约 <strong>15.3GB</strong>（仅编码器基座）+ 适配器 + Kimodo 权重。</li>
      </ul>

      <h2 id="b-reflect">反思</h2>
      <ul>
        <li><strong>硬件不够的时候，"换设备"往往比"优化"更有效。</strong>显存装不下编码器，任何参数技巧都没用；把它挪到 CPU，问题从"不可能"变成"要关掉几个软件"。先判断这是"资源问题"还是"技术问题"。</li>
        <li><strong>最贵的不是成功那一刻，是那份可复现清单。</strong>12 条踩坑记录里，一半是环境与版本问题，它们本身没有技术含量，但会结结实实挡你两天。</li>
        <li><strong>数据管线里最容易被忽略的是"元信息"。</strong>帧率、坐标轴朝向、骨骼命名、根运动——这些不体现在画面里，却是动作能不能进引擎的决定因素。</li>
        <li>这条管线也确认了我的定位：<strong>我不写模型，我把模型接到能用的地方。</strong></li>
      </ul>

      <h2 id="b-license">许可与来源</h2>
      ${T.table(
        ['组件', '来源', '许可'],
        [
          ['Kimodo 代码', '<code>nv-tlabs/kimodo</code>', 'Apache-2.0'],
          ['Kimodo 模型权重', 'HuggingFace <code>nvidia/Kimodo-*</code>', 'NVIDIA Open Model License'],
          ['文本编码器基座', 'Meta Llama-3-8B-Instruct（经 NousResearch 复刻）', '<strong>Meta Llama-3 Community License</strong>'],
          ['LLM2Vec 适配器', '<code>McGill-NLP/LLM2Vec-*</code>', 'MIT / 依其仓库'],
          ['SOMA 身体模型', '<code>NVlabs/SOMA-X</code>', '见其仓库'],
          ['Blender 重定向', '<code>atticus-lv/kimodo_motion</code>（本机仅用重定向模块）', 'GPL-3.0-or-later'],
          ['PyTorch', 'pytorch.org', 'BSD-3']
        ]
      )}
      <div class="note">
        <b>许可提醒：</b>基座权重无论从哪个源下载，都受 <strong>Meta Llama-3 社区许可</strong>约束。免授权复刻只是为了安装便利，<strong>分发请走官方 gated 渠道</strong>。
      </div>

      <h2 id="b-todo">待补</h2>
      <ul>
        <li>生成结果的<strong>录像或关键帧截图</strong>（现在这页全是过程，缺"看得见的东西"）。</li>
        <li>动作进游戏之后的实际效果（配合 UE 移动组件跑起来的样子）。</li>
        <li>${T.ph('仓库地址：如果整理成可公开的脚本集，放上来')}</li>
      </ul>
    `
  };

  /* ======================================================== 项目 C */
  CONTENT['work/c'] = {
    id: 'work/c',
    nav: 'C · 刺桐旧梦',
    title: '项目 C · 刺桐旧梦互动叙事原型',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 C' }],
    subs: [
      { id: 'c-oneline', text: '一句话定位' },
      { id: 'c-problem', text: '问题：设定全 ≠ 能走进去' },
      { id: 'c-info', text: '信息释放设计' },
      { id: 'c-fix', text: '先修的硬伤' },
      { id: 'c-plan', text: '执行计划（5 阶段）' },
      { id: 'c-deliver', text: '交付物与风险' },
      { id: 'c-decide', text: '已锁定的决策' },
      { id: 'c-reflect', text: '反思' }
    ],
    html: `
      <div class="page-eyebrow">项目 C · 叙事设计</div>
      <h1>《刺桐旧梦》互动叙事原型</h1>
      <p class="lead">用一段 5 分钟可交互序章，验证一个世界观能否被"走进去"。</p>

      <div class="meta">
        <div class="row"><div class="k">类型</div><div class="v">叙事设计 · 互动叙事原型（视觉小说 × 时空穿越）</div></div>
        <div class="row"><div class="k">我的角色</div><div class="v">世界观拆解 · 分支设计 · 信息释放节奏（设计 + 实现一人承担）</div></div>
        <div class="row"><div class="k">工具</div><div class="v">Godot 4.7 · 自研对话系统（Dialogue / DialogueGroup / DialogueManager）· SceneManager / EventBus 状态机 · PhantomCamera</div></div>
        <div class="row"><div class="k">阶段</div><div class="v">序章 Demo（进行中）</div></div>
        <div class="row"><div class="k">链接</div><div class="v">${T.ph('实机录像 / Demo 包：待补')}</div></div>
      </div>

      <h2 id="c-oneline">一句话定位</h2>
      <p>我以《刺桐旧梦》的序章「夜谒」为切片，把"<strong>护身符的温度 / 白发女子 / 小庙 / 上香穿越</strong>"四个符号组织成一条可交互路径，用一次真实的选择去验证：玩家能不能自己走进这个世界。</p>

      <h2 id="c-problem">问题：设定全 ≠ 能走进去</h2>
      <p>已有的世界观文档列了 <strong>68 条待定问题</strong>（穿越机制、灵魂体系、家族谱系、三时空面貌……）。但"设定写得全"不等于"玩家能走进去"。</p>
      <div class="quote">
        <p>不靠一句解释，只靠可交互的场景与选择，让玩家自己意识到"这枚护身符有古怪 / 这个女人认得我 / 我得跟上去"。</p>
      </div>
      <p>反转点在于：<strong>验证的是信息释放，不是文本量。</strong>玩家在正确的时间拿到正确的一点点信息，比一次被告知全部更关键。</p>

      <h2 id="c-info">信息释放设计</h2>
      <p>序章本就是<strong>双分支合流</strong>结构，正好用来测"世界观能否走进去"。</p>
      ${T.table(
        ['幕', '场景', '释放的信息', '刻意隐藏'],
        [
          ['一', '酒店房间', '护身符<strong>不凉</strong>、"安"字、母亲消息', '护身符来历、白发女子'],
          ['二', '夜街', '白发女子的存在、她"认得"你', '她是谁、为何在此'],
          ['三', '小庙 · 选择点', '<strong>跟进</strong> → 目击她消散 → 上香穿越<br><strong>不跟进</strong> → 回房失眠 → 梦中重逢 → 夜里主动上香', '穿越规则、血缘真相']
        ]
      )}
      <p>两条线<strong>释放的信息量相同、体感不同</strong>——用 flag 让后续文本有细微差别。这就是要验证的东西。</p>

      <div class="shot-grid">
        <figure>
          <img src="site/assets/img/citong-title-screen.png" alt="刺桐旧梦标题界面">
          <figcaption>实机截图 · 序章使用的旧版标题界面（护身符 + 泉州港湾）。按既定决策，本次 Demo 不重做新版美术。</figcaption>
        </figure>
        <figure>
          <img src="site/assets/img/citong-dialogue.png" alt="游戏内对话与立绘">
          <figcaption>实机截图 · 游戏内对话界面：自研对话 UI（打字机 + 立绘 + 场景切换），玩家通过提问推进信息释放。</figcaption>
        </figure>
      </div>

      <h2 id="c-fix">必须先修的硬伤</h2>
      <ol>
        <li><code>DialogueUI.tscn</code> 连接了 <code>gui_input → _on_click</code>，但 <code>DialogueManager.gd</code> 中<strong>没有该方法</strong>（实际用 <code>_input</code>）→ 断连报错。</li>
        <li><code>WhiteLightAutoJump.gd</code> 白屏后直接跳 <code>ch1_arrive_street</code>，与 <code>GameManager</code> 的 <code>prologue_time_travel → InnerTempleNight</code> <strong>不一致</strong>。</li>
        <li><code>Dialogue2.tres</code> 文本串行（合并事故），需修正。</li>
        <li><strong>分支无记忆</strong>：<code>Global/GameData.gd</code> 只有 <code>dialogue_active</code>，<code>Dialogue.gd</code> 无 flag / 条件，选择不留痕。</li>
        <li>双轨并存：<code>SceneTrigger</code>（新，事件驱动）与 <code>hotel_night.gd</code> / <code>HotelNoLight.gd</code>（旧，硬编码目标）混用。</li>
        <li>3 个 <code>Scene/DialogueUI/DialogueUI.tscn*.tmp</code> 残留。</li>
      </ol>

      <h2 id="c-plan">执行计划（5 阶段）</h2>

      <div class="stage">
        <h3>阶段 1 · 修通主链路</h3>
        <ul>
          <li><code>DialogueManager.gd</code>：去掉 <code>DialogueUI.tscn</code> 的 <code>_on_click</code> 断连（补方法或删连接）。</li>
          <li><code>WhiteLightAutoJump.gd</code> + <code>GameManager.gd</code>：统一序章结尾为「白屏 + 字幕卡」，不跳第一章。</li>
          <li>修 <code>Dialogue2.tres</code> 串行文本；清理 3 个 <code>.tmp</code> 残留。</li>
          <li>编辑器实跑序章全链路，<strong>零报错</strong>。</li>
        </ul>
      </div>

      <div class="stage">
        <h3>阶段 2 · 加"选择记忆"能力（可复用到后续章节）</h3>
        <ul>
          <li><code>GameData.gd</code>：<code>flags</code> 字典 + <code>set_flag / get_flag / has_flag</code>。</li>
          <li><code>Dialogue.gd</code>：<code>branch_set_flags: Array[String]</code>、可选 <code>required_flag</code>。</li>
          <li><code>DialogueManager.gd</code>：选中分支写 flag；按 flag 跳过条目。</li>
        </ul>
      </div>

      <div class="stage">
        <h3>阶段 3 · 落地序章选择</h3>
        <ul>
          <li><code>Street_Night.tscn</code>：白发女子处插入「跟进／不跟进」选项（复用选项框）。</li>
          <li>两条支线按设计合流至白屏；flag <code>saw_ghost</code> / <code>followed</code> 驱动细节台词。</li>
        </ul>
      </div>

      <div class="stage">
        <h3>阶段 4 · 节奏与收尾</h3>
        <ul>
          <li>白屏停留 + 章末字幕卡（"雾失楼台，月迷津渡……"）；核对 <strong>5 分钟时间盒</strong>。</li>
        </ul>
      </div>

      <div class="stage">
        <h3>阶段 5 · 盲测（本项目的"结果"）</h3>
        <ul>
          <li>3–5 人无提示试玩。</li>
          <li>记录三指标：<strong>世界观理解度</strong> / <strong>选择被感知度</strong> / <strong>节奏卡点</strong>。</li>
        </ul>
      </div>

      <h2 id="c-deliver">交付物与风险</h2>
      <h3>交付物</h3>
      <ul>
        <li>可玩 5 分钟序章 Demo。</li>
        <li>序章信息释放表 + 分支结构图（md）。</li>
        <li>盲测记录（md）。</li>
        <li>对话系统 flag / 条件扩展（第一、二章可复用）。</li>
      </ul>
      <h3>风险与注意</h3>
      <ul>
        <li>旧脚本与 <code>SceneTrigger</code> 双轨——本次<strong>只走一条路径</strong>，不踩不一致。</li>
        <li>自研对话系统<strong>无对话内存档</strong>，Demo 不做中途存读。</li>
        <li>立绘 / 背景已是旧版风格；新版（2026、无超自然）改写会牵动全部资产，<strong>本次不做</strong>。</li>
        <li>展示口径：写"<strong>可演示原型</strong>"，不写"最终成品"；"世界观能走进去"须以盲测结论为准，不提前下结论。</li>
      </ul>

      <h2 id="c-decide">已锁定的决策</h2>
      ${T.table(
        ['决策项', '结论'],
        [
          ['故事版本', '旧版《刺桐旧梦》护身符穿越（与现有代码一致）'],
          ['工具', '复用现有 Godot 自研对话系统（不引入 Dialogic / Twine / Ink）'],
          ['Demo 切片', '序章 · 夜谒（小庙穿越）'],
          ['分支落地', '显式对话选项（跟进／不跟进）'],
          ['Demo 收尾', '白屏 + 章末字幕卡结束'],
          ['双轨清理', '暂不动旧脚本，只保证 Demo 路径跑通']
        ]
      )}

      <h2 id="c-reflect">反思</h2>
      <ul>
        <li>叙事架构强于文采：我能把结构搭起来，但真正的难点不在"写"，而在<strong>信息以什么节奏交给玩家</strong>。</li>
        <li>决定不引入成熟对话插件、坚持扩展现有系统，是一次成本取舍：省下迁移成本，但要自己补 flag 与条件能力。</li>
        <li>在验证阶段必须克制：不重做美术、不扩章节，只保证一条路径能跑完并拿到盲测数据。</li>
      </ul>
    `
  };

  /* ======================================================== 项目 D */
  CONTENT['work/d'] = {
    id: 'work/d',
    nav: 'D · AI 工具观察',
    title: '项目 D · AI 工具趋势观察',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '项目 D' }],
    subs: [
      { id: 'd-oneline', text: '一句话定位' },
      { id: 'd-agents', text: '编码 Agent' },
      { id: 'd-image', text: '生图 / 生 3D' },
      { id: 'd-video', text: '生视频' },
      { id: 'd-music', text: '生音乐' },
      { id: 'd-how', text: '我怎么用它们' },
      { id: 'd-note', text: '结论与待补' }
    ],
    html: `
      <div class="page-eyebrow">项目 D · 研究笔记</div>
      <h1>AI 工具趋势观察</h1>
      <p class="lead">我把市面上几乎流行的 AI Agent 都试了一遍，各类生图、生视频、生音乐的工具也没落下。这一页记录的是：<strong>它们各自解决什么问题、我怎么用、效果如何</strong>。</p>

      <div class="note">
        <b>说明：</b>这一页是"使用者的观察"，不是模型评测。带 <span class="placeholder">[待补]</span> 的地方是我的主观评价和使用场景，需要你按自己的实际体验改。
      </div>

      <h2 id="d-oneline">一句话定位</h2>
      <p>我的短板是建模、代码、美术。所以我不用"学完再做"的路线，而是<strong>先把工具链铺开</strong>，遇到具体问题就找一个能用的工具顶上去。试得多了，就有了这张分工表。</p>

      <h2 id="d-agents">编码 / 通用 Agent</h2>
      ${T.table(
        ['工具', '它解决什么', '我用它做什么', '体感'],
        [
          ['Claude', '长上下文推理、代码与文档理解', '需求拆解、方案讨论、文案与结构梳理', T.ph('待补：你的评价')],
          ['OpenCode / Codex 类 CLI Agent', '在本地仓库里直接改代码、跑命令', '改脚本、修报错、批量重构', T.ph('待补')],
          ['DeepSeek Harness (DSH)', '把 Agent 做成可编排的工作台', '搭自己的工作流、跑多步任务', T.ph('待补')],
          ['其他试过的 Agent', T.ph('名称'), T.ph('用途'), T.ph('待补')]
        ]
      )}
      <p>观察：Agent 之间的差距，很多时候不在模型本身，而在<strong>它能不能真的碰到你的文件、看到运行结果</strong>。能自动跑命令、读报错的，实用性会跳一个台阶。</p>

      <h2 id="d-image">生图 / 生 3D</h2>
      ${T.table(
        ['工具', '用途', '我用它做什么'],
        [
          ['即梦', '场景与概念图生成', '《风轮之旅》城邦场景概念图'],
          ['Tripo', '图生 3D 网格', '角色与轮椅的低模尝试（后因质量止损）'],
          ['RunningHub', '在线跑工作流 / 模型', T.ph('待补：具体用途')],
          ['其他生图平台', T.ph('名称'), T.ph('用途')]
        ]
      )}

      <h2 id="d-video">生视频</h2>
      ${T.table(
        ['工具', '用途', '我的记录'],
        [
          ['可灵', '图生视频 / 文生视频', T.ph('待补')],
          ['Seedance', '视频生成', T.ph('待补')],
          ['即梦', '视频生成', T.ph('待补')]
        ]
      )}
      <p>观察：视频生成目前最实际的用法不是"直接出成片"，而是<strong>做动态分镜、做氛围参考</strong>。要接进实际项目，还是要人工挑片段、重新剪。</p>

      <h2 id="d-music">生音乐</h2>
      <ul>
        <li><strong>Suno</strong>：在小游戏公司实习期间用它生成游戏音乐，验证了"小团队也能有可用配乐"这条路。</li>
        <li>${T.ph('其他工具与用途')}</li>
      </ul>

      <h2 id="d-how">我怎么用它们：一条实际的工作分工</h2>
      <ul class="tl">
        <li>
          <div class="when">想不清楚的时候</div>
          <div class="what">用对话型模型做结构梳理</div>
          <div class="desc">世界观拆分、章节结构、信息释放表——先把纸面逻辑理顺。</div>
        </li>
        <li>
          <div class="when">要动手的时候</div>
          <div class="what">用 CLI / 工作台型 Agent 进工程</div>
          <div class="desc">直接改脚本、排报错、批量处理资产，让它在真实文件上干活。</div>
        </li>
        <li>
          <div class="when">缺素材的时候</div>
          <div class="what">生图 → 生 3D → 进引擎</div>
          <div class="desc">概念图先定调，模型够用就用，不够用就换现成资产，不硬撑。</div>
        </li>
        <li>
          <div class="when">要动态与氛围的时候</div>
          <div class="what">生视频 + 生音乐</div>
          <div class="desc">做参考片段与临时配乐，成片仍然自己剪。</div>
        </li>
        <li>
          <div class="when">团队做比赛 / 实习时</div>
          <div class="what">把工具当"补位队友"</div>
          <div class="desc">我补不上的美术与音频环节，用工具顶上，让整体推进不被卡住。</div>
        </li>
      </ul>

      <h2 id="d-note">结论与待补</h2>
      <ul>
        <li>工具的价值不在"新"，而在<strong>能不能嵌进你已有的流程</strong>。试一百个不如把一个用到熟。</li>
        <li>我的核心竞争力从来不是单点技术，而是<strong>知道遇到什么问题该找哪个工具</strong>。</li>
        <li>${T.ph('待补：比赛经历（比赛名称、我的角色、结果）')}</li>
        <li>${T.ph('待补：小游戏公司实习的具体工作内容与时长')}</li>
      </ul>
    `
  };
})();
