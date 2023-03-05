// 1.导入fs文件系统模块
const fs=require('fs');
// 2.调用fs.writeFile()方法 写入文件内容
fs.writeFile('1.js','abcd','utf8',function(arr){
    // 如果被写入的文件已存在内容，写入时会替换掉文件原本内容
    // 写入的时候如果没有这个文件，会自动创建这个文件
    console.log(err);
})
