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

## 响应式布局

响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必级有meta 声明 viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```
- width=device-width: 自适应手机屏幕的尺寸宽度
- maximum-scale: 缩放比例最大值   
- inital-scale: 初始缩放比例
- user-scalable：是否允许用户缩放  


<b>媒体查询</b>   

>通过媒体查询可以为不同大小尺寸的设备使用不同的 CSS，达到自适应的目的。可以通过 html 或者 CSS 设置  

```html
<meta name='viewport' content="width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no">
<link ref="stylesheet" type="text/css" href="xxx.css" media="only screen and(max-device-width: 480px)">


@media only screen and(max-device-width:480px){ ... }
```  


<b>rem/em</b>

- rem 单位翻译为像素值的时候是由 html 元素的字体大小决定的。此字体大小会 被浏览器中字体大小的设置影响，除非显式的在 html 为 font-size 重写一个单位   

- em 是根据使用它的元素的 font-size 的大小来变化的，而不是根据父 元素字体大小。有些元素大小是父元素的多少倍那是因为继承了父元素中 font-size 的设 定，所以才起到的作用。    

- em 单位的继承效果：  
使用 em 单位存在继承的时候，每个元素将自动继承其父元素的字体大小，继承的效果 只能被明确的字体单位覆盖，比如 px 和 vw。只要父级元素上面一直有 fontsize 为 em 单 位，则会一直继承，但假如自己设置了 font-size 的单位为 px 的时候，则会直接使用自己的 px 单位的值。      

- 当 em 单位设置在 html 元素上时
它将转换为 em 值乘以浏览器字体大小的设置。 例如:

```css
html{
  font-size: 1.5em; 
}
可以看到，因为浏览器默认字体大小为 16px，所以当设置 HTML 的 fontsize 的值为 1.5em 的售后，其对应的 px 的值为 16*1.5=24px
所以此时，再设置其他元素的 rem 的值的时候，其对应的像素值为 n*24px。 例如，test 的 rem 的值为 10，
.test{
  width: 10rem;
  height: 10rem;
  background-color: #ff7d42; 
}
test 的 font-size 继承了 html 的值 24px，而此时宽高为 24*10=240px 
```


<b>百分比</b>

浏览器的宽度或者高度发生变化时，通过百分比单位，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的 效果。   

- width,height相对于父元素width,height

- padding、border、margin 等等属不论是垂直方向还是水平方向，都相对于直接<b>父元素的 width</b>。   

- 除了 border-radius 外，还有比如 translate、background-size 等都是相对于<b>自身</b>的。


<b>vw/vh</b>  

和%的区别为：   
|单位 |含义|
|:----|:----|
|%| 大部分相  对于祖先元素，也有相对于自身的情况比如 (border-radius、translate等）|
|vw/vh | 相对于视窗的尺寸|

<b>flex布局</b> 

阅读：[flex布局](https://blog.csdn.net/jarvan5/article/details/115361945?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166884450416782414912902%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166884450416782414912902&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-115361945-null-null.142^v65^control,201^v3^control_1,213^v2^t3_esquery_v3&utm_term=flex%E5%B8%83%E5%B1%80&spm=1018.2226.3001.4187)