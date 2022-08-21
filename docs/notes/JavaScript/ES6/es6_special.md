# ES6新特性

## 1.箭头函数  
1. 概述：
    ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿
名函数的定义；  

2. 箭头函数的注意点：
  - 如果形参只有一个，则小括号可以省略；
  - 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果；
  - **箭头函数 this 指向声明时所在作用域下 this 的值；**
  - 箭头函数不能作为构造函数实例化；
  - 不能使用 `arguments；`  

3. 特性：
  - 箭头函数的`this`是静态的，**始终**指向函数声明时所在作用域下的this的值；
  - 不能作为构造实例化对象；
  - 不能使用 `arguments` 变量；

4. 点击div两秒后变成粉色

```html
<html>
<head>
<meta charset="utf-8">
<title>箭头函数的实践和应用场景</title>
<style>
div {
width: 200px;
height: 200px;
background: #58a;
}
</style>
</head>
<body>
<div id="ad"></div>
<script>
// 需求-1 点击 div 2s 后颜色变成『粉色』
// 获取元素
let ad = document.getElementById('ad');
// 绑定事件：这也是错误写法，这里的this还是window
// ad.addEventListener("click", () => {
// // ES6写法
// // 定时器：参数1：回调函数；参数2：时间；
// setTimeout(() => this.style.background = 'pink',2000);
// }
// )
// 绑定事件
ad.addEventListener("click", function(){
// ES6写法
// 定时器：参数1：回调函数；参数2：时间；
// 这个this才是ad
setTimeout(() => this.style.background = 'pink',2000);
}
)
</script>
</body>
</html>
```

## 2.解构赋值

>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

1. 数组的解构赋值

```js
const F4 = ["大哥","二哥","三哥","四哥"];
let [a,b,c,d] = F4;
// 这就相当于我们声明4个变量a,b,c,d，其值分别对应"大哥","二哥","三哥","四哥"
console.log(a + b + c + d); // 大哥二哥三哥四哥  
```  

2. 对象的解构赋值
```js
const F3 = {
name : "大哥",
age : 22,
sex : "男",
xiaopin : function(){ // 常用
console.log("我会演小品！");
}
}
let {name,age,sex,xiaopin} = F3; // 注意解构对象这里用的是{}
console.log(name + age + sex + xiaopin); // 大哥22男
xiaopin(); // 此方法可以正常调用  
```  

3. 应用场景：
频繁使用对象方法、数组元素，就可以使用解构赋值形式；


## 3.模板字符串
1. 概述：
模板字符串（template string）是增强版的字符串，用反引号（`）标识    

2. 特点：
  - 字符串中可以出现换行符；
  - 可以使用 ${xxx} 形式引用变量；  


3. 应用场景：
当遇到字符串与变量拼接的情况使用模板字符串；

## 4.let const关键字

1. let
   - 不允许重复声明；
   - 块儿级作用域（局部变量）；
   - 不存在变量提升；
   - 不影响作用域链；

2. const
  const 关键字用来声明常量，const 声明有以下特点：
   - 声明必须赋初始值；
   - 标识符一般为大写（习惯）；
   - 不允许重复声明；
   - 值不允许修改；
   - 块儿级作用域（局部变量） 


## 5.函数参数默认值  

1. ES6 允许给函数参数赋值初始值
    - 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)  

2. 与解构赋值结合

```js
// 注意这里参数是一个对象
    function connect({host="127.0.0.1", username,password, port}){
      console.log(host)
      console.log(username)
      console.log(password)
      console.log(port)
   }
    connect({
      host: 'atguigu.com',
      username: 'root',
      password: 'root',
      port: 3306
   })
```

## 6.rest参数
  1. ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；
  2. arguments 对象不是真正的数组，而rest 参数是数组实例，可以直接应用sort, map, forEach, pop等方法

```js
// ES5获取实参的方式
function data(){
   console.log(arguments);
}  
data("1","2","3","4");

//ES6的rest参数...args，rest参数必须放在最后面
function data(...args){
console.log(args); // fliter some every map
}
data("1","2","3","4");

```

## 7.扩展运算符

1. ... 扩展运算符能将数组转换为逗号分隔的参数序列；  


2. 扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包；  


3. 应用：
   - 数组的合并
   - 数组的克隆
   - 将伪数组转为真正的数组

```js
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr=[...arr1,...arr2]
console.log(arr)  

const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divArr); // arguments
```

## 8.Symbol 
>ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型  

1. 特点
   - Symbol 的值是唯一的，用来解决命名冲突的问题；
   - Symbol 值不能与其他数据进行运算；
   - Symbol 定义的对象属性不能使用for…in循环遍历 ，但是可以使用Reflect.ownKeys 来获取对象的所有键名；

```js
//创建Symbol
    let s = Symbol();
    // console.log(s, typeof s);
    let s2 = Symbol('尚硅谷');
//Symbol创建对象属性：
    let s3 = Symbol('尚硅谷');
     console.log(s2==s3); // false
    //Symbol.for 创建
    let s4 = Symbol.for('尚硅谷');
    let s5 = Symbol.for('尚硅谷');
    console.log(s4==s5); // true
    //不能与其他数据进行运算
    //  let result = s + 100;
    //  let result = s > 100;
    //  let result = s + s;
```

2. Symbol创建对象属性
```js
let say = Symbol('say');
let youxi= {
  name:"狼人杀",
 [say]: function(){
    console.log("我可以发言")
 },
 [Symbol('zibao')]: function(){
    console.log('我可以自爆');
 }
}
youxi[say]();
```

3. Symbol内置值

![symbol](./images/symbol.png)   

```js
const arr = [1,2,3];
const arr2 = [4,5,6];
// 合并数组：false数组不可展开，true可展开
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(arr2));//arr2未展开
```