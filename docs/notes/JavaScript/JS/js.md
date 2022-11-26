# JS 我不知道的...


## splice和slice
1. slice(start,end)
- 从start开始截取到end但是不包括end
- 返回值为截取出来的元素的集合
- 原始数组不会发生变化

2. splice(start,deleteCount,item1,item2....)
- start参数 开始的位置
- deleteCount要截取的个数
- 后面的items为要添加的元素
- 如果deleteCount=0，则表示不删除元素，从start位置开始添加后面的几个元素到原始的数组里面
- 返回值为由被删除的元素组成的一个数组，如果只删除了一个元素，则返回只包含一个元素的数组，
没有删除元素，返回空数组
- 这个方法会改变原数组，数组的长度会发生变化

```js
 let arr = [1, 2, 3, 4, 5, 6]
      //1.splice删除
  let arr1 = arr.splice(2, 3) //删除第三个元素以后的三个数组元素（包含第三个）
  console.log(arr1); //[3,4,5]
  console.log(arr); //[1,2,6] 原始数组被改变

  //2.splice插入
  let arr2 = arr.splice(2, 0, 'wu', 'le') //从第三位前插入'wu','le'
  console.log(arr2); //[] 空数组
  console.log(arr); //[1, 2, 'wu', 'le', 6]

  //3.splice替换
  let arr3 = arr.splice(2, 3, 'xiao', 'nie') //删除第三个元素以后的三个数组元素（包含第三个），插入'xiao''nie'
  console.log(arr3); //['wu', 'le', 6]
  console.log(arr); //[1, 2, 'xiao', 'nie']

  let arr4 = arr.splice(1) //从第二个元素开始删除所有元素
  console.log(arr4); //[2, 'xiao', 'nie']
  console.log(arr); //[1]
```

## 为什么Object.prototype.toString.call能完美判断数据类型

### 判断数据类型可以使用：
- typeof
- instanceof
- Object.prototype.toString.call

typeof 和 instanceof的缺点

```js
  console.log(typeof 6); //number
  console.log(typeof Symbol()); //symbol
  console.log(typeof(function() {})); //function
  console.log(typeof '前端web'); //string
  console.log(typeof true); //boolean
  console.log(typeof null); //object
  console.log(typeof {}); //object
  console.log(typeof []); //object
  console.log(typeof(new Date)); //object
  console.log(typeof undefined); //undefined
```
>typeof 在判断Undefined，Boolean，Number，String，Symbol，Function时比较靠谱，无法区分object，array，null

```js
    console.log(6 instanceof Number); //false
    console.log(Symbol('1234') instanceof Symbol); //false
    console.log((function() {}) instanceof Function); //true
    console.log('前端web' instanceof String); //false
    console.log(true instanceof Boolean); //false
    console.log(null instanceof null);//报错
    console.log({} instanceof Object);//true
    console.log([] instanceof Object)//true
    console.log((new Date) instanceof Object)//true
    console.log(undefined instanceof Undefiend);//报错
```

>instanceof 可以检测Object，Array，Function，但检查不了Number，Boolean,String等基础数据类型


知识点：
>Object.prototype.toString()方法，会返回一个形如"[Object xxx]"的字符串

```js
[1,2,3].toString() //1,2,3
Array 里面也有toString 方法。根据原型链的就近原则，会优
先取 Array.prototype.toString。返回字符串  

      //1. 判断 Array 里是否含有 toString
      console.log(Array.prototype.hasOwnProperty('toString'));
      // true
      //2.把 Array 里面的toString 方法删除
      Reflect.deleteProperty(Array.prototype, 'toString')
          //3. 再次判断 Array 里是否包含 toString
      Array.prototype.has0wnProperty("toString") // false
          //4. 再次调用 Array.toString0 方法，看看结果
      console.log([1, 2, 3].toString()) //[object Array]

      当 Array 里的 toString 被删除时，根据原型链的知识，会向上层访问这个方法，即Object的 toString()。
```

为什么要加call  

```js
如果不加 call, Object.prototype.toString结果永远是[object Object]，因为 Object.prototype永远是一个对象。加上call,改变toString 的this 指向，就可以将 Object 里的toString 方法引用在数组身上
``` 

## js判断数组相等

>注意数组是引用数据类型，在` == `或 `=== `比较时，比较的是地址值，[1,2] == [1,2],[1,2] === [1,2]返回的都是false

1. toString()  

```js
[1,2,3].toString()===[1,2,3].toString() //true
```

2. join()

```js
[1,2,3,'4'].join()===[1,2,3,4].join() //true
```

3. JSON.stringify()

```js
JSON.stringify([{name:'nls'},{sex:'男'}])===JSON.stringify([{name:'nls'},{sex:'男'}]) //true
```

4. every()

