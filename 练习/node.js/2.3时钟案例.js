

// 1.1 导入fs模块
const fs = require('fs')
// 1.2 导入path
const path = require('path')
 
// 1.3 定义正则表达式，分别匹配<style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
 
// 2.1 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '素材/index.html'), 'utf8', function (err, dataStr) {
//    2.2读取HTML文件失败
    if (err) return console.log('读取HTML文件失败！' + err.message)
//    2.3 读取文件成功后，调用对应的三个方法，分别拆解出css, js, html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHtml(dataStr)
})
 
// 3.1 定义处理css样式的方法
function resolveCSS(htmlStr) {
//    3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
//    3.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
//    3.4 调用fs.wirteFile()方法，将提取的样式，写入到clock目录中index.css的文件里面
    fs.writeFile(path.join(__dirname, 'szal/index.css'), newCSS, function (err) {
        if (err) return console.log('写入css样式失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}
 
// 4.1处理js脚本
function resolveJS(htmlStr) {
    //4.2 通过正则，提取对于的<script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    //4.3将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
//    4.4将处理的结果，写入到clock目录中的index.js文件里面
    fs.writeFile(path.join(__dirname, 'szal/index.js'), newJS, function (err) {
        if (err) return console.log('写入JavaScri脚本失败！' + err.message)
        console.log('写入JS脚本成功！')
    })
}
 
//5.1定义处理HTML结构的方法
function resolveHtml(htmlStr) {
//    5.2 将字符串调用replace方法，把内嵌的style和script标签吗，替换为外联的link和script标签
    const newHTML = htmlStr.replace(regStyle, '<link rel ="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
//    5.3 写入index.html 这个文件
    fs.writeFile(path.join(__dirname, 'szal/index.html'), newHTML, function (err) {
        if (err) return console.log('写入HTML文件失败！' + err.message)
        console.log('写入HTML页面成功！')
    })
}