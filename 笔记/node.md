[toc]
# fs 文件系统模块
## 读取指定文件中的内容
### fs.readFile()方法
```js
fs.readFile(path[, options], callback)
```
参数1：必选参数，字符串，表示文件路径
参数2：可选参数，以什么编码格式读取文件，默认utf8
参数3：必选参数，文件读取完后，通过回调函数拿到读取的结果
```js
// 1 导入fs模块,来操作文件
const fs=require('fs')
// 2.调用fs.readFile()方法读取文件
// 参数1：读取文件的存放路径
// 参数1:读取文件编码格式 默认utf8
// 参数3：文件读取完后，通过回调函数拿到读取的结果 err dataStr
fs.readFile('1.js','utf8',function(err,dataStr){
    // 打印失败的结果
    // 如果读取成功则err的值为null
    // 如果读取失败err的值为错误对象，dataStr的值为undefined
    console.log(err);
    console.log('------');
    // 打印成功的结果
    console.log(dataStr);
})
```
### 判断文件是否读取成功
```js
const fs=require('fs');
fs.readFile('1.js','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+err.message);
    }
    console.log('读取文件成功'+dataStr);
})  
```
## 向指定的文件中写入内容
### fs.writeFile()方法
```js
fs.writeFile(file, data[, options], callback)
```
参数1：必选参数,需要指定一个文件路径的字符串，表示文件的存放路径
参数2：必选参数,要写入的内容
参数3：可选参数,以什么编码格式写入文件内容，默认utf8
参数4：必选参数,文件写入完成后的回调函数
```js
// 1.导入fs文件系统模块
const fs=require('fs');
// 2.调用fs.writeFile()方法 写入文件内容
fs.writeFile('1.js','abcd','utf8',function(arr){
    // 如果被写入的文件已存在内容，写入时会替换掉文件原本内容
    // 写入的时候如果没有这个文件，会自动创建这个文件
    console.log(err);
})
```
## 路径动态拼接问题 __dirname
- 在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，容易出现路径动态拼接错误的问题
- 原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径
- 解决方案：在使用 fs 模块操作文件时，直接提供完整的路径，从而防止路径动态拼接的问题
- __dirname 获取文件所处的绝对路径
```js
fs.readFile(__dirname+'1.js','utf8',function(err,dataStr){
})
```
# path 路径模块
path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求
如果要在js代码中使用path模块来处理路径，则需要使用如下方法先导入它
```js
const path=require('path')
```
## 路径拼接path.join()
使用path.join()放法，可以把多个路径片段拼接为完整的路径字符串
```js
const path=require('path')
// 注意：../会抵消前面的路径
const pathStr=path.join('/a','/b/c','../','/d','/e')
console.log(pathStr);//\a\b\d\e

const pathStr2=path.join(__dirname,'/1.js')
console.log(pathStr2);//D:\vscode\笔记\练习\node.js\1.js
```
注意：今后凡是涉及到路径拼接的操作都要使用path.join()，不要直接使用+
## 获取路径中文件名 path.basename()
使用 path.basename() 方法，可以获取路径中的最后一部分，经常通过该方法获取路径中的文件名
```js
path.basename(path[, ext])
```
path: 必选参数，表示一个路径的字符串
ext: 可选参数，文件扩展名
```js
const path=require('path')
const fpath='2.2/index.txt';
const fullName=path.basename(fpath)
console.log(fullName);//index.txt
const name=path.basename(fpath,'.txt')
console.log(name);//index
```
## 获取路径中文件扩展名 path.extname()
使用path.extname()方法，可以获取路径中的扩展名部分
```js
path.extname(path)
```
# http 模块
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块
## 创建基本 Web 服务器
```js
// 导入http模块
const http=require('http')
// 创建 web 服务器实例
const server = http.createServer()
// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request',function(req,res){
    console.log('Someone visit our web server.');
})
// 启动服务器
server.listen(80,function(){
    console.log('server running at http://127.0.0.1:80');
})
```
### req请求对象
只要服务器接收到了客户端的请求，就会调用通过server.on()为服务器绑定的request事件处理函数
如果想在事件处理函数中访问客户端相关的数据或属性，可以使用如下方式:
```js
    // req是请求对象，包含了与客户端相关的数据和属性
    server.on('request',(req)=>{
    // req.url是客户端请求的URL地址
    const url=req.url
    // req.method是客户端请求的method类型
    const method=req.method
    const str=`Your request url is ${url}, and request method is ${method}`
    console.log(str);
```
### res响应请求
在服务器request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下方式:
```js
    server.on('request',(req，res)=>{
        // res是响应对象，它包含了与服务器相关的数据或属性，例如：
        // 要发送到客户端的字符串
        const str=`Your request url is ${url}, and request method is ${method}`
        // res.end()方法的作用：向客户端发送指定的内容，并结束这次请求的处理过程
        res.end(str)
```
### 中文乱码
```js
res.setHeader('Content-Type', 'text/html; charset=utf-8')
```
## 根据不同的url响应不同的html内容
### 核心实现步骤
1. 获取请求的url地址
2. 设置默认响应内容为 404 Not found
3. 判断用户请求的是否为 / 或 /index.html 首页
4. 判断用户请求的是否为 /about.html 关于页面
5. 设置Content-Type响应头，防止中文乱码
6. 使用res.end()把内容响应给客户端
### 动态响应内容
```js
const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    // 获取请求的url地址
    const url=req.url
    // 设置默认响应内容为 404 Not found
    let content='<h1>404 Not found</h1>'
    // 判断用户请求的是否为 / 或 /index.html 首页
    // 判断用户请求的是否为 /about.html 关于页面
    if(url==='/'||url==='/index.html'){
        content='<h1>首页</h1>'
    }else if(url==='/about.html'){
        content='<h1>关于页面</h1>'
    }
    // 设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 使用res.end()把内容响应给客户端
    res.end(content)
})
server.listen(81,()=>{
    console.log('server running at http://127.0.0.1:81');
})
```
# 模块化
## 模块化概念
- 模块化是指解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程，模块是可组合、分解和更换的单元。
- 模块化可提高代码的复用性和可维护性，实现按需加载。
- 模块化规范是对代码进行模块化拆分和组合时需要遵守的规则，如使用何种语法格式引用模块和向外暴露成员。
## Node.js 中模块的分类
- 内置模块(内置模块是由Node.js官方提供的，例如fs、path、http等)
- 自定义模块(用户创建的每个.js文件，都是自定义模块)
- 第三方模块(由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载)
## 加载模块
使用require()方法
注意：加载用户自定义模块需要写路径，可以省略.js的后缀名
使用require()方法加载其他 模块时，会执行被加载模块中的代码
## Node.js 中的模块作用域
- 和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
- 作用：防止全局变量污染
## 向外共享模块作用域中的成员
### module对象
- 在每一个自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息
### module.exports对象
- 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
- 外界用require()方法导入自定义模块时，得到的就是 module.exports所指向的对象。
### exports对象
- 由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。
- 默认情况下，exports 和 module.exports 指向同一个对象。最终共享的结果，以 module.exports 指向的对象为准。
## Node.js 中的模块化规范
Node.js遵循CommonJS模块化规范，CommonJS规定了模块的特性和各模块之间如何互相依赖
CommonJS规定：
- 每个模块内部，module变量代表当前模块
- module 变量是一个对象，它的export属性（module.exports）是对外的接口
- 加载某个模块即加载该模块的 module.exports 属性，require()方法用于加载模块
# npm与包
## 包
Node.js中的第三方模块又叫做包
包是基于内置模块封装出来的，提供了更高级更方便的API，极大的提高了开发效率
### 下载
从 http://www.npmjs.com/ 网站上搜索所需要的包
使用npm包管理工具从 http://registry.npmjs.org/ 服务器上下载需要的包，
## npm
npm -v 查看 npm 版本
### 在项目中安装包的命令
```js
npm install 包的完整名称
简写：
npm i 包的完整名称
安装指定版本的包：
npm i 包的完整名称@指定具体的版本
```
重新安装会覆盖之前安装的版本
包的版本号是以‘点分十进制’形式定义的，共三位数
- 1.大版本
- 2.功能版本
- 3.Bug修复版本
## 包管理配置文件
npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件，用来记录与项目有关的一些配置信息，如：
- 项目的名称、版本号、描述等
- 项目中用到了哪些包
- 哪些包只会在开发期间使用
- 哪些包在开发和部署时都需要用到
### 多人协作问题
遇到的问题：第三方包的体积过大。不方便团队成员之间共享项目源代码
解决方案：共享时剔除node_modules
### 如何记录项目中安装了哪些包
在项目根目录中，创建一个叫做package.json的配置文件，即可记录项目中安装了哪些包。从而方便剔除node_modules目录之后，在团队成员之间共享项目的源代码
注意：在开发项目中，一定要把node_modules文件夹添加到.gitignore忽略文件中
### 创建 package.json
```js
npm init -y
```
注意：
- 上述命令只能在英文目录下成功运行，所以项目文件夹的名称一定要使用英文命名，不能使用中文，不能出现空格
- 运行 npm install 命令安装包的时候，npm包管理工具会自动把包的名称和版本号记录到package.json中

