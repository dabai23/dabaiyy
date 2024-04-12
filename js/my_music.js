// 当文档加载完成（DOM树构建完毕）后，执行以下代码
document.addEventListener('DOMContentLoaded', function () {
  // 选择ID为'play-history'的元素下的所有table行
  var tableRows = document.querySelectorAll('#play-history table tr');
  // 使用forEach遍历所有选择到的表格行
  tableRows.forEach(function (row) {
    // 为每一行添加点击事件监听器
    row.addEventListener('click', function () {
      // 当用户点击某一行时，弹出警告对话框，显示指定的文本
      alert('回念音乐，是灵魂的旅程，记录着时光的和声，编织着心灵的旋律。');
    });
  });
});