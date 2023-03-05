<template>
  <div class="todo-footer" v-show="todos.length!=0">
    
    <label>
      <input type="checkbox" :checked='todos.length!=0 && todos.length===doneTotal' @change="checkAll"/>
    </label>
    <!-- 读取todos的长度 -->
    <span> <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  // 接收Vue组件数据todos
  props:['todos','checkAllTodo','clearAllTodo'],
  computed:{
    doneTotal(){
      return this.todos.reduce((pre,todo)=>pre+(todo.done ? 1:0),0)
    }
  },
  methods:{
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    },
    clearAll(){
      this.clearAllTodo()
    }
  }
};
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 39px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>