vscode 中导入包后自动创建
### dependencies节点
package.json文件中有一个dependencies节点，专门用来记录您使用npm install命令安装了哪些包
如果某些包在开发和项目上线之后都需要用到，建议将这些包记录到dependencies节点中
### 一次性安装所有的包
当我们拿到一个剔除了node_modules的项目之后，需要下载所有包，项目才能运行
```js
npm install（或 npm i）
```
### 卸载包
```js
npm uninstall 包的名称    （不能简写）
```
### devDependencies 节点
如果某些包只在开发阶段用到，在项目上线之后不会用到，建议将这些包记录到devDependencies节点中
```js
npm install 包名 --save-dev
简写：
npm i 包名 -D
```
判断是否需要安装到devDependencies节点中，参考npm官方提供的说明
## 解决下包速度慢问题
通过淘宝NPM镜像服务器下载
## 包的分类
使用npm包管理工具下载的包共分为两大类：
- 项目包
- 全局包
### 项目包
那些被安装到项目的node_modules目录中的包，都是项目包
项目包分为：
- 开发依赖包（被记录到devDependencies 节点中的包，只在开发阶段用到）
- 核心依赖包（被记录到dependencies 节点中的包，在开发和项目上线之后都需要用到）
### 全局包
全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules目录下
```js
npm install（或i） 包名 -g     把包安装为全局包
npm root -g     查看全局包的安装位置
npm uninstall 包名 -g       卸载全局安装的包
```
注意：
- 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令
- 判断某个包是否需要全局安装后才能使用，可以参考官方提供的说明
### i5ting_toc
i5ting_toc 是一个可以把md文档转为html页面的小工具，使用步骤如下：
- 将i5ting_toc安装为全局包： npm install -g i5ting_toc
- 调用i5ting_toc，实现 md 转换为html：i5ting_toc -f 要转换的md文件路径 -o
## 规范的包结构
一个规范的包的组成结构必须符合以下三点要求：
- 包必须以单独的目录而存在
- 包的顶级项目下必须包含package.json这个包管理配置文件
- package.json中必须包含 name、version、main这三个属性，分别代表包的名字、版本号、包的入口
## 开发属于自己的包
### 需要实现的功能
- 格式化日期
- 专一HTML中的特殊字符
- 还原HTML中的特殊字符
### 初始化包的基本结构
1. 新建itheima-tools文件夹，作为包的根目录
2. 在itheima-tools文件夹中，新建三个文件：
- package.json（包管理配置文件）
- index.js（包的入口文件）
- README.md（包的说明文件）
### 初始化package.json
略。。。
p32-p36
# 模块的加载机制
## 优先从缓存中加载
模块在第一次加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被执行多次
注意：不论是内置模块、自定义模块、第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率
## 内置模块的加载机制
内置模块的加载优先级最高
如，require('fs')始终返回的是内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs
## 自定义模块的加载机制
使用require()加载自定义模块时，必须以./或../开头的路径标识符
同时，使用require()导入自定义模块时，如果省略了文件扩展名，则Node.js会按顺序分别尝试加载以下的文件：
1. 按照确切的文件名进行加载
2. 补全.js扩展名进行加载
3. 补全.json扩展名进行加载
4. 补全.node扩展名进行加载
5. 报错
## 第三方模块的加载机制
如果传递给require()的模块标识符不是一个内置模块。也没有以./或../开头，则Node.js会从当前模块父目录开始，尝试从node_modules文件夹中加载第三方模块
如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，指导文件系统的根目录
## 目录作为模块
当把目录作为模块标识符，传递给require()进行加载时，有三种加载方式：
1. 在被加载的目录下查找一个叫package.json的文件，并寻找main属性，作为require()加载的入口
2. 如果目录里没有package.json文件，或main入口不存在或无法解析，则Node.js会试图加载目录下的index.js文件
3. 若以上都失败，则报错：Error:Cannot find module 'xxx'
# Express
## 什么是Express
官方解释：Express是基于Node.js平台，快速、开放、极简的Web开发框架
通俗理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的
本质：npm上的第三方包，提供了快速创建Web服务器的便捷方法
http内置模块用起来很复杂，开发效率低；Express是基于内置的http模块进一步封装出来的极大的提高了开发效率
Express是基于http内置模块进一步封装出来的
## Express能做什么
对前端程序员来说，最常见的两种服务器是：
- Web网站服务器：专门对外提供Web网页资源的服务器
- API接口服务器：专门对外提供API接口的服务器

