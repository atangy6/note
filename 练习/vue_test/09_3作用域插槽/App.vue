<template>
  <div class='container'>
    <!-- 传输数据 -->
    <Category  title='游戏'>
     <template scope={games}>
        <ul>
        <li v-for='(g,index) in games' :key='index' >{{g}}</li>
        </ul>
     </template>
    </Category>
    <Category  title='游戏'>
     <template scope={games}>
        <ol>
        <li v-for='(g,index) in games' :key='index' >{{g}}</li>
        </ol>
     </template>
    </Category>
    <Category  title='游戏'>
     <template scope={games}>
        <ul>
        <li v-for='(g,index) in games' :key='index' >{{g}}</li>
        </ul>
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
