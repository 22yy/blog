# Vue-router

## 什么是路由

- 一组路由即一组映射关系（key-value）
- key 为路径，value 可能是 function 或 component

### 前端路由

- 特点：不向后台发送请求，不刷新页面，前后端分离

理解：

1. value 是 component，用于展示页面内容。
2. 工作过程：当浏览器的路径改变时, 对应的组件就会显示。

### 后端路由

- 特点：向服务器发送请求，会刷新页面，前后端不能分离

理解：

1. value 是 function, 用于处理客户端提交的请求。
2. 工作过程：服务器接收到一个请求时, 根据请求路径找到匹配的函数
   来处理请求, 返回响应数据

## 几个注意

1. 路由组件通常存放在 pages 文件夹，一般组件通常存放在 components 文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的$route 属性，里面存储着自己的路由信息。
4. 整个应用只有一个 router，可以通过组件的$router 属性获取到。

## qyery 参数

1. 传递参数

```js
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳转 </router-link>

<!-- 跳转并携带query参数，to的对象写法 -->
<router-link
	:to="{
		path:'/home/message/detail',
		query:{
		   id:666,
       title:'你好'
		}
	}"
>跳转</router-link>
```

2. 接收参数：

```
$route.query.id
$route.query.title
```

## params 参数

1. 配置路由，声明接收 params 参数

```js
{
 path:'/home',
 component:Home,
 children:[
  {
   path:'news',
   component:News
  },
  {
   component:Message,
   children:[
    {
     name:'xiangqing',
     path:'detail/:id/:title', //使用占位符声明接收params参数
     component:Detail
    }
   ]
  }
 ]
}
```

2. 传递参数

```js
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="/home/message/detail/666/你好">跳转</router-link>

<!-- 跳转并携带params参数，to的对象写法 -->
<router-link
	:to="{
		name:'xiangqing',
		params:{
		   id:666,
       title:'你好'
		}
	}"
>跳转</router-link>
```

> 特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！

3. 接收参数：

```js
$route.params.id;
$route.params.title;
```

## props 配置

- 作用：让路由组件更方便的收到参数

```js
{
 name:'xiangqing',
 path:'detail/:id',
 component:Detail,

 //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
 // props:{a:900}

 //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
 // props:true

 //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
 props(route){
  return {
   id:route.query.id,
   title:route.query.title
  }
 }
}
```

## 编程式路由导航

- 作用：不借助`<router-link>` 实现路由跳转，让路由跳转更加灵活

```js
//$router的两个API
this.$router.push({
  name: "xiangqing",
  params: {
    id: xxx,
    title: xxx,
  },
});

this.$router.replace({
  name: "xiangqing",
  params: {
    id: xxx,
    title: xxx,
  },
});
this.$router.forward(); //前进
this.$router.back(); //后退
this.$router.go(); //可前进也可后退
```

## `<router-link>`的 replace 属性

- 作用：控制路由跳转时操作浏览器历史记录的模式
- 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，push 是追加历史记录，replace 是替换当前记录。路由跳转时候默认为 push

## 缓存路由组件

- 作用：让不展示的路由组件保持挂载，不被销毁。

```js
<keep-alive include="News">
  <router-view></router-view>
</keep-alive>
```

## 两个新的生命周期钩子

- 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
- activated 路由组件被激活时触发。
- deactivated 路由组件失活时触发。

## 路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

- <b>全局守卫</b>:

`beforeEach(to, from, next)`:

to :即将要进入的目标路由对象

from:当前正要离开的路由对象

next:路由控制参数:

next():如果一切正常，则调用这个方法进入下一个钩子

next(false):取消导航(即路由不发生改变)

next('/login'):当前导航被中断，然后进行一个新的导航

next(error):如果一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError ()

`afterEach (to，from)` 路由改变后的钩子 常用自动让页面返回最顶端  
用法相似，少了 next 参数