使用Express可以快速、方便的创建Web网站的服务器或API接口的服务器
## Express的基本使用
### 安装
在项目所处目录中运行：npm i express@4.17.1  即可将express安装到项目中使用
### 创建基本的Web服务器
```js
// 1.导入express
const express=require('express')
// 2.创建Web服务器
const app=express()
// 3.启动Web服务器
app.listen(81,()=>{
    console.log('express server running at http://127.0.0.1:81');
})
```
### 监听GET请求
通过app.get()方法可以监听客户端的GET请求
```js
app.get('请求URL',function(req,res){/*处理函数*/})
```
### 监听POST请求
通过app.post()方法可以监听客户端的POST请求
```js
app.post('请求URL',function(req,res){/*处理函数*/})
```
### 把内容响应给客户端
通过res.send()方法，可以把处理好的内容发送给客户端
```js
app.get('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:'zs',age:20,:'男'})
})
app.post('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})
```
### 获取URL中携带的查询参数
通过req.query对象，可以访问到客户端通过查询字符串的形式发送到服务器的参数
```js
app.get('/',(req,res)=>{
    // 通过req.query可以获取到客户端发送过来的查询参数
    // 注意：默认情况下，req.query是一个空对象
    console.log(req.query);
    req.send(req.query)
})
```
### 获取URL中的动态参数
通过req.params对象，可以访问到URL中，通过:匹配到的动态参数
```js
app.get('/user/:id',(req,res)=>{
    // req.params是动态匹配到的URL参数，默认是一个空对象
    console.log(req.params);
    req.send(req.params)
})
```
## 托管静态资源
### express.static()
通过express.static()可以非常方便的创建一个静态资源服务器，例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
```js
app.use(express.static('文件夹路径'))
```
现在，你就可以访问填写的文件夹目录中的所有文件了
​http://localhost/images/bg.jpg
​http://localhost/css/style.css
​http://localhost/js/login.js
注意：Express在指定的静态目录中查找文件，并对外提供资源访问路径，因此，存放动态文件的目录名不会出现在 URL 中
### 托管多个静态资源目录
如果托管多个静态资源目录，请多次调用express.static()函数
访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件，如下同名先访问public文件夹
```js
app.use(express.static('public'))
app.use(express.static('files'))
```
### 挂载路径前缀
如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式
```js
app.use('/public', express.static('public'))
```
​现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了
### nodemon
在编写调试 Node.js 项目的时候，如果修改了项目的代码，需要频繁的手动重新启动服务，使用 nodemon https://www.npmjs.com/package/nodemon 工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动重启项目，极大方便了开发和调试。
```js
npm i -g nodemon
```
现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon 文件路径.js 来启动项目。
```js
nodemon 文件路径.js
```
## Express 路由
广义上来讲，路由就是映射关系
在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系
Express 中的路由分 3 部分组成，分别是请求的类型、请求的 URL 地址、处理函数，格式如下
```js
app.method(path, handler)	
// method 具体为 get post 等
// path指请求的URL地址
// handler指处理函数
```
### 路由的匹配过程
- 每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
- 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

注意:
- 按照定义的先后顺序进行匹配
- 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数
### 模块化路由
为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。将路由抽离为单独模块的步骤如下
- 创建路由模块对应的 .js 文件
- 调用 express.Router() 函数创建路由对象
- 向路由对象上挂载具体的路由
- 使用 module.exports 向外共享路由对象
- 使用 app.use() 函数注册路由模块
```js
// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()			
// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
    res.send('Get user list.')})
router.post('/user/add', (req, res) => {
    res.send('Add new user.')})

// 4. 向外导出路由对象
module.exports = router
```
```js
const express = require('express')
const router = require('./router')	// 1. 导入路由模块

const app = express()

// 注意： app.use() 函数的作用，就是来注册全局中间件
// app.use('/files', express.static('./files'))
app.use('/api', router)	// 2. 注册路由模块，若想使用静态资源一样可以加统一的访问前缀

app.listen(80, () => {console.log('http://127.0.0.1')})
```

未学
略。。。
https://blog.csdn.net/m0_52316372/article/details/124759186