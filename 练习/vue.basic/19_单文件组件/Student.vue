<template>
<!-- 未加根节点报错 -->
<div>
    <!-- 组件的结构 -->
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
</div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
    export default{
        name:'student',
        data(){
            return {
                name:'张三',
                age:18,
            }
        },
    }
</script>
