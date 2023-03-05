<template>
    <div>
        <button @click='isShow=!isShow'>显示/隐藏</button>
        
        <!-- Vue用<transition>包裹实现动画效果的标签 -->
        <!-- <transition> -->
        <!-- 如果给transition添加名字xx,则v-要改为xx- -->
        <!-- :appear='true' 添加‘:’代表表达式是布尔值，也可直接写appear -->
        <transition name='hello' :appear='true'>
        <h1 v-show='isShow'>动画效果!</h1>
        </transition>
    </div>
</template>
<script>
export default {
    name:'Test',
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
    /* 进入 */
    /* .v-enter-active{ */
    .hello-enter-active{
        animation: atguigu 1s linear;
    }
    /* 隐藏 */
    /* .v-leave-active{ */
    .hello-leave-active{
        animation: atguigu 1s linear reverse;
    }
    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>