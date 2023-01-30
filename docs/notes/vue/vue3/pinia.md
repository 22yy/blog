# Pinia  

Pinia本质上是一个状态管理的库，用于跨组件、页面进行状态共享（这点和Vuex、Redux一样）    

和Vuex相比，Pinia有很多的优势：   

- mutations 不再存在：     

- 更友好的TypeScript支持，Vuex之前对TS的支持很不友好；  

- 不再有modules的嵌套结构：   

- 也不再有命名空间的概念，不需要记住它们的复杂关系；  

## 使用  

```sh
npm install pinia
```

```js
import { createPinia } from 'pinia'

const pinia = createPinia() 

export default pinia
```

```js
import pinia from './store'

createApp(App).use(pinia).mount('#app')

```

## Store   

什么是Store？   

一个 Store （如 Pinia）是一个实体，它会持有为绑定到你组件树的状态和业务逻辑，也就是保存了全局的状态；    

有点像始终存在，并且每个人都可以读取和写入的组件；   

可以在应用程序中定义任意数量的Store来管理你的状态；   

Store有三个核心概念：   

state、getters、actions；等同于组件的data、computed、methods；    

一旦 store 被实例化，就可以直接在 store 上访问 state、getters 和 actions 中定义的任何属性；     

定义一个Store：  

Store 是使用 defineStore() 定义的   

并且它需要一个唯一名称，作为第一个参数传递；  

这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。    

返回的函数统一使用useX作为命名方案，这是约定的规范；    

```js
export const useCounter = defineStore('counter', {
  state() {
    return {
      counter: 0
    }
  }
})
``` 

Store在它被使用之前是不会创建的，我们可以通过调用use函数来使用Store   

Store获取到后不能被解构，那么会失去响应式：    

为了从 Store 中提取属性同时保持其响应式，需要使用storeToRefs()   

```vue
<template>
  <div class='home'>
    <h2>Counter: {{ counterStore.counter }}</h2>
  </div>
</template>

<script setup>
import { useCounter } from '@/store/counter'

const counterStore = userCounter()
// const { counter } = counterStore
const { counter: counter1 } = toRefs(counterStore)
const { counter: counter2 } = storeToRefs(counterStore)
</script>
``` 

## State   

state 是 store 的核心部分，因为store是用来帮助我们管理状态的。  

在 Pinia 中，状态被定义为返回初始状态的函数；  

可以通过 store 实例访问状态来直接读取和写入状态；   

可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值；

```js
export const userCounter = defineStore('counter', {
  state: () => ({
    counter: 0,
    name: 'why',
    age: 18
  })
})  
```

除了直接用 store.counter++ 修改 store，你还可以调用 $patch 方法；   

可以通过将其 $state 属性设置为新对象来替换 Store 的整个状态：   

```js
const counterStore = userCounter()  

counterStore.counter++
counterStore.name = 'code'

counterStore.$reset()   

counterStore.$patch({
  counter: 100,
  name:'dsd'
}) 

counterStore.$state = {
  counter: 1,
  name: 'dsd'
}
```  

## Getters  

Getters相当于Store的计算属性：   

可以用 defineStore() 中的 getters 属性定义；    

getters中可以定义接受一个state作为参数的函数；     

可以通过this来访问到当前store实例的所有其他属性    

Getters也可以返回一个函数，可以接受参数

```js
export const userCounter = defineStore('counter', {
  state: () => ({
    counter: 0,
    name: 'why',
    age: 18
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    dounblePlusOne: function(state) {
      return this.doubleCounter + 1
    }
  }
})   
```  

```js
const counterStore = userCounter()  
console.log(counterStore.doubleCounter)
```

## Actions 

Actions 相当于组件中的 methods。    

可以使用 defineStore() 中的 actions 属性定义，并且它们非常适合定义业务逻辑；    
 
和getters一样，在action中可以通过this访问整个store实例的所有操作；   

并且Actions中是支持异步操作的，并且可以编写异步函数，在函数中使用await；    


```js
actions: {
  increment() {
    this.counter++
  }
}
```

```js
function increment() {
  counterStore.increment()
}
```