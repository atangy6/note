<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和为放大10倍为：{{$store.state.sum*10}}</h3>
        <select v-model.number="n"> <!-- 方法1：.number收集到的东西强制转换为Number -->
            <!-- 方法2：加了‘:’所有字符串当js表达式解析 -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
export default {
    name:'Count',
    data(){
        return{
            n:1,//用户选择的数字
            
        }
    },
    methods:{
        increment(){
           this.$store.dispatch('jia',this.n)
        },
        decrement(){
            this.$store.dispatch('jia',this.n)
        },
        incrementOdd(){
            if(this.$store.store.sum%2){
                this.$store.dispatch('jia',this.n)
            }
        },
        incrementWait(){
            setTimeout(()=>{
                this.$store.dispatch('jia',this.n)
            },500)
        },
    }
}

</script>
<style lang="css" scoped>
   button{
    margin-left: 5px;
   }
</style>