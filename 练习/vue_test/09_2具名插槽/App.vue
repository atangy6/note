<template>
  <div class='container'>
    <!-- 传输数据 -->
    <Category  title='美食'>
      <img slot='center' src="../../images/b.webp" alt="">
      <a slot='footer' href="http://www.baidu.com">更多</a>
    </Category>
    
    <Category  title='游戏'>
      <ul slot='center'>
        <li v-for='(g,index) in games' :key='index' >{{g}}</li>
      </ul>
      <div slot='footer' class='foot'>
        <a slot='footer' href="http://www.baidu.com">单机游戏</a>
        <a slot='footer' href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category  title='电影'>
      <video slot='center' controls src="../../20220325101653.mp4"></video>
      <template v-slot:footer>
        <div class='foot'>
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
        <a href="http://www.baidu.com">更多</a>
      </div>
      <h4 slot='footer'>欢迎前来观看</h4>
      </template>
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
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>
