# JS进阶

## this

优先级： 
1. new  
2. bind  
3. apply/call  
4. 隐式绑定  
5. 默认绑定   

- new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高   
- new绑定可以和bind一起使用，new绑定优先级更高   


<b>默认绑定：</b>  

独立的函数调用  

可以理解成函数没有被绑定到某个对象上进行调用   

```js
function foo(func) {
      func();
    }
    var obj = {
      name:'obj',
      bar: function() {
        console.log(this);
      },
      foo: ()=> {
        console.log(this);
      }
    }

    foo(obj.bar); //window
    foo(obj.foo); //window
```

<b>隐式绑定：</b>  

通过某个对象进行调用的     

也就是它的调用位置中，是通过某个对象发起的函数调用   

```js
    function foo(func) {
      console.log(this);
    }
    var obj1 = {
      name:'obj1',
      foo:foo,
    }
    var bar = obj1.foo
    bar(); //window

    var obj2 = {
      name: 'obj2',
      obj1:obj1,
    }
    obj2.obj1.foo();// {name: 'obj1', foo: ƒ}

```   

<b>显示绑定：</b>  

明确指明绑定对象    

隐式绑定有一个前提条件：   
- 必须在调用的对象内部有一个对函数的引用（比如一个属性）   
- 如果没有这样的引用，在进行调用时，会报找不到该函数的错误  
- 正是通过这个引用，间接的将this绑定到了这个对象上   

<b>JavaScript所有的函数都可以使用call和apply方法。</b>   

- 第一个参数是相同的，要求传入一个对象  
- 在调用这个函数时，会将this绑定到这个传入的对象上   
- 后面的参数，apply为数组，call为参数列表   

```js
  function foo(func) {
      console.log(this);
    }
  foo.call(window) //window
  foo.call({name: '123'}) //{name: '123'}
  foo.call(123) //Number {123} 
```  


如果我们希望一个函数总是显示的绑定到一个对象上,可以用bind()   

- 使用bind方法，bind() 方法创建一个新的绑定函数（bound function，BF）   
- 绑定函数是一个 exotic function object（怪异函数对象，ECMAScript 2015 中的术语）     
- 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。      

```js
func.bind(thisArg[, arg1[, arg2[, ...]]])
```  

<b>new绑定：</b>    

JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字  
  
用new关键字来调用函数是，会执行如下的操作  
 
1. 创建一个全新的对象；  
2. 这个新对象会被执行prototype连接；  
3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）  
4. 如果函数没有返回其他对象，表达式会返回这个新对象；   


this规则之外： 

>如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则   

```js
    function foo(func) {
      console.log(this);
    }
   
    var obj = {
      name:'why'
    }
    foo.call(obj) //obj对象
    foo.call(null) //window
    foo.call(undefined) //window
    var bar = foo.bind(null);
    bar() //window
```  

>间接函数引用   

创建一个函数的 间接引用，这种情况使用默认绑定规则   

- 赋值(obj2.foo = obj1.foo)的结果是foo函数；   
- foo函数被直接调用，那么是默认绑定；   

```js
    function foo(func) {
      console.log(this);
    }
    var obj1 = {
      name: 'obj1',
      foo:foo,
    }
    var obj2 = {
      name: 'obj2'
    }
    obj1.foo(); //obj1
    (obj2.foo = obj1.foo)() //window
```  

练习：
```js
     var name = 'window';
     var person = {
      name: 'person',
      sayName: function() {
        console.log(this.name);
      }
     };

     function sayName() {
      var sss = person.sayName;
      sss();
      person.sayName();
      (person.sayName)();
      (b = person.sayName)();
     }

     sayName()

     // window
     // person
     // person
     // window
```  

```js
    var name = 'window'
    var person1 = {
      name: 'person1', 
      foo1: function() {
        console.log(this.name);
      },
      foo2: () => console.log(this.name),
      foo3: function() {
        return function() {
          console.log(this.name);
        }
      },
      foo4: function() {
        return ()=> {
          console.log(this.name);
        }
      }
     }

     var person2 = {name: 'person2'}

     person1.foo1()
     person1.foo1.call(person2)
     
     person1.foo2()
     person1.foo2.call(person2)

     person1.foo3()()
     person1.foo3.call(person2)()
     person1.foo3().call(person2)  

     person1.foo4()()
     person1.foo4.call(person2)()
     person1.foo4().call(person2) 

      // person1
      // person2
      // window
      // window
      // window
      // window
      // person2
      // person1
      // person2
      // person1
```




