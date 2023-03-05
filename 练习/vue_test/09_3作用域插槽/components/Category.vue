<template>
    <div class='category'>
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot :games='games'>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>

    </div>
</template>
<script>
export default {
    name:'Category',
    // 接收
    props:['title'],
    data() {
			return {
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				
			}
		},
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