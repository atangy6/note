# 创建Vue项目
1. 全局安装@vue/cli    （仅第一次执行）
npm install -g @vue/cli
安装之后，你就可以在命令行中访问 vue 命令
2. 配置淘宝镜像 （可持久使用）
npm config set registry https://registry.npm.taobao.org
解决下载速度缓慢
3. 创建脚手架
vue create 名称
注意更改地址
4. 运行
npm run serve
5. 报错
报错信息：Component name "Student" should always be multi-word
解决方案：在项目的根目录找到vue.config.js 文件
        在文件中添加如下内容：lintOnSave:false //关闭语法检查
# 脚手架文件结构
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
# 关于不同版本的Vue
- vue.js与vue.runtime.xxx.js的区别：
  vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
  vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。
# vue.config.js配置文件
- 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
- 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh
# ref属性
1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
打标识：`<h1 ref="xxx">.....</h1>或 <School ref="xxx"></School>`
获取：`this.$refs.xxx`
# props配置项
props 可以是数组或对象，用于接收来自其他组件的数据
- 传递数据：`<Demo name="xxx"/>`
- 接收数据：
第一种方式（只接收）：props:['name','age']
第二种方式（限制类型）：props:{name:String}
第三种方式（限制类型、限制必要性、指定默认值）
```js
export default{
  name:'Student',
  data(){
      return {
        msg:'学生信息'
      }
  },

  // 简单语法
  // props:['name','age']

  // 对象     检测类型,接收的同时对类型进行限制
  /* props:{
      name:String,
      age:number,
  } 

  // 接收的同时对类型进行限制+默认值的指定+必要性的限制
  props:{
      name:{
          type:String,//类型是字符串
          required:true//name是必要的
      },
      age:{
          // 注意：数据类型大写
          type:Number,
          default:22//默认值
      }
  }
}
```
备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
# mixin(混入)
- 功能：可以把多个组件共用的配置提取成一个混入对象
- 使用方式：
第一步定义混合：
{
    data(){....},
    methods:{....}
    ....
}
第二步使用混入：
全局混入：Vue.mixin(xxx)
局部混入：mixins:['xxx']
# 插件
- 功能：用于增强Vue
- 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
- 定义插件：
```js
对象.install = function (Vue, options) {
    // 1. 添加全局过滤器
    Vue.filter(....)

    // 2. 添加全局指令
    Vue.directive(....)

    // 3. 配置全局混入(合)
    Vue.mixin(....)

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {...}
    Vue.prototype.$myProperty = xxxx
}
```
- 使用插件：Vue.use()
# scoped样式
作用：让样式在局部生效，防止冲突。
写法：`<style scoped>`
安装less（可以使用less或css格式）
`npm i less-loader`
写法：<style lang="less">