```js
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);
  if (to.meta.isAuth) {
    //判断当前路由是否需要进行权限控制
    if (localStorage.getItem("school") === "atguigu") {
      //权限控制的具体规则
      next(); //放行
    } else {
      alert("暂无权限查看");
      // next({name:'guanyu'})
    }
  } else {
    next(); //放行
  }
});

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to, from) => {
  console.log("afterEach", to, from);
  if (to.meta.title) {
    document.title = to.meta.title; //修改网页的title
  } else {
    document.title = "vue_test";
  }
});
```

- <b>独享守卫</b>

```js
const router = new VueRouter({
  routes:[
    {
      path:'/foo',
      component:Foo,
      beforeEnter: (to,from,next) => {
        console.log('beforeEnter',to,from)
        if (to.meta.isAuth) { //判断当前路由是否需要进行权限控制
        if (localStorage.getItem('school') === 'atguigu') {
           next()
         } else {
           alert('暂无权限查看')
          // next({name:'guanyu'})
         }
        } else {
          next()
        }
     }
     beforeEnter:(route) => {

     }
    }
  ]
})

```

- <b>组件内守卫</b>：

1. `beforeRouteEnter (to, form, next)`

- 该组件的对应路由被 comfirm 前调用。

- 此时实例还没被创建，<b>所以不能获取实例(this)</b>

2. `beforeRouteUpdate (to, from, next)`

- 当前路由改变，但该组件被复用时候调用

- 该函数内可以访问组件实例(this)

3. `beforeRouteLeave (to, from, next) `

- 当导航离开组件的对应路由时调用。

- 该函数内可以访问获取组件实例(this)

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    在渲染该组件的对应路由被 confirm 前调用
    不!能!获取组件实例 `this`
    因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
  在当前路由改变，但是该组件被复用时调用
  举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的 时候，
  由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调 用。
  可以访问组件实例 `this` },
  beforeRouteLeave (to, from, next) {
  导航离开该组件的对应路由时调用
  可以访问组件实例 `this`
} }

```

- 路由监测变化 监听到路由对象发生变化，从而对路由变化做出响应

```js
const user = {
    template:'<div></div>',
    watch: {
       '$route' (to,from){ // 对路由做出响应
       // to , from 分别表示从哪跳转到哪，都是一个对象
       // to.path ( 表示的是要跳转到的路由的地址 eg: /home );
      }
  }
}

// 多了一个watch，这会带来依赖追踪的内存开销， // 修改
const user = {
    template:'<div></div>',
    watch: {
      '$route.query.id' {
        // 请求个人描述
      },

      '$route.query.page' {
        //请求列表
    }

  }
}
```

## 路由器的两种工作模式

- 对于一个 url，什么是 hash 值？—— #及其后面的内容就是 hash 值。
- hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器。
- hash 模式：

```
地址中永远带着#号，不美观 。
若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
兼容性较好。
```

- history 模式：

```
地址干净，美观 。
兼容性和hash模式相比略差。
应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
```

## 原理

Vue.use(VueRouter)调用 VueRouter 的 install 方法

```js
import routerLink from "./components/router-link";
import routerView from "./components/router-view";

