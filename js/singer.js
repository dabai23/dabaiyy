// jQuery 函数，在文档结构加载完成后再执行匿名函数
$(document).ready(function () {
  // 选择页面上所有类名为 'carousel' 的元素，并调用 Slick 插件为其初始化轮播组件
  $('.carousel').slick({
    // 参数配置开始
    // 开启轮播指示点（小圆点导航）
    dots: true,
    // 开启无限循环轮播，到达最后一张后无缝衔接回第一张
    infinite: true,
    // 轮播动画速度，单位毫秒
    speed: 500,
    // 展示的幻灯片数量，此处设置为每次只显示一张
    slidesToShow: 1,
    // 每次滑动时移动的幻灯片数量，此处设置为每次滑动一张
    slidesToScroll: 1,
    // 开启自动播放功能
    autoplay: true,
    // 自动播放间隔时间，单位毫秒，此处设置为每隔2秒钟自动滑动到下一张
    autoplaySpeed: 2000,
    // 参数配置结束
  });
  // 总结：此段代码是利用 jQuery 和 Slick 轮播插件实现了一个自动播放、带指示点且无限循环的轮播组件，
  // 并对其速度、显示张数、滑动步长以及自动播放间隔进行了个性化配置。
});