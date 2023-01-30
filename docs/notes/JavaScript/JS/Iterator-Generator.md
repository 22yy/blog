# Iterator-Generator   

## 迭代器   

迭代器（iterator），使用户在容器对象（container，例如链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节。      

迭代器是帮助我们对某个数据结构进行遍历的对象      

在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：    

- 迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式；    
- 在JavaScript中这个标准就是一个特定的next方法；      

next方法有如下的要求：   

一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：     

- done（boolean）  

如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）    

如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。   

- value   

迭代器返回的任何 JavaScript 值。done 为 true 时可省略     

```js
function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined}
      }
    }
  }
}  

const friends = ['lilei', 'nydzn', 'james']
const friendsIterator = createArrayIterator(friends)
console.log(friendsIterator);
console.log(friendsIterator.next());
console.log(friendsIterator.next());
console.log(friendsIterator.next());
console.log(friendsIterator.next());

// { next: [Function: next] }
// { done: false, value: 'lilei' }
// { done: false, value: 'nydzn' }
// { done: false, value: 'james' }
// { done: true, value: undefined }
```   

## 可迭代对象   

当一个对象实现了iterable protocol协议时，它就是一个可迭代对象；   

这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 Symbol.iterator 访问该属性；      

当一个对象变成一个可迭代对象的时候，就可以进行某些迭代操作，比如 for...of 操作时，其实就会调用它的 @@iterator 方法     

我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象    

>String、Array、Map、Set、arguments对象、NodeList集合；     

```js
const names = ['abc', 'cba', 'bac']

console.log(names[Symbol.iterator]);

const iterator = names[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// [Function: values]
// { value: 'abc', done: false }
// { value: 'cba', done: false }
// { value: 'bac', done: false }
// { value: undefined, done: true }
```   

### 可迭代对象应用   

JavaScript中语法：for ...of、展开语法（spread syntax）、yield*、解构赋值（Destructuring_assignment）；    

创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable]);    

一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)     

### 迭代器中断   

迭代器在某些情况下会在没有完全迭代的情况下中断：   

比如遍历的过程中通过break、return、throw中断了循环操作；   

比如在解构的时候，没有解构所有的值；   

想要监听中断的话，可以添加return方法：     

```js
[Symbol.iterator]() {
  let index = 0
  return {
    next: () => {
      if (index < this.students.length) {
        return { done: fallse, value: this.students[index++]}
      } else {
        return { done: true}
      }
    },
    return() {
      console.log('迭代器提前终止了')
      return { done: true}
    }
  }
}
```

## 生成器   

生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。      

平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。     

生成器函数也是一个函数，但是和普通的函数有一些区别：    

- 生成器函数需要在function的后面加一个符号：<b>*</b>    
- 生成器函数可以通过yield关键字来控制函数的执行流程：   
- 生成器函数的返回值是一个Generator（生成器）：    

生成器事实上是一种特殊的迭代器     

<b>生成器函数执行</b>    

生成器函数foo的执行体压根没有执行，它只是返回了一个生成器对象。    

调用next可以让它执行函数中的东西，next是会有返回值的，可以通过yield来返回结果     

```js
function* foo() {
  console.log('函数开始执行');
  const value1 = 100;
  console.log(value1);
  yield value1;

  const value2 = 200;
  console.log(value2);
  yield value2;

  const value3 = 300;
  console.log(value3);
  yield value3

  console.log('函数执行结束');
}

const generator = foo()

//执行到第一个yield，并暂停
console.log(generator.next());
//执行到第二个yield，并暂停
console.log(generator.next());
// //执行到第三个yield，并暂停
console.log(generator.next());
// //执行剩余代码
console.log(generator.next());

// 函数开始执行
// 100
// { value: 100, done: false }
// 200
// { value: 200, done: false }
// 300
// { value: 300, done: false }
// 函数执行结束
// { value: undefined, done: true }
```    

<b>生成器传递参数</b>   

函数既然可以暂停来分段执行，那么函数应该是可以传递参数的   

在调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值；    

也就是说我们是为本次的函数代码块执行提供了一个值；    

```js
function* foo(initial) {
  console.log('函数开始执行');
  const value1 = yield initial + 'aaa';
  const value2 = yield value1 + 'bbb';
  const value3 = yield value2 + 'ccc';
  console.log(value3);
}

const generator = foo('dp');
const result1 = generator.next();
console.log('result1:', result1);

const result2 = generator.next(result1.value);
console.log('result2:', result2);

const result3 = generator.next(result2.value);
console.log('result3:', result3);

const result4 = generator.next(result3.value);
console.log('result4:', result4);


// 函数开始执行
// result1: { value: 'dpaaa', done: false }
// result2: { value: 'dpaaabbb', done: false }
// result3: { value: 'dpaaabbbccc', done: false }
// dpaaabbbccc
// result4: { value: undefined, done: true }

```

<b>生成器提前结束</b>  

return传值后这个生成器函数就会结束，之后调用next不会继续生成值了；    

```js
function* foo() {
  const value1 = yield 'nyz';
  console.log('value1:', value1);
  const value2 = yield value1;
  const value3 = yield value2;
}

const generator = foo();
console.log(generator.next());
console.log(generator.next(123));
console.log(generator.return(234));
console.log(generator.next());


// { value: 'nyz', done: false }
// value1: 123
// { value: 123, done: false }
// { value: 234, done: true }
// { value: undefined, done: true }
```

<b>抛出异常</b>    

除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：  

抛出异常后我们可以在生成器函数中捕获异常；   

在catch语句中不能继续yield新的值了，可以在catch语句外使用yield继续中断函数的执行    

```js
function* foo() {
      console.log('函数开始执行');
      
      try {
        yield 'yyy'
      } catch(err) {
        console.log('err:', err);
      }
      yield 2222
      
      console.log('函数结束执行');
    }

      const generator = foo();
      const result = generator.next();
      generator.throw('error message');
      console.log(generator.next());

  // 函数开始执行
  // err: error message
  // 函数结束执行
  // { value: undefined, done: true }
  ```

还可以使用yield*来生产一个可迭代对象：    

这个时候相当于是一种yield的语法糖，只不过会依次迭代这个可迭代对象，每次迭代其中的一个值；    

```js
function createArrayIterator(arr) {
  yield* arr
}
```