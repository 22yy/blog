# React基础

## MVC

React采用MVC, Vue采用的是MVVM体系

- MVC: model数据层+view视图层+controller控制层
  - React通过jsx构建视图
  - 构建数据层，视图中需要动态处理的都需要有对应的数据模型
  - 控制层：在视图中进行某些操作时，都是去修改相关的数据，React会按照最新的数据重新渲染

数据驱动视图渲染

视图中的表单内容改变，想要修改数据，需要开发者自己写代码实现

   -  MVVM：model数据层+view视图层+viewModel数据/视图监听层
          - 数据驱动视图的渲染：监听数据更新，视图重新渲染
          - 视图驱动数据的更改：监听页面中表单元素内容改变，自动修改相关的数据

## JSX

### JSX使用细节

JSX: JavaScript and xml(html) 把js和html标签混合在了一起

- HTML页面中嵌入’JS表达式‘ ，借助**{ js表达式 }**
- ReactDOM.createRoot()时，不要直接把html/body作为根容器，指定一个额外的盒子如’#root‘
- 每一个构建的视图，只能有一个根节点
- React提供特殊的节点(标签): React.Fragment 空文档标记标签 <></>
  - 既保证只有一个根节点，又不会新增HTML层级结构

```js
root.render(
<>
  <div>{}</div>
  <button></button>
</>
)
```

### JSX具体运用