```js
//every 不会对空数组进行检测，不会改变原数组
return arr1.length===arr2.length && arr1.every((item,index)=>{return item===arr2[index]})
```  

## 立即执行的具名函数A内修改A的值时到底发生了什么  

[相关文章](https://segmentfault.com/q/1010000002810093)    



## +号的行为  

1. 如果有一个操作数是字符串，那么把另一个操作数转换成字符串连接
2. 如果有一个操作数是对象，，调用对象的valueOf方法转换成原始值，没有该方法或者转换后非原始值，则调用toString()方法
3. 其他情况，两个操作数都会被转换成数字执行加法操作   

```js
 console.log(1 + NaN); // NaN
 console.log("1" + 3); // 13
 console.log(1 + undefined); // NaN
 console.log(1 + null); // 1
 console.log(1 + {}); // 1[object Object]
 console.log(1 + []); // 1
 console.log([] + {}); // [object Object] 
```   

## 四则运算符   

>只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。
>其他运算只要其中一方是数字，那么另一方就转为数字。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为宇符串

```js
2 * '2' //4
[1, 2] + [2, 1] // '1,22,1'
[1,2]. toString() //'1,2'
[2,1]. toString() //'2,1'
'1,2' + '2,1'  //'1,22,1'
'a' + + 'b' //aNaN => + 'b' ->NaN
```


## for in 和 for of  

for...in是ES5的标准，该方法遍历的是对象的属性名称(key：键名)    
  - for...in遍历Array时，拿到的是每个元素索引    
  - for…in的原理是: Object.keys()：返回给定对象所有可枚举属性的字符串数组        

for...of是ES6的标准，该方法遍历的是对象的属性所对应的值(value：键值)。所以它用来遍历数组时得到每个元素的值     
  - for…of 语句在可迭代对象上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句     
  
### 区别   
  - for-in只是获取数组的索引；for-of会获取数组的值  
  - for-in会遍历对象的整个原型链，性能差；for-of只遍历当前对象，不会遍历原型链  
  - 对于数组的遍历，for-in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)；for-of只返回数组的下标对应的属性值   
  - for-of适用遍历数组／字符串/map/set等有迭代器对象的集合，但是不能遍历普通对象（obj is not iterable）  


## call,apply,bind

1. 都可以改变this指向，函数.call()、函数.apply()、函数.bind()   
2. call，apply可以立即执行，bind不会立即执行，bind返回的是一个函数，需要再加一个()执行    
3. 参数不同，apply第二个参数是数组，call和bind有多个参数需要挨个写   

```js
var arr1=[1,2,3,45,6,78]
console.log(Math.max.apply(null,arr1))

```

## indexOf()&&includes()

>indexOf() 不能判断数组的NaN元素，不管是否有NaN,arr.indexOf(NaN)都返回-1


## Object.is()&&===

>都判断两个数是否严格相等  

```js
Object.is(NaN,NaN) //true
NaN === NaN //false

Object.is(+0, -0) //false
+0 === -0  //true
```  

## 数组降维  

```js
[1,[2],3].flatMap(v => v) //[1,2,3]

const flattenDeep = (arr) => Array.isArray(arr) ? arr.reduce( (a,b) => [...a, ...flattenDeep(b)], []) : [arr]
```

## async和await   

- async本身是同步代码，除非遇到await   
- await只能在async中使用
- await是右结合，会执行它右边的代码，等右边的执行完在执行下面的代码  
- await后面的所有代码都是异步的，属于微任务   


## new一个对象的过程

1. 创建一个新对象:son
2. 新对象会被执行[[prototype]]连接；
   -  son.__proto__=Mother.prototype;
3. 新对象和函数用的this会被绑起来
   - Mother.call(son,'Da');
4. 执行构造函数中的代码;
   -  son.lastName;
5. 如果函数没有返回值，就会自动返回这个新对象
   - return this;

```js
function Mother(lastName){
  this.lastName=lastName
}
var son=new Mother('Da')
console.log(son.lastName);//Da

function Mother(lastName){
  this.lastName=lastName
  return this;
}

var son=Mother('Da')
console.log(son.lastName);//Da
```

```js
//1.创建一个空对象
// 2. 将空对象的原型指向构造函数的原型
// 3. 空对象作为构造函数上下文（改变this指向）
// 4. 对构造函数有返回值的处理判断：如果返回基本类型的数据则无影响，返回引用类型则new 无效
function Fun(age,name) {
  this.age = age;
  this.name = name;
}
function create(fn,...args) {
  var obj = {};
  Object.setPrototypeOf(obj,fn.prototype);
  var result = fn.apply(obj,args)
  return result instanceof Object ? result : obj ;
}
console.log(create(Fun,18,'张三'));
```

## null和undefined  

null表示‘无’的对象，Number(null) 为0   

