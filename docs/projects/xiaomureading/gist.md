# 

## 关于路由的处理  
1. vue-element-admin 对所有访问的路由进行拦截；  
2. 访问路由时会从Cookie中获取token
   - token存在，将根据用户角色生成动态路由，然后访问路由，生成对应的页面组件。用户访问 /login 时会重定向至 / 路由；  
   - token 不存在，则会判断路由是否在白名单中，如果在白名单中将直接访问，否则说明该路由需要登录才能访问，此时会将路由生成一个 redirect 参数传入 login 组件，实际访问的路由为：/login?redirect=/xxx。  

## 动态路由   
1. vue-element-admin 将路由分为：constantRoutes 和 asyncRoutes  
2. 用户登录系统时，会动态生成路由，其中 constantRoutes 必然包含，asyncRoutes 会进行过滤   
3. 过滤是看路由中是否包含meta和meta.roles属性，如果没有该属性，不需要进行权限校验，如果包含 roles 属性则会判断用户的角色是否命中路由中的任意一个权限，如果命中，则将路由保存下来，如果未命中，则直接将该路由舍弃；    
4. asyncRoutes 处理完毕后，会和 constantRoutes 合并为一个新的路由对象，并保存到 vuex 的 permission/routes 中   
5. 用户登录系统后，侧边栏会从 vuex 中获取 state.permission.routes，根据该路由动态渲染用户菜单    


## nginx配置  

>upload文件夹里存放电子书相关

在安装目录下修改nginx.conf  

末尾大括号之前添加

```sh
include C:/Users/dd/upload/upload.conf;
``` 

upload.conf文件如下 ；   

```sh
server
{ 
  charset utf-8;
  listen 8089;
  server_name http_host;
  #资源文件路径
  root C:/Users/dd/upload/;
  autoindex on;
  #不使用缓存
  add_header Cache-Control "no-cache, must-revalidate";
  #路由，/表示对所有路由生效
  location / { 
    add_header Access-Control-Allow-Origin *;
  }
}
```

访问：  
http://localhost:8089
