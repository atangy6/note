<template>
    <div>
        <button @click='isShow=!isShow'>显示/隐藏</button>
        <!-- Vue用<transition>包裹实现动画效果的标签 -->
        <!-- <transition> -->
        <!-- 如果给transition添加名字xx,则v-要改为xx- -->
        <!-- :appear='true' 添加‘:’代表表达式是布尔值，也可直接写appear -->
        <transition-group name='hello' :appear='true'>
        <h1 v-show='!isShow' key='1'>过渡效果!</h1>
        <h1 v-show='isShow' key='2'>你好啊!</h1>
        </transition-group>
    </div>
</template>
<script>
export default {
    name:'Test2',
    data(){
        return{
            isShow:true,
        }
    }
}
</script>
<style lang="css" scoped>
    h1{
        background-color: rgb(231, 203, 150);
       
    }
    /* 进入的起点 *//* 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear
    }
    /* 进入的终点 *//* 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
    
</style>