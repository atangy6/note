// 导入http模块
const http=require('http')
// 创建 web 服务器实例
const server = http.createServer()
// 为服务器实例绑定 request 事件，监听客户端的请求
// req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
    // req.url是客户端请求的URL地址
    const url=req.url
    // req.method是客户端请求的method类型
    const method=req.method
    const str=`Your request url is ${url}, 请求的method类型为 ${method}`
    console.log(str);
    // 设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
})
server.listen(81,()=>{
    console.log('server running at http://127.0.0.1:81');
})