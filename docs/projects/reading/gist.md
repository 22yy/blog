# 

## 登录功能实现   

用户点击登录按钮后触发 handleLogin 方法 对用户输入进行校验，   

校验成功后触发 dispatch('user/login', this.loginFrom) 将用户信息作为参数     


```js
handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
```

调用 store/modules/user.js 里 action 的 login 方法返回 promise， 发送 login 请求 ，   

得到后端响应后将后端返回的 token 通过 commit 存入 state 中 ，同时通过 setToken 方法将 token 存入Cookie  

```js
 // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

```

```js
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
```   

login成功返回后回到 handleLogin 进行路由跳转   

vue-element-admin 对所有访问的路由进行拦截；通过全局守卫 

访问路由时会从Cookie中获取token   

   - token存在，将根据用户角色生成动态路由，然后访问路由，生成对应的页面组件。用户访问 /login 时会重定向至 / 路由；   

   - token 不存在，则会判断路由是否在白名单中，如果在白名单中将直接访问，否则说明该路由需要登录才能访问，此时会将路由生成一个 redirect 参数传入 login 组件，实际访问的路由为：/login?redirect=/xxx。    

main.js
```js
import './permission' // permission control
```

```js
router.beforeEach(async(to, from, next) => {
  // 启动进度条
  NProgress.start()

  // 修改页面标题
  document.title = getPageTitle(to.meta.title)

  // 从 Cookie 获取 Token
  const hasToken = getToken()

  // 判断 Token 是否存在
  if (hasToken) {
    // 如果当前路径为 login 则直接重定向至首页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断用户的角色是否存在
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // 如果用户角色存在，则直接访问
      if (hasRoles) {
        next()
      } else {
        try {
          // 异步获取用户的角色
          const { roles } = await store.dispatch('user/getInfo')
          // 根据用户角色，动态生成路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 调用 router.addRoutes 动态添加路由
          router.addRoutes(accessRoutes)
          // 使用 replace 访问路由，不会在 history 中留下记录
          next({ ...to, replace: true })
        } catch (error) {
          // 移除 Token 数据
          await store.dispatch('user/resetToken')
          // 显示错误提示
          Message.error(error || 'Has Error')
          // 重定向至登录页面
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 如果访问的 URL 在白名单中，则直接访问
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 如果访问的 URL 不在白名单中，则直接重定向到登录页面，并将访问的 URL 添加到 redirect 参数中
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 停止进度条
  NProgress.done()
})
```

当用户角色不存在时， 调用dispatch('user/getinfo') 通过axios请求拦截器携带token发送getInfo请求   

将返回的用户信息存入store中并通过resolve返回数据,如roles， name， avatar， introduction   

```js
// get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                const { roles, name, avatar, introduction } = data

                // roles must be a non-empty array
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                commit('SET_INTRODUCTION', introduction)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
``` 

根据用户角色，动态生成路由   

## 动态路由

1. vue-element-admin 将路由分为：constantRoutes 和 asyncRoutes    

2. 用户登录系统时，会动态生成路由，其中 constantRoutes 必然包含，asyncRoutes 会进行过滤     

3. 过滤是看路由中是否包含meta和meta.roles属性，如果没有该属性，不需要进行权限校验，如果包含 roles 属性则会判断用户的角色是否命中路由中的任意一个权限，如果命中，则将路由保存下来，如果未命中，则直接将该路由舍弃；      

4. asyncRoutes 处理完毕后，会和 constantRoutes 合并为一个新的路由对象，并保存到 vuex 的 permission/routes 中   


5. 用户登录系统后，侧边栏会从 vuex 中获取 state.permission.routes，根据该路由动态渲染用户菜单    


```js
import { asyncRoutes, constantRoutes } from '@/router'

generateRoutes({ commit }, roles) {
  // 返回 Promise 对象
  return new Promise(resolve => {
    // asyncRoutes中允许用户角色访问的路由
    let accessedRoutes
    if (roles.includes('admin')) {
      // 如果角色中包含 admin，则直接跳过判断，直接将 asyncRoutes 全部返回
      accessedRoutes = asyncRoutes || []
    } else {
      // 如果角色中没有包含 admin，则调用 filterAsyncRoutes 过滤路由
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    // 将路由保存到 vuex 中
    commit('SET_ROUTES', accessedRoutes)
    resolve(accessedRoutes)
  })
}

```

SET_ROUTES 方法源码如下：
```js

SET_ROUTES: (state, routes) => {
  // 将 routes 保存到 state 中的 addRoutes
  state.addRoutes = routes
  // 将 routes 集成到 src/router/index.js 的 constantRoutes 中
  state.routes = constantRoutes.concat(routes)
}
```

路由过滤的方法 filterAsyncRoutes 源码如下：
```js
/**
 * @params routes - 异步加载的路由
 * @params roles - 用户的角色，数组形式
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  // 遍历全部路由
  routes.forEach(route => {
    // 对路由进行浅拷贝，注意 children 不会拷贝，因为不需要对 children 进行判断，所以可以使用浅拷贝
    const tmp = { ...route }
    // 检查用户角色是否具备访问路由的权限
    if (hasPermission(roles, tmp)) {
      // 当路由具有访问权限时，判断路由是否具备 children 属性
      if (tmp.children) {
        // 当路由包含 children 时，对 children 迭代调用 filterAsyncRoutes 方法
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      // 当路由具有访问权限时，将 tmp 保存到 res 中
      res.push(tmp)
    }
  })

  return res
}
```

检查权限方法 hasPermission 源码如下：

```js
function hasPermission(roles, route) {
  // 检查路由是否包含 meta 和 meta.roles 属性
  if (route.meta && route.meta.roles) {
    // 判断 route.meta.roles 中是否包含用户角色 roles 中的任何一个权限，如果包含则返回 true，否则为 false
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    // 如果路由没有 meta 或 meta.roles 属性，则视为该路由不需要进行权限控制，所有用户对该路由都具有访问权限
    return true
  }
}
``` 

## 使用 xml2js 解析 xml 数据格式  

npm 安装  

```js
npm install xml2js
```
xml2js 会将 xml 字符串传入 xml2js 中导出的 parseString 方法中处理   

parseString 方法接收两个参数  一个是待处理的 xml 字符串，还有一个是回调函数   

解析后会执行回调函数返回两个参数 err 和 result     

err 是解析失败后的错误对象，result 则是解析成功后返回 xml 对应的 json 对象    

 `xml2js.parseString` 可以传第三个参数   

 ```js
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, {trim: true}, function (err, result) {
    console.dir(result);
});
``` 

- trim : 默认false ,在文本节点的开头和结尾处修剪空格     
- explicitArray: 默认true, 如果为true，则始终将子节点放入数组中；否则，仅当存在多个数组时才创建一个数组。   
- ignoreAttrs: 默认false，忽略所有xml属性，仅创建文本节点     

[链接](https://blog.csdn.net/hsany330/article/details/115168342)    
