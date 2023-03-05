<template>
  <div class='app'>
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <school :getSchoolName='getSchoolName'/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <student v-on:atguigu='getStudentNane'/>
  </div>
</template>

<script>
// 引入组件
import school from "./components/School";
import student from "./components/Student";
export default {
  name: "App",
  components: {
    school,
    student,
  },
  data(){
    return{
      msg:'你好啊'
    }
  },
  methods:{
    // 接收name
    getSchoolName(name){
      console.log(name);
    },
    getStudentNane(name){
      console.log('getStudentNane被调用了',name);
    }
  }
};
</script>
<style scoped>
.app{
  background-color: rgb(211, 167, 167);
  padding: 5px;
}
</style>
