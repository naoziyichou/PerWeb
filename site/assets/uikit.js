/* ==========================================================================
   UI 工具：供内容文件调用的 HTML 片段生成器
   ========================================================================== */
(function () {
  window.T = {
    /** 标签组 */
    tags(list) {
      return '<div class="tags">' + list.map(function (t) {
        return '<span class="tag">' + t + '</span>';
      }).join('') + '</div>';
    },

    /** 表格：T.table(['列1','列2'], [['a','b'], ...]) */
    table(head, rows) {
      var h = head.map(function (c) { return '<th>' + c + '</th>'; }).join('');
      var b = rows.map(function (r) {
        return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
      }).join('');
      return '<div class="table-wrap"><table><thead><tr>' + h +
             '</tr></thead><tbody>' + b + '</tbody></table></div>';
    },

    /** 待补占位（提醒我后面一定要改掉） */
    ph(text) {
      return '<span class="placeholder">[' + text + ']</span>';
    }
  };
})();
