[toc]
# 新增选择器
CSS3 给我们新增了选择器，可以更加便捷，更加自由的选择目标元素。
属性选择器
结构伪类选择器
伪元素选择器
## 属性选择器
属性选择器可以根据元素特定的属性来选择元素，这样就可以不用借助于类或者id选择器
|选择符	|简介|
|--|--|
|E[att]	|选择具有att属性的E元素|
|E[att=“val”]|	选择具有att属性且属性值等于val的E元素|
|E[att^=“val”]|	匹配具有att属性且值以val开头的E元素|
|E[att$=“val”]|	匹配具有att属性且值以val结尾的E元素|
|E[att*=“val”]|	匹配具有att属性且值中含有val的E元素|
## 伪类选择器
结构伪类选择器主要根据文档结构来选择元素
常用于根据父级选择器选择里面的子元素
|选择符|简介|
|--|--|
|E:first-child|选择父元素中的第一个子元素E|
|E:last-child|选择父元素中最后一个E元素|
|E:nth-child(n)|选择父元素中的第n个子元素E|
|E:first-of-type|指定类型E的第一个|
|E:last-of-type	|指定类型E的最后一个|
|E:nth-of-type（n）|指定类型E的第n个|
结构伪类选择器一般用于选择父级里面的第几个孩子
### nth-child(n)
nth-child(n)选择某个父级元素的一个或多个特定的子元素
- n可以是数字，关键字和公式
- n如果是数字，就是选择第n个子元素，里面数字从1开始
- n可以是关键字：even 偶数，odd奇数
- n可以是公式：常见的公式如下（如果n是公式，则**从0开始计算**，但是第0个元素或者超出了元素的个数会被忽略）

|取值|含义|
|--|--|
|5|第五个|
|2n/even	|偶数行|
|2n+1/odd|	奇数行|
|5n|	5 10 15 …（5的倍数）|
|n+5|	从第5个开始（包含第五个）到最后|
|-n+5|	前5个（包含第5个）|
### nth-child(n)和nth-of-type(n)区别
`nth-child(n)`首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，找到第n个元素，然后看标签是否匹配
`nth-of-type(n)`对父元素里面指定子元素进行排序选择，先去匹配标签,然后再找第n个元素
## 伪元素选择器
伪元素选择器可以帮我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构
|选择符|简介|
|--|--|
|::before|在元素内部的前面插入内容|
|::after|在元素内部的后面插入内容|

- before和 after创建一个元素，但是是属于**行内元素**
- before和after 都是一个盒子，都作为父元素的孩子
- 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
- before 和 after 必须有 content 属性
- before 在父元素内容的前面创建元素 ，after 在父元素内容的后面插入元素
- 伪元素选择器 和 标签选择器 一样，权重为1
## 清除浮动
### 额外标签法的升级
```css
.clearfix:before,.clearfix:after{
	content:"";
    display:table;/*转换为块级元素并且一行显示*/
}
.clearfix:after{
	clear:both;
}
```
### 额外标签法的优化
```css
.clearfix:after{
	content:"";/*伪元素必须写的属性*/
    display:block;/*插入的元素必须是块级*/
    height:0;/*不要看见这个元素*/
    clear:both;/*核心代码清除浮动*/
    visibility:hidden;/*不要看见这个元素*/
}
```
# 盒子模型
CSS3 中可以通过 box-sizing 来指定盒模型，有2个值：这样我们计算盒子大小的方式就发生了改变
- **box-sizing: content-box**盒子大小为 width + padding + border （以前默认的）
- **box-sizing: border-box**盒子大小为width

