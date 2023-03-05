window.addEventListener('load',function(){
    // 1.获取元素
    var focus=document.querySelector('.focus');
    var ul=focus.children[0];
    // 获得focus的宽度
    var w=focus.offsetWidth;
    var ol=focus.children[1];
    // 2.利用定时器自动轮播动画
    var index=0;
    var timer=setInterval(function(){
        index++;
        var translateX=-index*w;
        ul.style.transition='all .7s';
        ul.style.transform='translateX('+translateX+'px)';
    },2000);
    // 等着我们过渡完成后，再去判断，监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend',function(){
        // 无缝滚动
        if(index>=3){
            index=0;
            ul.style.transition='none';// 去掉过渡效果
            var translateX=-index*w;
            ul.style.transform='translateX('+translateX+'px)';
        }else if(index<0){
            index=2;
            ul.style.transition='none';// 去掉过渡效果
            var translateX=-index*w;
            ul.style.transform='translateX('+translateX+'px)';
        }
        // 小圆点跟随变化
        // 排他思想优化
        ol.querySelector('li.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    
    // 4.手指滑动轮播图
    // 触摸元素 touchstart 获取手指初始坐标
    var startX=0;
    var moveX=0;
    var flag=false;
    ul.addEventListener('touchstart',function(e){
        startX=e.targetTouches[0].pageX;
        // 手指触摸的时候停止定时器
        clearInterval(timer);
    })
    // 移动手指 touchmove 计算手指的移动距离，并且移动盒子
    ul.addEventListener('touchmove',function(e){
        // 计算手指的移动距离   手指移动之后的坐标减去手指初始坐标
        moveX=e.targetTouches[0].pageX-startX;
        // 移动盒子 盒子原来位置+手指移动距离
        var translateX=-index*w+moveX;
        // 手指拖动的时候不需要动画效果所有要取消过渡效果
        ul.style.transition='none';// 去掉过渡效果
        ul.style.transform='translateX('+translateX+'px)';
        flag=true;
        e.preventDefault();//阻止滚动屏幕的行为
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend',function(e){
       if(flag){
            // 如果移动距离大于50px就播放上一张或下一张
        if(Math.abs(moveX)>50){
            // 如果是右滑则播放上一张moveX是正值
            if(moveX>0){
                index--;
            }else{
                // 如果是左滑则播放下一张moveX是负值
                index++;
            }
            var translateX=-index*w;
            ul.style.transition='all .7s';
            ul.style.transform='translateX('+translateX+'px)';

        }else{
            // 如果移动距离小于50px就回弹
            var translateX=-index+w;
            ul.style.transition='all .7s';
            ul.style.transform='translateX('+translateX+'px)';
        }
       }
        // 手指离开就重新开启定时器
        clearInterval(timer);
        timer=setInterval(function(){
            index++;
            var translateX=-index*w;
            ul.style.transition='all .7s';
            ul.style.transform='translateX('+translateX+'px)';
        },2000);
    })

    // 返回顶部
    var goBack=document.querySelector('.goBack');
    var nav=document.querySelector('nav');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>=nav.offsetTop){//返回文档当前沿垂直轴（即向上或向下）滚动的像素数
            goBack.style.display='block';
        }else{
            goBack.style.display='none';

        }
    });
    goBack.addEventListener('click',function(){
        // 滚动窗口至文档中的特定位置 x,y不加单位
        // window.scroll(0,0);
        window.scroll(0,0);
    })
})