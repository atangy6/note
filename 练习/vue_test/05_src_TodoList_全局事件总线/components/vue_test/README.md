# 总结TodoList案例
## 组件化编码流程：
(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
1).一个组件在用：放在组件自身即可。
2). 一些组件在用：放在他们共同的父组件上（状态提升）。
(3).实现交互：从绑定事件开始。
## props适用于：
(1).父组件 ==> 子组件 通信
(2).子组件 ==> 父组件 通信（要求父先给子一个函数）
使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

# webStorage
1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
3. 相关API：
4. xxxxxStorage.setItem('key', 'value');
该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
5. xxxxxStorage.getItem('person');
该方法接受一个键名作为参数，返回键名对应的值。
6. xxxxxStorage.removeItem('key');
该方法接受一个键名作为参数，并把该键名从存储中删除
7. xxxxxStorage.clear()
该方法会清空存储中的所有数据。
8. 备注：
- SessionStorage存储的内容会随着浏览器窗口关闭而消失。
- LocalStorage存储的内容，需要手动清除才会消失。
- xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。
- JSON.parse(null)的结果依然是null。