export let Vue;
function install(_Vue) {
  Vue = _Vue; // 将传入的Vue的够赞函数变为全局的
  Vue.mixin({
    // mergeOptions 所有组件初始化都会采用这个方法
    beforeCreate() {
      // 这样写只是 有router才加没有router没有加
      // this.$router = this.$options?.router
      // 组件渲染是从父到子的
      if (this.$options.router) {
        // 根实例上传递了router
        this._routerRoot = this; // 根实例
        this._router = this.$options.router;

        // this._router.push / match / init
        this._router.init(this); // this就是我们整个的应用 new Vue

        // 给根实例添加一个属性 _route 就是当前的current对象
        Vue.util.defineReactive(this, "_route", this._router.history.current); // 这里将current变成了响应式对象

        // 改变的是current 两个不是一个对象 , 内部改的是current 我们需要改变这个_route
        // this._router 拿到根实例
        // this._route 拿到current对象
      } else {
        // 在所有组件上都增加一个_routerRoot 指向根实例
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
      // 这种
      // 在组件中都可以通过
    },
  });
  // 在实例上取值的时候 会去拿到_router属性  代理
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot && this._routerRoot._router;
    },
  });
  Object.defineProperty(Vue.prototype, "$route", {
    // 所有组件里面都有一个$route属性 对应的就是我们里面写的current
    get() {
      return this._routerRoot && this._routerRoot._route;
    },
  });
  // 这里不能直接将属性定义在原型上, 只有通过new Vue中传入了router才能被共享

  // react中叫children vue中所有的插槽会被变到 vm.$slots对象上
  Vue.component("router-link", routerLink);
  Vue.component("router-view", routerView);
}
export default install;
```

createRouteMap

```js
export default function createRouteMap(routes, pathMap) {
  // 根据用户选项扁平化路由的信息
  pathMap = pathMap || {};
  routes.forEach((route) => {
    addRouteRecord(route, pathMap);
  });

  return {
    pathMap,
  };
}
function addRouteRecord(route, pathMap, parentRecord) {
  let path = parentRecord
    ? `${parentRecord.path === "/" ? "/" : `${parentRecord.path}/`}${
        route.path
      }`
    : route.path;
  let record = {
    path,
    component: route.component,
    props: route.props,
    meta: route.meta,
    parent: parentRecord,
  };
  if (!pathMap[path]) {
    // 维护路径对应的属性
    pathMap[path] = record; // 路径和记录对应起来
  }
  route.children &&
    route.children.forEach((childRoute) => {
      addRouteRecord(childRoute, pathMap, record);
    });
}
```

createMatcher 做扁平化处理，返回 addRoutes, addRoute,match 方法

create-matcher.js

```js
import createRouteMap from "./create-route-map";

export default function createMatcher(routes) {
  let { pathMap } = createRouteMap(routes);
  function addRoutes(routes) {
    //动态添加路由
    createRouteMap(routes, pathMap);
  }

  function addRoute(route) {
    createRouteMap([route], pathMap);
  }

  function match(location) {
    return pathMap[location];
  }
  return {
    addRoutes, // 添加路由 多个路由的
    addRoute, // 添加一个路由的
    match, // 稍后你给我一个路径我就返回给你对应的路由
  };
}
```

核心方法 transitionTo

```js
function createRoute(record, location) {
  let matched = [];
  if (record) {
    while (record) {
      matched.unshift(record); // [about,about/a]
      record = record.parent;
    }
  }
  return {
    ...location,
    matched,
  };
}
function runQueue(queue, from, to, cb) {
  function next(index) {
    if (index >= queue.length) return cb();
    let hook = queue[index];
    hook(from, to, () => next(index + 1));
  }
  next(0);
}
class Base {
  constructor(router) {
    this.router = router;
    this.current = createRoute(null, {
      path: "/",
    });
  }
  // 所有的逻辑都要放在这个transitionTo中来实现
  transitionTo(location, listener) {
    // {path:'/',matched:[]}
    // {path:'/',matched:[Home]}

    // 用之前的匹配方法了, 差一个routerView没有实现
    let record = this.router.match(location);
    let route = createRoute(record, { path: location });

    // 当前跳转的路径 和 我们之前存的一样， 而且匹配结果也一样则不再发生跳转了
    if (
      location === this.current.path &&
      route.matched.length == this.current.matched.length
    ) {
      return;
    }

    let queue = [].concat(this.router.beforeEachHooks); // 多个钩子跳转的时候的可以解析后  拼接在一起执行

    runQueue(queue, this.current, route, () => {
      this.current = route; // 这里更新当前的current对象
      // path:'/',matched:[]
      // path:'/about/a',matched:[aboutRecord, aboutARecord]

      // 每次更新的是current，稍后current变化了，我们就可以切换页面显示

      // 如果当路由切换的时候 也应该调用transitionTo方法 在次拿到新的记录

      // /about/b = /about + /b  需要根基匹配的记录找到所有的组件 根据组件渲染到不同的routerView中
      listener && listener();
      this.cb && this.cb(route);
    });
  }

  listen(cb) {
    // 自定了一个钩子   this._route = route
    this.cb = cb;
  }
}
export default Base;

// 路由钩子的实现
// 路由权限的实现  钩子 + addRoutes

// $router (方法 this._router)  $route (属性  this.current)
```
