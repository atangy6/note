[toc]
# 什么是DOM
文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口
W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
# 获取页面元素
根据 ID 获取
根据标签名获取
通过 HTML5 新增的方法获取
特殊元素获取
## 根据ID获取
使用getElementById()方法可以获取带ID的元素对象
```js
document.getElementById('id名');
```
## 根据标签名获取
使用getElementByTagName()方法可以返回带有指定标签名的对象的集合
```js
doucument.getElementsByTagName('标签名');
```
因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历
得到元素对象是动态的
返回的是获取过来元素对象的集合，以**伪数组**的形式存储
如果获取不到元素，则返回为空的伪数组(因为获取不到对象)
## 通过H5新增方法获取
### getElementsByClassName
根据类名返回元素对象合集
```js
document.getElementsByClassName('类名'); 
```
### document.querySelector
根据指定选择器返回第一个元素对象,切记里面的选择器需要加符号 
```js
document.querySelector('选择器');
```
```js
// 类选择器.box 
// id选择器 #nav
var firstBox = document.querySelector('.box');
```
### document.querySelectorAll
根据指定选择器返回所有元素对象
```js
document.querySelectorAll('选择器');
```
注意：`querySelector`和`querySelectorAll`里面的选择器需要加符号
## 获取特殊元素
### 获取body元素
返回body元素对象
```js
document.body;
```
### 获取html元素
返回html元素对象
```js
document.documentElement;
```
# 事件基础
## 事件概述
JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。
网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。
## 事件三要素
事件源
事件类型
事件处理程序
```html
<button id="btn">⭐</button>
    <script>
        var btn=document.getElementById('btn');//根据ID获取页面元素 //获取事件源
        //事件源  事件类型  事件处理程序
        btn.onclick=function(){//btn.onclick注册事件
        alert('星星');//添加事件处理程序
        }
    </script>
```
## 执行事件的步骤
获取事件源
注册事件(绑定事件)
添加事件处理程序(采取函数赋值形式)
# 操作元素
JavaScript 的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容 、属性等。注意以下都是属性
## 改变元素内容
从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉。
```js
element.innerText='';
```
起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行
```js
element.innerHTML='';
```
- innerText不识别html标签,innerHTML识别html标签
- 这两个属性是可读写的，可以获取元素里面的内容
## 改变元素属性
案例：改变图片、分时问候
## 修改表单属性
```html
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        //获取元素
        var btn=document.querySelector('button');
        var input=document.querySelector('input');
        //注册事件 处理程序
        btn.onclick=function(){
            //表单里的值是通过value来修改的
             input.value='被点击了';
             //如果想要某个表单被禁用不能再点击 disabled
            //  btn.disabled=true;
            this.disabled=true;
            //this 指向的是事件函数的调用者
        }
    </script>
```
## 改变样式属性
我们可以通过 JS 修改元素的大小、颜色、位置等样式。
### 行内样式操作
```js
element.style.
```
```js
div.style.backgroundColor = 'pink';
div.style.width = '250px';
```
### 类名样式操作
```js
element.className='';
```
注意：
- JS 修改style样式操作 ，产生的是行内样式，CSS权重比较高
- 如果样式修改较多，可以采取操作类名方式更改元素样式
- class因为是个保留字，因此使用className来操作元素类名属性
- className会直接更改元素的类名，会**覆盖原先的类名**
- 如果想要保留原先的类名，可以采用多类名选择器，即在两个类名之间加上空格
## 排他思想
如果有同一组元素，我们相要某一个元素实现某种样式，需要用到循环的排他思想算法：
1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式 （留下我自己）
3. 注意顺序不能颠倒，首先干掉其他人，再设置自己
```html
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        // 获取所有按钮元素
        var btns = document.getElementsByTagName('button');
        // btns得到的是伪数组  里面的每一个元素 btns[i]
        for (var i = 0; i < btns.length; i++) {//遍历数组
            btns[i].onclick = function() {//鼠标点击左键触发
                // (1) 我们先把所有的按钮背景颜色去掉  干掉所有人
                for (var i = 0; i < btns.length; i++) {//遍历数组
                    btns[i].style.backgroundColor = '';
                }
                // (2) 然后才让当前的元素背景颜色为pink 留下我自己
                this.style.backgroundColor = 'pink';//被点击的元素背景颜色发生改变
            }
        }
    </script>
</body>
```
## 自定义属性
### 获取属性值
1. 获取内置属性值(元素本身自带的属性)
```js
element.属性;
```
2. 获取自定义的属性
```js
element.getAttribute('属性');
```
### 设置属性值
1. 设置内置属性值
```js
element.属性 = '值';
```
2. 设置自定义的属性
```js
element.setAttribute('属性','值');
```
### 移除属性
```js
element.removeAttribute('属性');
```
```html
<body>
    <div id="demo" index="1" class="nav"></div>
    <script>
        var div = document.querySelector('div');
        // 1. 获取元素的属性值
        // (1) element.属性
        console.log(div.id);
        //(2) element.getAttribute('属性')  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
        // 2. 设置元素属性值
        // (1) element.属性= '值'
        div.id = 'test';
        div.className = 'navs';
        // (2) element.setAttribute('属性', '值');  主要针对于自定义属性
        div.setAttribute('index', 2);
        div.setAttribute('class', 'footer'); // class 特殊  这里面写的就是class 不是className
        // 3 移除属性 removeAttribute(属性)    
        div.removeAttribute('index');
    </script>
</body>
```
## 设置H5自定义属性
H5规定自定义属性`data-`开头作为属性名并赋值
```js
<div data-index = "1"></>
// 或者使用JavaScript设置
div.setAttribute('data-index',2);
```
### 获取H5自定义属性
- 兼容性获取：element.getAttribute('data-index')
- H5新增的：element.dataset.index 或element.dataset['index'] IE11才开始支持，只能获取data-开头的 （×××？？？）
# 节点操作
获取元素通常使用两种方式：
|1.利用DOM提供的方法获取元素|2.利用节点层级关系获取元素|
|--|--|
|document.getElementById()|利用父子兄节点关系获取元素|
|document.getElementsByTagName()|逻辑性强，但是兼容性较差|
|document.querySelector 等	||
|逻辑性不强，繁琐||
这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单
## 节点概述
网页中的所有内容都是`节点`（标签、属性、文本、注释等），在DOM中，节点使用`node`来表示。
HTML DOM 树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。
一般的，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。
- 元素节点：nodeType 为1
- 属性节点：nodeType 为2
- 文本节点：nodeType 为3(文本节点包括文字、空格、换行等)

