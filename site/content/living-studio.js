/* Living Studio — course artworks embedded in the personal website. */
(function () {
  window.CONTENT = window.CONTENT || {};
  const T = window.T;
  CONTENT['work/landscape'] = {
    id: 'work/landscape',
    nav: '掌中山水',
    title: '掌中山水 Landscape in Hand',
    crumb: [{ text: '作品集', href: '#/work' }, { text: '掌中山水' }],
    subs: [
      { id: 'landscape-play', text: '在线体验' },
      { id: 'landscape-idea', text: '让手进入山水' },
      { id: 'landscape-upgrade', text: '从旧作到新作' },
      { id: 'landscape-controls', text: '操作与作品信息' }
    ],
    html: `
      <div class="page-eyebrow">LIVING STUDIO · NETART 02</div>
      <h1>《掌中山水》Landscape in Hand</h1>
      <p class="lead">捏起一座山，留下一片水。把自己的手伸进粒子景观，像捏泥一样塑造山峰与山谷。</p>
      ${T.tags(['在线互动', 'Creative Coding 2.0', 'p5.js', 'MediaPipe', '2026 年 11 月'])}

      <h2 id="landscape-play">在线体验</h2>
      <p>建议先<strong>全屏体验</strong>。点击作品里的“开启手势塑形”并允许摄像头，脸和手会出现在镜像背景中；先张开手，再把“捏合点”圆圈移到想修改的山水上。</p>
      <div class="artwork-actions">
        <button class="btn primary" type="button" data-artwork-fullscreen="landscape-stage">全屏体验 ↗</button>
        <a class="btn" href="artworks/landscape-in-hand/index.html" target="_blank" rel="noopener">在新窗口打开 →</a>
      </div>
      <div class="artwork-stage" id="landscape-stage">
        <iframe class="artwork-frame" data-artwork="landscape" src="artworks/landscape-in-hand/index.html" title="掌中山水：摄像头手势塑形互动作品" allow="camera; fullscreen" allowfullscreen loading="lazy"></iframe>
      </div>
      <p class="artwork-caption">没有摄像头也可以用鼠标塑形。手势识别在你的设备上处理；刷新页面会恢复最初的山水。</p>

      <h2 id="landscape-idea">让手进入山水</h2>
      <p>我希望观众感到自己抓住了一片有重量的地形。捏合拇指和食指后，上移手掌让山峰隆起，下移把地形压成山谷；松开后，改变留在景观里。水面随洼地出现，河流沿新的坡度寻找方向。</p>
      <p>镜像背景让身体成为作品的一部分。手上的圆圈标出捏合位置，抓取时的连线标出正在改变的地形，让动作和山水之间的关系更容易看清。</p>

      <h2 id="landscape-upgrade">从旧作到新作</h2>
      ${T.table(['版本', '互动方式', '景观变化'], [
        ['原作 Autumn cry', '摄像头亮度驱动地形显示；鼠标旋转与调节水位', '粒子等高线、湖泊与程序化河流'],
        ['Creative Coding 2.0', 'MediaPipe 识别手部关键点；捏合抓取与上下塑形', '直接修改高度数据，等高线、水面和下坡河流共同响应'],
        ['镜像背景迭代', '在山水后面显示脸和手，加入捏合点与抓取连线', '视频和手势采用同一套镜像与缩放关系，帮助对应操作位置']
      ])}
      <p>我选择了捏泥式的互动方向，并根据体验提出背景定位需求。AI 助手协助完成代码实现、兼容问题排查与自动化验证。模型使用 MediaPipe 官方预训练手部识别；捏合判断与塑形效果由程序实现。</p>

      <h2 id="landscape-controls">操作与作品信息</h2>
      <ul>
        <li><strong>手势：</strong>先张手定位，拇指与食指捏合抓取，上移造山、下移成谷，松开保留。</li>
        <li><strong>鼠标：</strong>左键按住地形上下拖动塑形，右键拖动旋转，滚轮缩放。</li>
        <li><strong>工具：</strong>可调塑形范围、湖水水位和背景明暗；支持撤销、重置山水、归位视角和留影。</li>
        <li><strong>体验：</strong>使用支持摄像头与 WebGL 的新版浏览器，保持手完整入镜、光线充足。若内嵌页面没有出现授权提示，可以在新窗口打开作品。</li>
      </ul>
      <p>2026 年 11 月 · AIM3193 NetArt 02。河流采用程序化下坡轨迹，作为景观表现。脸显示在视频背景中，当前互动模型识别的是手部。</p>
    `
  };
})();
