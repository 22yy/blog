# HTML

## HTML语义化  

1. 让人更容易读懂，增加代码可读性
2. 让搜索引擎更容易读懂，有助于爬虫抓取更多有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）
3. 没有CSS时，页面也能呈现出较好的结构

## 行内元素有哪些？块级元素有哪些？空元素有哪些？
```html
行内元素：span,img,input...
块级元素：div,footer,header,section,p,h1...h6...
空元素:br,hr...

元素之间的转换问题：
display：inline  把某元素转换为行内元素=>不独占一行，设置宽高无效
display:inline-block 把某元素转换为行内块元素=>不独占一行，可以设置宽高
display:block  把某元素转换为块级元素=>独占一行，可以设置宽高
```

## 页面导入样式时，用link和@import有什么区别   

- link：是html引入方式；最大限度支持并行下载；优先级高于 @import；可以通过 ref="alternate stylesheet" 指定候选样式   

- @import：是CSS引入方式，必须写在样式之前；可以嵌套，但过多嵌套会导致串行下载，出现文档样式暂失效；老浏览器不支持   


```html
区别一:link先有，兼容性link比@import好
区别二：加载顺序差别，浏览器先加载标签link，后加载@import
```

## title与h1区别，b与strong区别，i与em区别

1. title与h1的区别：   
- 定义    
titie：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么   
h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么   
- 区别：   
title他是是示在网页标题上、h1是显示在网页内容上
title比h1添加的重要 (title>h1）=》对于seo的了解    
- 场景：      
网站的1ogo部是用h1标签包裹的      

2. b与strong的区别：(物理标签与逻辑标签)   
- 定义   
b：实体标签，用来給文字加相的。     
strong：逻辑标签，用来加强宇符语气的。   
- 区别：  
b标签只有加粗的样式，没有实际含义。  
strong表示标签内字符比较重要，用以强调的。  
题外话：为了符合css3的规范，b尽量少用该用strong就行了   

3. i与em：  
- 定义：   
i:实体标签，用来做文字倾斜    
em：是逻辑标签，强调文字内容   
- 区别：  
i只是一个倾斜标签，没有实际含义  
em表示标签内字符重要，用以强调   

- 场景：  
i更多的用在字体图标，em用在术语（医药，生物）     


## HTML自动刷新或跳转

除了定时器控制页面跳转还有更简洁的方法，比如meta标签    

```html
<!-- 5秒后自动跳转到page2.html -->
<meta http-equiv="Refresh" content="5; URL=page2.html">

<!-- 30秒后自动刷新当前页面 -->
<meta http-equiv="Refresh" content="30">
```

比如实现PPT自动播放功能或者自动返回首页，或者做大屏幕监控的时候用这样的方法来自动刷新   

它的缺点是刷新和跳转是不可取消的，如果需要动态刷新或者手动取消的，还是推荐定时器    


## HTML5的新特性
1. 新的语义元素  
- h1-h6：表示六种不同级别的标题  
- section：一般用来说有包含一个标题  
- article：可独立分配的或可复用的结构  
- nav：提供导航链接  
- header：用于展示介绍性内容  
- footer：通常包含页面的作者、版权数据或相关链接等信息  
- aside：常用于侧边栏路由跳转  
- hgroup：不常用    
2. 视频和音频：新增的两个标签
- audio   
- video   
3. input输入框新属性  
- placeholder:输入框默认提示文字    
- required:要求输入是否可以为空   
- min/max:设置元素的最小/大值  
- height/width:用于 image类型输入标图像高度/宽度    
- autofocus:页面加载时，自动获得焦点  
- multiple:input元素可以选择多个值    
4. Web Sockets  
WebSocket协议为web应用程序客户端和服务端之间提供了一种全双
工通信机制   

- 特点：  
1、握手阶段采用HTTP协议，默认端口是80和443；
2、建立在TCP协议基础之上，与http协议同属于应用层  
3、可以发送文本，也可以发送二进制数据  
4、没有同源限制，客户端可以与任意服务器通信  
5、协议标识符是ws   

5. 离线存储：SessionStorage、LocalStorage、IndexedDB   

6. 绘图  
- canvas是一个可以使用脚本来绘制图像的HTML元素
- SVG   
一种用于描述二维的矢量图形
- WebGL   
一个JS API， 可以在任何兼容的web浏览器中渲染高性能的交互式2D和3D图像     


## requestAnimationFrame()  

>告诉浏览器执行一个动画，要求浏览器在下次重绘之前调用指定的回调函数更新动画 
>默认返回一个ID，可使用cancelAnimationFrame()传入这个id停止requestAnimationFrame   

```js
window.requestAnimationFrame(callback);
```

`callback` : 回调函数会被传入DOMHighResTimeStamp(时间戳）参数，指示当前被requestAnimationFrame()排序的回调函数被触发的时间    


>若你想在浏览器下次重绘之前**继续更新**下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()    


## createDocumentFragment()

>用来创建一个虚拟的节点对象,或者说用来创建文档碎片，可包含各种类型的节点  

 DocumentFragment不属于文档树，当把它插入文档树时，插入的是它的子孙结点不是它本身，可暂时存放那些一次插入的节点    

 要添加多个DOM元素时可以先将这些元素添加到DocumentFragment()中，在统一添加到页面，可减少页面渲染dom的次数   

 ```js
 let fragment = document.createDocumentFragment();

 for(let i = 0; i <= 100; i++) {
  let elem = document.createElement('div');
  elem.innnerHtml = i;
  fragment.appendChild(elem);
 }
// 只进行了一次dom操作
 document.body.appendChild(fragment);

 ```
