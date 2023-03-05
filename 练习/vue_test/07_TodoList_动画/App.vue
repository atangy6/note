<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList
          :todos="todos"
        />
        <!-- 将todos数据传给MyFooter 再去MyFooter中声明-->
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
// 引入库时第三方的往上写，自己写的往下
import pubsub from 'pubsub-js'
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  // 注册
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      // todos:[]
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    updateTodo(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title= title
      });
    },
    // 删除
    deleteTodo(_,id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除所有完成的
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  // 监视
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo) 
    this.$bus.$on('updateTodo',this.updateTodo) 
    // this.$bus,$on('deleteTod',this.deleteTod)//全局事件总线
    // 订阅消息
    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    // this.$bus.$off('deleteTod')//全局事件总线

    // 取消订阅
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="css">
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn-edit{
  color: #FFF;
  background-color: skyblue;
  border: 1px solid #6787cd;
  margin-right: 5px;
}
.btn-danger{
  color: #FFF;
  background-color: #da4f49;
  border: 1px solid #ac1e17;
}
</style>