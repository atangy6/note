// 该文件用于创建Vuex中最为核心地段store
import Vue from 'vue'
Vue.use(Vuex)
// 引入vuex
import Vuex from 'vuex'
// 准备actions——用于响应组件中的动作
const actions ={
    jia(context,value){
        context.commit('jia',value)
    },
    jian(context,value){
        context.commit('jian',value)
    }
}
// 准备mutations——用于操作数据（state）
const mutations ={
    jia(state,value){
        state.sum+=value
    },
    jian(state,value){
        state.sum-=value
    },
}
// 准备state——用于存储数据
const state ={
    sum:0,//当前输入的和
}
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})