如果盒子模型我们改为了box-sizing: border-box ， 那padding和border就不会撑大盒子了（前提padding和border不会超过width宽度）
# 其他特性
## 图标变模糊 -- CSS3滤镜filter
filter CSS属性将模糊或颜色偏移等图形效果应用于元素
```css
filter: 函数(); --> 例如： filter: blur(5px); 
blur模糊处理 数值越大越模糊
```
##  计算盒子宽度 -- calc函数
calc() 此CSS函数让你在声明CSS属性值时执行一些计算
```css
width: calc(100% - 80px);
```
括号里面可以使用 + - * / 来进行计算
```css
.a{
            width: 200px;
            height: 200px;
            background-color: rgb(80, 161, 172);
        }
        .b{
            width: calc(100% + 100px);/* 符号和数值间有空格 */
            height: 30px;
            background-color: rgb(141, 22, 141);
        }
    </style>
</head>
<body>
    <div class="a">
        <div class="b"></div>
    </div>
```
## CSS3 过渡
CSS3中，我们在不使用Flash动画或JavaScript的情况下，添加某种效果可以从一种样式转变到另一种样式
过渡经常和：hover一起搭配使用
**css transition: 要过渡的属性 花费时间 运动曲线(可以省略) 何时开始(可以省略);**
注意：
- 如果未规定**持续时间**部分，则过渡不会有效果，因为默认值为 0。
- 当光标从元素上移开时，它将逐渐变回其原始样式
- 想要变化的 CSS 属性，宽度高度，背景颜色，内外边距都可以，如果想要所有的属性都变化过渡，写一个`all`就可以。
```css
 div{
           width: 100px;
           height: 100px;
           background-color: rgb(23, 228, 200);
           transition:all 2s ;
       }
       div:hover{
        width: 200px;
           height: 200px;
           background-color: rgb(15, 142, 146);
       }
    </style>
</head>
<body>
    <div></div>
```
# 2D转换transform
可以实现元素的位移，旋转，缩放等效果
## 移动translate
2D移动是2D转换里面的一种功能，可以改变元素在页面中的位置，类似 `定位`。
>移动盒子位置：定位、盒子外边距、2D转换移动
其中，2D转换移动不会影响到其他元素的位置
```css
div {
  transform: translate(50px, 100px);
  /* transform: translateX(100px);只移动X坐标 */
}
```
- 定义2D转换中的移动，沿着X和Y轴移动元素
- translate 最大的优点：不会影响到其他元素的位置
- translate 中的百分比单位是相对于自身元素的
- translate:(50%,50%);
- 对行内标签没有效果
>X,Y表示的是坐标不是位移
## 旋转rotate
2D旋转指的是让元素在2维平面内顺时针旋转或者逆时针旋转。
```
transform: rotate(度数)
```
rotate 里面跟度数，单位是 deg 比如 rotate(45deg)
角度为正时，顺时针，负时，为逆时针
默认旋转的中心点是元素的中心点
```css
<head>
   <style>
        img {
            width: 150px;
            border-radius: 50%;
            border: 5px solid pink;
            /* 过渡写到本身，谁做动画给谁加 */
            transition: all 0.3s;
        }  
        img:hover {
            transform: rotate(360deg);
        }
    </style>
</head>
<body>
    <img src="#" alt="">
</body>
```
## 旋转中心点transform-origin
2D转换中心点：我们可以设置元素转换的中心点 transform-origin
```css
transform-origin: x y;
```
注意后面的参数x 和 y 用空格隔开
x y 默认转换的中心点是元素的中心点(50% 50%)
还可以给x y 设置`像素`或者`方位名词`(top bottom left right center)
```css
<head>
   <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
            transition: all 1s;
            /* 1.可以跟方位名词 ,以左下角为轴进行旋转*/
            transform-origin: left bottom;
        }
        div:hover {
            transform: rotate(360deg);
        }
    </style>
</head>
<body>
    <div></div>
</body>
```
## 缩放scale
缩放：scale,只要给元素添加上了这个属性就能控制它放大还是缩小
```css
transform: scale(x,y);
```
- 注意其中的x和y用逗号分割
- transform:scale(1,1): 宽和高都放大一倍，相当于没有放大
- transform:scale(2,2)：宽和高都放大了2倍
- transform:scale(2)：只写一个参数，第二个参数则和第一个参数一样，相当于 scale(2,2)
- transform:scale(0.5,0.5)：缩小
- sacle缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子
>transition缩放是向下向两边延伸，sacle缩放默认以中心点缩放的，并且可以改变中心点而且不影响其他盒子
```css
<head>
   <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }       
        div:hover {
            transform: scale(2, 2);
        }
    </style>
</head>
<body>
    <div></div>
</body>
```
## 2D转换综合写法
同时使用多个转换，其格式为: transform:translate() rotate() scale() ;**移动-旋转-缩放**;且**同时使用时，不能分开写**
其顺序会影响转换的效果(先旋转会改变坐标轴方向)
当我们同时有位移和其他属性时候，记得要将位移放到最前面
```css
 div{
          width: 200px;
          height: 200px;
          background-color: rgb(29, 216, 154);
           transition: all 3s;
           margin: 100px auto;
      }
      div:hover {
        transform: translate(50px, 100px) rotate(360deg) scale(1.5,1.5);
        background-color: rgb(71, 173, 241);
        }
    </style>
</head>
<body>
<div>
</div>
</body>
```
# C3动画
动画**animation**是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。
相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。
制作动画分为两步：
- 先定义动画**keyframs**
- 再使用（调用）动画
```css
 @keyframes move{
            0%{
                transform: translate(0,0);
            100%{
                transform: translate(1000px,500px);
            }
        }
      div{
          width: 200px;
          height: 200px;
          background-color: rgb(29, 216, 154);
          animation-name: move;
         animation-duration: 3s; 
      }
```
- 0% 是动画的开始，100% 是动画的完成。这样的规则就是动画序列。
- 在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果
- 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。
- 请用百分比来规定变化发生的时间，或用关键词 “from” 和 “to”，等同于 0% 和 100%。
## 动画常用属性
|属性	|描述|
|--|--|
|@keyframes	|规定动画。|
|animation	|所有动画属性的简写属性，除了animation-play-state属性|。
|animation-name	|规定@keyframes动画的名称。（必须的）|
|animation-duration	|规定动画完成一个周期所花费的秒或毫秒，默认是0。（必须的）|
|animation-timing-function|	规定动画的速度曲线，默认是“ease”。|
|animation-delay	|规定动画何时开始，默认是0。|
|animation-iteration-count	|规定动画被播放的次数，默认是1，还有infinite|
|animation-direction	|规定动画是否在下一周期逆向播放，默认是“normal“,alternate逆播放|
|animation-play-state|	规定动画是否正在运行或暂停。默认是"running",还有"paused"。|
|animation-fill-mode	|规定动画结束后状态，保持forwards,回到起始backwards|
## 动画简写属性
animation：动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;
```
animation: move 5s linear 2s infinite alternate forwards;
```
- 简写属性里面不包含 animation-play-state
- 暂停动画：animation-play-state: puased; 经常和鼠标经过等其他配合使用
- 想要动画走回来 ，而不是直接跳回来：animation-direction: alternate
## 速度曲线细节
animation-timing-function：规定动画的速度曲线，默认是“ease”
|值|描述|
|--|--|
|linear	|动画从头到尾的速度是相同的。匀速|
|ease	|默认。动画以低速开始，然后加快，在结束前变慢。|
|ease-in|	动画以低速开始。|
|ease-out	|动画以低速结束。|
|ease-in-out|	动画以低速开始和结束。|
|steps()	|指定了时间函数中的间隔数量（步长）|
# 3D转换
3D转换的特点：
- 近大远小。
- 物体后面遮挡不可见
## 三维坐标系
三维坐标系其实就是指立体空间，立体空间是由3个轴共同组成的。
- x轴：水平向右 注意： x 右边是正值，左边是负值
- y轴：垂直向下 注意： y 下面是正值，上面是负值
- z轴：垂直屏幕 注意： 往外面是正值，往里面是负值
## 3D位移translate3d
3D移动在2D移动的基础上多加了一个可以移动的方向，就是z轴方向
- translform:translateX(100px)：仅仅是在x轴上移动
- translform:translateY(100px)：仅仅是在Y轴上移动
- translform:translateZ(100px)：仅仅是在Z轴上移动（注意：translateZ一般用px单位）
- 简写transform:translate3d(x,y,z)：其中 x、y、z 分别指要移动的轴的方向的距离
x,y.z不能省略，如果没有写0

