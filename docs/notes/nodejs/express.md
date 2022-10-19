# express

## 中间件  

一堆方法，可以接受客户端发来的请求，也可以对请求做出响应，也可以将请求交给下一个中间件   

主要由**中间件方法**和**请求处理函数**组成   

## express使用 

1. 基本使用  
```js  
// 引入 express 框架
const express = require('express')

// 创建网站服务器
const app = express();

// 接收所有的请求的中间件
app.use((req, res, next) => {
    console.log('请求走了 app.use 中间件');
    next();
})

// 当客户端访问 /request 请求的时候走当前中间件
app.use('/request', (req, res, next) => {
    console.log('请求走了 app.use /request 中间件 ');
})

app.get('/request', (req, res, next) => {
    req.name = 'zhangsan';
    next();
})

app.get('/request', (req, res)=> {
    res.send(req.name);
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');
```
2. 错误处理   

```js
app.use((err, req, res, next) => {
    res.status(500).send('服务器发生错误');
})

```

3. res
 
>res.json()
1. 发送一个json的响应  
2. 调用res.json()方法会被自动添加Content-Type:application/json

>res.send() 
1. 发送一个HTTP响应
2. res.send()方法响应返回给页面数据时，在响应头信息里会被自动添加设置返回数据类型的Content-type属性  
3. res.send()方法支持String、Array、Buffer对象、对象、json对象，当参数是Array或Object、json对象，Express以JSON表示响应    

