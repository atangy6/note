// 导入http，fs，path 模块
const http=require('http')
const fs=require('fs')
const path=require('path')
// 创建web服务器
const server=http.createServer()
// 监听web服务器的request事件
server.on('request',(req,res)=>{
    // 获取客户端请求的url地址
    const url=req.url
    // 把请求的url地址映射为本地文件的存放路径
    // const fpath=path.join(__dirname,url)
    // 定义空白的文件存放路径
    let fpath=''
    if(url==='/'){
        fpath=path.join(__dirname,'./szal/index.html')
    }else{
        fpath=path.join(__dirname,'/szal',url)
    }
    // 根据映射过来的路径读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        // 如果文件读取失败，向客户端响应固定的错误消息
        if(err) return res.end('404 Not found.')
        // 如果文件读取成功，将读取成功的内容响应给客户端
        res.end(dataStr)
    })
})
// 启动web服务器
server.listen(81,()=>{
    console.log('server running at http://127.0.0.1:81');
})