因为z轴是垂直屏幕，由里指向外面，所以默认是看不到元素在z轴的方向上移动
## 透视perspective
透视：在2D平面产生近大远小视觉立体，但是只是效果二维的
- 如果想要在网页产生3D效果需要透视（理解成3D物体投影在2D平面内）
- 模拟人类的视觉位置，可认为安排一只眼睛去看
- 透视我们也称为视距：视距就是人的眼睛到屏幕的距离
- 距离视觉点越近的在电脑平面成像越大，越远成像越小
- 透视的单位是像素px

**透视写在被观察元素的父盒子上面的**
### translateZ
translform:translateZ(100px)：仅仅是在Z轴上移动。
有了透视，就能看到translateZ 引起的变化了
translateZ：近大远小
translateZ：往外是正值
translateZ：往里是负值

## 3D旋转rotate3d
3D旋转：3D旋转指可以让元素在三维平面内沿着 x轴，y轴，z轴或者自定义轴进行旋转。
- transform: rotateX(45deg) ：沿着X轴正方向旋转45度
- transform: rotateY(45deg) ：沿着Y轴正方向旋转45度
- transform: rotateZ(45deg) ：沿着Z轴正方向旋转45度
- transform: rotate3d(x,y,z,deg) ：沿着自定义轴旋转 deg为角度(了解即可)
xyz是表示旋转轴的矢量，是标示你是否希望沿着该轴旋转，最后一个标示旋转的角度。
```css
/*沿着X轴旋转45deg*/
transform: rotate3d(1,0,0,45deg) 
/*沿着对角线旋转45deg*/
transform: rotate3d(1,1,0,45deg) 
```
左手准则判断方向
## 3D呈现transform-style
3D呈现：transform-style
- 控制子元素是否开启三维立体环境
- transform-style: flat 子元素不开启3d立体空间 默认的
- transform-style: preserve-3d 子元素开启立体空间
- 代码写给父级，但是影响的是盒子
>backface-visibility: hidden;/* 背面隐藏 */
# 背景
## 背景尺寸
CSS3 **background-size**属性允许您指定背景图像的大小。
- 可以通过长度、百分比或使用以下两个关键字之一来指定背景图像的大小：contain 或 cover。
- `contain`关键字将背景图像缩放为尽可能大的尺寸（但其宽度和高度都必须适合内容区域）。可能存在一些未被背景图像覆盖的背景区域。
- `cover`关键字会缩放背景图像，以使内容区域完全被背景图像覆盖（其宽度和高度均等于或超过内容区域）。背景图像的某些部分可能在背景定位区域中不可见。


