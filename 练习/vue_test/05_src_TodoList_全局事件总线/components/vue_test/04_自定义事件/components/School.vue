<template>
<!-- 未加根节点报错 -->
<div class='school'>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
</div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
    export default{
        name:'School',
        data(){
            return {
                name:'希望小学',
                address:'北京',
            }
        },
    }
</script>

<style scoped>
 /* 组件的样式 */
 .school{
    background-color: rgb(231, 200, 135);
    padding: 5px;
 }
</style>