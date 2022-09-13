# CSS  

## 如何用纯CSS绘制三角形
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

## 水平居中元素

### 行内元素   

- 如果父级元素是块级元素，直接给父级元素设置  text-align:center
- 如果不是，可以用display:block将父级元素变成块级元素  在设置text-align:center

```css
text-align : center /*不能直接用在行内元素上span...*/
```  


### 块级元素 

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


## 垂直居中元素  

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







## 解决img 5px间距的问题

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

## 元素高度与window的高度相同

```css
height:100vh
```

## 修改input placeholder样式

```css
.placeholder-custom ::-webkit-input-placeholder{
color:pink;
font-size:16px;
}
```

## :not选择器
>除了最后一个元素外，所有元素都需要一些样式，使用:not选择器非常容易做到  

```html
<style>
  /*最后一个元素没有底边*/
  li:not(:last-child) {
     border-bottom : 1px solid #ebedf0
  }
</style>
```

## 使用caret-color修改光标颜色  

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


## 删除type='number'末尾的上下箭头

```css
.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance:none ;
}
```

## outline:none 删除输入状态线

>当输入框被选中时，默认会有一条蓝色状态线，可以通过outline:none移除  

## 英文文本大写
```css
text-transform : capitalize ; /*首字母大小写*/
text-transform : uppercase ; /*大写*/
text-transform : lowercase ;/*小写*/
text-transform : none ;/*阻止大小写转换*/
text-transform : full-width ;
```

## 多余文字省略号表示

```css
overflow : hidden
white-space:nowrap
text-overflow:ellipsis
```

## 清除浮动

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


## z-index失效   

> 如果两个对象的此属性具有同样的值，那么将依据它们在HTML文档中流的顺序层叠，写在后面的将会覆盖前面的。需要注意的是，父子关系是无法用z-index来设定上下关系的，一定是子级在上父级在下

1. 元素本身没有设置position属性，或者position属性值为static的时候会失效。   

  - 因为z-index属性只作用在被定位了的元素上。所以如果你在一个没被定位的元素上使用z-index的话，是不会有效果的
  - 设置该元素的position属性为relative, absolute 或是fixed中的一种。  

2. 元素在设置z-index的同时还设置了float浮动。
  - 解决：去除浮动。

3. 当前元素的层叠效果会受祖先元素的Z-index影响，如果父元素的z-index值很小，那么当前元素的z-indlex值再大也不起作用。
  - 解决：提高祖先元素的z-index值。


## position定位值

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


## 伪类和伪元素  

- 伪元素与伪类的区别在于：**是否创造了新的元素**   

1. 伪元素：不存在DOM文档中，代表某个元素的子元素，仅逻辑上存在   

