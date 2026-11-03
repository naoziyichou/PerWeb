/* ==========================================================================
   个人网站 · 应用逻辑
   - 左侧：结构总览（可折叠目录）
   - 中间：正文
   - 右侧：当前页面小目录 + 滚动高亮
   路由：hash（#/work/a），file:// 直接双击打开也能用
   ========================================================================== */
(function () {
  'use strict';

  var CONTENT = window.CONTENT || {};

  var HOME = 'home';

  /* ---------------------------------------------------------- 左侧导航配置 */
  var NAV = [
    {
      title: '开始',
      items: [
        { path: 'home', icon: '🏠', label: '首页' }
      ]
    },
    {
      title: '作品集',
      items: [
        { path: 'work', icon: '🗂', label: '作品集总览' },
        { path: 'work/a', icon: '🦽', label: '项目 A ·《风轮之旅》' },
        { path: 'work/b', icon: '🧠', label: '项目 B · 本地动作生成' },
        { path: 'work/c', icon: '📜', label: '项目 C ·《刺桐旧梦》' },
        { path: 'work/d', icon: '🧰', label: '项目 D · AI 工具观察' }
      ]
    },
    {
      title: '关于',
      items: [
        { path: 'about', icon: '🌱', label: '关于我' },
        { path: 'cv', icon: '📄', label: '简历' },
        { path: 'notes', icon: '✏️', label: '笔记' },
        { path: 'contact', icon: '✉️', label: '联系' }
      ]
    }
  ];

  var SITE = {
    name: '陈阳',
    mark: '阳',
    sub: '动画与互动媒体 · AI 工具链探索者'
  };

  /* ---------------------------------------------------------------- 元素 */
  var elNav       = document.getElementById('sideNav');
  var elCrumbs    = document.getElementById('crumbs');
  var elView      = document.getElementById('view');
  var elToc       = document.getElementById('tocBody');
  var elContent   = document.querySelector('.content');
  var elSidebar   = document.getElementById('sidebar');
  var elScrim     = document.getElementById('scrim');
  var elMenuBtn   = document.getElementById('menuBtn');
  var elToTop     = document.getElementById('toTop');

  var currentPath = null;
  var tocMap = [];   // [{id, level}]

  /* ------------------------------------------------------------ 路由工具 */
  function routeFromHash() {
    var raw = decodeURIComponent(window.location.hash || '');
    var p = raw.replace(/^#\/?/, '').trim();
    p = p.replace(/\/+$/, '');
    return p || HOME;
  }

  function go(path) {
    var target = '#/' + path;
    if (window.location.hash === target) {
      render();
    } else {
      try { window.location.hash = target; }
      catch (e) { render(); }
    }
  }
  window.__go = go;   // 备用入口

  /* ------------------------------------------------------------ 侧边栏渲染 */
  function isUnderPath(path, base) {
    return path === base || path.indexOf(base + '/') === 0;
  }

  function buildSidebar() {
    var html = '';
    NAV.forEach(function (group) {
      var hasActive = group.items.some(function (it) {
        return isUnderPath(currentPath, it.path);
      });
      html += '<div class="side-group' + (hasActive ? '' : ' collapsed') + '">';
      html += '  <button class="side-group-title" type="button">' +
              '    <span class="caret">▼</span>' + group.title +
              '  </button>';
      html += '  <ul class="side-list">';
      group.items.forEach(function (it) {
        var active = (it.path === currentPath);
        var isSub  = isUnderPath(currentPath, it.path);
        // 小节列表直接取自内容定义（CONTENT[path].subs），避免两处维护不一致
        var page = CONTENT[it.path];
        var subs = (page && page.subs) ? page.subs.map(function (s) {
          return Array.isArray(s) ? s : [s.id, s.text];
        }) : null;
        html += '<li>';
        html += '  <a class="side-link' + (active ? ' active' : '') + '" href="#/' + it.path + '">' +
                '    <span class="ico">' + it.icon + '</span>' +
                '    <span class="txt">' + it.label + '</span>' +
                '  </a>';
        if (isSub && subs && subs.length) {
          html += '<ul class="side-sub">';
          subs.forEach(function (s) {
            html += '<li><a href="#/' + it.path + '/' + s[0] + '" data-sub="' + s[0] + '">' + s[1] + '</a></li>';
          });
          html += '</ul>';
        }
        html += '</li>';
      });
      html += '  </ul>';
      html += '</div>';
    });
    elNav.innerHTML = html;

    // 折叠交互
    Array.prototype.forEach.call(elNav.querySelectorAll('.side-group-title'), function (btn) {
      btn.addEventListener('click', function () {
        btn.parentNode.classList.toggle('collapsed');
      });
    });
  }

  /* -------------------------------------------------------- 右侧 TOC 渲染 */
  function buildToc() {
    var nodes = elView.querySelectorAll('h2, h3');
    tocMap = [];
    if (!nodes.length) {
      elToc.innerHTML = '<div class="empty">本页没有小标题</div>';
      return;
    }
    var html = '<ul>';
    var auto = 0;
    Array.prototype.forEach.call(nodes, function (n) {
      if (!n.id) n.id = 'sec-' + (++auto);   // 没写 id 的小标题也能被目录定位
      var lv = n.tagName === 'H2' ? 2 : 3;
      tocMap.push({ id: n.id, level: lv, el: n });
      html += '<li class="lv' + lv + '"><a href="#/' + currentPath + '/' + n.id + '" data-toc="' + n.id + '">' +
              n.textContent.replace(/^·\s*/, '') + '</a></li>';
    });
    html += '</ul>';
    elToc.innerHTML = html;
  }

  /* --------------------------------------------------------------- 面包屑 */
  function buildCrumbs(page) {
    var parts = ['<a href="#/' + HOME + '">首页</a>'];
    (page.crumb || []).forEach(function (c) {
      parts.push('<span class="sep">/</span>');
      parts.push(c.href ? '<a href="' + c.href + '">' + c.text + '</a>' : '<span class="now">' + c.text + '</span>');
    });
    if (!page.crumb || !page.crumb.length) {
      if (page.id !== HOME) {
        parts.push('<span class="sep">/</span>');
        parts.push('<span class="now">' + (page.nav || page.title) + '</span>');
      }
    }
    elCrumbs.innerHTML = parts.join('');
  }

  /* ---------------------------------------------------------------- 主渲染 */
  function render() {
    var path = routeFromHash();
    var anchor = null;              // 需要在渲染后滚过去的小节
    var page = CONTENT[path];

    // 支持 #/work/b/b-install-env 这种"页面 + 小节"的地址
    if (!page && path.indexOf('/') > 0) {
      var cut = path.lastIndexOf('/');
      var maybePage = path.slice(0, cut);
      var maybeAnchor = path.slice(cut + 1);
      if (CONTENT[maybePage]) {
        path = maybePage;
        anchor = maybeAnchor;
        page = CONTENT[maybePage];
      }
    }

    if (!page) {
      page = {
        id: path,
        nav: '未找到',
        title: '页面未找到',
        crumb: [],
        html: '<div class="page-eyebrow">404</div><h1>这一页还没写</h1>' +
              '<p class="lead">路径 <code>#/' + path + '</code> 在内容表里找不到。</p>' +
              '<p><a href="#/' + HOME + '">回首页</a> · <a href="#/work">看作品集</a></p>'
      };
    }

    currentPath = path;

    // 正文
    elView.className = '';
    elView.innerHTML = page.html;
    void elView.offsetWidth;          // 重启动画
    elView.className = 'view-enter';

    document.title = (page.id === HOME ? SITE.name + ' · 探索记录' : page.title + ' · ' + SITE.name);

    buildCrumbs(page);
    buildToc();
    buildSidebar();

    elContent.scrollTop = 0;
    elToTop.classList.remove('show');

    closeDrawer();

    // 路由切换一律瞬时定位（页面本身开了平滑滚动，这里必须显式覆盖，
    // 否则锚点校正会和上一次平滑滚动互相打断）
    function jumpTo(top) {
      try { window.scrollTo({ top: top, behavior: 'instant' }); }
      catch (e) { window.scrollTo(0, top); }
    }

    var anchored = false;
    if (anchor) {
      var target = document.getElementById(anchor);
      if (target) {
        jumpTo(0);
        var anchorTop = target.getBoundingClientRect().top + window.scrollY - 78;
        jumpTo(Math.max(0, anchorTop));
        anchored = true;
        setActiveToc(anchor);
      }
    }
    if (!anchored) jumpTo(0);
    updateSpy();
  }

  /* --------------------------------------------------- 滚动高亮（scroll spy） */
  function updateSpy() {
    if (!tocMap.length) return;
    var y = window.scrollY + 130;
    var activeId = tocMap[0].id;
    for (var i = 0; i < tocMap.length; i++) {
      if (tocMap[i].el.offsetTop <= y) activeId = tocMap[i].id;
    }
    setActiveToc(activeId);
  }

  function setActiveToc(id) {
    // 右侧
    Array.prototype.forEach.call(elToc.querySelectorAll('a'), function (a) {
      a.classList.toggle('active', a.getAttribute('data-toc') === id);
    });
    // 左侧（当前页面的小节）
    Array.prototype.forEach.call(elNav.querySelectorAll('.side-sub a'), function (a) {
      a.classList.toggle('active', a.getAttribute('data-sub') === id);
    });
  }

  /* -------------------------------------------------------------- 移动端抽屉 */
  function openDrawer() {
    elSidebar.classList.add('open');
    elScrim.classList.add('show');
  }
  function closeDrawer() {
    elSidebar.classList.remove('open');
    elScrim.classList.remove('show');
  }

  /* --------------------------------------------------- 站内跳转（锚点兼容） */
  function interceptLinks() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';

      // 站内页内锚点：#/work/a/a-bugs
      var m = href.match(/^#\/([^#]*?)\/([a-z0-9-]+)$/i);
      if (m && CONTENT[m[1]] && document.getElementById(m[2])) {
        e.preventDefault();
        var samepage = (m[1] === currentPath);
        if (!samepage) {
          history.replaceState(null, '', '#/' + m[1]);
          render();
        }
        setTimeout(function () {
          var el = document.getElementById(m[2]);
          if (el) {
            var top = el.getBoundingClientRect().top + window.scrollY - 78;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
          setActiveToc(m[2]);
        }, samepage ? 0 : 30);
        closeDrawer();
        return;
      }

      // 站内页面跳转
      if (href.indexOf('#/') === 0) {
        e.preventDefault();
        go(href.slice(2));
        closeDrawer();
      }
    });
  }

  /* ------------------------------------------------------------------ 启动 */
  function boot() {
    interceptLinks();

    window.addEventListener('hashchange', render);
    window.addEventListener('scroll', updateSpy, { passive: true });
    window.addEventListener('resize', updateSpy);

    elMenuBtn.addEventListener('click', openDrawer);
    elScrim.addEventListener('click', closeDrawer);

    elToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      elToTop.classList.toggle('show', window.scrollY > 620);
    }, { passive: true });

    // 站名
    document.getElementById('brandMark').textContent = SITE.mark;
    document.getElementById('brandName').textContent = SITE.name;
    document.getElementById('brandSub').textContent = SITE.sub;
    document.getElementById('sideWho').textContent = SITE.name + ' · ' + new Date().getFullYear();

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
