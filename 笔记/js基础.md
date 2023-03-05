[toc]
# 输入输出语句
|方法|说明|归属|
|--|--|--|
|alert(msg);|浏览器弹出警示框|	浏览器|
|console.log(msg);|	浏览器控制台打印输出信息|	浏览器|
|prompt(info);|	浏览看弹出输入框，用户可以输入|	浏览器|
`alert()`主要用来显示消息给用户
`console.log()`用来给程序员看自己运行时的消息
# 变量
本质：变量是程序在内存中申请的一块用来存放数据的空间
## 变量的命名规范
由字母(A-Z,a-z)，数字(0-9)，下划线(_)，美元符号($)组成，如:usrAge,num01,__name
严格区分大小写。 var app; 和 var App; 是两个变量
不能以数字开头。
不能是关键字，保留字。例如：var,for,while
遵循驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName
# 数据类型
JavaScript **是一种弱类型或者说动态语言**。这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。
- 在代码运行时，变量的数据类型是由JS引擎根据 = 右边变量值的数据类型来判断的，运行完毕之后， 变量就确定了数据类型。
- JavaScript 拥有**动态类型**，这意味着相同的变量可用作不同的类型

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
**引用数据类型（对象类型）**：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。
## 数字型Number
JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等
在JS中八进制前面加0，十六进制前面加 0x
### Number属性
- JS中数值的最大值：`Number.MAX_VALUE`
- JS中数值的最小值：`Number.MIN_VALUE`
- `Infinity` ，代表无穷大，大于任何数值
- `-Infinity` ，代表无穷小，小于任何数值
- `Nan`，Not a Number，代表一个非数值
### isNaN
这个方法用来判断是否非数字，并且返回一个值，如果是数字返回的是false，如果不是数字返回的是true
```js
console.log(isNaN(12));
console.log(isNaN('age'));
```
## 字符串型String
一个字符串可以使用单引号或双引号
JS可以用单引号嵌套双引号，或者用双引号嵌套单引号（外双内单，外单内双）
### 字符串转义符
类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。
转义符都是 \ 开头的，常用的转义符及其说明如下：
|转义符	|解释说明|
|--|--|
|\n	|换行符，n是newline|
|\\|斜杠\|
|\ ’|’ 单引号|
|\ ‘’|‘’ 双引号|
|\ t|tab 缩进|
|\ b|空格，b是blank的意思|
### 字符串长度
字符串是由若干字符组成的，这些字符的数量就是字符串的长度。通过字符串的 length 属性可以获取整个字符串的长度。
```js
//通过字符串的length属性可以获取整个字符串的长度
var strMsg = "我是";
alert(strMsg.length);     //显示6
```
### 字符串的拼接
多个字符串之间可以使用`+`进行拼接，其拼接方式为**字符串+任何类型=拼接之后的新字符串**
拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串
```js
    alert(12+12); //24
    alert('12'+12); //1212
    var age=18;
    alert('小明'+age+'岁')//小明18岁
```
## 布尔型Boolean
布尔类型有两个值`true`和`false`其中true表示真（对），而false表示假（错）。
**布尔型和数字型**相加的时候，true的值为`1`,false的值为`0`。
```js
var flag=true;
alert(flag+1);
```
## undefined未定义
一个声明后没有被赋值的变量会有一个默认值 undefined (如果进行相连或者相加时，注意结果）
使用typeof检测一个undefined值时，会返回undefined
- undefined和字符串相加，会拼接字符串
- **undefined和数字相加**，最后结果是`NaN`
## 空值null
一个声明变量给null值，里面存的值为空
使用typeof检测一个null值时，会返回object
- null和字符串相加，会拼接字符串
- **null和数字相加**，最后结果是原来的数字
## typeof
typeof 可用来获取检测变量的数据类型
typeof返回数据类型的字符串表达
```js
var age=18;
alert(typeof age);//结果为number
```

# 数据类型转换
使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。
我们通常会实现3种方式的转换：
- 转换为字符串类型
- 转换为数字型
- 转换为布尔型
## 转换为字符串型
- 变量.toString()
- String(变量)
- 利用+拼接字符串
## 转换为数字型
|方式|说明|案例|
|--|--|--|
|**parseInt(变量)**|将string类型转成**整数**数值型|parselnt(‘78’)|
|**parseFloat(变量)**|将string类型转成**浮点**数数值型|parseFloat(‘78.21’)|
|Number(变量)|将string类型转换为数值型|Number(‘12’)|
|js 隐式转换(- * /)	|利用算术运算隐式转换为数值型|‘12’-0|
## 转换为布尔型
Boolean(变量)
!!
# 运算符
## 算数运算符
对非number类型的值进行运算时，会先转换为number再运算
- true 1,false 0,null 0
- 任何值和NaN运算都得NaN

字符串+任何类型=拼接之后的新字符串
## 浮点数的精度问题
浮点数值的最高精度是17位小数，但在进行算数计算时其精确度远远不如整数
所以不要直接判断两个浮点数是否相等
## 递加递减
++i 先加1再赋值
i++ 先赋值再加1
## 比较(关系)运算符
符号>,>=,<,<=成立返回true,不成立返回false
- 任何值和NaN做比较都是false
- 对于非数值进行比较时，会将其转换为数字然后再比较(不含非数字字符串)
- 如果符号两侧的值都是字符串时，不会转换为数字型，而会分别比较字符串的Unicode编码
console.log('a'<'b');//97<98,true
比较字符串编码时时一位一位进行比较，如果两位一样，则比较下一位
console.log('abc'<'ab');//false
注意：在比较两个字符串型的数字时，一定要转型
- 纯数字和数字字符串相比较，则将字符串数字隐式转换成数字再进行比较
- 纯数字和非数字字符串比较，都返回false

等于符号`==`自动转换数据类型
- undefined衍生自null,这两个值做相等判断时，会返回true
- NaN不和任何值相等，包括它本身
console.log(NaN==NaN);//false
可以通过isNaN()函数判断一个值是否是NaN
- console.log(null==0);//false

不相等`!=`自动转换数据类型

全等符号`===`要求两侧的值和数据类型完全一致
- console.log(undefined===null);//false

不全等符号`!==`要求两侧的值和数据类型完全一致
## 逻辑运算符
|运算符|描述|例子|
|--|--|--|
|`&&`|与|(x < 10 && y > 1) 为 true|
|`||`|或|(x == 5 `||` y == 5) 为 false|
|`!`|非	|!(x == y) 为 true	试一试|
```js
    var x=3;
    var y=6;
    console.log(x<4&&y==6);//true
    console.log(x>8||y>5)//true     
    console.log(!(x<y));//false   
```
## 短路运算(逻辑中断)
短路运算的原理：当有多个表达式（值）时,左边的表达式值可以确定结果时,就不再继续运算右边的表达式的值
js中‘与’和‘或’都属于短路运算符
### 逻辑与
语法：表达式1 && 表达式2
- 如果第一个表达式的值为真，则返回表达式2
- 如果第一个表达式的值为假，则返回表达式1
```js
console.log(123 && 456);   //456
console.log(0 && 456);     //0
console.log(123 && 456 && 789);  //789
```
### 逻辑或
语法：表达式1 || 表达式2
- 如果第一个表达式的值为真，则返回表达式1
- 如果第一个表达式的值为假，则返回表达式2
```js
console.log(123 || 456); //123
console.log(0 || 456);   //456
console.log(123 || 456 || 789);  //123
```
`逻辑与`比`逻辑或`优先级`高`
## 三元运算符(条件运算符)
语法结构 : 表达式1 ? 表达式2 : 表达式3
如果表达式1为true，则返回表达式2的值,如果表达式1为false，则返回表达式3的值
```js
var num=prompt('请输入一个数字');
var result=num>=10?num:0+num;
alert('结果为：'+result);
```
# 流程控制
流程控制主要有三种结构，分别是`顺序结构`、`分支结构`和`循环结构`，这三种结构代表三种代码执行的顺序
## switch
```js
switch(表达式){
    case value1:
        执行语句1;//表达式等于value1时要执行的代码
        break;
    case value2:
        执行语句2;
        break;
    ...
    default:
}
```
## switch和if else if的区别
- switch语句一般处理case比较确定的值的情况--**确定取值**
- if else if语句更为灵活，常用于范围判断--**范围取值**
- switch效率高;if else if效率低
- 分支多时switch效率高;分支少时if else if效率高
## 循环
for - 循环代码块一定的次数
for/in - 循环遍历对象的属性
while - 当指定的条件为 true 时循环指定的代码块
do/while - 同样当指定的条件为 true 时循环指定的代码块
### continue 关键字
`continue`关键字用于立即跳出本次循环，继续下一次循环
### break关键字
`break`关键字用于立即跳出整个循环
### for in和for of(es6)
for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值
for in总是得到对象的key或数组、字符串的下标
for of总是得到对象的value或数组、字符串的值
# 数组
数组(Array)是一种特殊的变量，它能够一次存放一个以上的值。
数组索引从 0 开始
## 创建数组
- 利用 new 创建数组
- 利用数组字面量创建数组
## 遍历数组
遍历数组的最安全方法是使用 "for" 循环：
```js
 var arr=['a','b','c','d','e'];
      for(var i=0;i<5;i++){
          console.log(arr[i]);
      }
```
## 数组的长度
使用“数组名.length”可以访问数组元素的数量（数组长度）
## 数组中新增元素
### 通过修改 length 长度新增数组元素
可以通过修改 length 长度来实现数组扩容的目的
```js
 var arr=['red','green','pink','blue'];
        console.log(arr.length);
        arr.length=6;
        console.log(arr);
        console.log(arr[4]);
        console.log(arr[5]);
 ```
### 通过修改数组索引新增数组元素
可以通过修改数组索引的方式追加数组元素
不能直接给数组名赋值，否则会覆盖掉以前的数据
### 向数组添加新元素的最佳方法是使用push()方法
数组名.push();
```js
var arr=['red','green','pink','blue'];
        arr.push('orange');
        console.log(arr);
 ```
### 冒泡排序
```js
<script>
var arr=[5,4,3,2,1];
        for(var i=0;i<arr.length-1;i++){//外层循环管趟数,
            for(var j=0;j<arr.length-i-1;j++){//里面的循环管每一趟交换的次数
                if(arr[j]>arr[j+1]){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
        </script>
```
# 函数
函数：就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用。
使用typeof检查一个函数对象时，会返回function
## 函数的使用
函数在使用时分为两步：声明函数和调用函数
### 声明函数
```js
function 函数名(){
     //函数体代码
}
```
function 是声明函数的关键字,必须小写
由于函数一般是为了实现某个功能才定义的，所以通常我们将函数名命名为动词，比如 getSum
### 调用函数
```js
函数名(); //通过调用函数名来执行函数体代码
```
调用的时候千万不要忘记添加小括号
口诀：**函数不调用，自己不执行**
注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。
## 函数的封装
函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口
## 函数的参数
### 形参和实参
在**声明函数时**，可以在函数名称后面的小括号中添加一些参数，这些参数被称为`形参`，而在**调用该函数**时，同样也需要传递相应的参数，这些参数被称为`实参`
|参数|说明|
|--|--|
|形参|形式上的参数 函数定义的时候 传递的参数 当前并不知道是什么|
|实参|实际上的参数 函数调用的时候 传递的参数 实参是传递给形参的|
参数的作用 : 在函数内部某些值不能固定，我们可以通过参数在**调用函数时传递不同的值**进去
- 函数调用的时候实参值是传递给形参的
- 形参简单理解为:**不用声明的变量**
### 形参和实参个数不匹配
|参数个数|说明|
|--|--|
|实参个数等于形参个数|输出正确结果|
|实参个数多于形参个数|只取到形参的个数|
|实参个数小于形参个数|多的形参定义为undefined，结果为NaN|
## 函数的返回值
### return语句 
return 语句会终止函数的执行并返回函数的值。
```js
function 函数名（）{
    ...
    return  需要返回的值;
}
函数名();    // 此时调用函数就可以得到函数体内return 后面的值
```
可以定义一个变量来接收该结果
- 在使用return语句时，函数会`停止执行`，并返回指定的值
- 如果函数没有return或return后不跟任何值，返回的值是`undefined`
- return语句之后的代码不被执行
- return只能返回一个值。如果用逗号隔开多个值，以最后一个为准
## arguments的使用
当我们不确定有多少个参数传递的时候，可以用arguments 来获取。在JavaScript 中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个arguments对象，**arguments对象中存储了传递的所有实参。**
- arguments存放的是传递过来的实参
- arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点
​ ①：具有 length 属性
​ ②：按索引方式储存数据
​ ③：不具有数组的 push , pop 等方法
## 立即执行函数
函数定义完，立即被调用，这种函数叫做立即执行函数
立即执行函数往往只会执行一次
(function(){})()  或者   (function(){}());
```js
    (function(a,b){
        console.log(a+b);
    })(1,2);//第二个小括号可以看做是调用函数
```
## this
根据函数的调用方式的不同，this会指向不同的对象：
- 以函数形式调用时，this永远都是window
- 以方法形式调用时，this就是调用方法的那个对象
# 作用域
## 作用域
作用域指一个变量的作用的范围
### 函数作用域
- 调用函数时创建函数作用域，函数执行完毕以后局部作用域销毁
- 每调用一次函数就会创建一个新的函数作用域，它们之间是互相独立的
- 在函数作用域中可以访问到全局作用域的变量
在全局作用域中无法访问到函数作用域的变量
- 当在函数作用域操作一个变量时，会先在自身作用域中寻找，有则直接使用，没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中依然没有，则会报错
### 全局作用域
- 直接编写在script标签中的js代码，都在全局作用域
- 全局作用域在页面打开时创建，在页面关闭时销毁
- 在全局作用域中有一个全局对象window
代表的是一个浏览器的窗口,我们可以直接使用
- 在全局作用域中
创建的变量都会作为window对象的属性保存
创建的函数都会作为window对象的方法保存
## 变量的作用域
- 局部变量
函数的形参也可以看做是局部变量
- 全局变量
为尚未声明的变量赋值，此变量会自动成为全局变量。
### 区别
全局变量：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存
局部变量：只在函数内部使用，当其所在的代码块被执行时，会被初始化；当代码块运行结束后，就会被销毁，因此更节省内存空间
## 作用域链
作用域链：采取就近原则的方式来查找变量最终的值。
# 对象
JavaScript中的对象分为3种：自定义对象 、内置对象、 宿主对象
## 基本数据类型和引用数据类型
js中的变量都是保存到栈内存中的
基本数据类型的值直接存储栈内存中，值与值之间独立存在，修改一个变量不会影响其他变量
对象是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是对象的内存地址（对象的引用），如果两个变量保存的是同一个对象引用，当通过一个变量修改属性时另一个也会受到影响
## 对象的组成
属性：属性名（字符串）和属性值（任意）组成
方法：一种特别的属性（属性值是函数）
## 创建对象
在 JavaScript 中，现阶段我们可以采用三种方式创建对象（object）：
- 利用字面量创建对象
- 利用 new Object创建对象
- 利用构造函数创建对象
### 利用字面量创建对象
var 对象名={属性：值,...,...}
### 利用 new Object创建对象
var 对象名 = new Object();
- 使用new关键字调用的函数，称为构造函数constructor
- 构造函数是专门用来创建对象的函数
- 使用typeof检查一个对象时，返回object
```js
        var obj=new Object();
        console.log(typeof obj);//Object
        obj.name='张三';
        obj.age='18';
        obj.age='20';//修改
        console.log(obj);//{name: '张三', age: '20'}
        delete obj.name;//删除
        console.log(obj);//{age: '20'}
```
### 利用构造函数创建对象
- 构造函数就是一个普通的函数，创建方式与普通函数没有区别
- 构造函数约定首字母大写。
- 函数内的属性和方法前面需要添加**this**，表示当前对象的属性和方法。
- 构造函数中不需要return返回结果。
- 与普通函数区别是，必须用**new**来调用构造函数。
- 构造函数执行流程
1.立即创建一个新的对象
2.将新建的对象设置为函数中的this
3.执行函数中的代码
4.将新建的对象作为返回值返回
```js
function Star(uname,age){
            this.name=uname;//属性
            this.age=age;
            this.xz=function(xz){
                console.log(xz);
            }//方法
        }
        var jsy=new Star('jsy',28);
        console.log(jsy.name);
        console.log(jsy.age);
        jsy.xz('狮子');
        var ly=new Star('ly',21);
        console.log(ly.name);
        console.log(ly.age);
        ly.xz('水瓶');
```
### 变量、属性、函数、方法总结
变量：单独声明赋值，单独存在
属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征
函数：单独存在的，通过“函数名()”的方式就可以调用
方法：**对象里面的函数称为方法，方法不需要声明**，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。
### new关键字
new 在执行时会做四件事:
- 在内存中创建一个新的空对象。
- 让 this 指向这个新的对象。
- 执行构造函数里面的代码，给这个新对象添加属性和方法
- 返回这个新对象（所以构造函数里面不需要return）
## 对象的调用
对象.属性名
对象['属性名']
对象.方法名()
## 遍历对象
for...in 语句用于对数组或者对象的属性进行循环操作。
```js
for (变量 in 对象名字) {
    // 在此执行代码
}
```
语法中的变量是自定义的，它需要符合命名规范，通常我们会将这个变量写为 k 或者 key。
```js
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```
## 原型对象prototype
原型prototype
- 我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象
- 如果函数作为普通函数调用prototype没有任何作用
- 当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过__proto__来访问该属性
## 内置对象
内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能
JavaScript 提供了多个内置对象：Math、 Date 、Array、String等
### Math对象
Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用Math中的成员。
```js
// Math数学对象，不是一个构造函数，所以我们不需要new 来调用，而是直接使用里面的属性和方法即可
Math.PI		 			// 圆周率
Math.floor() 	 		// 向下取整
Math.ceil()             // 向上取整
Math.round()            // 四舍五入   x.5往大取
Math.abs()		 		// 绝对值
Math.max()/Math.min()	// 求最大和最小值 
```
- Math.random()方法可以随机返回一个小数，其取值范围是 [0，1)
- 这个方法里面**不跟参数**
```js
// 得到两个数之间的随机整数，并且包含这两个整数
function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1,10));
```
### Data()日期对象
Date对象用于处理日期和时间。
Data对象是一个构造函数，**必须使用new来调用**
```js
       var date=new Date(2020,10,1);
       console.log(date);//返回的月份比实际月份大1
       var date1=new Date('2020-10-1');
       console.log(date1);//返回的月份是实际月份
```
#### 使用 Date() 方法获得当日的日期。
|方法名|说明|代码|
|--|--|--|
|getFullYear()|	获取当年|dObj.getFullYear()|
|getMonth()|获取当月(0-11)|	dObj.getMonth()+1|
|getDate()|获取当天日期|dObj.getDate()|
|getDay()|获取星期几(周日0到周六6)|	dObj.getDay()|
|getHours()|获取当前小时|dObj.getHours()|
|getMinutes()|获取当前分钟|dObj.getMinutes()|
|getSeconds()|获取当前秒钟|dObj.gerSeconds()|
```js
       var date=new Date();//返回当前时间
       console.log(date.getFullYear());
       console.log(date.getMonth()+1);//返回的月份小一个月
       console.log(date.getDate());
       console.log(date.getDay());//周一1，周六6，周日0
       console.log(date.getHours());
       console.log(date.getMinutes());
       console.log(date.getSeconds());

       var date=new Date();
       var year=date.getFullYear();
       var month=date.getMonth()+1;
       var dates=date.getDate();
       var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
       var day=date.getDay();
       console.log('现在是'+year+'年'+month+'月'+dates+'日'+arr[day]);
//要求封装一个函数返回当前的时分秒
    function getTime(){
        var time=new Date();
        var h=time.getHours();
        h=h<10?'0'+h:h;
        var m=time.getMinutes();
        m=m<10?'0'+m:m;
        var s=time.getSeconds();
        s=s<10?'0'+s:s;
        return h+':'+m+':'+s;
    }
    console.log(getTime());
```
#### 获取日期的总的毫秒形式(时间戳)
- date.valueOf() ：得到现在时间距离1970.1.1总的毫秒数
- date.getTime() ：得到现在时间距离1970.1.1总的毫秒数
- var date=+new Date();
console.log(date);
- H5新增的获得总的毫秒数 有兼容性问题
console.log(Date.now());
### 数组对象
#### 数组对象的创建
创建数组对象的两种方式
- 字面量方式
var arr=[1,2,3];console.log(arr[0]);
- new Array()
var arr=new Array();
#### 检测是否为数组
- instanceof 运算符，可以判断一个对象是否属于某种类型
- Array.isArray() 用于判断一个对象是否为数组，isArray()是HTML5中提供的方法,ie9以上版本支持
```js
        var arr=[];
        var obj={};
        console.log(arr instanceof Array);//true
        console.log(obj instanceof Array);//false
        console.log(Array.isArray(arr));//true
        console.log(Array.isArray(obj));//false
```
 Array.isArray()优先于instanceof
 #### 添加删除数组元素
|方法名|说明|返回值|
|--|--|--|
|push(参数1…)|末尾添加一个或多个元素，注意修改原数组|并返回新的长度|
|pop()|删除数组最后一个元素|返回它删除的元素的值|
|unshift(参数1…)|向数组的开头添加一个或更多元素，注意修改原数组|并返回新的长度|
|shift()|删除数组的第一个元素，数组长度减1，无参数，修改原数组|并返回第一个元素|
```js
        var arr=[1,2,3,4,5];
        console.log(arr);
        console.log(arr.push(6));
        console.log(arr.unshift(0));
        console.log(arr);//0,1,2,3,4,5,6
        console.log(arr.pop());
        console.log(arr.shift());
        console.log(arr);//1,2,3,4,5
```
#### 数组排序
|方法名	|说明|是否修改原数组|
|--|--|--|
|reverse()|	颠倒数组中元素的顺序，无参数|该方法会改变原来的数组，返回新数组|
|sort()|对数组的元素进行排序|该方法会改变原来的数组，返回新数组|
```js
        //翻转数组
        var arr=[1,2,3,4,5];
        arr.reverse();
        console.log(arr);
        //数组排序（冒泡排序）
        var arr1=[6,9,1,5,0];
        arr1.sort();
        console.log(arr1);
        //存在非个位数，升降序
        var arr2=[6,66,9,1,12,5,0];
        arr2.sort(function(a,b){
            return b-a;//降序
            return a-b;//升序
        });
        console.log(arr2);
```
#### 数组索引
|方法名|说明|返回值|
|--|--|--|
|indexOf()|数组中查找给定元素的**第一个索引**|如果存在返回索引号，如果不存在，则返回-1|
|lastIndexOf()|在数组的**最后一个索引**，从后向前索引|如果存在返回索引号，如果不存在，则返回-1|
```js
        var arr=['red','green','blue','pink'];
        console.log(arr.indexOf('blue'));//2
        console.log(arr.indexOf('orange'));//-1
        var arr=['red','blue','green','blue','pink'];
        console.log(arr.lastIndexOf('blue'));//3
        console.log(arr.lastIndexOf('orange'));//-1
```
案例：数组去重
#### 数组转化为字符串
|方法名	|说明|返回值|
|--|--|--|
|toString()|把数组转换成字符串，逗号分隔每一项|返回一个字符串|
|join('分隔符')|方法用于把数组中的所有元素转换为一个字符串|返回一个字符串|
```js
        var arr=[1,2,3];
        console.log(arr.toString());//1,2,3
        console.log(arr.join('&'));1&2&3
 ```
### 字符串对象
基本包装类型
- 为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。
- 基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。
#### 根据字符返回位置
字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，操作完成会返回一个新的字符串
|方法名|说明|
|--|--|
|indexOf('要查找的字符'，开始的位置)|返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号|
|lastIndexOf()|从后往前找，只找第一个匹配的|
#### 根据位置返回字符
|方法名|说明|使用|
|--|--|--|
|charAt(index)|返回指定位置的字符(index字符串的索引号)|str.charAt(0)|
|charCodeAt(index)|获取指定位置处字符的**ASCII码**|str.charCodeAt(0)|
|str[index]|获取指定位置处字符|HTML,IE8+支持和charAt()等|
```js
      //charAt(index)遍历字符串
       var str='andy';
       for(var i=0;i<str.length;i++){
            console.log(str.charAt(i));
       }
      //charCodeAt(index) 返回相应索引号的字符的ASCII码 目的：判断用户按下了哪个键
      var str='andy';
            console.log(str.charCodeAt(0));//97
      //str[index] H5新增的
      console.log(str[0]);//a
 ```
#### 字符串操作方法
|方法名|说明|
|--|--|
|concat(str1,str2,str3…)|concat()方法用于连接两个或对各字符串。拼接字符串,等效于+，+更常用|
|**substr(start,length)**|从start位置开始(索引号),length取的个数。|
|slice(start,end)|从start位置开始,截取到end位置,end取不到(两个都是索引号)|
|substring(start,end)|从 start 位置开始，截取到end位置,end取不到(基本和slice相同，但是不接受负)|
```js
        var str='andy';
        console.log(str.concat('red'));
        var str1='asdfghk';
        console.log(str1.substr(2,3))//从2开始取三个，dfg
```
#### replace()方法
replace()方法用于在字符串中用一些字符**替换**另一些字符
注意：只会替换第一个字符
其使用格式：replace(被替换的字符,要替换为的字符串)
```js
        var str='andy';
        console.log(str.replace('a','b'));
        //将s替换为*
        var str='andysovjewjlshgsk';
        while(str.indexOf('s')!==-1){
            str=str.replace('s','*');
        }
        console.log(str);
```
#### split()方法
split() 方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。
```js
        var arr='red,green,blue';
        console.log(arr.split(','));
```
#### 大小写转换
toUpperCase() 转换大写
toLowerCase() 转换小写
# 正则表达式
正则表达式用于定义一些**字符串**的规则
- 计算机可以根据正则表达式来检查一个字符串是否符合规则
- 或者将字符串中符合规则的内容提取出来
## 创建正则表达式的对象
```js
//使用构造函数创建
var 变量=new RegExp("正则表达式","匹配模式");

//使用字面量创建
var 变量=/正则表达式/匹配模式;
```
使用typeof检查正则对象，会返回object
在构造函数中可以传递一个匹配模式作为第二个参数
- i,忽略大小写
- g,全局匹配模式
可以为一个正则表达式设置多个匹配模式且顺序无所谓
## test()
test() 方法是一个正则表达式方法。
使用这个方法可以用来检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，符合返回true,否则返回false
```js
    var reg=new RegExp('ab','i');
    console.log(reg.test('Abcde'));//true

    var reg=/ac/i;
    console.log(typeof reg);//object
    console.log(reg.test("abcd"));//false
```
## 符号
```js
    // 创建一个正则表达式，检查一个字符串中是否有a或c
    // 使用|表示或者
    var reg=/a|c/i;
    console.log(reg.test('abcd'));//true

    // 创建一个正则表达式，检查一个字符串中是否有字母
    // []里的内容也是或的关系
    // [ab]==a|b
    // [a-z]任意小写字母
    // [A-Z]任意大写字母
    // [A-z]任意字母
    // [0-9]任意数字
    var reg=/[a-z]/;
    console.log(reg.test('f'));//true

    // 检查一个字符串中是否含有abc或adc或aec
    reg1=/a[bde]c/;
    console.log(reg1.test('saec'));//true

    // [^]除了
    var reg=/[^ab]/;
    console.log(reg.test('abc'));//true
    console.log(reg.test('a'));//false
```
## 字符串和正则相关的方法
### split()
split() 可以将一个字符串拆分为一个数组
方法中可以传递一个正则表达式作为参数，这样将会根据正则表达式去拆分字符串
```js
        var str='1a2b3c4d5e6f7';
        var result=str.split('c');
        console.log(result.length);//2
        console.log(result);//['1a2b3', '4d5e6f7']
        var result=str.split(/[A-z]/);
        console.log(result);//['1','2','3','4','5','6','7']
```
### search()
search() 可以搜索字符串中是否含有指定内容
如果搜索到指定内容则会返回**第一次**出现的索引，没有搜索到则会返回-1
它可以接收一个正则表达式作为参数，然后根据正则表达式去检索字符串
```js
        str='hello abc hell abc afc';
        result=str.search(/a[ef]c/);
        console.log(result);//19
```
### match()
可以根据正则表达式从一个字符串中将符合条件的内容提取出来
默认情况下match只会找到**第一个**符合要求的内容，找到以后就停止检索，我们可以设置正则表达式为 全局匹配模式，这样就会匹配到所有内容
match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果
```js
        var str='1a2b3c4d5e6f7AB';
        result=str.match(/[A-z]/gi);
        console.log(result);//['a','b','c','d','e','f']
```
### replace()
可以将字符串中指定内容替换为新的内容
参数：
- 被替换的内容，可以接收一个正则表达式作为参数
- 新的内容

默认只会替换**第一个**
```js
        var str='1a2b3c4d5e6f7AB';
        result=str.replace('a','w');
        console.log(result);//1w2b3c4d5e6f7AB
        news=str.replace(/[a-z]/gi,'@');
        console.log(news);//1@2@3@4@5@6@7@@
        result=str.replace(/[a-z]/gi,'');
        console.log(result);//1234567
```
## 量词
通过量词可以设置一个内容出现的次数
- `{n}`正好出现n次
- 量词只对它前边的一个内容有效，多个用()括起来
- `{m,n}`出现m到n次
- `{m,}`m次以上
- `+` 至少一个
- `*` 0个或多个
- `?` 0个或1个
```js
        var reg=/a{3}/;
        console.log(reg.test('aaabc'));//true
        reg=/ab{3}/;
        console.log(reg.test('abababab'));//false
        console.log(reg.test('abbb'));//true
        reg=/(ab){3}/;
        console.log(reg.test('abababab'));//true
        reg=/ab{1,5}/;
        console.log(reg.test('abb'));//true
        var reg=/a+/;
        console.log(reg.test('abc'));//true
```
### ^ $
`^` 表示开头--    /^a/
`$` 表示结尾--    /a$/
## 元字符
\w	查找数字、字母及下划线。
\W	查找非单词字符。
\d	查找数字。
\D	查找非数字字符。
\s	查找空白字符。
\S	查找非空白字符。
\b	匹配单词边界。
\B	匹配非单词边界。
### 检查字符串中是否有.
`.` 表示任意字符
在正则表达式中使用`\`作为转义字符
- `\.` 表示`.`
- `\\` 表示`\`

注意：使用构造函数时，由于它的参数是一个字符串，而\是字符串中转义字符，如果要在字符串中使用\则需使用\\来代替
### 匹配开头和结尾空格
/^\s*|\s*$/g
