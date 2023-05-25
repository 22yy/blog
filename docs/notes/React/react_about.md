# React相关

### 动态添加样式

```html
<span style={{ display: this.state.toprize ? 'none' : 'block'}}></span>

<div className={["container tab", index===this.state.currentIndex?"active":null].join(' ')}>添加className</div>

ES6写法
<div className={`container ${index===this.state.currentIndex?"active":null}`}>此标签是否选中</div>

```

  this.setState

```js
this.setState({
 left: left--
})
会报错
this.setState({
 left: left - 1
})

```

### render触发

render的执行时机主要分为两个部分：

-  类组件调用用setState修改状态

- 函数组件通过useState的hook修改状态，函数通过useState这种形式更新数据，当数组的值不在发生变化就不会触发render

类组件的重新渲染

函数组件的重新渲染  

render函数里面可以编写JSX，转化成createElement这种形式，用于生成虚拟DOM，最终转化成真实DOM    

在React 中，**类组件只要执行了 setState 方法，就一定会触发 render 函数执行**，函数组件使用useState更改状态不一定导致重新render  

组件的props 改变了，不一定触发 render 函数的执行，但是如果 props 的值来自于父组件或者祖先组件的 state

在这种情况下，父组件或者祖先组件的 state 发生了改变，就会导致子组件的重新渲染    

所以，一旦执行了setState就会执行render方法，**useState 会判断当前值有无发生改变确定是否执行render方法，一旦父组件发生渲染，子组件也会渲染**     

### dangerouslySetInnerHTML

当用户输入或者获取到的数据是一段HTML代码的时候，dangerouslySetInnerHTML就可以把这一段代码变成HTML，然后插入到某个地方，**类似JS中的innerHTML**。



dangerouslySetInnerHTML是作为标签属性出现的，并且是值是一个对象，该对象内有一个属性，也是对象：

```js
<span className="text" dangerouslySetInnerHTML={{__html: store.ruleInfo}}>
```

__html是固定写法，后面的item表示要插入的内容，如果插入的是HTML代码，那么就会以HTML进行渲染，然后展示在页面上；如果要插入的内容是其他文本，那么不会有任何影响。

### 获取DOM

- 回调函数方式（推荐）

