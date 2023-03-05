const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
module.exports={
  pages:{
    index:{
      // 入口
      entry:'src/main.js'
    },
   
  },
  lintOnSave: false//关闭语法检查
}
