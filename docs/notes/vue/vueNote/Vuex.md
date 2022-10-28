# Vuex
![vuex](https://vuex.vuejs.org/vuex.png)
 ## 概念
 在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件通信的方式，且适用于任意组件通信。

 >Vue实现了一个单向数据流， 全局拥有一个state存储状态，且必须通过Mutation提交修改信息修改state中的数据

 ## 何时使用
 >多个组件需要共享数据时

 ## 搭建Vuex环境
 ```js
1. 创建文件src/store/index.js
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {}
//准备state对象——保存具体的数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
 actions,
 mutations,
 state
})


2. 在main.js中创建vm时传入store配置项
......
//引入store
import store from './store'
......

//创建vm
new Vue({
 el:'#app',
 render: h => h(App),
 store
})
 ```

 ## 基本使用
 ```js
1. 初始化数据、配置actions、配置mutations，操作文件store.js

//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
 jia(context,value){
  // console.log('actions中的jia被调用了',miniStore,value)
  context.commit('JIA',value)
 },
}

const mutations = {
    //执行加
 JIA(state,value){
  // console.log('mutations中的JIA被调用了',state,value)
  state.sum += value
 }
}

//初始化数据
const state = {
   sum:0
}

//创建并暴露store
export default new Vuex.Store({
 actions,
 mutations,
 state,
})

2. 组件中读取vuex中的数据：$store.state.sum

3. 组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据) 或 $store.commit('mutations中的方法名',数据)
```


 ## getters的使用
```js
1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。

2. 在store.js中追加getters配置

......
const getters = {
 bigSum(state){
  return state.sum * 10
 }
}
//创建并暴露store
export default new Vuex.Store({
 ......
 getters
})
3. 组件中读取数据：$store.getters.bigSum
```

## 四个map方法的使用  
1. mapState方法：用于帮助我们映射state中的数据为计算属性   

```js
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
     ...mapState({sum:'sum',school:'school',subject:'subject'}),
         
    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

2. mapGetters方法：用于帮助我们映射getters中的数据为计算属性   

```js
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```

3. mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数  

```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```


4. mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数  

```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```


>mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。


## action & mutation

- mutation 必须是同步函数，action可以包含异步操作  
- action提交的时mutation，不是直接修改状态  
- action第一个参数是context，是一个与store实例具有相同属性和方法的对象  
- action通过store.dispatch触发，mutation通过store.commit触发  