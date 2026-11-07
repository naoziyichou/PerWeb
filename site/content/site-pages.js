/* ==========================================================================
   首页 · 关于我 · 联系 · 简历 · 笔记
   ========================================================================== */
(function () {
  window.CONTENT = window.CONTENT || {};

  const T = window.T; // 模板工具（见 app.js 之前加载的 uikit.js）

  /* ---------------------------------------------------------------- 首页 */
  CONTENT.home = {
    id: 'home',
    nav: '首页',
    title: '首页',
    crumb: [],
    html: `
      <section class="hero">
        <div class="hi">你好，我是</div>
        <h1>陈阳</h1>
        <p class="lead">
          动画与互动媒体背景，AI 工具链探索者。<br>
          围绕游戏机制与互动叙事，用 <strong>AI Agent</strong> 把想法变成<strong>可交互原型</strong>。
        </p>
        <div class="status-line">
          <span class="pulse"></span>
          正在准备申请港理工 IME（创新多媒体娱乐）硕士 · 持续探索互动叙事 / 具身智能 / AI 工作流
        </div>
        <div class="cta-row">
          <a class="btn primary" href="#/work">查看作品 →</a>
          <a class="btn" href="#/about">关于我</a>
          <a class="btn" href="#/contact">联系我</a>
        </div>
      </section>

      <h2 id="overview">这里有什么</h2>
      <p>这里记录三个互动项目：轮椅机甲的移动体验、狗狗捉迷藏的线索设计，以及跨越三个年代的泉州归乡故事。每个项目都呈现<strong>设计问题、关键取舍与当前成果</strong>。</p>

      <div class="grid">
        <a class="card" href="#/work/a">
          <img class="card-cover" src="site/assets/img/wind-city-entry.webp" alt="风轮之旅实机：轮椅与灰烬城邦入口" width="1600" height="900" loading="lazy">
          <div class="k">项目 A · 个人探索</div>
          <div class="t">《风轮之旅》</div>
          <p class="d">让选择道路成为冒险：驾驶轮椅在灰烬城邦中移动、滑翔、沿墙探索。UE 5.8 原型与 84 秒展示片。</p>
          <div class="foot">移动与场景原型 · 实机视频 →</div>
        </a>
        <a class="card" href="#/work/b">
          <img class="card-cover" src="site/assets/img/following-the-scent-greybox.png" alt="Following the Scent实机：狗狗捉迷藏灰盒" width="1600" height="900" loading="lazy">
          <div class="k">项目 B · 当前在做</div>
          <div class="t">《Following the Scent》狗狗捉迷藏</div>
          <p class="d">通过短暂的方向嗅闻寻找会转移的 AI 狗。围绕线索、遮挡与追逐，逐步验证游戏机制。</p>
          <div class="foot">M0 灰盒 · 设计迭代与模型对照实验 →</div>
        </a>
        <a class="card" href="#/work/c">
          <img class="card-cover" src="site/assets/img/citong-2003-arcade.webp" alt="刺桐旧梦概念试稿：横向分层骑楼街景" width="1600" height="900" loading="lazy">
          <div class="k">项目 C · 叙事设计</div>
          <div class="t">《刺桐旧梦》</div>
          <p class="d">一位槟城养女沿着泉州街巷、三个年代和一只布香火袋，找回家族记忆。</p>
          <div class="foot">叙事与视觉开发 · Unity 街景试搭 →</div>
        </a>
      </div>

      <h2 id="now">当前状态</h2>
      <div class="meta">
        <div class="row"><div class="k">申请方向</div><div class="v">香港理工大学 · 创新多媒体娱乐（IME）硕士，计划 11–12 月递交</div></div>
        <div class="row"><div class="k">在做的事</div><div class="v">推进《Following the Scent》狗狗捉迷藏：准备无提示试玩，验证嗅闻线索与寻找体验</div></div>
        <div class="row"><div class="k">在学的事</div><div class="v">游戏 AI 的规则与信息边界、AI 工具的对照评估、互动叙事的信息释放节奏</div></div>
        <div class="row"><div class="k">关注方向</div><div class="v">互动叙事 · 具身智能 · 沉浸式体验 · AI 产品</div></div>
      </div>

      <h2 id="about-short">关于我（短版）</h2>
      <div class="quote">
        <p>动画与互动媒体背景，AI 工具链探索者。<br>
        用 AI Agent 辅助原型开发，关注玩法、叙事与玩家获得信息的方式。<br>
        关注互动叙事、具身智能与更宏大的技术 + 创意结合形态。</p>
      </div>
      <p><a href="#/about">读完整版 →</a></p>

      <h2 id="tags">关键词</h2>
      ${T.tags([
        'AI 工作流', '互动叙事', '技术原型', '具身智能', 'AI Agent',
        '本地部署', '跨学科', '非传统路径', '克苏鲁式探索'
      ])}

      <h2 id="contact-short">联系</h2>
      <p>如果你也在做 AI、互动叙事、具身智能相关的事，欢迎交流。我尤其想认识能一起做原型、聊工具、互相给反馈的人。</p>
      <div class="cta-row">
        <a class="btn primary" href="#/contact">全部联系方式</a>
        <a class="btn" href="#/cv">看简历</a>
      </div>
    `
  };

  /* -------------------------------------------------------------- 关于我 */
  CONTENT.about = {
    id: 'about',
    nav: '关于我',
    title: '关于我',
    crumb: [],
    html: `
      <div class="page-eyebrow">ABOUT</div>
      <h1>我的路径不太传统，但它是有逻辑的</h1>
      <p class="lead">动画与互动媒体专业，关注游戏机制、叙事结构与 AI 辅助创作。我用原型检验想法，也通过迭代与对照实验决定工具的使用方式。</p>

      <h2 id="who">我是谁</h2>
      <p>我是陈阳，动画与互动媒体专业。目前正在制作狗狗捉迷藏《Following the Scent》，也在探索《风轮之旅》的轮椅移动体验，以及《刺桐旧梦》的泉州归乡叙事与横向场景。</p>
      <p>我擅长<strong>叙事架构</strong>和<strong>世界观构建</strong>，高考语文是我最好的科目。我不追求华丽文采，更在意结构、逻辑和互动节奏。我对互动叙事、具身智能、沉浸式体验和 AI 产品方向都有兴趣，不想把自己局限在"游戏"这一个标签里。</p>
      <p>这个网站记录我的探索、项目和思考。如果你也在做类似的事，欢迎交流。</p>

      <h2 id="traits">几条关于我的事实</h2>

      <h3>1 · 跨学科整合者，而不是单一专才</h3>
      <ul>
        <li><strong>关注的问题</strong>：玩法、空间和叙事如何共同构成体验。</li>
        <li><strong>工作方式</strong>：用 AI Agent 辅助实现，在原型中验证设计。</li>
        <li><strong>定位</strong>：不是纯技术、不是纯艺术、不是纯策划，而是<strong>用工具把创意整合成可交互原型的人</strong>。</li>
      </ul>

      <h3>2 · AI 工具链的主动探索者</h3>
      <ul>
        <li>用 AI Agent 尝试建模、动画、写代码，并让它们直接进引擎里干活（Blender / UE + MCP）。</li>
        <li>在狗狗捉迷藏项目中，对比本地模型与规则 AI 的藏身点选择，用实测结果决定运行时方案。</li>
        <li>把工具放进具体制作任务中评估，记录适用范围与限制。</li>
        <li>对具身智能、互动机器人有明确的兴趣。</li>
      </ul>

      <h3>3 · 叙事架构 &gt; 文采</h3>
      <ul>
        <li>能较快搭起世界观和故事原型，擅长<strong>结构、逻辑、信息释放节奏</strong>。</li>
        <li>相信"玩家在正确的时间拿到正确的一点点信息"比一次被告知全部更重要。</li>
        <li>对互动叙事、游戏作为"第九艺术"有直觉，但不想只做游戏。</li>
      </ul>

      <h3>4 · 学习方式是问题驱动，不是教程驱动</h3>
      <ul>
        <li>看不进 200 集长教程，跟到 30 集就会因为 DDL 中断。</li>
        <li>遇到 bug 能排一整天，但讨厌没有反馈的机械重复。</li>
        <li>专注力只在"有反馈、能看见东西动起来"的事情上启动。</li>
        <li>在资源极限下被迫学会优化、取舍和绕路——这反而成了我的方法。</li>
      </ul>

      <h3>5 · 性格：敏感、自省，但底线清楚</h3>
      <p>正反馈不多，成绩不顶尖，也会怕被否定；回避冲突、姿态放得低。但底线被踩的时候是有勇气掀桌的。我现在的低调更像战略性撤退，不是软弱。</p>

      <h2 id="direction">当前方向</h2>
      <div class="meta">
        <div class="row"><div class="k">申请</div><div class="v">港理工 IME（创新多媒体娱乐），计划 11–12 月递交</div></div>
        <div class="row"><div class="k">作品集策略</div><div class="v">用实机、设计结构与迭代记录，呈现每个项目当前解决的问题</div></div>
        <div class="row"><div class="k">未来方向</div><div class="v">互动叙事 · 具身智能 · AI 产品 · 沉浸式体验</div></div>
        <div class="row"><div class="k">自我比喻</div><div class="v">形状奇怪、深度不明，像克苏鲁，但持续在挖</div></div>
      </div>

      <h2 id="keywords">关键词</h2>
      ${T.tags([
        'AI 工作流', '互动叙事', '技术原型', '具身智能', 'AI Agent',
        '本地部署', '跨学科', '非传统路径', '克苏鲁式探索'
      ])}

      <div class="note">
        <b>当前关注：</b>从能运行的原型继续走向可被陌生玩家理解的体验，保留设计、验证与迭代记录。
      </div>
    `
  };

  /* ---------------------------------------------------------------- 联系 */
  CONTENT.contact = {
    id: 'contact',
    nav: '联系',
    title: '联系',
    crumb: [],
    html: `
      <div class="page-eyebrow">CONTACT</div>
      <h1>让能理解的人找到我</h1>
      <p class="lead">如果你也在做 AI、互动叙事、具身智能相关的事，欢迎交流。我尤其想认识能一起做原型、聊工具、互相给反馈的人。</p>

      <h2 id="channels">渠道</h2>
      <div class="grid">
        <div class="card">
          <div class="k">邮箱</div>
          <div class="t">${T.ph('你的邮箱')}</div>
          <p class="d">最稳的渠道，申请与合作都走这里。</p>
        </div>
        <div class="card">
          <div class="k">GitHub</div>
          <div class="t">${T.ph('你的 GitHub 主页')}</div>
          <p class="d">原型、脚本与踩坑记录。</p>
        </div>
        <div class="card">
          <div class="k">小红书 / B 站</div>
          <div class="t">${T.ph('你的账号')}</div>
          <p class="d">过程视频与实验记录。</p>
        </div>
        <div class="card">
          <div class="k">微信</div>
          <div class="t">${T.ph('可放可不放')}</div>
          <p class="d">愿意公开时再放。</p>
        </div>
      </div>

      <h2 id="what-i-want">我想找什么样的交流</h2>
      <ul>
        <li>一起做<strong>可交互原型</strong>的人：我做叙事架构与整合，你擅长建模 / 代码 / 美术都可以。</li>
        <li>聊<strong>工具与工作流</strong>的人：Agent、本地部署、生成式素材管线。</li>
        <li>能给我<strong>直接反馈</strong>的人：我不怕被指出问题，只怕没有反馈。</li>
      </ul>

      <div class="note">
        <b>待补：</b>把上面四个渠道换成你真实在用的，删掉不想公开的。联系页只留你接得住的渠道就够了。
      </div>
    `
  };

  /* ---------------------------------------------------------------- 简历 */
  CONTENT.cv = {
    id: 'cv',
    nav: '简历',
    title: '简历',
    crumb: [],
    html: `
      <div class="page-eyebrow">CV</div>
      <h1>简历</h1>
      <p class="lead">这里放精简版。写法上宁可写"正在探索"，也不把不擅长的东西写成"精通"。</p>

      <div class="note">
        <b>这一页需要你核对。</b>工作区里的 <code>个人简历.pdf / .docx</code> 我这边解不出文字（是去年写的版本），所以下面只填了我从项目文档里能确认的信息。
        带 <span class="placeholder">[待补]</span> 的空位请用最新简历改掉，尤其是<strong>学校、专业全称、起止时间</strong>。
      </div>

      <h2 id="edu">教育</h2>
      <div class="meta">
        <div class="row"><div class="k">学校</div><div class="v">${T.ph('学校全称')}</div></div>
        <div class="row"><div class="k">专业</div><div class="v">动画与互动媒体</div></div>
        <div class="row"><div class="k">时间</div><div class="v">${T.ph('20XX.09 – 20XX.06')}</div></div>
        <div class="row"><div class="k">GPA</div><div class="v">3.18</div></div>
        <div class="row"><div class="k">语言</div><div class="v">IELTS 6.0</div></div>
      </div>

      <h2 id="apply">申请目标</h2>
      <p>香港理工大学 · 创新多媒体娱乐（Innovative Multimedia Entertainment, IME）硕士，计划 11–12 月递交。</p>

      <h2 id="projects">项目</h2>

      <h3>《风轮之旅》Wheel of the Wind · 轮椅机甲动作冒险（个人探索）</h3>
      <ul>
        <li>工作：世界观与人物改编 · 移动机制和空间设计 · AI 辅助制作流程 · 原型整合</li>
        <li>工具：UE 5.8 蓝图 · Blender · AI 生图生模（即梦 / Tripo）· PolyHaven 资产 · AI Agent 辅助实现</li>
        <li>成果：轮椅移动与城邦场景原型，包含墙面移动、滑翔、雪橇的实机画面；已有 84 秒剪辑展示片</li>
        <li>详情：<a href="#/work/a">项目 A 案例页</a></li>
      </ul>

      <h3>《Following the Scent》狗狗捉迷藏（进行中）</h3>
      <ul>
        <li>工作：玩法与嗅闻信息边界设计 · 制作范围与迭代取舍 · AI 工具对照实验；AI Agent 辅助开发</li>
        <li>工具：Godot 4.7 · GDScript；Ollama / Llama 3.2 3B 用于独立实验</li>
        <li>成果：一名真人寻找者 vs 一只规则 AI 躲藏狗的可运行灰盒，含遮挡、嗅闻、抓捕、计时与结算</li>
        <li>评估：完成 30 次模型选点调用，与两条规则基线对照；据此保留规则 AI 作为运行时方案</li>
        <li>详情：<a href="#/work/b">项目 B 案例页</a></li>
      </ul>

      <h3>《刺桐旧梦》· 泉州归乡叙事（开发中）</h3>
      <ul>
        <li>工作：三年代叙事与人物关系 · 布香火袋传递及证据链 · 地方空间设计 · AI 辅助视觉试稿</li>
        <li>方向：侧视横向探索、二维分层剪影背景；人物表现方式仍待比较</li>
        <li>成果：已校订故事大纲，形成骑楼年代对照、药厂调查与崇武救助场景试稿，并制作九层街景资源与 Unity 昼夜光色试验场景</li>
        <li>阶段：保留旧版 Godot 对话样片；新版剧情集成、可玩切片与 AI NPC 接入待验证</li>
        <li>详情：<a href="#/work/c">项目 C 案例页</a></li>
      </ul>

      <h2 id="skills">技能</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>方向</th><th>状态</th><th>说明</th></tr></thead>
          <tbody>
            <tr><td>AI Agent 工作流</td><td>熟练使用</td><td>用 Agent 编排建模 / 写脚本 / 排错，接入 Blender、UE 等工具</td></tr>
            <tr><td>本地模型部署</td><td>能独立跑通</td><td>环境搭建、依赖冲突排查、显存与量化取舍</td></tr>
            <tr><td>叙事与世界观架构</td><td>强项</td><td>分支结构、信息释放节奏、互动叙事原型</td></tr>
            <tr><td>原型搭建</td><td>能独立完成</td><td>UE 蓝图 / Godot 中搭可演示原型，机制优先</td></tr>
            <tr><td>引擎与工具</td><td>正在探索</td><td>UE 5.8、Godot 4.7、Blender；代码与建模靠 AI 辅助</td></tr>
            <tr><td>建模 / 编程 / 视觉设计</td><td>不擅长</td><td>用 AI 工具与现成资产绕过，不硬撑</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="awards">奖项 / 经历</h2>
      <ul>
        <li>与小游戏公司实习经历：使用 Suno 生成游戏音乐（${T.ph('公司名与时间段')}）。</li>
        <li>与同学组队参加 ${T.ph('比赛名称')}（${T.ph('奖项 / 结果')}）。</li>
        <li>${T.ph('其他奖项，有就写，没有就删掉这一行')}</li>
      </ul>

      <h2 id="cv-download">下载</h2>
      <p>${T.ph('把最新的简历 PDF 放进站点目录，然后把这里换成下载链接')}</p>
    `
  };

  /* ---------------------------------------------------------------- 笔记 */
  CONTENT.notes = {
    id: 'notes',
    nav: '笔记',
    title: '笔记',
    crumb: [],
    html: `
      <div class="page-eyebrow">NOTES</div>
      <h1>笔记</h1>
      <p class="lead">不长，200–500 字就够。目的不是写文章，而是留下"我一直在想这件事"的痕迹。</p>

      <h2 id="plan">选题计划</h2>
      <ul>
        <li>《Following the Scent》：为什么嗅闻只给方向，不画出路径</li>
        <li>用 AI Agent 直接改引擎工程：哪些能交给它，哪些不能</li>
        <li>《刺桐旧梦》：如何用同一只布袋连接三个年代</li>
        <li>《风轮之旅》：角色装配与形态切换中的两次取舍</li>
        <li>30 次藏身点选择实验：模型输出格式正确，为什么仍保留规则 AI</li>
        <li>申请港理工 IME 的过程记录</li>
      </ul>

      <h2 id="first">第一篇</h2>
      <div class="note">
        <b>待写：</b>这一页现在只有框架。等第一篇写完，把标题 + 日期 + 标签 + 正文放进 <code>site/content/pages.js</code>，或者单独拆成 <code>site/content/notes-01.js</code>。
      </div>
    `
  };
})();