我们在实际开发中，节点操作主要操作的是元素节点
## 节点层级
利用DOM树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**。
## 父级节点
```js
node.parentNode
```
`parentNode`属性可以返回某节点的父结点，注意是**最近的一个父结点**
如果指定的节点没有父结点则返回null
```html
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        // 1. 父节点 parentNode
        var erweima = document.querySelector('.erweima');
        // var box = document.querySelector('.box');
        console.log(erweima.parentNode);
    </script>
</body>
```
## 子结点
```js
parentNode.childNodes(标准)
```
parentNode.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合
返回值包含了所有的子结点，包括元素节点，文本节点等
如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes
```js
parentNode.children(非标准)
```
parentNode.children 是一个只读属性，返回所有的子元素节点
它只返回子元素节点，其余节点不返回 （这个是我们重点掌握的）
虽然 children 是一个非标准，但是得到了各个浏览器的支持,提倡使用
### 第一个子结点
```js
parentNode.firstChild
```
`firstChild`返回第一个子节点，找不到则返回null
同样，也是包含所有的节点
### 最后一个子结点
```js
parentNode.lastChild
```
`lastChild`返回最后一个子节点，找不到则返回null
同样，也是包含所有的节点
### 第一个子结点(兼容性)
```js
parentNode.firstElementChild
```
firstElementChild 返回第一个子节点，找不到则返回null
有兼容性问题，IE9以上才支持
### 最后一个子结点(兼容性)
```js
parentNode.lastElementChild
```
lastElementChild 返回最后一个子节点，找不到则返回null
有兼容性问题，IE9以上才支持
## 兄弟节点
### 下一个兄弟节点
```js
node.nextSibling
```
nextSibling 返回当前元素的下一个兄弟元素节点，找不到则返回null
同样，也是包含所有的节点
### 上一个兄弟节点
```js
node.previousSibling
```
previousSibling 返回当前元素上一个兄弟元素节点，找不到则返回null
同样，也是包含所有的节点
### 下一个兄弟节点(兼容性)
```js
node.nextElementSibling
```
nextElementSibling 返回当前元素下一个兄弟元素节点，找不到则返回null
有兼容性问题，IE9才支持
### 上一个兄弟节点(兼容性)
```js
node.previousElementSibling
```
previousElementSibling 返回当前元素上一个兄弟元素节点，找不到则返回null
有兼容性问题，IE9才支持
## 添加元素
1. 创建节点
2. 添加节点
### 创建节点
```js
document.createElement('tagName');
```
document.createElement() 方法创建由 tagName 指定的HTML 元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点
### 添加节点
```js
父节点.appendChild(child)
```
node.appendChild() 方法将一个节点添加到指定父节点的子节点列表**末尾**。类似于 CSS 里面的 after 伪元素。
```js
父节点.insertBefore(child,指定元素)
```
node.insertBefore() 方法将一个节点添加到父节点的指定子节点**前面**。类似于 CSS 里面的 before 伪元素。
## 删除节点
```js
父节点.removeChild(child)
```
node.removeChild()方法从 DOM 中删除一个子节点，返回删除的节点
- 阻止链接跳转 href='javascript:;'
## 复制节点(克隆节点)
```js
node.cloneNode();
```
node.cloneNode()方法返回调用该方法的节点的一个副本。 也称为克隆节点/拷贝节点
如果括号参数为`空`或者为`false`，则是**浅拷贝**，即只克隆复制节点本身，不克隆里面的子节点
如果括号参数为`true`，则是**深度拷贝**，会复制节点本身以及里面所有的子节点
```html
<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        //创建节点
        var li=document.createElement('li');
        //添加节点
        var ul=document.querySelector('ul');//获取
        ul.appendChild(li);
        var lili=document.createElement('li');
        ul.insertBefore(lili,ul.children[0]);
        //删除节点
        ul.removeChild(ul.children[2]);
        //复制节点
        var lili=ul.children[1].cloneNode(true);
        ul.appendChild(lili);
    </script>
```
# DOM核心
对于DOM操作，我们主要针对子元素的操作，主要有
- 创建
- 增
- 删
- 改
- 查
- 属性操作
- 事件操作
## 创建
document.write
innerHTML
createElement
## 增
appendChild
insertBefore
## 删
removeChild
## 改
主要修改dom的元素属性，dom元素的内容、属性、表单的值等
修改元素属性：src、href、title 等
修改普通元素内容：innerHTML、innerText
修改表单元素：value、type、disabled
修改元素样式：style、className
## 查
主要获取查询dom的元素
- DOM提供的API方法：getElementById、getElementsByTagName (古老用法，不推荐)
- H5提供的新方法：querySelector、querySelectorAll (提倡)
- 利用节点操作获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 提倡
## 属性操作
主要针对于自定义属性
setAttribute：设置dom的属性值
getAttribute：得到dom的属性值
removeAttribute：移除属性
# 事件高级
## 注册事件(绑定事件)
给元素添加事件，称为注册事件或者绑定事件。
注册事件有两种方式：`传统方式`和`方法监听注册方式`
|传统注册方式|方法监听注册方式|
|--|--|
|利用 on 开头的事件 onclick|w3c 标准推荐方式|
|`<button onclick = "alert("hi")"></button>`|addEventListener() 它是一个方法|
|btn.onclick = function() {}|IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替|
|特点：注册事件的唯一性|特点：同一个元素同一个事件可以注册多个监听器|
|同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数|按注册顺序依次执行|
### addEventListener事件监听方式
`eventTarget.addEventListener()`方法将指定的监听器注册到 eventTarget（目标对象）上
当该对象触发指定的事件时，就会执行事件处理函数
```js
eventTarget.addEventListener(type,listener[,useCapture])
```
该方法接收三个参数：
- type:**事件类型字符串**，比如click,mouseover,注意这里**不要带on**
- listener：**事件处理函数**，事件发生时，会调用该监听函数
- useCapture：可选参数，是一个布尔值，默认是false,处于冒泡阶段;true处于捕获阶段
```html
    <button>1</button>
   <button>2</button>
    <script>
        var btns=document.querySelectorAll('button');
        btns[1].addEventListener('click',function(){
            alert(22);
        })
        //同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
        btns[1].addEventListener('click',function(){
            alert(33);
        })
    </script>
```
## 删除事件(解绑事件)
### removeEventListener删除事件方式
```js
eventTarget.removeEventListener(type,listener[,useCapture]);
```
该方法接收三个参数：
- type:事件类型字符串，比如click,mouseover,注意这里不要带on
- listener：事件处理函数，事件发生时，会调用该监听函数
- useCapture：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后，我们再进一步学习
### 传统事件删除方式
eventTarget.onclick = null;
```html
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <script>
       var divs=document.querySelectorAll('div');
       divs[0].onclick=function(){
           alert(11);
           //传统方式删除事件
           divs[0].onclick=null;
       }
       //removeEventListener删除事件方式
       divs[1].addEventListener('click',fn);//方法监听注册方式
       function fn(){
            alert(22);
            divs[1].removeEventListener('click',fn)
       }
   </script>
```
## DOM事件流
事件流描述的是从页面中接收事件的顺序
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流
DOM事件流分为三个阶段：
- 捕获阶段
- 当前目标阶段
- 冒泡阶段

