// 在一个自定义模块中，默认情况下module.exports={}
const age=20
// 向module.exports对象上挂载username属性
module.exports.username='zs'
// 向module.exports对象上挂载sayHello属性
module.exports.sayHello=function(){
    console.log('Hello');
}
module.exports.age=age

// 让module.exports指向一个全新的对象
module.exports={
    nickname:'小黑',
    sayHi(){
        console.log('Hi')
    }
}

// 前三个是在原来module.exports对象里面直接添加属性和方法，最后一个是给module.exports重新赋值了一个新对象