undefined表示‘无’的数值，Number(undefined) 为 NaN   

null和undefined的区别:     
- null在内存中的表示就是，栈中的变量没有指向堆中的内存对象    
- undefined表示 “缺少值”，就是此处应该有一个值，但是还没有赋值。  

```js
10 + null //10

10 + undefined //NaN 
```

## typeof null 

JS底层以二进制表示数据，前三个数据表示数据类型，000代表对象，而null全为0，所以typeof null 为object，而null是基本数据类型    

## 防抖

>频繁触发一个事件，只触发最后一次，以最后一次为准  
n秒后执行该事件，如果n秒内再次触发，则重新计时 


  - 改变页面大小的统计  
  - 电脑息屏时间，每动一次电脑重新计算时间  
  - 输入框连续输入的请求次数控制  
  - 防止表单多次提交  

  
```js
  const buttton=document.querySelector('input');
  function payMoney(){
    console.log('已剁');
    cosole.log(this);
  }
 //防抖函数
 function debounce(func,delay){
   //在定义监听事件的时候同时定义timer，利用作用域链，所有的独立的执行函数都能访问到timer
   //timer 只创建一次
   let timer;
   return function(){
     //使用防抖函数后this的指向会变成window
     let context=this;
     //增加参数
     let args=arguments;
     //清除延时要在建立延时的前面
     clearTimeout(timer)
     timer=setTimeout(function(){
          func.apply(context,args);
       },delay)
   }
 }

  button.addEventListener('click',debounce(payMoney,1000))
```  

```js
const debounce = function(func,wait){
  let timeout;
  return function () {
    let args = arguments;
    if(timeout) clearTimeout(timeout);
    timeout=setTimeout (()=>{
      func.apply(this,args)
    },wait)
  }
} 
```  

## 节流  


>频繁触发一个事件，只能每隔一段时间触发一次  
n秒内只执行一次，如果n秒内再次触发，只有一次生效  


- 如果需要统计用户滚动屏幕的行为来做出相应的网页反应，需要设置节流，因为如果用户不断进行滚动，就会不断产生请求，响应也会不断增加，容易产生阻塞   
- 游戏里长按鼠标，但是动作都是每隔一段时间做一次   


```js
//假设监听用户改变页面尺寸的事件，并且在改变尺寸时变换相应的背景颜色
 function coloring(){
   let r=Math.floor(Math.random()*255);
   let g=Math.floor(Math.random()*255);
   let b=Math.floor(Math.random()*255);
   document.body.style.background=`rgba(${r},${g},${b})`;
 }
//创建节流函数
 function throrrle(func,delay){
   let timer;
   return function(){
     let context=this;
     let args=arguments;
       //判断触发的事件是否在时间间隔内,
       //即如果timer被赋值,也就是任务还在等待执行，暂时不改变timer的值
       //如果timer没有被赋值，那就给他赋值执行任务
     if(timer){
       return;
     }
     //这个时间间隔是要给后面的任务来判断是否执行的标识，需要创建变量
     timer=setTimeout(function(){
       func.apply(context,args);
       timer=null;//延迟执行后清空
     },delay)
   }
 }

 window.addEventListener('resize',throttle(coloring,2000))
```

## 0.1 + 0.2 

对浮点数进行计算时，将十进制转换为二进制，JS以64位双精度浮点数存储number类型，0.1,0.2转换成二进制时是无限循环小数，出现精度丢失  

## 图片的异步加载
```js
const imgAddress='图片地址';

const imgPromise=(url)=>{
  return new Promise((resolve,reject)=>{
    const img=new image();
    img.src=url;
    img.onload=()=>{
      resolve(img);
    };
    img.onerror=()=>{
      reject(new Error('图片有误'));
    };
  });
};

imgPromise(imgAddress)
   .then(img=>{
     document.body.appendChild(img);
   })
   .catch(err=>{
     document.body.innerHTML=err;
   });
```


## 图片懒加载
 - 即延迟加载
 - 滚动到网页下才能看到看不见的图片

```html
<!--使用自定义属性-->
<img data-src="1.gif">
<img data-src="2.gif">
<img data-src="3.gif">
```
- 使用事件监听
- 消耗资源，不推荐
```js
  //事件监听
  const images=document.querySelectorAll('img')

window.addEventListener('scroll',(e)=>{
 //判断图片是否出现在可视区域
 images.forEach(image=>{
   //获取每张图片到顶部的距离
   const imageTop=image.getBoundingClientRect().top;
   //判断距离是否小于窗口显示区的高度
   if(imageTop<window.innerHeight){
     const data_src=image.getAttribute('data-src');
     image.setAttribute('src',data_src);
   }
 })
})
```

- 使用浏览器提供的构造函数IntersetionObserver
  
