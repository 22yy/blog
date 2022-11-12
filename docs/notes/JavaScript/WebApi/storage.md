# Web存储

## 1.本地存储特性

1. 只能存储字符串，可以将对象JSON.stringify() 编码后存储 
2. 容量较大，约5M。
3. 数据存储在用户浏览器中
4. 不会随http请求被发送到服务端

## 2.window.sessionStorage

1. 在同一个窗口(页面)下数据可以共享
2. 以键值对的形式存储
3. 生命周期为关闭浏览器窗口

```js
 sessionStorage.setItem(key, value)
 sessionStorage.getItem(key)
 sessionStorage.removeItem(key)
 sessionStorage.clear()
```

## 3.window.localStorge

1. 可以多窗口（页面）共享（同一浏览器可以共享）
2. 以键值对的形式存储
3. 生命周期永久生效，除非手动删除，否则关闭页面也会存在

```js
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
```

## 4.cookie

1. 本身用于浏览器和sever通讯
2. 被"借用"到本地存储来的
3. 可用document.cookie='...'来修改
4. 存储大小限制为4KB
5. http请求时需要发送到服务端，增加请求数量


## 5.cookie、localStorage、sessionStorage三者区别

1. 生命周期 
  - cookie:可设置失效时间，没有设置的话，默认是关闭浏览器后失效
  - localStorage：除非被手动清除，否则将会永久保存
  - sessionStorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除

2. 存放数据大小
  - cookie：4k左右
  - localStorage和sessionStorage: 可保存5MB信息

3. http请求
  - cookie:每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
  - localStorage和sessionStorage：仅在客户端（浏览器）中保存，不参与和服务器通信

4. 易用性
  - cookie：需要程序员自己封装，源生的Cookie接口不友好
  - localStorage和sessionStorage：源生接口可以接受，也可以再次封装来对Object和Array有更好的支持

5. 应用场景
  - 从安全性来说，因为每次http请求都会携带cookie信息，这样无形中浪费了带宽，所以cookie应该尽可能少的使用
  - 另外cookie还需要指定作用域，不可以跨域调用，限制比较多
  - 但是用来识别用户登录来说，cookie还是比storage更好用的。其他情况下，可以使用storage，就用storage.
  - storage在存储数据的大小上面秒杀了cookie，现在基本上很少使用cookie了
  - localStorage和sessionStorage唯一的差别 ：一个是永久保存在浏览器里面.一个是关闭网页就清除了信息，
  - localStorage可以用来夸页面传递参数，sessionStorage用来保存一些临时的数据，防止用户刷新页面之后丢失了些参数。   


## cookie组成

1.  name: cookie名称  
2.  value: cookie对应值，动态生成   
3. expire：cookie过期时间，比如某年某月某日  
4. domain：指定哪些域名可访问该cookie  
5. path：可以访问该cookie的路径  ,path=/docs  
6. secure: 只有HTTPS请求可携带该cookie  
7. http-only: 禁止通过JS的API（document.cookie)读取cookie，防止XSS（跨站脚本攻击）  
8. same-site: 浏览器不能在跨域请求中携带cookie，（设置为Lax或Strict）防止CSRF（跨站请求伪造）     


### cookie sessionStrage localStorage

|              | cookie                 | sessionStorage | localStrage                |
| :----------- | :--------------------- | :------------- | :------------------------- |
| 生命周期     | 可以设置过期时间       | 删除页面即消失 | 除非手动清楚，否则永远存在 |
| 存储大小     | 4K                     | 5M             | 5M                         |
| 与服务端通信 | 每次请求都携带在header | 不参与         | 不参与                     |


>CSRF 恶意引导用户一次点击劫持cookie，攻击者盗用你的身份发送恶意请求   
>- 用户登录受信任网站A，A产生cookie信息并返回给浏览器，  
>- 用户在未退出A的情况下在同一浏览器访问网站B，  
>- B收到请求后返回攻击性代码，发出请求访问第三方站点A  
>- 浏览器根据B的请求，在用户不知情的情况下携带cookie向A发送请求，A不直到是B发的，所以会根据用户cookie权限处理请求，导致恶意代码执行     

防止CSRF  

- cookie的Same-site属性  
- 验证请求的来源站点：HTTP请求头的Referer(包含路径信息的url）和Origin（不包含路径信息）告诉服务器HTTP请求的来源    
- CSRF Token : 浏览器向服务器发起请求时，服务器生成一个CSRF Token植入到返回的页面中，再次请求需携带这个token并由服务器验证   