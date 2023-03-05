const path=require('path')
const fpath='2.2/index.txt';
const fullName=path.basename(fpath)
console.log(fullName);//index.txt
const name=path.basename(fpath,'.txt')
console.log(name);//index

const fe=path.extname(fpath)
console.log(fe);//.txt