```js
const images=document.querySelectorAll('img')

const observer=new IntersectionObserver(callback)

images.forEach(image=>{
  observer.observe(image)
})

const callback=entries=>{
  console.log(entries);//是一个数组
  entries.forEach(entry=>{
    //判断是否到达图片可视区域
    if(entry.isIntersecting){
       const image=entry.target;
       const data_src=image.getAttribute('data-src');
       image.setAttribute('src',data_src);
       //在图片被加载后取消回调函数的触发
       observer.unobserve(image);
    }
    
  })
}

```




## Promise核心代码
- 初始结构
- this指向
- then
- 执行异常 throw new Error...
```js
//原生
let promise=new Promise((resolve,reject)=>{
  resolve('这次一定');
  reject('下次一定')
})
promise.then(
  result=>{console.log(result); },
  result=>{console.log(result.message);}
)
```  

```js
class Commitment{
  //创建静态属性
  static PENDING='待定';
  static FULFILLED='成功';
  static REJECTED='拒绝';
  constructor(func){
    //为每一个实例创建状态属性
    this.status=Commitment.PENDING;
    //参数
    this.result=null;
    //给实例的resolve reject方法绑定this为当前实例对象，并且执行
    //生成实例时判断是否有报错
    try {
      func(this.resolve.bind(this),this.reject.bind(this));
    } catch (error) {
      //有报错把错误信息传入给reject，并直接执行reject
      this.reject(error)
    }
    
  }
  resolve(result){
    if(this.status===Commitment.PENDING){
      this.status=Commitment.FULFILLED;
      this.result=result;
    }
  }
  reject(result){
    if(this.status===Commitment.PENDING){
      this.status=Commitment.REJECTED;
      this.result=result;
    }
  }
  then(onFULFILLED,onREJECTED){
    //onFULFILLED为undefined时应忽略
    onFULFILLED=typeof onFULFILLED==='function' ? onFULFILLED : ()=>{};
    onREJECTED=typeof onREJECTED==='function' ? onREJECTED : ()=>{};
    if(this.status===Commitment.FULFILLED){
      onFULFILLED(this.result);
    }
    if(this.status===Commitment.REJECTED){
      onREJECTED(this.result)
    }
  }
}

let commitment=new Commitment((resolve,reject)=>{
  resolve('')
})
commitment.then(
  undefined,
  result=>{console.log(result.message);}
)
```

- 实现异步,添加setTimeout
- 回调保存
- 链式
```js
  //原生
console.log('第一步');
let promise = new Promise((resolve, reject) => {
  console.log('第二步');
  setTimeout(() => {
    resolve('这次一定');
    console.log('第四步');
  });

})
promise.then(
  result => {
    console.log(result);
  },
  result => {
    console.log(result.message);
  }
)
console.log('第三步');
```

```js

class Commitment {
  //创建静态属性
  static PENDING = '待定';
  static FULFILLED = '成功';
  static REJECTED = '拒绝';
  constructor(func) {
    //为每一个实例创建状态属性
    this.status = Commitment.PENDING;
    //参数
    this.result = null;
    //保存then里的函数
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    //给实例的resolve reject方法绑定this为当前实例对象，并且执行
    //生成实例时判断是否有报错
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      //有报错把错误信息传入给reject，并直接执行reject
      this.reject(error)
    }

  }
  resolve(result) {
    //需要在事件循环末尾执行，加setTimeout
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED;
        this.result = result;
        //遍历自身的callback数组，看看有没有那边保留过来的待执行函数
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.REJECTED;
        this.result = result;

        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });

  }
  then(onFULFILLED, onREJECTED) {
    //实现链式
    return new Commitment((resolve, reject) => {
      //onFULFILLED为undefined时应忽略
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {};
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};
      //异步时待定状态的情况
      if (this.status === Commitment.PENDING) {
        this.resolveCallbacks.push(onFULFILLED);
        this.rejectCallbacks.push(onREJECTED);
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          onFULFILLED(this.result);
        });

      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        });

      }
    })

  }
}
```
```js
//输出 第一步
//new 一个实例后 输出 第二步
//遇到setTimeout后执行异步操作
//运行实例的then方法，发现依旧是 待定 状态就把函数参数放到数组里保存起来 输出 第三步
//回头执行setTimeout里面的内容，执行resolve时又要setTimeout异步处理
//输出 第四步
//执行resolve，改变状态，改变结果值，遍历保存的数组对象，执行保存的函数对象
console.log('第一步');
let commitment = new Commitment((resolve, reject) => {
  console.log('第二步');
  setTimeout(() => {
    resolve('这次一定');
    reject('下次一定')
    console.log('第四步');
  });

})
commitment.then(
  result => {
    console.log(result);
  },
  result => {
    console.log(result.message);
  }
)
console.log('第三步');
```  

