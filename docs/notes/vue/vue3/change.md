# 一些改变

## 响应式  

1. vue2.x的响应式  
实现原理：  

- 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。  

- 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）   

```js
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```  

存在问题：  

- 新增属性、删除属性, 界面不会更新。  
- 直接通过下标修改数组, 界面不会自动更新。  


2. Vue3.0的响应式  
实现原理:   

- 通过Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。  
- 通过Reflect（反射）: 对源对象的属性进行操作。  
- MDN:
    - Proxy:<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy>

    - Reflect:<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect>   


## reactive对比ref  
- 定义数据：
   - ref用来定义：基本类型数据。  
   - reactive用来定义：对象（或数组）类型数据。 

>ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。  

- 原理： 
   - ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）。   
   - reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。   


- 使用：
   - ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value。  
   - reactive定义的数据：操作数据与读取数据：均不需要.value。   


## setup的两个注意点  

  - setup执行的时机:在beforeCreate之前执行一次，this是undefined。  

  - setup的参数:

      - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
      - context：上下文对象
      - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 this.$attrs。
      - slots: 收到的插槽内容, 相当于 this.$slots。
      - emit: 分发自定义事件的函数, 相当于 this.$emit。  


## computed  

```js
import {computed} from 'vue'

setup(){
    ...
 //计算属性——简写
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })
    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}
```


## watch  

- 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。  
- 监视reactive定义的响应式数据中某个属性时：deep配置有效。   


## watchEffect函数  

watch：既要指明监视的属性，也要指明监视的回调。  

watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。  

watchEffect有点像computed：  

但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。  
而watchEffect更注重的是过程（回调函数的函数体），不用写返回值。  

```js
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
    console.log('watchEffect配置的回调执行了')
})
```  


## 生命周期  

Vue3.0中可以继续使用Vue2.x中的生命周期钩子，有两个被更名：  

`beforeDestroy`改名为 `beforeUnmount`  
`destroyed`改名为 `unmounted`  

Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：   

`beforeCreate`===>`setup()`   

`created`=======>`setup() ` 

`beforeMount `===>`onBeforeMount `   

`mounted`=======>`onMounted `   

`beforeUpdate`===>`onBeforeUpdate`  

`updated` =======>`onUpdated `    

`beforeUnmount` ==>`onBeforeUnmount`     

`unmounted` =====>`onUnmounted`     


## toRef   
- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。  

- 语法：const name = toRef(person,'name')  

- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。  

- 扩展：toRefs 与toRef功能一致，但可以批量创建多个 ref 对象，语法：toRefs(person)  