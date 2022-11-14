# 基础知识

## 数据类型  

基本类型：`undefined`， `number`， `null`， `symbol`， `string`，`boolean`   

引用类型：`object`  

### 类型转换  

转换为false: `""`(空字符串）， `0`, `NAN`, `null`, `undefined`, 

## script元素

- async： 异步执行脚本，不阻塞文档渲染  
- defer：立即下载，延迟执行，脚本延迟到文档完全被解析和显示后在执行  
- crossorigin：配置相关请求的CORS设置，值为`anonymous`或`use-credentials`
- src
- type   


## 块级作用域   

块级作用域是函数作用域的子集，适用var的作用域限制也适用let   

let 在全局作用域中声明的变量不会称为window对象的属性（var声明的会）  

>块级作用域内的默认变量   

- 块级作用域内的默认变量(不用var，let，const生成的变量)，只有等到执行到那行代码后才能访问，在之前访问会报错    
- 块内默认变量是全局变量   

>块级作用域内的函数声明   

阅读：<https://juejin.cn/post/6844903955814694919#heading-1>   



```js
    var name = 'njy';
    console.log(window.name); //njy

    let age = 15;
    console.log(window.age); //undefined
```

## 类

>与函数定义相似，定义类有两种方式，类声明和类表达式，不同的是，函数声明可提升，但类声明不能

```js
class Person {}

const Animal = class {}
```

### 实例化  

>使用new实例化类等于使用new调用其构造函数，唯一不同的是JavaScript解释器知道使用new和类意味着应该使用constructor函数进行实例化  

用new调用类的构造函数会执行如下操作：  
1. 内存中创建一个空对象  
2. 新对象内部的`[[Prototype]]`指针被赋值为构造函数的prototype属性  
3. 构造函数内部的this被赋值为新对象（this指向新对象）  
4. 执行构造函数内部的代码（给新对象添加属性）  
5. 如果构造函数返回非空对象，则返回这个对象；否则，返回刚创建的新对象  

>调用类构造函数必须用new，普通构造函数如果不用new调用，就会以全局this（通常为window）作为内部对象

### 实例，原型方法

1. 实例

>每次调用new都会执行构造函数，在函数内部创建为新创建的实例（this）添加'自有'属性，每个实例都对应一个唯一的成员对象，所有成员不会在原型上共享  

2. 原型方法  

>类定义语法把在类块中定义的方法作为原型方法

- 在类块中定义的方法放在原型上
- 以表达式方式，箭头函数定义的属性或者方法放在类实例上 

```js
class parent {
      constructor(name) {
        this.name = name;
      }
      a = 1;
      change() {
        console.log('change',this);
      }
      to = function() {
        console.log('to', this);
      }
      add = ()=> {
        console.log('jian', this);
      }
    }
    let p = new parent('p');
    console.log(p);
    console.log(p.__proto__ === parent.prototype);
    console.log(parent.prototype);
    console.log(p.__proto__.constructor);
```

![class](./images/class2.png)


## 全局函数和全局变量  
>全局变量  
- Infinity: 正无穷大的数值
- NaN: 某个值不是数字值
- undefined

>全局函数
- decodeURI(): 解码某个编码的URI
- decodeURIComponent() : 解码一个编码的URI组件
- encodeURI(): 对字符串进行编码
- encodeURIComponent(): 字符串编码为 URI 组件。
- escape():对字符串进行编码。
- eval() :计算 Javascript 宇符串，并把它作为脚本代码来执行。
- isFinite():检查某个值是否为有穷大的数。
- isNaN(): 检查某个值是否是数宇。
- Number(): 把对象的值转换为数宇。
- parseFloat(): 解析一个字符串并返回一个浮点数。
- parseInt():解析一个字符串并返回一个整数。
- String(把: 对象的值转换为宇符串。
- unescape() :对由 escape()编码的字符串进行解码


## 函数

### 函数的理解和使用

1. 函数中的this
  - 显式指定谁: obj.xxx()  
  - 通过call/apply指定谁调用: xxx.call(obj)  
  - 不指定谁调用: xxx()  : window  
  - 回调函数: 看背后是通过谁来调用的: window/其它  
-  匿名函数自调用:  
  ```js
  (function(w, obj){
    //实现代码
  })(window, obj)
  ```
  * 专业术语为: IIFE (Immediately Invoked Function Expression) 立即调用函数表达式						  
2.  回调函数的理解
  * 什么函数才是回调函数?
    * 你定义的  
    * 你没有调用  
    * 但它最终执行了(在一定条件下或某个时刻)  
  * 常用的回调函数
    * dom事件回调函数   
    * 定时器回调函数  
    * ajax请求回调函数  
    * 生命周期回调函数  

### 原型与原型链

>**实例对象的隐式原型__proto__===构造函数的显式原型prototype**   

>所有构造函数都是Function的实例，所有原型对象都是Object的实例（除了Object.prototype)  
```js
Object.prototype instanceof Object //false   
Function.__proto__===Function.prototype //true
```

1. 所有`函数`都有一个特别的属性:
   * `prototype` : 显式原型属性    


2. 所有`实例对象`都有一个特别的属性:
   * `__proto__` : 隐式原型属性  


3. 显式原型与隐式原型的关系
   * 函数的`prototype`: 定义函数时被自动赋值, 值默认为{}, 即用为`原型对象`
   * 实例对象的`__proto__`: 在`创建实例对象`时被自动添加, 并`赋值为构造函数的prototype值`
   * 原型对象即为当前实例对象的父对象

```js
function Fn(){
  //内部语句
  //this.prototype={}
}
  console.log(Fn.prototype);
  var fn = new Fn() //内部语句： this.__proto__=Fn.prototype
  console.log(fn.__proto__);
  console.log(Fn.prototype === fn.__proto__);//true
```
4. 原型链
   * 所有的实例对象都有__proto__属性, 它指向的就是原型对象
   * 这样通过__proto__属性就形成了一个链的结构---->原型链
   * 当查找对象内部的属性/方法时, js引擎自动沿着这个原型链查找
   * 当给对象属性赋值时不会使用原型链, 而只是在当前对象中进行操作

5. 原型对象中有一个属性constructor，指向函数对象

6. 原型链可以解决什么问题 ：对象共享属性和方法   
   
7. 函数拥有：prototype，对象拥有：__proto__   

8. 对象查找属性或方法的顺序：先在对象本身-->构造函数中查找-->对象的原型-->构造函数原型-->当前原型的原型   
 

```js
console.log(Date.prototype.constructor===Date) //true
```
1. 函数的所有实例对象自动拥有原型中的属性（方法）

```js
function Fun(){}
Fun.prototype.test=function(){
  console.log('test()')
}
var fun=new Fun()
fun.test() //test()
```
![prototype](./images/prototype.jpg)  

7. 例子

```js
 var A = function() {};
        A.prototype.n = 1;
        var b = new A();
        A.prototype = {
            n: 2,
            m: 3
        }
        var c = new A();

        console.log(b.n); //1
        console.log(b.m); //undefined
        console.log(c.n); //2
        console.log(c.m); //3
```

```js
 var F = function() {};
        Object.prototype.a = function() {
            console.log('a');
        };
        Function.prototype.b = function() {
            console.log('b');
        };

        var f = new F();

        f.a(); //a
        f.b(); //报错f.b is not a function
        //new 出来的实例是一个对象，只会继承Object原型上的方法，不会继承Function原型上的
        F.a(); //a
        F.b(); //b
```

```js
function Person(name) {
            this.name = name;
        }
        let p = new Person('nid')
        console.log(p.__proto__ === Person.prototype); //true
        console.log(Person.__proto__ === Function.prototype); //true
        console.log(Person.__proto__ === Object.prototype); //false
        console.log(Function.prototype.__proto__ === Object.prototype); //true

```  

```js
var foo = {},F = function() {};
      Object.prototype.a = 'value a'
      Function.prototype.b = 'value b'

      console.log(foo.a); //value a
      console.log(foo.b); //undefined

      console.log(F.a); //value a
      console.log(F.b); //value b
```  


### 执行上下文与执行上下文栈  


#### 变量提升与函数提升
  - 变量提升: 在变量定义(声明）语句之前, 就可以访问到这个变量(undefined)  
  - 函数提升: 在函数定义(声明）语句之前, 就执行该函数   
  - 函数提升优先级高于变量提升，不会被同名的变量声明覆盖，会被变量赋值覆盖  

```js
console.log(b);//undefined 变量提升
fn2();// 可调用 函数提升
fn3();// 不能 变量提升

var b=3;
function fn2() {
  console.log('fn2()')
};

var fn3 = function() {
  console.log('fn3()')
}
```  

```js
var c=1;
function c(c) {
  console.log(c);
  var c = 3;
}
c(3);//c is not a function

//相当于
var c;
function c(c) { 
  var c;
  console.log(c);
  c = 3
}
c = 1;
c(3);//c此时已经指向1，不再是一个函数，执行时报错
```


#### 执行上下文 

JS执行时会创建执行上下文：`全局执行上下文`和`函数执行上下文 `   

每个执行上下文包含：  
- 变量对象(VO): 包含变量、函数声明和函数形参   
- 作用域链：定义时就确定  
- this  

>函数执行上下文是在调用函数，准备执行函数之前，创建对应的函数执行上下文对象（**不执行不会创建**）  

>与变量提升的关系   

生成执行上下文时，分为两个阶段，第一个阶段是创建，此阶段JS会检查出需要提升的变量和函数，提前在内存中给他们开辟空间，函数将整个函数存入内存，变量只声明并赋值为undefined，所以在第二阶段，代码执行阶段，可以直接使用   

### 作用域与作用域链
1. 理解:
  - 作用域: 一块代码区域, 在编码时就确定了, **不会再变化**。  
  - 作用域链: 多个嵌套的作用域形成的由内向外的结构, 用于查找变量  
>一般情况下，变量取值到创建这个变量的函数作用域中取值,但如果当前作用域中没有查到值，就会向上级作用域查找，直到查到全局作用域，这个查找过程形成的链条就是作用域链  


1. 分类:
   * 全局:代码在程序任何地方都能访问，`window` 对象的内置属性都属于全局作用域
   * 函数：在固定的代码片段才能被访问  


2. 作用
   * 作用域: 隔离变量, 可以在不同作用域定义同名的变量不冲突
   * 作用域链: 查找变量  


3. 区别作用域与执行上下文
   * 作用域: 静态的, **编码时就确定了(不是在运行时)**, 一旦确定就不会变化了
   * 执行上下文: 动态的, 执行代码时动态创建, 当执行结束消失
   * 联系: **执行上下文环境是在对应的作用域中的**  

```js
var x=10;
function fn() {
  console.log(x);
}
function show(f){
  var x=20;
  fn();
}
show(fn);//10,作用域一旦确定并不会改变
```  

```js
var fn = function(){
  console.log(fn) 
}
fn()//function fn(){}

var obj={
  fn2:function(){
     console.log(fn2) //fn2 is not defined 在内部作用域没有，全局作用域也没有
     console.log(this.fn2) //function (){}
  }
}
obj.fn2()
```

### 闭包 
1. 理解:
  - 当嵌套的内部函数引用了外部函数的变量时就产生了闭包  
  - 闭包本质是内部函数中的一个对象, 这个对象中包含被引用的外部变量  
  - 调用几次外部函数产生几个闭包     
  - 全局变量容易污染环境，局部变量无法长期驻留内存，需要一种机制，既能长期保存变量又不污染全局    

```js
function fn1(){
  var a=2;
  var b='abc';
  function fn2(){ //  执行外部函数对象就会产生闭包，不一定要调用内部函数
    console.log(a)//
  }
  return fn2
}
fn1();
```

>作用:  延长局部变量的生命周期  

>函数在当前词法作用域之外执行，就产生了闭包   


1. 常见闭包
  ```js
  //1. 将函数作为另一个函数的返回值
  function fn1() {
    var a = 2;
    function fn2() {
      a++;
      console.log(a);
    }
    return fn2;
  }
  var f = fn1();//一个闭包
  f();
  f();

  // 2. 将函数作为实参传递给另一个函数调用
  function showDelay(msg,time){
    setTimeout(function(){
      alert(msg)
    },time)
  }
  showDelay('dsds',2000)
  ```  


4. 闭包应用:
   * 定时器   
   * 循环遍历加监听  
   * 防抖节流函数拿到上一次的timer进行判断   

5. 缺点:  
   * 变量占用内存的时间可能会过长  
   * 可能导致内存泄露  
   * 解决:  
     * 及时释放 : f = null; //让内部函数对象成为垃圾对象  
    
6. 内存溢出   
   * 一种程序运行出现的错误  
   * 当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误   


7. 内存泄露     
   * 占用的内存没有及时释放  
   * 内存泄露积累多了就容易导致内存溢出  
   * 常见的内存泄露:  
     * 意外的全局变量  
     * 没有及时清理的计时器或回调函数  
     * 闭包  
  

## 对象  

### 对象的创建模式

1. Object构造函数模式  
  ```js
  var obj = new Object();
  obj.name = 'Tom'
  obj.setName = function(name){this.name=name}
  ```
2. 对象字面量模式  
  ```js
  var obj = {
    name : 'Tom',
    setName : function(name){this.name = name}
  }
  ```
3. 构造函数模式  
  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.setName = function(name){this.name=name;};
  }
  new Person('tom', 12);
  ```
4. 构造函数+原型的组合模式  
  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.setName = function(name){this.name=name;};
  new Person('tom', 12);
  ```
5. 工厂模式  
  ```js
  <!-- 返回一个对象的函数 -->
  function createPerson(name,age){
    var obj={
      name:name,
      age:age,
      setName:function(name){
        this.name=name;
      }
    }
    return obj;
  }
  ```
  
### 继承模式

1. 原型链继承 : 得到方法  

- 新实例无法向父类构造函数传参  
- 继承单一
- 所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改）    


  ```js
  function Parent(){}
  Parent.prototype.test = function(){};
  function Child(){}
  Child.prototype = new Parent(); // 子类型的原型指向父类型实例
  Child.prototype.constructor = Child
  var child = new Child(); //有test()
  ```

2. 借用构造函数 : 得到属性  

- 只继承了父类构造函数的属性，没有继承父类原型的属性   
- 可以继承多个构造函数属性（call多个）  
- 在子实例中可向父实例传参     
- 无法实现构造函数的复用。（每次用每次都要重新调用）  

  ```js
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
  }
  var child = new Child('a', 'b');  //child.xxx为'a', 但child没有test()
  ```


3. 组合  

- 可以继承父类原型上的属性，可以传参，可复用   
- 每个新实例引入的构造函数属性是私有的  


  ```js
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   相当于this.Parent(xxx)
  }
  Child.prototype = new Parent(); //得到test()
  Child.prototype.constructor=Child //修正constructor
  var child = new Child(); //child.xxx为'a', 也有test()
  ```

4. 寄生模式  

>共享原型   

```js
function Parent() {
  this.name = 'parent';
}

function Child() {
  this.type = 'Child';
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
 ```

5. ES6  

```js
class Child extends Parent {}
```
### 深浅拷贝

```js
let obj = {
  a:1,
  b:2,
}

let b = obj
b.a = 2;
console.log(obj.a) //2
```

#### 浅拷贝  

- 只拷贝栈中的数据  
- 对于基础类型数据，拷贝值   
- 对于引用数据类型，只复制指针，新旧对象共享同一块内存，改变旧对象影响新对象  

1. `object.assign()`  

```js
let a = {
  age : 1
}

let b = Object,assign({},a)
a.age = 2
console.log(b.age) //1
```

2. 扩展运算符  

```js
let a = {
  age : 1
}

let b = {...a}
a.age = 2
console.log(b.age) //1
```  

3. 手写实现  

```js
function copy(obj) {
  const objCopy = {};

  for (const key in obj) {
    objCopy[key] = obj[key];
  }

  return objCopy;
}
```


#### 深拷贝

- 对于基础数据类型，直接拷贝
- 引用数据类型：另外创建一个一模一样的对象,新旧对象不共享内存   

1. `JSON.parse(JSON.stringify(object))`   

会忽略undefined，symbol  
不能序列化函数   

```js
let a = {
  age: 1,
  jobs: {
    first: 'PE'
  }
}

let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // PE
```



## 线程机制与事件机制  

### 线程与进程
* 进程:
  * 程序的一次执行, 它占有一片独有的内存空间
  * 可以通过windows任务管理器查看进程
* 线程:
  * 是进程内的一个独立执行单元
  * 是程序执行的一个完整流程
  * 是CPU的最小的调度单元
* 关系
  * 一个进程至少有一个线程(主)
  * 程序是在某个进程中的某个线程执行的

### 浏览器组成
1. 用户界面：工具栏，地址栏，书签菜单等（除了网页内容外的其他部分）
2. 浏览器引擎：查询与操作渲染引擎的接口。加载给定的URL   
3. 渲染引擎（浏览器内核，内含HTML解析器）：获取网页内容（HTML、XML等），整理信息（如加入CSS等）
4. JS引擎： 解释并执行JS代码  
5. 网络： 用于网络请求，如HTTP请求
6. 显示后端：绘制基础元件，如组合框与窗口  
7. 数据存储：浏览器把需要的数据存到硬盘上，如书签，工具栏设置，Cookie，安全证书，缓存等   

### js线程
* js是单线程执行的(回调函数也是在主线程)
* H5提出了实现多线程的方案: Web Workers
* 只能是主线程更新界面

### 定时器问题:
* 定时器并不真正完全定时
* 如果在主线程执行了一个长时间的操作, 可能导致延时才处理
    
### 事件处理机制
* 代码分类
  * 初始化执行代码: 包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
  * 回调执行代码: 处理回调逻辑
* js引擎执行代码的基本流程: 
  * 初始化代码===>回调代码
* 模型的2个重要组成部分:
  * 事件管理模块
  * 回调队列
* 模型的运转流程
  * 执行初始化代码, 将事件回调函数交给对应模块管理
  * 当事件发生时, 管理模块会将回调函数及其数据添加到回调队列中
  * 只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行  

![loop](./images/loop.png)
    

