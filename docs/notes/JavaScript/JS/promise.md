# Promise  

>promise对象是异步编程的一种解决方案，Promise是一个构造函数，接受一个函数作为参数，返回一个Promise实例，一个Promise有三种状态，pending,resolved,rejected,实例状态只能由pending转换为resolved或者rejected，状态一经改变就不能改变   

>状态的改变是通过 resolve(）和reiect（）函数来实现的，可以在异步操作结束后调用这两个函数改变Promise 实例的状态，它的原型上定义了一个 then方法，使用这个then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的未尾执行     

<b>executor</b>   

Executor是在创建Promise时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数：  

通常在Executor中确定Promise状态：   

```js
new Promise((resolve, reject) => {
  console.log('executor代码')
})
```

<b>resolve不同值的区别</b>   

1. 如果resolve传入一个普通的值或者对象，那么这个值会作为then回调的参数；   

2. 如果resolve中传入的是另外一个Promise，那么这个新Promise会决定原Promise的状态：  

3. 如果resolve中传入的是一个对象，并且这个对象有实现then方法，那么会执行该then方法，并且根据then方法的结
果来决定Promise的状态：    

```js
new Promise((resolve, reject) => {
  resolve(new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('第二Promise的resolve')
   }, 3000);
  }))
}).then(res => {
  console.log('res:', res);
}).catch(err => {
  console.log('err:', err);
})

new Promise((resolve, reject) => {
  resolve({
    then: function(resolve, reject) {
      resolve('thenable value')
    }
  })
}).then(res => {
  console.log(res);
})
```

## promise实例方法   

<b>then的两个参数</b>   

then方法接受两个参数：   

- fulfilled的回调函数：当状态变成fulfilled时会回调的函数；

- reject的回调函数：当状态变成reject时会回调的函数；  

then方法放在Promise的原型上，一个Promise的then方法是可以被多次调用的，每次调用都可以传入对应的fulfilled回调，当Promise的状态变成fulfilled的时候，这些回调函数都会被执行     

<b>then返回值</b>   

then方法本身是有返回值的，它的返回值是一个Promise，所以可以进行链式调用    

then方法返回的Promise到底处于什么样的状态呢？

- 当then方法中的回调函数本身在执行的时候，那么它处于pending状态；   
- 当then方法中的回调函数返回一个结果时，那么它处于fulfilled状态，并且会将结果作为resolve的参数；    
   - 返回一个普通的值；    
   - 返回一个Promise；   
   - 返回一个thenable值；  
- 当then方法抛出一个异常时，那么它处于reject状态；   

<b>catch</b>   

catch方法也是放在Promise的原型上的 Promise.prototype.catch    

一个Promise的catch方法是可以被多次调用的：    

每次调用都可以传入对应的reject回调；  

当Promise的状态变成reject的时候，这些回调函数都会被执行     


<b>catch返回值</b>  

catch返回一个Promise对象，所以catch方法后面可以继续调用then方法或者catch方法    

下面的代码，后续是res打印，这是因为catch传入的回调在执行完后，默认状态依然会是fulfilled的；   

如果我们希望后续继续执行catch，可以抛出一个异常       

```js
promise.catch(err => {
  console.log('err1:', err);
  // throw new Error('error message')
}).catch(err => {
  console.log('err2:', err);
}).then(res => {
  console.log('res:', res); //res: undefined
})
``` 

<b>finally</b>   

表示无论Promise对象无论变成fulfilled还是rejected状态，最终都会被执行的代码。    

finally方法是不接收参数的    


## Promise类方法

<b>Promise.resolve()</b>  

Promise.resolve的用法相当于new Promise，并且执行resolve操作：    

```js
Promise.resolve("why")
// 等价于
new Promise((resolve) => resolve("why"))
``` 
resolve参数形态   

- 普通值或对象   
- Promise  
- thenable   

<b>Promise.reject()</b>  

Promise.reject的用法相当于new Promise，只是会调用reject：    

Promise.reject传入的参数无论是什么形态，都会直接作为reject状态的参数传递到catch的      

<b>Promise.all()</b>   

它的作用是将多个Promise包裹在一起形成一个新的Promise    

新的Promise状态由包裹的所有Promise共同决定   

- 所有的Promise状态变成fulfilled状态时，新的Promise状态为fulfilled，并且会将所有Promise的返回值组成一个数组     
  
- 当有一个Promise状态为reject时，新的Promise状态为reject，并且会将第一个reject的返回值作为参数    


<b>Promise.allSettled()</b>   

该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是rejected时，才会有最终的状态    

并且这个Promise的结果一定是fulfilled的   

allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的；     

这个对象中包含status状态，以及对应的value值；    

<b>Promise.race()</b>   

表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果；      

<b>Promise.any()</b>  

any方法会等到一个fulfilled状态，才会决定新Promise的状态    

如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态；   

如果所有的Promise都是reject的，那么会报一个AggregateError的错误     