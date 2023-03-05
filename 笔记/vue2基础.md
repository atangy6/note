[toc]
#
https://blog.csdn.net/weixin_44972008
https://blog.csdn.net/weixin_44772326/article/details/121628617


- Vue 项目中 vue.config.js 文件就等同于 webpack 的 webpack.config.js。
- npm run XXX是执行配置在 package.json 中的脚本，比如：
```js
"scripts": {
　　"serve": "vue-cli-service serve",
　　"build": "vue-cli-service build",
　　"lint": "vue-cli-service lint"
},
```
npm run xxx 中的 xxx 可以理解为键值对的 key，实际上 run 的是在 package.json 里面 scripts 配置的 value；
在npm run dev的时候，首先会去项目的package.json文件里找scripts 里找对应的 dev ，然后执行 tovdev 的命令。
例如启动vue项目 npm run serve的时候，实际上就是执行了vue-cli-service serve 这条命令。

# 创建Vue对象
1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
3. root容器里的代码被称为【Vue模板】
4. Vue实例和容器是一一对应的；
5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用；
6. {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
7. 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新
```html
 <!-- 准备好一个容器 -->
    <div id="root">
        <!-- 插值 -->
        <h1>hello!{{name}}</h1><!-- hello!张三 -->
    </div>
    <div id="root">
        <!-- 插值 -->
        <h1>hello!{{name}}</h1><!-- hello!{{name}} -->
    </div>
    <script>
        Vue.config.productionTip=false//设置为 false 以阻止 vue 在启动时生成生产提示。
        // 创建Vue实例
        new Vue({
            el:'#root',//el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
            data:{//data中用于存储数据，数据供el所指定的容器去使用，值暂时先写成一个对象
                name:'张三',
            }
        })
    </script>
```
## el
指定根element(选择器)
el的两种写法
1. new Vue()时配置el属性 
2. 先创建Vue实例，随后再通过v.$mount('#root')指定el的值
```js
    // (1) new Vue时候配置el属性。
    const v = new Vue({
	    el:'#root', //第一种写法
	    data:{
	    	name:'张三'
	    }
    })

    // (2) 先创建Vue实例，随后再通过vm.$mount(’#root’)指定el的值。
    const v = new Vue({
    	data:{
    		name:'张三'
    	}
    })
    v.$mount('#root')
```
## data
初始化数据(页面可以访问)
data的两种写法
1. 对象式
2. 函数式
```js
// 1.对象式
    data:{
    		name:'张三'
    	}
    // 2.函数式
    data(){
        console.log('@@@',this)
        return{
            name:'张三'
        }
    }
```
##  一个重要原则：
由Vue管理的函数，一定不要写函数箭头，一旦写了箭头函数，this就不再时Vue实例了
# vue模板语法
Vue模板语法有两大类：
        1.插值语法
            用于解析标签体内容
            ```js
            <span>Message: {{ msg }}</span>
            ```
        2.指令语法
            用于解析标签（包括：标签属性、标签体内容、绑定事件）
            举例：v-bind:href=“xxx” 或 简写为 :href=“xxx”，xxx同样要写js表达式，且可以直接读取到data中的所有属性
            备注：Vue中有很多的指令，且形式都是：v-??
# 数据绑定
Vue中有两种数据绑定的方式：
            1.单向绑定(v-bind):数据只能从data流向页面。
            2.双向绑定(v-model):数据不仅能从data流向页面，还可以从页面流向data。
            备注：
                1.单向绑定一般都应用在表单类元素上（如：input、select等）
                2.v-model:value 可以简写为v-model，因为v-model默认收集的就是value值。
# 理解Vue的MVVM实现
- M
模型(Model) ：data中的数据
- V
视图(View) ：模板代码（不是静态页面） （两个语法：指令，大括号表达式）
- VM
viewModel: 视图模型（Vue的实例）
Dom Listeners （Dom 监听）
Data Bindings （数据绑定） 

data中所有的属性，最后都出现在了vm身上。
vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。
## MVVM
MVVM 本质上是 MVC （Model-View- Controller）的改进版。即模型-视图-视图模型。
模型model指的是后端传递的数据，视图view指的是所看到的页面。
视图模型viewModel是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：
将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定
将视图转化成模型，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听
这两个方向都实现的，我们称之为数据的双向绑定
# 数据代理
数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）
```js
    let obj={x:100}
    let obj2={y:200}
    Object.defineProperty(obj2,'x',{
        get(){
            return obj.x
        },
        set(value){
            obj.x=value
        }
    })
```
## Vue中的数据代理
1.Vue中的数据代理：
            通过vm对象来代理data对象中属性的操作（读/写）、
            注意：vm._data === data，返回true。
2.Vue中数据代理的好处：
            更加方便的操作data中的数据
3.基本原理：
            通过Object.defineProperty()把data对象中所有属性添加到vm上。
            为每一个添加到vm上的属性，都指定一个getter/setter。
            在getter/setter内部去操作（读/写）data中对应的属性。
## Object.defineproperty()：es6中方法
Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```js
Object.defineProperty(obj, prop, descriptor)
```
- obj是你要要定义属性的对象
- prop是你要定义的属性
- desciptor 是要定义或修改的属性描述符

默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改、不可枚举、不可删除的
Object.defineProperty()的属性描述符有两种主要形式：数据描述符（value，writable）和存取描述符（get,get）
- enumerable:控制属性是否可以枚举，默认值为false
- configurable:控制属性是否可以被删除，默认值为false
- value:该属性对应的值，默认为 undefined。
- writable:控制属性是否可以被修改，默认值为false
- set一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
- get一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象
注意：两种描述符不能同时共存
```js
let number=18
    let person={
        name:'张三',
        sex:'男'
    }
    Object.defineProperty(person,'age',{
        // value:18,
        // enumerable:true,//控制属性是否可以枚举，默认值为false
        // writable:true,//控制属性是否可以被修改，默认值为false
        // configurable:true,//控制属性是否可以被删除，默认值为false
        // 当有人读取person的age属性时，get函数（getter）就会被调用，且返回值就是age的值
        get(){
            console.log('有人读取age属性了');
            return number;
        },
        // 当有人修改person的age属性时，set函数（setter）就会被调用，且会收到修改的具体值
        set(value){
            console.log('有人修改了age属性，且值是',value);
            number=value
        }
    })
```
# 事件处理