{} 嵌入不同的值 

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
let text = 
root.render(
  <>
   { text }
  </>
);
```

- number/string: 值是什么，就渲染出来什么
- boolean/null/undefined/Symbol/BigInt： 渲染内容为空 
- 普通对象： 不支持渲染，除数组对象，其余一般都不支持（正则、日期、包装类型），也有特殊情况 
     - JSX虚拟DOM对象
     - 给元素设置style行内样式，需要设置成对象格式

- 数组：把数组中的每一项**分别拿出来渲染**，**并不是变成字符串**， 没有逗号
- 函数对象：不支持在{}渲染，可以作为函数组件渲染  



密集数组：每一项都有值，哪怕值是null，与之对应的是稀疏数组

**稀疏数组不能使用数组的迭代方法**，比如forEach和map

```js
let arr1 = new Array(5);
let arr3 = new Array('4');
let arr4 = new Array(3, 10);
console.log(arr1); //[ <5 empty items> ]
console.log(arr3); //[ '4' ]
console.log(arr4); //[ 3, 10 ]
arr1.forEach((item, index) => {
    console.log('OK'); //不会输出5个ok
})
let arr2 = arr1.fill(null);
arr2.forEach((item, index) => {
    console.log('OK'); //输出5个OK
})
```



### JSX底层渲染机制

1. 把编写的JSX语法，编译为虛拟DOM对象 「virtualDOM」

   * 虛拟DOM对象：框架自己内部构建的一套对象体系 （对象的相关成员都是React内部规定的），基于这些属性描述出，我们所构建视图中的DOM节点的相关特征.

     * 基于 `babel-preset-react-app`把JSX编译为 React.createElement(...）这种格式,只要是元素节点，必然会基于createElement进行处理  
       React . createElement (ele,props, children)  
     * ele： 元素标签名「或组件」  
     *   props：元素的属性集合(对象）「如果没有设置过任何的属性，则此值是null
     *  children：第三个及以后的参数，都是当前元素的子节点

   * 再把 createElement 方法执行，创建出virtualDOM虚拟DOM对象「也有称之为：JSX元素、JSX对象、ReactChild对象」

     ```js
     virtualDoM ={
     $$typeof: Symbol(react.element) ,
     ref: null,
     key: null,
     type：标签名「或组件」
     // 存储了元素的相关属性 && 子节点信息
     props: {
         元素的相关属性，
         children:子节点信息「没有子节点则没有这个属性、属性值可能是一个值、也可能是一个数组」
     }
     ```

     ```js
     function createElement(ele, props, ...children) {
       let virtualDOM = {
         $$typeof: Symbol('react element'),
         key: null,
         ref: null,
         type: null,
         props: {}
       };
       let len = children.length;
       virtualDOM.type = ele;
       if (props !== null) {
         virtualDOM.props = { ...props };
       }
       if (len === 1) virtualDOM.props.children = children[0];
       if (len > 1) virtualDOM.props.children = children;
       return virtualDOM;
     }
     
     console.log(
         createElement('div', {
           title: 'div'
         },
         createElement('span', null, null),
         createElement('span', null, null))
     );
     ```

     

   2. 把构建的virtualDOM渲染为真实DOM

      * 真实DOM：浏览器页面中，最后渲染出来，让用户看见的DOM元素  

      - 补充说明：第一次渲染页面是直接从virtualDOM-＞真实DOM；但是后期视图更新的时候，需要经过—个**DOM-DIFF**的对比，计算出**补丁包PATCH(两次视图差异的部分）**，把PATCH补丁包进行渲染

      ```js
      function render(virtualDOM, container) {
        let { type, props } = virtualDOM;
        if (typeof type === "string") {
          // 存储的是标签名：动态创建标签
          let ele = document.createElement(type);
          // 为标签设置属性
          each(props, (value, key) => {
            // className的处理
            if (key === "className") {
              ele.className = value;
              return;
            }
      
            // style的处理
            if (key === "style") {
              each(value, (val, attr) => {
                ele.style[attr] = val;
              });
              return;
            }
            //   子节点处理
            if (key === "children") {
              let children = value;
              if (!Array.isArray(children)) children = [children];
              children.forEach((child) => {
                if (/^(string|number)$/.test(typeof child)) {
                  ele.appendChild(document.createTextNode(child));
                  return;
                }
                // 子节点又是一个virtualDOM,递归
                render(child, ele);
              });
            }
            ele.setAttribute(key, value);
          });
          // 把新增的标签增加到指定容器
          container.appendChild(ele);
        }
      }
      ```

      

- 封装一个对象迭代的方法  

  * 基于传统的for/ in循环，会存在一些弊端「性能较差(既可以迭代私有的，也可以迭代公有的）；只能迭代“可枚举、非Symbol类型的”属性。  

  * 解决思路：获取对象所有的私有属性「私有的、不论是否可枚举、不论类型」  

    - Obiect. getOwnPropertyNames (arr）-＞获取对象非Symbol类型的私有属性「无关是否可枚举」    

    - Object.getOwnPropertySymbols(arr)一＞获取Symbol类型的私有属性  
      获取所有的私有属性：

      ```js
      let keys = Object.getOwnPropertyNames (arr).concat (Object.getOwnPropertySymbols(arr)) ;
      
      ES6:Reflect.ownKeys(不兼容IE)
      let keys = Reflect.ownKeys (arr);
      ```

      ```js
      const each = function each(obj, callback) {
        if (obj === null || typeof obj !== 'object') throw new TypeError('obj is not a object');
        if (typeof callback !== 'function') throw new TypeError('callback is not a function');
        let keys = Reflect.ownKeys(obj);
        keys.forEach(key => {
          let value = obj[key];
          callback(value, key);
        })
      }
      ```

- 为元素设置属性（自定义/内置)

  1. 元素.属性=属性值  
    原理：对于内置属性，是设置在元素的标签上；    

    对于自定义属性来讲，是给对象的堆内存空间中新增成员 「不会设置到标签上」  
    获取：元素.属性  
    删除：delete 元素.属性    

  2. 元素.setAttribute(属性.属性值）  
     原理：直接写在元素的标签上  
     获取：getAttribute  
     删除：removeAttribute  
     二者不能混淆！！「排除内置属性的特殊性」

- 关于对象的规则设置
  - 冻结  
    冻结对象：0bject . freeze (obj)  
    检测是否被冻结：Object.isFrozen(obj)=true/ false    
    - 被冻结的对象：不能修改成员值、不能新增成员、不能删除现有成员、不能给成员做劫持 「object.defineProperty」
  - 密封
    密封对象：object.seal(obj)  
    检测是否被密封：Object.issealed(obj）  
    - 被密封的对象：可以修改成员的值，但也不能删、不能新增、不能劫持
  - 扩展
    把对象设置为不可扩展：Obiect.preventExtensions (obj)   
    检测是否可扩展：Obiect.isExtensible(obj)      
    - 被设置不可扩展的对象：除了不能新增成员、其余的操作都可以处理
  - 被冻结的对象，即是不可扩展的，也是密封的, 同理，被密封的对象，也是不可扩展的



