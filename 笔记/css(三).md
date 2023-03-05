[toc]
# 移动端
## meta视口标签
```css
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
移动端 CSS 初始化推荐使用 normalize.css
官网地址：http://necolas.github.io/normalize.css/
# 特殊样式
```css
/*CSS3盒子模型*/
box-sizing: border-box;
-webkit-box-sizing: border-box;
/*点击高亮我们需要清除 设置为transparent 完成透明*/
-webkit-tap-highlight-color: transparent;
/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/
-webkit-appearance: none;
/*禁用长按页面时的弹出菜单*/
img,a { 
    -webkit-touch-callout: none;
}
```
# 流式布局(百分比布局)
流式布局，就是百分比布局，也称非固定像素布局。
通过盒子的**宽度**设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。
# flex布局
flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。
- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 =flex布局
- flex 布局原理：就是通过给父盒子添加 flex 属性，来控制子盒子的位置和排列方式。
- 弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。
## flex布局常见父项属性
### flex-direction 设置主轴方向
flex-direction 属性定义容器要在哪个方向上堆叠 flex 项目。
|属性值|说明|
|--|--|
|row|默认值,从左到右|
|row-reverse|从右到左|
|column|从上到下|
|column-reverse	|从下到上|
### justify-content 设置主轴上的子元素排列方式
justify-content 属性定义了项目在主轴上的对齐方式
注意： 使用这个属性之前一定要确定好主轴是哪个
|属性值|说明|
|--|--|
|flex-start	|默认值,从头部开始，如果主轴是x轴，则从左到右|
|flex-end	|从尾部开始排列|
|center	|在主轴居中对齐(如果主轴是 x 轴则水平居中)|
|space-around|平分剩余空间|
|space-between|	先两边贴边，再平分剩余空间|
### flex-wrap 设置子元素是否换行
默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。
|属性值	|说明|
|--|--|
|nowrap|默认值，不换行|
|wrap|换行|
### align-items 设置侧轴上的子元素排列方式(单行)
该属性是控制子项在侧轴（默认是y轴）上的排列方式，在子项为单项（单行）的时候使用
|属性值|说明|
|--|--|
|flex-start	|从上到下|
|flex-end|从下到上|
|center	|挤在一起居中(垂直居中)|
|stretch|拉伸(默认值)|
>值为stretch时子盒子不要给高度
### align-content 设置侧轴上的子元素的排列方式(多行)
设置子项在侧轴上的排列方式 并且只能用于子项出现**换行**的情况（多行），在单行下是没有效果的。
|属性值|	说明|
|--|--|
|flex-start|默认值在侧轴的头部开始排列|
|flex-end|	在侧轴的尾部开始排列|
|center	|在侧轴中间显示|
|space-around	|子项在侧轴平分剩余空间|
|space-between	|子项在侧轴先分布在两头，再平分剩余空间|
|stretch	|设置子项元素高度平分父元素高度|
### flex-flow
flex-flow属性是`flex-direction`和`flex-wrap`属性的复合属性
eg：flex-flow:row wrap;
## flex布局子项常见属性
### flex属性
flex 属性定义子项目分配**剩余空间**，用flex来表示占多少份数。
### align-self 控制子项自己在侧轴上的排列方式
- align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。
- 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
### order属性定义项目的排列顺序
数值越小，排列越靠前，默认为0。
注意：和 z-index 不一样。
# rem适配布局
## rem基础
rem (root em)是一个相对单位，类似于em，em是相对于父元素字体大小。
不同的是rem的基准是相对于**html元素的字体大小**。
比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px
## 媒体查询
媒体查询可用于检查许多事情，例如：
- 视口的宽度和高度
- 设备的宽度和高度
- 方向（平板电脑/手机处于横向还是纵向模式）
- 分辨率

语法如下：
```css
@media mediatype and|not|only(media feature){
    CSS-code
}
```
- 用 @media 开头 注意@符号
- mediatype 媒体类型
- 关键字 and not only
- media feature 媒体特性 必须有小括号包含
### mediatype查询类型
将不同的终端设备划分成不同的类型，称为媒体类型
|值	|解释说明|
|--|--|
|all|用于所有设备|
|print|	用于打印机和打印预览|
|screen|用于电脑屏幕、平板电脑、智能手机等|
### 关键字
关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。
- and：可以将多个媒体特性连接到一起，相当于“且”的意思。
- not：排除某个媒体类型，相当于“非”的意思，可以省略。
- only：指定某个特定的媒体类型，可以省略。
### 媒体特性
每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。注意他们要加小括号包含。
|值	|解释|
|--|--|
|width	|定义输出设备中页面可见区域的宽度|
|min-width	|定义输出设备中页面最小可见区域宽度|
|max-width	|定义输出设备中页面最大可见区域宽度|
```css
 @media screen and (max-width:600px){
            body{
                background-color: rgb(223, 183, 183);
            }
        }
@media screen and (min-width:601px){
            body{
                background-color: rgb(133, 221, 228);
            }
        }
@media screen and (min-width:801px){
            body{
                background-color: rgb(222, 163, 236);
            }
        }
```
## 媒体查询+rem实现元素动态大小变化
- rem单位是跟着html来走的，有了rem页面元素可以设置不同大小尺寸
- 媒体查询可以根据不同设备宽度来修改样式
- 媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化
```css
@media screen and (min-width:320px){
    html{
        font-size: 50px;
    }
}
@media screen and (min-width:640px){
    html{
        font-size: 100px;
    }
}
.top{
    height: 1rem;
    font-size: .5rem;
    background-color: rgb(233, 183, 183);
    color: rgb(35, 63, 77);
    text-align: center;
    line-height: 1rem;
```
## less
### less变量
@变量名：值;
变量命名规范
- 必须有@为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感
### Less编译
我们需要把我们的 less文件，编译生成为css文件，这样我们的html页面才能使用。
我们可以在 vscode 安装 Easy LESS 插件来把 less 文件编译为 css。安装完毕插件，重新加载下 vscode。只要保存一下Less文件，会自动生成CSS文件。
### Less嵌套
（交集|伪类|伪元素选择器）&
### less运算
任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。
注意：
- 乘号（*）和除号（/）的写法;除法要给算式整体带括号
- 运算符中间左右有个空格隔开 1px + 5
- 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位
- 如果两个值之间只有一个值有单位，则运算结果就取该单位
# 响应式布局
