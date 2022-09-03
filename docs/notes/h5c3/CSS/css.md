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

- 如果父级元素是块级元素，直接给父级元素设置  text-align:center
- 如果不是，可以用display:block将父级元素变成块级元素  在设置text-align:center

```css
text-align : center /*不能直接用在行内元素上span...*/
```  


### 普通流block  

- 定宽度：直接调整外边距，谁居中，就给谁设置margin：0 auto  
- 不定宽度：默认子元素的宽度和父元素一样，将子元素display:inline/inline-block,在给父元素设置text-align：center  
- 使用定位
- 使用flex布局（宽度定不定都行）给待处理的块状元素的父元素添加属性 display: flex; justify-content: center;
  
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

- 首先设置父元素为相对定位，再设置子元素为绝对定位，设置子元素的left:50%，即让子元素的左上角水平居中；
- （有宽度）设置绝对子元素的 margin-left: -元素宽度的一半px; 或者设置transform: translateX(-50%);   

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


## 3.垂直居中元素  

### 行内元素  
1. 单行  
   - 只需要设置单行行内元素的"行高等于盒子的高"即可；

2. 多行
   - 给父元素设置display:table-cell;和vertical-align: middle;属性即可   

### 块级元素  

1. 定位  
  - 首先设置父元素为相对定位，再设置子元素为绝对定位，设置子元素的top: 50%，即让子元素的左上角垂直居中；  
  - （定高度）设置绝对子元素的 margin-top: -元素高度的一半px; 或者设置transform: translateY(-50%);

2. flex布局  
  - 给待处理的块状元素的父元素添加属性 display: flex; align-items: center;


### 多行行内元素

## 4.解决img 5px间距的问题

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

## 5.元素高度与window的高度相同

```css
height:100vh
```

## 6.修改input placeholder样式

```css
.placeholder-custom ::-webkit-input-placeholder{
color:pink;
font-size:16px;
}
```

## 7.:not选择器
>除了最后一个元素外，所有元素都需要一些样式，使用:not选择器非常容易做到  

```html
<style>
  /*最后一个元素没有底边*/
  li:not(:last-child) {
     border-bottom : 1px solid #ebedf0
  }
</style>
```

## 8.使用caret-color修改光标颜色  

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


## 9.删除type='number'末尾的上下箭头

```css
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance:none ;
}
```

## 10.outline:none 删除输入状态线

>当输入框被选中时，默认会有一条蓝色状态线，可以通过outline:none移除  

## 11.英文文本大写
```css
text-transform : capitalize ; /*首字母大小写*/
text-transform : uppercase ; /*大写*/
text-transform : lowercase ;/*小写*/
text-transform : none ;/*阻止大小写转换*/
text-transform : full-width ;
```

## 12.多余文字省略号表示

```css
overflow : hidden
white-space:nowrap
text-overflow:ellipsis
```

## 13.清除浮动

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


## 14.z-index失效   

> 如果两个对象的此属性具有同样的值，那么将依据它们在HTML文档中流的顺序层叠，写在后面的将会覆盖前面的。需要注意的是，父子关系是无法用z-index来设定上下关系的，一定是子级在上父级在下

1. 元素本身没有设置position属性，或者position属性值为static的时候会失效。   

  - 因为z-index属性只作用在被定位了的元素上。所以如果你在一个没被定位的元素上使用z-index的话，是不会有效果的
  - 设置该元素的position属性为relative, absolute 或是fixed中的一种。  

2. 元素在设置z-index的同时还设置了float浮动。
  - 解决：去除浮动。

3. 当前元素的层叠效果会受祖先元素的Z-index影响，如果父元素的z-index值很小，那么当前元素的z-indlex值再大也不起作用。
  - 解决：提高祖先元素的z-index值。


## 15.position定位值

1. relative 相对定位  
  - 元素会保留其原本特性
  - 不会使元素脱离文档流,不会改变页面结构（元素原本位置会被保留，即改变位置也不会占用新位置） 
  -  没有定位偏移量时对元素无影响（相对于自身原本位置进行偏移）


2. absolute 绝对定位
  - 元素完全脱离文档流（在文档流中不再占位）
  - 改变内联元素的特性（能设置宽高）
  - 改变区块元素的特性（未设置宽度时由内容撑开宽度）
  - 相对于最近的非static定位祖先元素偏移

3. fixed 固定定位
  - 元素会相对于屏幕视口(viewport)来定位
  - 在滚动屏幕位置的时候元素位置不会改变。在固定顶部导航栏的时候可以使用这个属性。
  - 创建新的层叠上下文
  - 当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先

4. static 默认值
  - 默认布局。元素出现在正常的流中（忽略 top, bottom, left, right ， z-index 声明）。

5. sticky 粘性定位
  - 可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位

```css
div { position: sticky; top: 20px; }
```  

在 viewport 视口滚动到元素 top 距离小于 20px 之前，元素为相对定位。之后，元素将固定在与顶部距离 20px 的位置，直到 viewport 视口回滚到阈值以下。   

6. inherit
  - 规定应该从父元素继承 position 属性的值   
