# 函数和对象增强知识   

函数也是对象，有属性和方法   

- 属性name: 函数名   

- length: 函数的参数个数（形参），不包括rest参数   


```js
function foo() {

}
console.log(foo.name) //foo

var baz = (name, age, ...args) => {

}

console.log(baz.length) //2
```

<b>arguments</b>   

arguments 是一个 对应于 传递给函数的参数 的 类数组(array-like)对象    

有数组的一些特性，length，可以通过index访问   

没有数组的方法如filter, map等   

<b>arguments转Array</b>

- 遍历arguments，将其添加到一个新数组中   

```js
var arr = [];
for (let i = 0; i < arguments.length; i++) {
  arr.push(arguments[i]);
}
console.log(arr);
```

- slice方法  

```js
var arr1 = Array.prototype.slice.call(arguments);
var arr2 = [].slice.call(arguments);
```

- ES6

```js
const arr1 = [...arguments];
const arr2 = Array.from(arguments);
```

rest参数（剩余参数）和argumentsc参数区别   

剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参；    

arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作；    

箭头函数不绑定arguments，在箭头函数中使用arguments会去上层作用域查找，箭头函数可以使用rest参数    

## 纯函数   

- 相同的输入，产生相同的输出   
- 函数在执行过程中不会产生副作用   

>副作用：表示在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加的影响，
比如修改了全局变量，修改参数或者改变外部的存储    

比如，数组的slice方法就是一个纯函数，不会修改数组本身，splice不是纯函数    


## 柯里化  

只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数，这个过程称之为柯里化    

柯里化是一种函数的转换，将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)

柯里化不会调用函数。它只是对函数进行转换   

```js
function add1(x, y, z) {
  return x + y + z;
}
console.log(add1(10, 20, 30));

function add2(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

console.log(add2(10)(20)(30)) 

var add3 = x => y => z => {
   return x + y + z;
}

console.log(add3(10)(20)(30))
```

自动柯里化函数   

将一个有多个形参的函数转化为柯里化函数   


```js
function Curring(fn) {
   function curried(...args) {
    //如果参数个数大于等于函数形参个数，直接执行fn函数,否则继续返回一个函数接收剩余参数   
    if (args.length >= fn.length) {
      // return fn(...args)
      return fn.apply(this, args);
    } else {
      return function(...newArgs) {
        // return curried(...args.concat(newArgs))
        return curried.apply(this, args.concat(newArgs))
      }
    }
   }
   return curried;
}
```


## 组合函数   

将多个函数组合起来，自动依次调用   

```js
 function compose(...fns) {
  // 边界判断
      let length = fns.length;
      for (let i = 0; i < length; i++) {
        let fn = fns[i];
        if (typeof fns[i] !== 'function') {
          throw new TypeError('Expected a function')
        }
      }

      return function(...args) {
        let result = fns[0].apply(this, args);
        for (let i = 1; i < length; i++) {
          let fn = fns[i];
          result = fn.apply(this, [result]);
        }
        return result;
      }
    }
```

## 对象增强   

想要对一个属性进行比较精准的操作控制，可以使用属性描述符    

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象    

可接收三个参数   
- obj要定义属性的对象；    
- prop要定义或修改的属性的名称或 Symbol；    
- descriptor要定义或修改的属性描述符；   


数据属性描述符有如下四个特性   

1. [[Configurable]]：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
      
    - 直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true；   
    - 通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false；   

2. [[Enumerable]]：表示属性是否可以通过for-in或者Object.keys()返回该属性；   

    - 直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true； 
    - 通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false；  

3. [[Writable]]：表示是否可以修改属性的值；    

    - 直接在一个对象上定义某个属性时，这个属性的[[Writable]]为true；  
    - 通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false；

4. [[value]]：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改；
    - 默认情况下这个值是undefined

存取属性描述符：   

[[get]]：获取属性时会执行的函数。默认为undefined    

[[set]]：设置属性时会执行的函数。默认为undefined     


同时定义多个属性：   

Object.defineProperties() 方法直接在一个对象上定义 多个 新的属性或修改现有属性，并且返回该对象     

```js
Object.defineProperties(obj, {
  name: {
    writable: true,
    value: "why"
  },
  age: {
    get: function() {
      return this._age
    }
  }
})
```

>对象方法补充：    

hasOwnProperty    
   - 对象是否有某一个属于自己的属性（不是在原型上的属性）    

in/for in 操作符
   - 判断某个属性是否在某个对象或者对象的原型上    

instanceof     
   - 用于检测构造函数的pototype，是否出现在某个实例对象的原型链上     

isPrototypeOf    
   - 用于检测某个对象，是否出现在某个实例对象的原型链上     

获取对象的属性描述符：    
   - getOwnPropertyDescriptor
   - getOwnPropertyDescriptors      
  
禁止对象扩展新属性：preventExtensions    
   - 给一个对象添加新的属性会失败（在严格模式下会报错）；   

密封对象，不允许配置和删除属性：seal
   - 实际是调用preventExtensions,并且将现有属性的configurable:false  

冻结对象，不允许修改现有属性： freeze     
   - 实际上是调用seal,并且将现有属性的writable: false   


## 继承   

面向对象有三大特性：封装、继承、多态  

- 封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；   
- 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；   
- 多态：不同的对象在执行时表现出不同的形态   

>寄生组合继承   

寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想    

寄生式继承的思路是结合原型类继承和工厂模式的一种方式  

创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象，最后再将这个对象返回；     


```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  subType.prototype = object(superType.protorype);
  subType.prototype.constructor = subType;
}

inheritPrototype(Student, Person);
```


>ES6继承   

```js
class Person {}

class Student extends Person {}
```
在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数     

super的使用位置有三个：子类的构造函数、实例方法、静态方法；   

```js
// 调用父类构造函数
super([arguments])

// 调用父类方法
super.functionOnParent([arguments])
```

也可以继承内置类扩展内置类方法    

```js
class myArray extends Array {
  lastItem() {
    return this[this.length - 1];
  }
}

let arr = new myArray(10, 20, 30);
console.log(arr.lastItem());
```

类的混入     

JavaScript的类只支持单继承：也就是只能有一个父类     

可以使用混入（mixin）    

```js
function mixinRunner(BaseClass) {
  return class extends BaseClass {
    running() {
      console.log('running')
    }
  }
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating')
    }
  }
}

class Person {

}

class newPerson extends mixinEater(mixinRunner(Person)) {

}

let np = new newPerson()
np.eating()
np.running()
```

JavaScript有多态吗   

不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现。   

JavaScript是一定存在多态的       

```js
function sum(a + b) {
  console.log(a + b)
}
sum(10, 20)
sum('ac', 'dc')
```  

eval   , with  (不建议使用)

内建函数 eval 允许执行一个代码字符串。    
eval是一个特殊的函数，它可以将传入的字符串当做JavaScript代码来运行；    
eval会将最后一句执行语句的结果，作为返回值；   

with语句 扩展一个语句的作用域链  

>严格模式  

1. 无法意外的创建全局变量  
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常  
3. 严格模式下试图删除不可删除的属性  
4. 严格模式不允许函数参数有相同的名称    
5. 不允许0的八进制语法    
6. 在严格模式下，不允许使用with  
7. 在严格模式下，eval不再为上层引用变量  
8. 严格模式下，this绑定不会默认转成对象   
