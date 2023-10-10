# vue相关问题

## computed和watch的区别  
>它们都用于监听数据变化。  
1. computed    
如果函数所以依赖属性没有发送变化，则从缓存中读取，必须要有return返回值，使用方法和data中的数据一样  

2. watch  
watch函数有两个参数，新值和旧值，watch中的函数不需要调用，只会监听数据的值是否发送改变，而不会监听数据的地址是否发生改变，需要深度监听需要配合deep:true使用    

3. 区别：  
- 功能：computed是计算属性，watch是监听数据变化  
- 缓存：computed支持缓存，只有依赖数据发生改变,才会重新进行计算;watch不支持缓存，当对应属性发生改变时，响应执行  
- 异步：computed不支持异步，有异步操作时不发监听数据变化，watch支持异步操作    
- 返回值：computed中的函数必须要用return返回，watch中的函数不是必须要用return.  
- computed擅长处理的场景：一个数据受多个数据影响；watch擅长处理的场景：一个数据影响多个数据。  
- computed第一次加载时就监听，watch默认第一次加载不监听，如果需要第一次加载做监听，添加immediate属性，值为true   

## vue双向绑定数据  

>vue.js采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()劫持各个属性的setter,getter,在数据变动时发布消息给订阅者。触发相应的监听回调  


## Vue父子组件生命周期加载顺序  

- 加载渲染过程 : 父组件先创建，子组件先挂载     

父beforeCreste -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted   

- 子组件更新  

父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated  

- 父组件更新：不触发子组件  

父beforeUpdate -> 父updated

- 销毁过程  

父beforeDestory -> 子beforeDestory -> 子destoryed -> 父destoryed  

## 父组件监听子组件生命周期   

- 可以在子组件生命周期用`$emit`事件，给父组件传递信息   

```js
// Parent.vue
<Child  @mounted = 'doSomething'/>

// Child.vue
mounted() {
  this.$emit('mounted');
}
```

- 在父组件引用子组件时通过`@hook`来监听  

```js
// Parent.vue
<Child @hook:mounted = 'doSomething'/>

doSomething() {
  console.log('父组件监听到子组件mounted函数')
}

// Child.vue
mounted() {
  console.log('子组件触发mounted函数')  
}
```  


## keep-alive  

keep-alive是Vue内置的一个组件，可以用来保持被包含的组件的状态，避免重新渲染   

- 有两个属性，`include`和`exclude`, 与include里的名称匹配的组件会被缓存，与exclude里的名称匹配的组件不会被缓存，exclude优先级比include高  

- 对应两个钩子函数，`activated`和`deactivated`,组件被激活时触发activated，组件被移除时触发deactivated   


## 组件中的data  

组件是用来复用的，且 JS里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而new vue 的实例.是不会被复用的，不存在引用对象的问题   

## v-model  

v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：   

- text 和 textarea 元素使用 value 厲性和input 事件   

- checkbox 和radio 使用 checked 属性和 change事件  

- select 字段将value 作为 prop 并将 change 作为事件    

```js
<input v-model = 'something'>

相当于

<input v-bind:value='something' v-on='something = $event.target.value'>
```

## vue自定义指令

1. 定义指令的类型以及语法：
- 局部指令：
       函数式： new Vue({ directives ：{ '指令名称' ：配置对象}})  
       对象式：new Vue({ directives ：{ '指令名称' ：回调函数}})  
- 全局指令：
       函数式：Vue.directive(指令名称，回调函数)    
       对象式：Vue.directive(指令名称，配置对象)     
                
1. 配置对象常用的三个钩子函数
- bind：指令与元素成功绑定时调用(此时只是将元素与指令绑定，但是真实DOM节点未渲染)
- inserted：指令所在的元素被插入父节点时调用(真实DOM已渲染到页面上，能获取真实DOM)
- update：指令所在模板更新时调用( 不单纯是指令绑定数据更新，而是只要data内部数据变化)
1. 指令在使用时需要加上 v- ，但是在定义时不需要
2. 指令名称如果是多个单词，需要使用 kebab-case( 连字符 - )，不能直接使用驼峰命名

## Vue插槽

[链接](http://t.csdnimg.cn/pB6hs)

## 工作中Git提交代码远程仓库基本流程   

基本流程：  
1. push自己代码到远程仓库前
2.先stash缓存本地代码（以防别人也有修改有油
突)
3. 然后pull拉取远程代码
4. 拉取完后stash pop拋出本地代码
5. 有冲突时对照提示解决冲突文件，没有则直接add
暂存区
6. commit 提交说明
7. push到远程仓库