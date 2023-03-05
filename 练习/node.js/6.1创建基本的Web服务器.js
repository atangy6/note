// 1.导入express
const express=require('express')
// 2.创建Web服务器
const app=express()

// 4.监听客户端的get和post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:'zs',age:20,gender:'男'})
})
app.post('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})
// 3.启动Web服务器
app.listen(81,()=>{
    console.log('express server running at http://127.0.0.1:81');
})

app.get('/',(req,res)=>{
    // 通过req.query可以获取到客户端发送过来的查询参数
    // 注意：默认情况下，req.query是一个空对象
    console.log(req.query);
    req.send(req.query)
})

app.get('/user/:id',(req,res)=>{
    // req.params是动态匹配到的URL参数，默认是一个空对象
    console.log(req.params);
    req.send(req.params)
})