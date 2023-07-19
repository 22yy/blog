# Promise

> promise 对象是异步编程的一种解决方案，Promise 是一个构造函数，接受一个函数作为参数，返回一个 Promise 实例，一个 Promise 有三种状态，pending,resolved,rejected,实例状态只能由 pending 转换为 resolved 或者 rejected，状态一经改变就不能改变

> 状态的改变是通过 resolve(）和 reiect（）函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的未尾执行

<b>executor</b>

Executor 是在创建 Promise 时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数：

通常在 Executor 中确定 Promise 状态：

```js
new Promise((resolve, reject) => {
  console.log("executor代码");
});
```

<b>resolve 不同值的区别</b>

1. 如果 resolve 传入一个普通的值或者对象，那么这个值会作为 then 回调的参数；

2. 如果 resolve 中传入的是另外一个 Promise，那么这个新 Promise 会决定原 Promise 的状态：

3. 如果 resolve 中传入的是一个对象，并且这个对象有实现 then 方法，那么会执行该 then 方法，并且根据 then 方法的结
   果来决定 Promise 的状态：

```js
new Promise((resolve, reject) => {
  resolve(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("第二Promise的resolve");
      }, 3000);
    })
  );
})
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });

new Promise((resolve, reject) => {
  resolve({
    then: function (resolve, reject) {
      resolve("thenable value");
    },
  });
}).then((res) => {
  console.log(res);
});
```

## promise 实例方法

<b>then 的两个参数</b>

then 方法接受两个参数：

- fulfilled 的回调函数：当状态变成 fulfilled 时会回调的函数；

- reject 的回调函数：当状态变成 reject 时会回调的函数；

then 方法放在 Promise 的原型上，一个 Promise 的 then 方法是可以被多次调用的，每次调用都可以传入对应的 fulfilled 回调，当 Promise 的状态变成 fulfilled 的时候，这些回调函数都会被执行

<b>then 返回值</b>

then 方法本身是有返回值的，它的返回值是一个 Promise，所以可以进行链式调用

then 方法返回的 Promise 到底处于什么样的状态呢？

- 当 then 方法中的回调函数本身在执行的时候，那么它处于 pending 状态；
- 当 then 方法中的回调函数返回一个结果时，那么它处于 fulfilled 状态，并且会将结果作为 resolve 的参数；
  - 返回一个普通的值；
  - 返回一个 Promise；
  - 返回一个 thenable 值；
- 当 then 方法抛出一个异常时，那么它处于 reject 状态；

<b>catch</b>

catch 方法也是放在 Promise 的原型上的 Promise.prototype.catch

一个 Promise 的 catch 方法是可以被多次调用的：

每次调用都可以传入对应的 reject 回调；

当 Promise 的状态变成 reject 的时候，这些回调函数都会被执行

<b>catch 返回值</b>

catch 返回一个 Promise 对象，所以 catch 方法后面可以继续调用 then 方法或者 catch 方法

下面的代码，后续是 res 打印，这是因为 catch 传入的回调在执行完后，默认状态依然会是 fulfilled 的；

如果我们希望后续继续执行 catch，可以抛出一个异常

```js
promise
  .catch((err) => {
    console.log("err1:", err);
    // throw new Error('error message')
  })
  .catch((err) => {
    console.log("err2:", err);
  })
  .then((res) => {
    console.log("res:", res); //res: undefined
  });
```

<b>finally</b>

表示无论 Promise 对象无论变成 fulfilled 还是 rejected 状态，最终都会被执行的代码。

finally 方法是不接收参数的

## Promise 类方法

<b>Promise.resolve()</b>

Promise.resolve 的用法相当于 new Promise，并且执行 resolve 操作：

```js
Promise.resolve("why");
// 等价于
new Promise((resolve) => resolve("why"));
```

resolve 参数形态

- 普通值或对象
- Promise
- thenable

<b>Promise.reject()</b>

Promise.reject 的用法相当于 new Promise，只是会调用 reject：

Promise.reject 传入的参数无论是什么形态，都会直接作为 reject 状态的参数传递到 catch 的

<b>Promise.all()</b>

它的作用是将多个 Promise 包裹在一起形成一个新的 Promise

新的 Promise 状态由包裹的所有 Promise 共同决定

- 所有的 Promise 状态变成 fulfilled 状态时，新的 Promise 状态为 fulfilled，并且会将所有 Promise 的返回值组成一个数组
- 当有一个 Promise 状态为 reject 时，新的 Promise 状态为 reject，并且会将第一个 reject 的返回值作为参数

<b>Promise.allSettled()</b>

该方法会在所有的 Promise 都有结果（settled），无论是 fulfilled，还是 rejected 时，才会有最终的状态

并且这个 Promise 的结果一定是 fulfilled 的

allSettled 的结果是一个数组，数组中存放着每一个 Promise 的结果，并且是对应一个对象的；

这个对象中包含 status 状态，以及对应的 value 值；

<b>Promise.race()</b>

表示多个 Promise 相互竞争，谁先有结果，那么就使用谁的结果；

<b>Promise.any()</b>

any 方法会等到一个 fulfilled 状态，才会决定新 Promise 的状态

如果所有的 Promise 都是 reject 的，那么也会等到所有的 Promise 都变成 rejected 状态；

如果所有的 Promise 都是 reject 的，那么会报一个 AggregateError 的错误

## 实现 promise

核心功能

```js
const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

class myPromise {
  constructor(excutor) {
    try {
      excutor(this.resolve, this.reject);
    } catch {
      throw new Error("excutor error");
    }
  }
  status = PENDING;
  value = undefined;
  reason = undefined;

  successCallback = [];
  failCallback = [];

  resolve = (value) => {
    if (this.status !== PENDING) return;
    this.status = FULLFILLED;
    this.value = value;
    while (this.successCallback.length) this.successCallback.shift()();
  };

  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    while (this.failCallback.length) this.failCallback.shift()();
  };

  then(successCallback, failCallback) {
    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        // 变成异步代码, 确保能获取到promise2
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else {
        //等待 将成功回调和失败回调存储起来
        //
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    //then方法返回promise，实现链式调用
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 判断x是普通值还是promise对象
  // 普通值直接调用reslove
  //如果是promise对象，查看promise对象返回的结果，再根据promise对象返回的结果，决定调用resolve，还是reject
  //判断x的值，判断x和promise2是否相等，相等报错，不能自己返回自己
  if (promise2 === x) {
    reject(
      new TypeError("Chainng cycle detected for promise #<Promise></Promise>")
    );
  }
  if (x instanceof myPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = myPromise;
```

```js
  then(successCallback, failCallback) {
    // 外部调用then不传递参数时，会将promise状态一直传递到有回调函数的then方法中
    successCallback = successCallback ? successCallback : value => value;
    failCallback = failCallback ? failCallback : reason => {throw reason};

    let promise2 = new myPromise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        // 变成异步代码, 确保能获取到promise2
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)

      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else {
        //等待 将成功回调和失败回调存储起来
        //
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        });
      }

    });


    //then方法返回promise，实现链式调用
    return promise2
  }
```
