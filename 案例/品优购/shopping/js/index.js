window.addEventListener('load',function(){
    // 1.获取元素
    var arrow_l=this.document.querySelector('.arrow_l');
    var arrow_r=this.document.querySelector('.arrow_r');
    var focus=this.document.querySelector('.focus');
    var focusWidth=focus.offsetWidth;
    // 2.鼠标经过focus就显示隐藏左右按钮
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
        clearInterval(timer);
        // 清除定时器变量
        timer=null;
    });
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
        timer=setInterval(function(){
            // 手动调用点击事件
            arrow_r.click();
        },2000);
    });
    // 3.动态生成小圆圈，有几个图片就有几个小圆圈
    var ul=focus.querySelector('ul');
    var ol=focus.querySelector('.circle');
    // console.log(ul.children.length);
    for(var i=0;i<ul.children.length;i++){
        // 创建一个li
        var lis=document.createElement('li');
        // 记录当前小圆圈的索引号，通过自定义属性
        lis.setAttribute('index',i);
        // 把li插入到ol里
        // node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾
        ol.appendChild(lis);
        // console.log(ol.children.length);
        // 4.小圆圈的排他思想，我们可以直接在生成小圆圈的同事直接绑定点击事件
        lis.addEventListener('click',function(){
            // 干掉所有人
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
             //留下我自己
             this.className='current';//this指lis[i]
            //  5.点击小圆圈移动图片
            // ul的移动距离就是小圆圈的索引号乘宽度
            // 当我们点击了某个li就拿到当前li的索引号
            var index=this.getAttribute('index');
            // 当点击了某个li就要报li的索引号给num
            num=index;
            // 当点击了某个li就要报li的索引号给circle
            circle=index;
            console.log(focus.offsetWidth);
            console.log(index);
            animate(ul,-index * focusWidth);
        })
    }
    // 把ol里面的第一个li设置类名为current
    ol.children[0].className='current';
    // 6.克隆第一张图片放到ul最后
    var first=ul.children[0].cloneNode(true);
    ul.appendChild
    // 7.点击右侧按钮图片滚动
    var num=0;
    // circle控制小圆圈的播放
    var circle=0;
    arrow_r.addEventListener('click',function(){
        // 如果走到了最后复制的一张图片，此时我们ul要快速复原，left改为0
        if(num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        num++;
        animate(ul,-num * focusWidth);
        // 8.点击右侧按钮，小圆圈跟随一起变化
        circle++;
        // 如果circle==ol.children.length 说明到了克隆的那张图片 circle要复原
        if(circle==ol.children.length){
            circle=0;
        }
        // 先清除其余小圆圈的current类名
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className='current';

    })
    // 左侧按钮
    arrow_l.addEventListener('click',function(){
        // 如果走到了最后复制的一张图片，此时我们ul要快速复原，left改为0
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=-num*focusWidth+'px';   
        }
        num--;
        animate(ul,-num * focusWidth);
        // 9.点击左侧按钮，小圆圈跟随一起变化
        circle--;
        // 如果circle==ol.children.length 说明到了克隆的那张图片 circle要复原
        if(circle<0){
            circle=ol.children.length-1;
        }
        // 先清除其余小圆圈的current类名
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className='current';
    })
    // 自动播放轮播图
    var timer=setInterval(function(){
        // 手动调用点击事件
        arrow_r.click();
    },2000);
})