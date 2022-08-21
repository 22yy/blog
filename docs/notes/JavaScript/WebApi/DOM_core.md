# DOM核心

## 1.创建

```js
1. document.write
2. innerHTML
3. creteElement
```

## 2.增

```js
1. appendChild
2. insertBefore
```

## 3.删

```js
removeChild
```

## 4.改

```js
主要修改dom的元素属性
1. 修改元素属性： src、href、title等
2. 修改普通元素内容： innerHTML 、innerText
3. 修改表单元素： value、type、disabled等
4. 修改元素样式： style、className
```

## 5.查

```js
获取查询dom的元素
1. DOM提供的API 方法： getElementById、getElementsByTagName...不太推荐
2. H5提供的新方法： querySelector、querySelectorAll 推荐
3. 利用节点操作获取元素： 父(parentNode)、子(children)、兄(previousElementSibling、
nextElementSibling) 
```

## 6.属性操作

```js
1. setAttribute：设置dom的属性值
2. getAttribute：得到dom的属性值
3. removeAttribute移除属性
```

## 7.事件操作

```js
事件源.事件类型=事件处理程序
```

