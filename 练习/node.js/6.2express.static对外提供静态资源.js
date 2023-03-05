const express=require('express')
const app=express()
// 调用express.static()方法，快速对外提供静态资源
app.use(express.static('./素材/code/szal'))
app.listen(81,()=>{
    console.log('express server running at http://127.0.0.1:81');
})