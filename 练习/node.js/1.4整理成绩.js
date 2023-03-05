// 1.导入fs模块
const fs=require('fs')
// 2.调用fs.readFile()方法读取文件内容
fs.readFile('1.4成绩.txt','utf8',function(err,dataStr){
    // 3.判断是否成功
    if(err){
        return console.log('读取失败'+err.message);
    }
    // console.log('读取成功 '+dataStr);
    // 4.1先把成绩的数据按空格分割
    const arrOld=dataStr.split(' ')//split() 方法用于把一个字符串分割成字符串数组。
    // 4.2循环分割后的数组，对每一项数据进行字符串的替换操作
    const arrNew=[]
    //foreach适用于只是进行集合或数组遍历，for则在较复杂的循环中效率更高
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    // 4.3把新数组中的每一项进行合并，得到一个新的字符串
    const newStr=arrNew.join('\r\n')
    // console.log(newStr);
    // 5.调用fs.readFile()方法,把处理完的成绩写入到新文件中
    fs.writeFile('1.4ok.txt',newStr,function(err){
        if(err){
            return console.log('写入文件失败'+err.message);//return会终止程序执行
        }
        console.log('成绩写入成功');
    })
})
