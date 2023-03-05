<template>
  <div class='container'>
    <!-- 传输数据 -->
    <Category  title='美食'>
      <img src="../../images/b.webp" alt="">
    </Category>
    
    <Category  title='游戏'>
      <ul>
        <li v-for='(g,index) in games' :key='index' >{{g}}</li>
      </ul>
    </Category>
    <Category  title='电影'>
      <video controls src="../../20220325101653.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: "App",
  // 注册
  components:{Category},
  data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
  
}
 
</script>
<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