1. 通过 ref={(el) => {this.自定义属性 = el} 绑定
2. 通过 this.自定义属性 来获取 dom 元素
   注意：必须在类组件中才可使用

- React.createRef()（react v16 新提出）

1. 通过 constructor 构造函数中创建，this.自定义属性名 = React.createRef()
2. 通过 ref={this.自定义属性名} 绑定
3. 通过 this.自定义属性名.current 来获取 dom 元素
    注意：必须在类组件中才可使用

### 节点与元素  

[原文](https://www.cnblogs.com/yoyoketang/p/16312219.html)

HTML 文档中的所有内容都是节点：

- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

```bash
<div id="user">
    <p id="demo" class="text-info">Hello</p>
</div>
```

每个 HTML 元素是元素节点，所以`<div>`是一个元素节点,`<p>`也是元素节点。`<p class="text-info">Hello</p>`元素有属性和文本，所以`class="text-info"` 和 `id="demo"`是属性节点，`Hello`是文本节点。
从上面例子可以看出，节点包含了元素，元素是属于节点的一种。  

#### 元素对象

节点都是单个对象，有时会需要一种数据结构，能够容纳多个节点。DOM提供两种集合对象，用于实现这种节点的集合：NodeList和HTMLCollection。

- HTMLCollection 是表示 HTML 元素的集合。
- NodeList 对象代表一个有顺序的节点列表

以下方法获取的为element 元素对象

- document.getElementById("id属性")  
- document.querySelector('css选择器')

#### HTMLCollection 对象

HTMLCollection只能包含 元素节点(ElementNode)类型的节点, 以下方法返回HTMLCollection对象

- document.getElementsByClassName("className")
- document.getElementsByTagName("tag名称")
- document.forms // 对象选择器查找 HTML 对象

```js
elements = document.getElementsByClassName("text-info");
console.log(elements);  // HTMLCollection
console.log(elements.length); // 获取个数
// 索引取值
console.log(elements[0]); // 下标取值 <p id="demo" class="text-info">Hello</p>
// item 根据下标取值
console.log(elements.item(0));
// namedItem 根据id 或name属性取值
console.log(elements.namedItem('demo'));
```

HTMLCollection 对象中的属性和方法：

| 属性 / 方法 | 参数                                               | 描述                                               |
| ----------- | -------------------------------------------------- | -------------------------------------------------- |
| length      | 无                                                 | 返回 HTMLCollection 中元素的数量。                 |
| item()      | 索引 number类型                                    | 返回 HTMLCollection 中指定索引的元素。             |
| namedItem() | 字符串，传元素的id或name名称，如果id找不到就找name | 返回 HTMLCollection 中指定 ID 或 name 属性的元素。 |

namedItem() 方法返回 HTMLCollection 对象中指定 ID 或 name 的元素。

```scss
HTMLCollection.namedItem(name)
或
HTMLCollection[name]
```

使用示例，以下两种方法都可以

```javascript
// namedItem 根据id 或name属性取值
console.log(elements.namedItem('demo'));
// 也可以直接中括号里面传id或name属性
console.log(elements['demo']);
```

#### NodeList 对象

NodeList 是表示节点的集合。  

NodeList 对象中的属性和方法：  

| 属性 / 方法 | 参数            | 描述                             |
| ----------- | --------------- | -------------------------------- |
| length      | 无              | 返回 NodeList 中的数量。         |
| item()      | 索引 number类型 | 返回 NodeList 中指定索引的节点。 |

以下方法获取的为NodeList对象

- document.getElementsByName("name名称")
- document.querySelectorAll("css选择器")
- element.childNodes // 获取元素的子节点

```xml
    <form id="form-user">
        <label for="user-id">用户名</label>
        <input id="user-id" name="username" value="yoyo">
    </form>
    <div id="user">
        <p id="demo" class="text-info">Hello</p>
        <p>Hello</p>
    </div>
```

使用示例

```lua
nodes = document.getElementsByName('username');
console.log(nodes)  // NodeList [input#user-id]
// length 属性
console.log(nodes.length)  //1
// 索引取值
console.log(nodes[0]) // <input id="user-id" name="username" value="yoyo">
// item索引取值
console.log(nodes.item(0))  // <input id="user-id" name="username" value="yoyo">
```

`document.querySelectorAll()`也一样

```lua
nodes = document.querySelectorAll('#user');
console.log(nodes);  // NodeList [div#user]
console.log(nodes.length);  // 1
// 索引取值
console.log(nodes[0]) // <input id="user-id" name="username" value="yoyo">
// item索引取值
console.log(nodes.item(0))  // <input id="user-id" name="username" value="yoyo">
```

`element.childNodes` 是获取元素的子节点

```javascript
element = document.getElementById('user');
// childNodes 所有的子节点
console.log(element.childNodes);
console.log(element.childNodes.length);  // 5
```

![img](https://img2022.cnblogs.com/blog/1070438/202205/1070438-20220526171025879-1064654460.png)

#### HTMLCollection与NodeList区别

HTMLCollection 是表示 HTML 元素的集合，元素也是节点的一种，也就是元素节点，NodeList 是表示节点的集合
我们可以理解为 HTMLCollection 是 Nodelist 集合的一种。

| 差异      | HTMLCollection | NodeList                                         |
| --------- | -------------- | ------------------------------------------------ |
| length    | 有             | 有                                               |
| item()    | 有             | 有                                               |
| namedItem | 有             | 无                                               |
| forEach   | 无             | 有                                               |
| 索引取值  | 可以           | 可以                                             |
| 节点类型  | 元素节点       | 任意节点：文本节点、元素节点、属性节点、注释节点 |

HTMLCollection 不是一个数组！HTMLCollection 看起来可能是一个数组，但其实不是。
你可以像数组一样，使用索引来获取元素。
HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join()

NodeList节点列表不是一个数组！NodeList节点列表看起来可能是一个数组，但其实不是。
你可以像数组一样，使用索引来获取元素。
节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。