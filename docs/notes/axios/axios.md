---
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2022-08-04
tag:
  - axios
---
<!-- more -->

# axios 

[axios中文文档](http://www.axios-js.com/zh-cn/docs/)

## 1. 基本案例

```js
const url = 'https://test.youbaobao.xyz:18081/book/home/v2'
axios.get(url, { 
  params: { openId: '1234' },
  headers: { token: 'abcd' }
}).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})
```  

## 2.axios.create 

```js
const url = '/book/home/v2'
const request = axios.create({
  baseURL: 'https://test.youbaobao.xyz:18081',
  timeout: 5000
})
request({
  url, 
  method: 'get',
  params: {
    openId: '1234'
  }
})
```

## 3.axios 请求拦截器

- 为 http 请求的 headers 中添加 token，同时进行白名单校验，如 /login 不需要添加 token，并实现异步捕获和自定义处理    

- 调用`request.interceptors.request.use` 方法，该方法需要传入两个参数，第一个参数是拦截器方法，包含一个 `config `参数，我们可以在这个方法中修改 `config `并且进行回传，第二个参数是异常处理方法，可以使用 `Promise.reject(error)` 将异常返回给用户进行处理，所以我们在` request `请求后可以通过 catch 捕获异常进行自定义处理

```js
const WhiteUrl=['/login','/book/home/v2'];
const url='/book/home/v2';
const request=axios.create({
  baseURL:'https://test.youbaobao.xyz:8181'
  timeout:5000
})

request.interceptors.request.use(
  config=>{
    console.log(config);//有baseURL、headers、params，method，url，timeout等信息
    const url=config.url.repalce(config.baseURL,'');//拿到baseURL后面的内容
    if(WhiteURL.some(wl=>url===wl)){
      return config;
    }
    config.headers['token']='abcd';
    return config;
  },
  err=>{
    //console.log(err)
    return Promise.reject(error)
  }
)
request({
  url,
  method:'get',
  params:{
    openId:'1254'
  }
}).catch(err=>{
  console.log(err)
})
```

## 4.axios 响应拦截器  

- 通过 `request.interceptors.response.use` 方法定义响应拦截器，它仍然需要2个参数，与请求拦截器类似，注意第二个参数主要处理 `statusCode` 非 200 的异常请求

```js
const WhiteUrl=['/login','/book/home/v2'];
const url='/book/home/v2';
const request=axios.create({
  baseURL:'https://test.youbaobao.xyz:8181'
  timeout:5000
})

request.interceptors.response.use(
  respose=>{
    console.log(response);//包含data，data里有error_code
    if(response.data && response.data.error_code===0){
      return response.data;
    }else{
      Promise.reject(response.data.msg);
    }
  },
  err=>{
    Promise.reject(err)
  }
)
request({
  url,
  method:'get',
  params:{
    openId:'1254'
  }
}).catch(err=>{
  console.log(err)
})
```