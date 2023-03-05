<template>
<!-- 未加根节点报错 -->
<div class='student'>
    <!-- 组件的结构 -->
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click='sendStudentName'>把学生名给School组件</button>
</div>
</template>
// 订阅消息与发布
// Student传递数据，School接收数据
<script>
// 引入pubsub库
    import pubsub from 'pubsub-js'
// 组件交互相关的代码（数据、方法等）
    export default{
        name:'Student',
        data(){
            return {
                name:'张三',
                age:18,
            }
        },
        mounted(){
            
        },
        methods:{
            // 发布消息
            sendStudentName(){
                pubsub.publish('hello',666)
            }
        }
    }
</script>
<style scoped>
 /* 组件的样式 */
 .student{
    background-color: rgb(135, 212, 219);
    padding: 5px;
    margin-top: 30px;
 }
</style>
