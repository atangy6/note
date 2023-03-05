<template>
  <div class='app'>
    <h1>{{msg}}</h1>
     <school/>
     <student/>
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
};
</script>
<style scoped>
.app{
  background-color: rgb(211, 167, 167);
  padding: 5px;
}
</style>
