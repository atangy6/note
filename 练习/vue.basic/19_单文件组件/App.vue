<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 引入组件
import school from "./School";
import student from "./Student";
export default {
  name: "App",
  components: {
    school,
    student,
  },
};
</script>
