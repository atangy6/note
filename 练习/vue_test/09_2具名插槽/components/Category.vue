<template>
    <div class='category'>
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot name='center'>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
        <slot name='footer'>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>
<script>
export default {
    name:'Category',
    // 接收
    props:['title']
}
</script>
<style lang="css" scoped>
    .category{
        background-color: rgb(180, 216, 216);
        width: 200px;
        height: 300px;
    }
    .category img{
        width: 100%;
    }
    .category video{
        width: 100%;
    }
    h3{
        text-align: center;
        background-color: rgb(237, 197, 222);
    }
</style>