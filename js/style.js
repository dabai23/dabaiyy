/* 
    需求：当页面滚动大于300像素，就显示回到顶部按钮
    */
    // 获取回到顶部元素
    const backTop = document.querySelector('#backTop')
    // L2 事件监听
    // 给页面添加 滚动事件
    window.addEventListener('scroll', function () {
      // 检测页面滚动的头部距离属性
      const n = document.documentElement.scrollTop
       // 三元运算符 简写判断
      backTop.style.opacity = n >= 300 ? 1 : 0
    })
    // 需求：点击返回按钮，页面会返回顶部
    // 给回到顶部元素添加 点击事件
    backTop.addEventListener('click',function () {
      document.documentElement.scrollTop = 0
    })