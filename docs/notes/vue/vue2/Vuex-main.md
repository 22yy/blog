# 实现Vuex

通过`new Vuex.Store({})`获得一个store实例，也就是说，我们引入的Vuex中有Store这个类作为Vuex对象的一个属性。因为通过import引入的，**实质上就是一个导出一个对象的引用**。



**通过Vue.use(Vuex) 使得每个组件都可以拥有store实例**



myVuex.js

```js
import Vue from "vue"

class Store {
  constructor(options) {
    // state里的值也是响应式的,
    // new Vue（）的时候，传入的data是响应式的，以new 一个Vue，然后把state当作data传入
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })

    // 把用户传进来的getter保存到getters数组里。
    // 为什么用getter的时候不用写括号,就是利用了Object.defineProperty的get接口

    let getters = options.getters || {}
    this.getters = {}
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state)
        }
      })
    })

    // mutations跟getter一样，还是用mutations对象将用户传入的mutations存储起来。

    let mutations = options.mutations || {}
    this.mutations = {}
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = (arg) => {
        mutations[mutationName](this.state, arg)
      }
    })

    let actions = options.actions
    this.actions = {}
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = (arg) => {
        actions[actionName](this, arg) //这个this代表的就是store实例本身
      }
    })

  }

  dispatch(method, arg) {
    console.log(this);
    this.actions[method](arg)
  }

  commit = (method, arg) => {
    console.log(this);
    this.mutations[method](arg)
  }
  // 给Store类添加一个state属性。这个属性自动触发get接口
  get state() {
    return this.vm.state
  }

}
let install = function (Vue) {
  // 使得每个组件都可以拥有store实例  

  // 为什么是beforeCreate而不是created呢？因为如果是在created操作的话，$options已经初始化好了。
  // 如果判断当前组件是根组件的话，就将我们传入的store挂在到根组件实例上，属性名为$store。
  // 如果判断当前组件是子组件的话，就将我们根组件的$store也复制给子组件。注意是引用的复制，因此每个组件都拥有了同一个$store挂载在它身上。

  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) { // 如果是根组件
        this.$store = this.$options.store
      } else { //如果是子组件
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store,
  install
}

export default Vuex
```

