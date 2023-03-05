<template>
<!-- 未加根节点报错 -->
<div class='student'>
    <!-- 组件的结构 -->
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click='sendStudentName'>把学生名字给App</button>
</div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
    export default{
        name:'Student',
        data(){
            return {
                name:'张三',
                age:18,
            }
        },
        methods:{
            sendStudentName(){
                // 触发student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name)
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
