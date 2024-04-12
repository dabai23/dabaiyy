// 等待整个页面DOM加载完成后执行函数
document.addEventListener("DOMContentLoaded", function () {
  // 获取页面上的header元素
  const header = document.querySelector('header');
  // 注册一个滚动事件监听器，当用户滚动页面时触发回调函数
  window.addEventListener('scroll', function () {
    // 检查滚动条的位置是否超过50像素（从页面顶部算起）
    if (window.scrollY > 50) {
      // 如果滚动距离大于50像素，则将header背景颜色更改为纯色深灰色
      header.style.backgroundColor = '#333';
    } else {
      // 否则，当滚动条回到页面顶部附近（小于等于50像素）时，
      // 将header背景颜色恢复为原始样式，这里假设原始样式为从左到右的线性渐变颜色（从#191970渐变到#333）
      header.style.backgroundColor = 'linear-gradient(to right, #191970, #333)';
      // 注意：此处的颜色值可能需要替换为您实际应用中的原始背景颜色
    }
  });
});