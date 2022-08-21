# 节点操作

## 1.节点概述
>网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。
>HTML DOM 树中的所有节点均可通过 JavaScript 进行访问，所有 HTML 元素（节点）均可被修改，也可以创建或删除。
>一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

## 2.节点层级
>利用 DOM 树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**。

- 父节点
>父节点 parentNode
得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null

- 子节点
>1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等
>2. **children 获取所有的子元素节点 也是我们实际开发常用的**
>3. firstChild 第一个子节点 不管是文本节点还是元素节点
>4. firstElementChild 返回第一个子元素节点 ie9才支持
>5. 实际开发的写法  既没有兼容性问题又返回第一个子元素
        console.log(ol.children[0]);
        console.log(ol.children[ol.children.length - 1]);  


- 兄弟节点
>1. nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
        console.log(div.nextSibling);
        console.log(div.previousSibling);
>2. nextElementSibling 得到下一个兄弟元素节点
     console.log(div.nextElementSibling);
     console.log(div.previousElementSibling);

## 3.添加节点

1. node.appendChild(child)
node.appendChild() 方法将一个节点添加到指定父节点的子节点列表 末尾 。类似于 CSS 里面的 after 伪元素。
2. node.insertBefore(child, 指定元素 )
node.insertBefore() 方法将一个节点添加到父节点的指定子节点 前面 。类似于 CSS 里面的 before 伪元素。

## 4.删除节点

```js
node.removeChild(child)
```

## 5.复制节点

```js
node.cloneNode()
```
 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容

## 6.三种动态创建元素区别  

1. document.write 是直接将内容写入页面的内容流,文档流执行完毕，则它会导致页面全部重绘
2. innerHTML 是将内容写入某个 DOM 节点，不会导致页面全部重绘
3. innerHTML 创建多个元素效率更高（采取数组形式拼接）
4. createElement() 创建多个元素效率一般，结构更清晰

