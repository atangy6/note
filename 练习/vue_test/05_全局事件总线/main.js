
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.x=vc

new Vue({
  render: h => h(App),
}).$mount('#app')
