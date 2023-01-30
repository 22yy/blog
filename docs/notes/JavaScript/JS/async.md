# async

## 异步函数执行流程   

异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。    

异步函数有返回值时，和普通函数会有区别：    

- 异步函数也可以有返回值，但是异步函数的返回值相当于被包裹到Promise.resolve中；    
- 如果异步函数的返回值是Promise，状态由会由Promise决定；    
- 如果异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定；  
  
如果async中抛出了异常，并不会像普通函数一样报错，而是会作为Promise的reject来传递     

## await   

async函数可以在它内部使用await关键字，而普通函数中是不可以的。    

await关键字特点:   

通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；    

那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数；    

- 如果await后面是一个普通的值，那么会直接返回这个值；    

- 如果await后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值；    

- 如果await后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值；      


## 宏任务和微任务   

事件循环中并非只维护着一个队列，事实上是有两个队列：   

- 宏任务队列（macrotask queue）：ajax、setTimeout、setInterval、DOM监听、UI Rendering等    

- 微任务队列（microtask queue）：Promise的then回调、 Mutation Observer API、queueMicrotask()等    


事件循环对于两个队列的优先级：     

1. main script中的代码优先执行（编写的顶层script代码）；   

2. 在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行，也就是宏任务执行之前，必须保证微任务队列是空的；    

## Node事件循环   

浏览器中的EventLoop是根据HTML5定义的规范来实现的，不同的浏览器可能会有不同的实现，而Node中是由libuv实现的     

事件循环像是一个桥梁，是连接着应用程序的JavaScript和系统调用之间的通道：     

无论是我们的文件IO、数据库、网络IO、定时器、子进程，在完成对应的操作后，都会将对应的结果和回调函数放到事件循
环（任务队列）中    

事件循环会不断的从任务队列中取出对应的事件（回调函数）来执行；     

但是一次完整的事件循环Tick分成很多个阶段：   

- 定时器（Timers）：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。    

- 待定回调（Pending Callback）：对某些系统操作（如TCP错误类型）执行回调，比如TCP连接时接收到ECONNREFUSED。    

- idle, prepare：仅系统内部使用。   

- 轮询（Poll）：检索新的 I/O 事件；执行与 I/O 相关的回调；    

- 检测（check）：setImmediate() 回调函数在这里执行。    

- 关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)   

[nodeeventLoop](./images/node-eventLoop2.png)   

## Node的宏任务和微任务   

从一次事件循环的Tick来说，Node的事件循环更复杂，它也分为微任务和宏任务：   

- 宏任务（macrotask）：setTimeout、setInterval、IO事件、setImmediate、close事件；   

- 微任务（microtask）：Promise的then回调、process.nextTick、queueMicrotask；   

但是，Node中的事件循环不只是 微任务队列和 宏任务队列： 

微任务队列：   
- next tick queue：process.nextTick；   

- other queue：Promise的then回调、queueMicrotask；   
 
宏任务队列：  

- timer queue：setTimeout、setInterval；   
- poll queue：IO事件；   
- check queue：setImmediate；   
- close queue：close事件；  

## Node事件循环顺序  

在每一次事件循环的tick中，会按照如下顺序来执行代码：   

next tick microtask queue；   

other microtask queue；  

timer queue；   

poll queue；   

check queue；   

close queue；   

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
} 

async function async2() {
 console.log('async2');
} 

console.log('script start'); 

setTimeout(function() {
  console.log('setTimeout0');
}, 0) 

setTimeout(function () {
  console.log('setTimeout1');
}, 300)


setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('nextTick1'));  

async1();

process.nextTick(() => console.log('nextTick2'));


new Promise(function(resolve) {
  console.log('promise1');
  resolve();
  console.log('promise2');
}).then(function() {
  console.log('promise3');
})

console.log('script end');

// script start
// async1 start
// async2      
// promise1    
// promise2    
// script end  
// nextTick1   
// nextTick2   
// async1 end  
// promise3    
// setTimeout0 
// setImmediate
// setTimeout1
```