**事件冒泡**： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。(false)
**事件捕获**： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。(true)
**默认值为false**
## 事件对象
```js
eventTarget.onclick = function(event) {
   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
} 
eventTarget.addEventListener('click', function(event) {
   // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt  
})
```
官方解释：event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态
简单理解：
事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面
这个对象就是事件对象 event，它有很多属性和方法，比如“
谁绑定了这个事件
鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置
键盘触发事件的话，会得到键盘的相关信息，如按了哪个键
这个 event 是个形参，系统帮我们设定为事件对象，不需要传递实参过去
当我们注册事件时， event 对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）
```html
<body>
    <div>123</div>
    <script>
        // 事件对象
        var div = document.querySelector('div');
        div.onclick = function(e) {
                console.log(e);
            }
        // 1. event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看
        // 2. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
        // 3. 事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如 判断用户按下了那个键
        // 4. 这个事件对象我们可以自己命名 比如 event 、 evt、 e
    </script>
</body>
```
### 事件对象的常见属性和方法
|事件对象属性方法|说明|
|--|--|
|`e.target`|返回触发事件的对象 标准|
|e.srcElement|返回触发事件的对象 非标准 ie6-8使用|
|`e.type`|返回事件的类型 比如click mouseover 不带on|
|e.cancelBubble|该属性阻止冒泡，非标准，ie6-8使用|
|e.returnValue|该属性阻止默认行为 非标准，ie6-8使用|
|`e.preventDefault()`|该方法阻止默认行为 标准 比如不让链接跳转|
|`e.stopPropagation()`|阻止冒泡 标准|
e.target 和 this 的区别：
- this 是事件绑定的元素，点击了哪个元素就返回哪个元素
- e.target 是事件触发的元素，哪个元素绑定了点击事件就返回谁
```html
<style>
        .father{
            position: relative;
            width: 150px;
            height: 150px;
            background-color: rgb(216, 177, 177);
            margin: 100px auto;
        }
        .son{
            position: absolute;
            top: 25px;
            left: 25px;
            width: 100px;
            height: 100px;
            background-color: rgb(156, 221, 233);
        }
    </style>
</head>
<body>
    <div>123</div>
    <div class="father">
        <div class="son">son盒子</div>
        </div>
    </div>
    <a href="https://www.baidu.com/">百度</a>
    <script>
        //事件对象的常见属性和方法
        //1、e.target	返回触发事件的对象
        var div=document.querySelector('div');
        div.addEventListener('click',function(e){
            console.log(e.target);
        })
        //2、阻止默认行为
        var a=document.querySelector('a');
        a.addEventListener('click',function(e){//注册事件
            e.preventDefault();
        })
        //传统注册方式 阻止默认行为
        a.onclick=function(e){
            e.preventDefault();
        }
        //3、阻止冒泡
        var son=document.querySelector('.son');
        son.addEventListener('click',function(e){
             alert('son');
             e.stopPropagation();//e.stopPropagation()阻止冒泡
        });
        var father=document.querySelector('.father');
         father.addEventListener('click',function(){
             alert('father');
         },true);
    </script>
```
## 事件委托
事件委托也称为事件代理，在 jQuery 里面称为事件委派
事件委托的原理
不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点
## 鼠标事件
|鼠标事件|触发条件|
|--|--|
|onclick|鼠标点击左键触发|
|onmouseover|鼠标经过触发|
|onmouseout|鼠标离开触发|
|onfocus|获得鼠标焦点触发|
|onblur|失去鼠标焦点触发|
|onmousemove|鼠标移动触发|
|onmouseup|鼠标弹起触发|
|onmousedown|鼠标按下触发|
### 禁止鼠标右键与鼠标选中
**contextmenu**主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单
**selectstart**禁止鼠标选中
```html
无法选中
    <script>
        document.addEventListener('contextmenu',function(e){
            e.preventDefault();
        });
        document.addEventListener('selectstart',function(e){
            e.preventDefault();
        })
    </script>
```
### 鼠标事件对象
event对象代表事件的状态，跟事件相关的一系列信息的集合
现阶段我们主要是用鼠标事件对象 MouseEvent 和键盘事件对象 KeyboardEvent。
|鼠标事件对象|说明|
|--|--|
|e.clientX|	返回鼠标相对于浏览器窗口可视区的X坐标|
|e.clientY|	返回鼠标相对于浏览器窗口可视区的Y坐标|
|e.pageX（重点）|返回鼠标相对于文档页面的X坐标 IE9+ 支持|
|e.pageY（重点）|返回鼠标相对于文档页面的Y坐标 IE9+ 支持|
|e.screenX|	返回鼠标相对于电脑屏幕的X坐标|
|e.screenY|	返回鼠标相对于电脑屏幕的Y坐标|
## 常用的键盘事件
|键盘事件|触发条件|
|--|--|
|onkeyup|某个键盘按键被松开时触发|
|onkeydown|某个键盘按键被按下时触发|
|onkeypress|某个键盘按键被按下时触发，但是它不识别功能键，比如 ctrl shift 箭头等|
- 如果使用addEventListener不需要加`on`
- onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等
- 三个事件的执行顺序是：`keydown – keypress — keyup`
```js
        //按键被松开时触发
        document.addEventListener('keyup',function(){
            console.log('我弹起了');
        });
        //按键被按下时触发
        document.addEventListener('keydown',function(){
            console.log('我按下了');
        });
        //按键被按下时触发,不能识别功能键
        document.addEventListener('keypress',function(){
            console.log('我按下了press');
        });
```
### 键盘对象属性
|键盘事件对象 属性|说明|
|--|--|
|keyCode(已弃用)|返回该键值的ASCII值|
keyCode已弃用使用key,key直接返回输入的值
- `onkeydown`和`onkeyup`不区分字母大小写，`onkeypress`区分字母大小写。
- 在我们实际开发中，我们更多的使用keydown和keyup，它能识别所有的键（包括功能键）
- Keypress 不识别功能键，但是keyCode属性能区分大小写，返回不同的ASCII值
