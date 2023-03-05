
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 第一步：安装全局事件总线 借助beforeCreat钩子
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
