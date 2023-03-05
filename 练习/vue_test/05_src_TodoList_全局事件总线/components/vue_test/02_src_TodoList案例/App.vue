<template>
  <div id='root'>
    <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo='addTodo' />
      <MyList :todos='todos' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
      <!-- 将todos数据传给MyFooter 再去MyFooter中声明-->
      <MyFooter :todos='todos' :checkAllTodo='checkAllTodo' :clearAllTodo='clearAllTodo'/> 
    </div>
  </div>
  </div>
</template>

<script>
// 引入组件
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
  data(){
    return{
      todos:[
      {id:'001',title:'抽烟',done:true},
      {id:'002',title:'喝酒',done:false},
      {id:'003',title:'烫头',done:true},
    ]
    }
  },
  methods:{
    // 添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // 勾选或取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      })
    },
    // 删除
    deleteTodo(id){
      this.todos=this.todos.filter((todo)=>{
        return todo.id!==id
    })
    },
    // 全选或取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
    // 清除所有完成的
    clearAllTodo(){
      this.todos= this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  }
};
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
</style>
