# DOM

## 基本类型  
1. Node类型   
- 所有DOM节点继承该类型，Node有一个属性nodeType表示Node的类型，是一个整数，其数值分别表示相应的Node类型

2. Element类型    
- nodeType为1  
- nodeValue为null   
- 比如div，span，a等标签就是element中的一种。  

3. Attr类型  
- 表示元素的特性，相当于元素的attributes属性中的节点  
- nodeType值为2   
- nodeName是特性的名称  
- nodeValue是特性的值   
- parentNode为null   

4. Text类型   
- 文本节点
- nodeType为3  
- nodeName为#text   
- nodeValue为文本内容   
- 没有子节点   
- parentNode是一个Element  

5. Comment  
- 注释  
- nodeType为8  
- nodeValue为注释的内容  

6. Document  
- nodeType为9  
- nodeValue为 null  
- parentNode为 null   


## DOM核心
### 1.创建

```js
1. document.write
2. innerHTML
3. creteElement
```

### 2.增

```js
1. appendChild
2. insertBefore
```

### 3.删

```js
removeChild
```

### 4.改

```js
主要修改dom的元素属性
1. 修改元素属性： src、href、title等
2. 修改普通元素内容： innerHTML 、innerText
3. 修改表单元素： value、type、disabled等
4. 修改元素样式： style、className
```

### 5.查

```js
获取查询dom的元素
1. DOM提供的API 方法： getElementById、getElementsByTagName...不太推荐
2. H5提供的新方法： querySelector、querySelectorAll 推荐
3. 利用节点操作获取元素： 父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling) 
```

### 6.属性操作

```js
1. setAttribute：设置dom的属性值
2. getAttribute：得到dom的属性值
3. removeAttribute移除属性
```

### 7.事件操作

```js
事件源.事件类型=事件处理程序
```

