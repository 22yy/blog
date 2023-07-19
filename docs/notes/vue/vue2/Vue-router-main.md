# 实现Vue-router

实现前端路由：

1. 改变 URL 却不引起页面刷新, 即 URL 变化只引起 UI 更新
2. 检测 URL 变化

##### hash实现

hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，**改变 URL 中的 hash 部分不会引起页面刷新**

页面第一次加载完不会触发 hashchange



##### history 实现

history 提供了 `pushState` 和 `replaceState `两个方法，**这两个方法改变 URL 的 path 部分不会引起页面刷新**

history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：

1. 通过浏览器前进后退改变 URL 时会触发 popstate 事件
2. 通过pushState/replaceState或`<a>`标签改变 URL 不会触发 popstate 事件。
3. 好在我们可以拦截 pushState/replaceState的调用和`<a>`标签的点击事件来检测 URL 变化
4. 通过js 调用history的back，go，forward方法触发该事件
5. 

所以监听 URL 变化可以实现，只是没有 hashchange 那么方便



##### Vue

我们是通过new VueRouter({...})获得一个router实例，也就是说，我们引入的VueRouter其实是一个类。

还使用了Vue.use(),而Vue.use的一个原则就是执行对象的install这个方法



myVueRouter.js

```js
let Vue = null;
class HistoryRoute {
  constructor() {
    this.current = null;
  }
}
class VueRouter {
  constructor(options) {
    this.mode = options.mode || "hash"
    this.routes = options.routes || [] //你传递的这个路由是一个数组表
    this.routesMap = this.createMap(this.routes)
    // console.log(this.routesMap);

    this.history = new HistoryRoute();
    this.init()
}
    
// 初始化的时候判断是是hash模式还是 history模式。，然后将当前路径的值保存到current里
init() {
  if (this.mode === "hash") {
    location.hash ? '' : location.hash = '/';
    window.addEventListener('load', () => {
      this.history.current  = location.hash;
    })
    window.addEventListener("hashchange",()=>{
      this.history.current = location.hash.slice(1)
  })
  } else {
    location.pathname? '':location.pathname = "/";
    window.addEventListener('load',()=>{
        this.history.current = location.pathname
    })
    window.addEventListener("popstate",()=>{
        this.history.current = location.pathname
    })
  }
}
// routes 转换成key：value的格式
createMap(routes){
    return routes.reduce((pre,current)=>{
        pre[current.path] = current.component
        return pre;
    },{})
 }
}

VueRouter.install = function(v) {
  Vue = v;

  // 让其他组件也拥有router
  // mixin的作用是将mixin的内容混合到Vue的初始参数options中。
  // 为什么是beforeCreate而不是created呢？因为如果是在created操作的话，$options已经初始化好了。
  // 如果判断当前组件是根组件的话，就将我们传入的router和_root挂在到根组件实例上。
  // 如果判断当前组件是子组件的话，就将我们_root根组件挂载到子组件。注意是引用的复制，因此每个组件都拥有了同一个_root根组件挂载在它身上

  // 为什么判断当前组件是子组件，就可以直接从父组件拿到_root根组件呢

  // 父组件和子组件的执行顺序:

  // 父beforeCreate-> 父created -> 父beforeMounte  -> 子beforeCreate ->子create ->子beforeMount ->子 mounted -> 父mounted

  // 可以得到，在执行子组件的beforeCreate的时候，父组件已经执行完beforeCreate了，那理所当然父组件已经有_root了。



  Vue.mixin({
    beforeCreate(){
        if (this.$options && this.$options.router){ // 如果是根组件
            this._root = this; //把当前实例挂载到_root上
            this._router = this.$options.router;
            // 改变路径，视图是没有重新渲染的，所以需要将_router.history进行响应式化。
            Vue.util.defineReactive(this,"xxx",this._router.history)
        }else { //如果是子组件
            this._root= this.$parent && this.$parent._root
        }
        Object.defineProperty(this,'$router',{
            get(){
                return this._root._router
            }
        })
        Object.defineProperty(this, '$route', {
          get() {
            return this._root._router.history.current;
          }
        })
    }
})

    //新增代码
    Vue.component('router-link',{
      props:{
        to:String
    },
    render(h){
        let mode = this._self._root._router.mode;
        let to = mode === "hash"?"#"+this.to:this.to
        return h('a',{attrs:{href:to}},this.$slots.default)
    }
  })
  Vue.component('router-view',{
    // 已经保存了当前路径，也就是说现在我们可以获得当前路径，然后再根据当前路径从路由表中获取对应的组件进行渲染
      render(h){
        let current = this._self._root._router.history.current
        let routeMap = this._self._root._router.routesMap;
        return h(routeMap[current])
      }
  })

}

export default VueRouter
```