2. 伪元素有以下几种：  
(1)`:first-letterl`/`::first-letter`：设置对象的第一个字符样式  
(2)`:first-line`/`::first-line`：设置对象内第一行的样式  
(3）`:before`/`:before`：设置在对象前发生的内容  
(4）`:after`/`::after`：设置在对象后发生的内容  
(5）`::placeholder`：设置对象文字占位符的样式  
(6）`::selection`：设置对象被选择时的颜色   
 
3. 伪类：存在DOM文档中    

4. 伪类有以下：  
(1）`:link`：a标签末被访问时的样式  
(2)`:visited`：a标签已被访问过的样式  
(3）`:hover`：a标签鼠标悬停时的样式  
(4) `:active`：元素在被用户激活时的样式  
(5）`:focus`：元素的`onfocus`事件发生时的样式    
(6）`:lang(fr)`：匹配使用特殊语言的元素  
(7）`:not(s)`：匹配不含有s选择符的元素  
(8）`:root`：匹配该元素的根元素   
(9)`:first-child`:匹配父元素的第一个子元素    
(10)`:last-child`：匹配父元素的最后一个子元素  
(11）`only-child`:匹配父元素仅有的一个子元素    
(12）`:nth-child(n)`：匹配第n个元素  
(13) `:nth-last-child(n)`:匹配父元素的倒数第n个子元素    
(14)`:first-of-type`：匹配同类型中的第一个同级兄弟元素   
(15）`:last-of-type`：匹配同类型中的最后一个同级兄弟元素       
(16）`:only-of-type`：匹配同类型中的唯一一个同级兄弟元素    
(17）`:nth-of-type(n)`：匹配同类型中的第n个同级兄弟元素     
(18) `:nth-last-of-type(n)`：匹配同类型中的倒数第n个同级兄弟元素  
(19）`：empty`：匹配没有任何子元素的元素  
(20）`:checked`：匹配处于选中状态的元素  
(21）`:enabled`：匹配处于可用状态的元素   
(22）`:disabled`：匹配处于禁用状态的元素   
(23）`:target`：匹配相关URL指向的元素    

## :before 和 ::before 的区别  

- 写法等效  

- 单冒号是 CSS2.1 引入的，用于伪类，操作文档已有的元素，侧重于丰富选择器的选择能力  

- 双冒号是 CSS3 引入的，用于伪元素，会创建文档树之外的元素，侧重于表达或定义不在语法定义范围内的抽象元素    

## 几种隐藏的区别

1. `visibility:hidden`：隐藏元素，会继续在文档流中占位，所以触发重绘，隐藏后不能触发点击事件

2. `display:none`：隐藏元素，会从页面中删除掉，所以会触发重排和重绘

3. `opacity:0`：透明，会继续在文档流中占位，所以触发重绘。由是是作用于元素自身，所以子元素会继承，全部变透明，透明后可以触发点击事件

4. `rgba(0,0,0,0)`：透明，会继续在文档流中占位，所以触发重绘。由于只作用于颜色或背景色，所以子元素不会继承，透明后可以触发点击事件

>另外 transition 过渡不支持 display:none，其他三个是支持的   


## 重绘和重排   

重绘就是重新绘制（repaint）  
重排就是重新排列（reflow）  
 
DOM发生改变的时候触发重排，使DOM重新排列    
重绘不一定会重排，但是重排一定发生重绘，重绘和重排都会耗费浏览器的性能，尽量避免   

### 网页如何生成   
1. 解析html绘制DOM树  
2. 解析css绘制CSS树  
3. 生成render tree（渲染树）   
4. flow排列，将渲染树节点合成（渲染）    
5. paint绘制，将排列绘制在屏幕上（渲染）   


### 重排  

什么时候导致：  

>DOM的变化引发了元素几何属性的变化，比如改变元素的宽高，元素的位置，导致浏览器不得不重新计算元素的几何属性，并重新构建渲染树  

1. 页面首次渲染（所以渲染页面至少会有一次重排和重绘)   
2. 添加、删除、更新 DOM 节点  
3. display: none  
4. 动画  
5. 添加或改变字号、宽高等样式  
6. 用户行为，比如滚动、调整窗口大小

怎么减少重排影响：     

1. 避免使用大量 style 属性，而是用 class  
2. 让动画元素脱离文档流，这样不会影响到其他的布局分层   
3. 能用 CSS 动画的就不要用 JS 动画   
4. 尽量不要用 table 布局,table中任何一个元素的改变，都会引起重排    

### 重绘  
>完成重排后，要将重新构建的渲染树渲染到屏幕上    

发生外观的变化，没有改变布局    

 
## 网页布局方式   
1. 静态布局：传统web设计，网页上所有元素尺寸一律使用px作为单位;   
优点：编写最简单，没有兼容性问题  
缺点：不能根据屏幕尺寸做出不同表现  

2. 流式布局：网页中的主要划分区域的尺寸使用百分比（搭配min-*、max-*属性使用）   
3. 弹性布局：flex（上手快，主流）   
4. 响应式布局：媒体查询＋流式布局    
特点：每个屏幕分辨率下会有一个布局样式，即元素位置和大小都会变   
优点：适应pc端和移动端，有耐心的话，效果完美     
缺点：媒体查询是有限的，只能适应主流的宽高；要匹配足够多的屏幕大小，工作量较大，设计图要多个版本   
5. 浮动布局：float: left / right   
6. 定位布局：position：absolute / relative / fixed / static/sticky     


## 媒体查询   

>通过媒体查询可以为不同大小尺寸的设备使用不同的 CSS，达到自适应的目的。可以通过 html 或者 CSS 设置  

```html
<meta name='viewport' content="width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no">
<link ref="stylesheet" type="text/css" href="xxx.css" media="only screen and(max-device-width: 480px)">


@media only screen and(max-device-width:480px){ ... }
```  


## 白屏  
1. 问题排查：  
(1）检查ur1地址是否拼写错误  
(2） 查看控制台输出，是否报错  
(3） 查看don结构，是否正常加载  
(4）查看network资源加载情况  
(5）查看路由是否路径错误   

2. 减少白屏时间的方法：  
(1）采用DNS预解析  
(2）减少http请求数量  
(3）合并压缩文件  
(4) 异步加载 js    
(5）服务端渲染   
(6）资源缓存   
(7）图片懒加载      


## 常用单位  
`px`：绝对长度单位  
`em`：相对长度单位，相对父元素  
`rem`：相对长度单位，相对根元素  
`vw`：视口宽度  
`vh`：视口高度   


## BFC 
1. 什么是BFC  
BFC （块级格式化上下文）是一个独立的渲染区域，内部元素的渲染不会影响外部元素   

2. 触发条件：
- HTML就是一个BFC
- float存在且不为none  
- overflow存在且不为visible
- display为flex、inline-block、table-cell,、table-caption、inline-flex  
- position为fixed或absolute   

1. 特性：
- 在同一BFC区域内的两个相邻容器上下margin会重叠  
- 计算BFC高度时，浮动元素也计算在内  
- BFC区域不会与浮动元素发生重叠  


4. 应用：清除浮动   

5. BFC使用场景： 
外边距重叠:   
- 父子元素都设置了margin-top   
- 兄弟元素margin-bottom和margin-top会重叠    
- 空元素设置了上下margin值不一样   
- 这三种情况没有BFC的话，margin会重叠取margin较大的那个   

左边定宽，右边自适应  
- 只需要给右边创建BFC即可    

BFC可以阻止浮动元素的覆盖。父元素没有设置高度，子元素浮动了，不参与父元素高度计算，由于父元素高度为0，导致父元素的兄弟元素向上顶，与子元素重叠，只需给父元素创建BFC即可   



## 盒模型

- 标准模式：元素的width/height = content + border + padding   

- 怪异模式：元素的width/height = content(已经包含border和padding)  

- 通过CSS的 box-sizing 属性切换模式，content-box就是标准模式，border-box就是怪异模式   


## 常见样式兼容问题

- 不同浏览器默认 margin 和 padding 不一样  

- Chrome 默认文字最小12px，可添加 CSS 属性` -webkit-text-size-adjust:none`; 解决，或用`transform:scale()`缩小   

- 超链接访问过后` hover` 和 `active` 样式就不出现了，解决办法调整CSS属性顺序lvha：a:link{} a:visited{} a:hover{} a:active{}   

- Chrome 中` visibility `的值为` collapse`和`hidden`是一样的，在Firefox,Opera和IE中，值为`collapse`和`display:none`是一样的   

- CSS3 属性添加针对不同浏览器的前缀   


## 利用标签提升渲染速度  

1. link标签  

通过rel属性进行预加载，如 :

<link rel="dns-prefetch" href="//xx.baidu.com">   

rel有几个属性： 

- `dns-prefetch`：浏览器会对href中的域名进行DNS解析并缓存，当再次请求该域名资源时，能省去查询IP的过程，从而减少时间损耗   

- `prefetch/preload`：都是预先下载并缓存某个资源，不同的是prefetch可能会在浏览器忙时被忽略，而preload则一定会预先下载   

- `preconnect`：正式发送http请求前预先执行DNS解析、TCP握手、TLS协商。通过消除往返延迟来节省时间    

- `prerender`：浏览器不仅会加载资源，还会解析执行页面，并进行预渲染   

2. script标签  

>由于浏览器底层运行机制，渲染引擎在解析HTML时遇到script标签引用文件是会暂停解析过程的，同时通过网络线程加载文件，文件加载后切换至js引擎执行相应代码，代码执行完成后再切换回渲染引擎继续渲染页面
>可是首次渲染可能并不依赖这些js文件，这就延长了页面渲染的时间，所以为了减少这些时间损耗，可以通过script标签三个属性来实现  

- async：立即请求文件，但不阻塞渲染引擎，而是文件加载完毕后再阻塞渲染引擎并执行js   

- defer：立即请求文件，但不阻塞渲染引擎，等解析完HTML再执行js  

- H5标准的type="module"：让浏览器按照ES6标准将文件当模板解析，默认阻塞效果和defer一样，也可以配合async在请求完成后立即执行     


## href和src的区别   

href是引用，src是引入   

1. href:   

- href引入的CSS会阻塞页面渲染，CSS加载完成才会进行渲染，所以渲染出来就是带样式的    

- 不会阻塞js加载，但是会阻塞js的执行，因为js执行可能会操作DOM，所以CSS加载完之前执行js是可能会有问题的    

2. src:   

- src引入的js会阻塞页面的渲染(没有defer和async的情况下)，因为js很可能操作DOM修改文档结构    

- 多个脚本时不会阻塞后续资源的加载，但是会阻塞后续js逻辑的执行，按顺序执行    


## SEO 和语义化   

SEO就是搜索引擎优化，利用搜索引擎的搜索规则来提高网站的自然排名，比如对网站的标题、关键字、描述精心设置，比如网站的结构布局设计和网页代码优化   

语义化就根据内容结构化选择合适的标签和特有的属性去格式化文档内容，在没有CSS的情况下也能呈现出很好的内容结构，代码结构，便于开发者阅读和维护，同时也利于SEO       

## alt和title的作用及区别 

共同点是有利于SEO    

不同点是alt是图片不能正常显示时出现的提示信息；title是鼠标移到元素上时显示的提示信息，而且大多数标签都支持title属性，但是优先级要低于alt(都在图片上图片不能正常显示时)；title内容可以比alt更长    


## 垂直水平居中  

1. absolute + translate  

```css
.content{
  position : absolute;
  top ：50%;
  left ：50%;
  transform : translate(-50%,-50%)
}
```
2. vertical-align + 伪元素
```css
.box {
  width: 300px;
  height: 300px;
  text-align: center;
}
.box:after {
  content: '';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}

<div class="box">
   <span class="content">你看今天的月亮圆不圆</span>
</div>
```

3. flex

 ```css
 .box{
  width :200px;
  height:200px;
  display :flex;
  justify-content : center;
  align-items : center;
 }

<div class="box">
   <span class="content">你看今天的月亮圆不圆</span>
</div>
```


4. grid

```css
.box{
  width:200px;
  height : 200px;
  diplay : grid;
}
.content{
  justify-self:center;
  align-items:center;
}
<div class="box">
   <span class="content">你看今天的月亮圆不圆</span>
</div>
```

5. table-cell
```css
.box {
  width: 300px;
  height: 300px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
...
<div class="box">
   <span class="content">我不看月亮</span>
</div>
``` 

6. writing-mode
```css
.box {
  width: 300px;
  height: 300px;
  writing-mode: vertical-lr;
  text-align: center;
}
.content {
  writing-mode: horizontal-tb;
  display: inline-block;
  width: 100%;
}

<div class="box">
   <div class="content">
       <span>我不看月亮</span>
   </div>
</div>

```

writing-mode :<https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode>

 

