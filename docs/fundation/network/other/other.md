#

## Cookie如何防范XSS攻击   

XSS(跨站脚本攻击)指攻击者在返回的HTML中嵌入JavaScript脚本，为减轻这些攻击，需要在HTTP头部配上，set-cookie:   

httponly-此属性可防止XSS，它禁止JavaScript脚本访问cookie    


secure- 此属性告诉浏览器仅在请求为https的时候发送cookie    


## cookie session 区别   

1. cookie 数据存放在客户的浏览器上，session 数据放在服务器上。  
2. cookie 不是很安全，别人可以分析存放在本地的COOKIE 并进行 COOKIE 欺骗考虑到安全应当使用 session。  
3. session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用 COOKIE。 
4. 单个cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存20个cookie.   


## 浏览器缓存  

缓存分为两种：强绥存和协商缓存      
根据响应的 `header` 内容来决定    

1. 强缓存相关字段有 `expires`, `cache-control`。如果 cache-control 与 expires 同时存在的话，cache-control 的优先级高于 expires.   
2. 协商缓存相关字段有 `Last-Modified`/`If-Modified-Since`, `Etag`/`If-None-Match`   


## 强缓存、协商缓存分别用于什么资源  
项目打包后文件为：index.html、css、js、img文件等   

index.html应使用协商缓存，不要使用强缓存，这样可以保证资源更新了，用户马上能访问到新资源，其他文件设置强缓存+协商缓存即可   

那么为什么index.html不该被缓存呢 ？     

因为它是应用的入口，只有加载他才会加载他引用的资源文件，所以要保证index.html不被缓存，这样才能保证本地资源与服务器一致     


实际场景的缓存策略：
1. 对于频繁变动的资源: 设置强缓存让其立即失效，即`Cache-Control:no-cache`，然后再配合协商缓存。使用`Cache-Control`使浏览器每次都去请求服务器，然后配合`Etag`或`Last-Modified`来验证资源是否有效，这种做法虽然不能减少请求数量，但能减少响应数据的大小;    
2. 不经常变化的资源: 设置强缓存`Cache-Control: max-age`，然后配合协商缓存    


## Url的组成部分

一个完整的url包含7个部分：   
1. 协议：常见的HTTP、FTP  
2. 域名  
3. 端口：不是必须的，省略端口将采用默认端口号  
4. 虚拟目录：从第一个/到最后一个/之间的部分，不是必须的  
5. 文件名：从最后一个/到？之前，如果没有？那就是从/到#之前，不是必须的  
6. 参数：从？到#之间的部分，可以有多个参数，使用＆拼接  
7. 锚：从#开始到最后，不是必须的  