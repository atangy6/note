const path=require('path')
// 注意：../会抵消前面的路径
const pathStr=path.join('/a','/b/c','../','/d','/e')
console.log(pathStr);//\a\b\d\e

const pathStr2=path.join(__dirname,'/1.js')
console.log(pathStr2);//D:\vscode\笔记\练习\node.js\1.js