// 获取页面上id为'scroll-down'的元素
document.getElementById('scroll-down').addEventListener('click', function () {
  // 当点击该元素时，平滑滚动页面到底部
  window.scrollBy({
    top: window.innerHeight, // 滚动距离等于当前窗口的高度
    behavior: 'smooth' // 平滑滚动
  });
});
// 定义一个包含三个单词的数组
const words = ["发现", "聆听", "分享"];
// 获取id为'text'的元素
const text = document.getElementById("text");
// 初始化单词索引和字符索引
let wordIndex = 0;
let charIndex = 0;
// 初始化删除状态
let isDelete = false;
// 默认延迟时间（在单词之间切换）
let DefaultDelay = 100;
// 在单词完全显示后等待的时间
let WaitDelay = 1000;
// 当前延迟时间，用于控制动画速度
let delay = 100;
// 更新文本内容的函数
const UpdateText = () => {
  // 设置文本内容为当前单词的子字符串，从0到charIndex
  text.textContent = words[wordIndex].substring(0, charIndex);
  // 如果不是删除模式
  if (!isDelete) {
    // 设置延迟时间为默认值
    delay = DefaultDelay;
    // 增加字符索引
    charIndex++;
    // 如果达到单词的最后一个字符，切换到删除模式
    if (charIndex - 1 === words[wordIndex].length) {
      delay = WaitDelay;
      isDelete = true;
    }
  } else if (isDelete) { // 如果是删除模式
    // 设置延迟时间为默认值
    delay = DefaultDelay;
    // 减少字符索引
    charIndex--;
    // 如果字符索引小于1，切换回插入模式并切换到下一个单词
    if (charIndex < 1) {
      isDelete = false;
      wordIndex++;
      // 如果单词索引超出范围，重新开始
      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }
  // 递归调用UpdateText，延迟时间为当前的delay
  setTimeout(UpdateText, delay);
};
// 调用UpdateText函数开始动画
UpdateText();