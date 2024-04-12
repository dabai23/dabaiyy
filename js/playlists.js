// 1. 获取页面上所有类名为 'playlist-card' 的元素，存储在一个 NodeList 中
var songBlocks = document.querySelectorAll('.playlist-card');
// 2. 对获取到的所有 '.playlist-card' 元素进行遍历，通过forEach方法为每个元素绑定 click 事件处理器
songBlocks.forEach(function (block, index) {
  // 3. 为当前遍历到的 'playlist-card' 元素（记作 block）添加点击事件监听器
  block.addEventListener('click', function () {
    // 4. 根据当前元素在 NodeList 中的索引（记作 index）来执行不同的操作
    switch (index) {
      // 5. 当索引为 0 时
      case 0:
        // 6. 弹出提示信息，描述与第 0 个 '.playlist-card' 元素关联的音乐类型
        alert('浪漫旋律，是夜空中绽放的恋曲，柔软如月光般温暖心房。');
        break;
      // 7. 当索引为 1 时
      case 1:
        // 8. 弹出提示信息，描述与第 1 个 '.playlist-card' 元素关联的音乐类型
        alert('夜晚放松，是星光的私语，轻拂心弦，带来心灵的静谧与安宁。');
        break;
      // 9. 当索引为 2 时
      case 2:
        // 10. 弹出提示信息，描述与第 2 个 '.playlist-card' 元素关联的音乐类型
        alert('热门流行，是都市的节奏，跃动着激情与活力，谱写着时代的旋律。');
        break;
      // 11. 对于所有不在上述特定索引范围内的元素（即默认情况）
      default:
        // 12. 弹出提示信息，描述与剩余 '.playlist-card' 元素关联的音乐类型
        alert('经典老歌，是岁月的卷轴，诉说着往昔的记忆，散发着岁月的芬芳。');
        break;
    }
  });
});