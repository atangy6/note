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