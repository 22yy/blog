# CSS  

## 1.如何用纯CSS绘制三角形
- 为正方形设置边框，把长和宽都设置为0，只有边框的厚度。上下左右隐藏三个边框只保留一个边框
- 可以把各边都隐藏，为要显示的边框设置颜色

```css
div{
  width:0;
  height:0;
  border: 250px solid transparent;
  border-bottom-color: blue; 

}
```

## 2.水平居中元素

### 普通流inline

```css
text-align : center /*不能直接用在行内元素上span...*/
```
### 普通流block
- 直接调整外边距
  
``` css
div{
  height :200px;
  width:200px; /*需要有宽度*/
  margin : 0 auto ;/*ie5 6不支持*/

}
/*ie5 6*/
body{
  text-align:center;
}
/*给不需要居中的元素*/
h1{
 text-align:left
}

```
### 浮动元素
```css
.square {
height: 200px;
width: 200px;
background: gold;
float: left;
position: relative;
left: 50%;
transform: translatex(-50%);/*margin-left:-100px;也可*/
}

```
```css
/*需要元素位置与文档无关不占据空间 用绝对定位*/
<body>
 <span>文字</span>
</body>

body {
text-align: center;
}
span {
color: gold;
position: absolute;
left: 0;
right: 0;
margin: 0 auto;/*设置绝对定位后可以像块级元素一样设置宽高*/

//或者
left: 50%;
transform: translateX(-50%);
}
```

## 3.解决img 5px间距的问题

```css
/*1*/
.img-contanier{
  font-size:0;
}
/*2*/
.img{
  display:block;
}
/*3*/
.img{
  vertical-align:bottom;
}

/*4.给父元素设置line-height*/
.img-container{
  line-height:5px;
}
```

## 4.元素高度与window的高度相同

```css
height:100vh
```

## 5.修改input placeholder样式

```css
.placeholder-custom ::-webkit-input-placeholder{
color:pink;
font-size:16px;
}
```

## 6.:not选择器
>除了最后一个元素外，所有元素都需要一些样式，使用:not选择器非常容易做到  

```html
<style>
  /*最后一个元素没有底边*/
  li:not(:last-child) {
     border-bottom : 1px solid #ebedf0
  }
</style>
```

## 7.使用caret-color修改光标颜色  

改变输入框光标颜色，同时又不改变输入框里面的内容的颜色

```css
input{
caret-color:#ffd476 ;
}
```  

`caret-color` 属性不仅对于原生的输入表单控件有效，对设置`contenteditable`的普通标签也适用。
`contenteditable` 属性: 规定是否可编辑元素内容.

```html
<div contenteditable="true">文字蓝色，光标黄色</div>
<style>
[contenteditable = "true"] {
  margin-left: 20px;
  font-size: 30px;
  color: blue;
  caret-color: yellow;
}
</style>
```


## 8.删除type='number'末尾的上下箭头

```css
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance:none ;
}
```

## 9.outline:none 删除输入状态线

>当输入框被选中时，默认会有一条蓝色状态线，可以通过outline:none移除  

## 10.英文文本大写
```css
text-transform : capitalize ; /*首字母大小写*/
text-transform : uppercase ; /*大写*/
text-transform : lowercase ;/*小写*/
text-transform : none ;/*阻止大小写转换*/
text-transform : full-width ;
```

## 11.多余文字省略号表示

```css
overflow : hidden
white-space:nowrap
text-overflow:ellipsis
```

## 12.清除浮动

>浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。

>浮动带来的问题：
>1. 父元素的高度无法被撑开，影响与父元素同级的元素
>2. 与浮动元素同级的非浮动元素（内联元素）会跟随其
后
>3. 若非第一个元素浮动，则该元素之前的元素也需要浮动．否则会影响页面显示的结构。  

>清除浮动的方式：
>1. 父级div定义height
>2. 最后一个浮动元素后加空div标签 并添加样式clear:both.
>3. 包含浮动元素的父标签添加样式overflow为hidden或auto.
>4. 父级div定义zoom  


## 13.z-index失效