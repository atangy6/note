<template>
  <div>
    <img src="./assets/logo.png" alt="" >
    <school></school>
    <student></student>
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
};
</script>
