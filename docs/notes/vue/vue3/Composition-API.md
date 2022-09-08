# 常用 Composition API  

## setup  

1. 值为一个函数，组件中所用到的：数据、方法等等，均要配置在setup中。   
2. setup中不能访问到Vue2.x配置（data、methos、computed...)  


## ref函数  
1. 定义一个响应式数据
2. 语法: const xxx = ref(initValue)
  - 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
  - JS中操作数据： xxx.value
  - 模板中读取数据: 不需要.value，直接：<div>{{xxx}}</div>

3. 基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的。
对象类型的数据：内部 “ 求助 ” 了Vue3.0中的一个新函数—— reactive函数。  


## reactive函数  

1. 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
2. 语法：const 代理对象= reactive(源对象)接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）reactive定义的响应式数据是“深层次的”。内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作


## 其他Compisition-API  

1. shallowReactive 与 shallowRef  

`shallowReactive`：只处理对象最外层属性的响应式（浅响应式）。  

`shallowRef`：只处理基本数据类型的响应式, 不进行对象的响应式处理。  

什么时候使用?  

如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。  
如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===>   shallowRef。   

2. readonly 与 shallowReadonly  

`readonly`: 让一个响应式数据变为只读的（深只读）。  

`shallowReadonly`：让一个响应式数据变为只读的（浅只读）。  

应用场景: 不希望数据被修改时。   


3. toRaw 与 markRaw  

`toRaw`： 
- 作用：将一个由reactive生成的响应式对象转为普通对象。  
- 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。  

`markRaw`：
- 作用：标记一个对象，使其永远不会再成为响应式对象。  
- 应用场景:有些值不应被设置为响应式的，例如复杂的第三方类库等。当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能    


4. customRef  

作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制    


5. provide 与 inject

- 作用：实现祖与后代组件间通信

- 父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据   


6. 响应式数据的判断
`isRef`: 检查一个值是否为一个 ref 对象  
`isReactive`: 检查一个对象是否是由 reactive 创建的响应式代理  
`isReadonly`: 检查一个对象是否是由 readonly 创建的只读代理  
`isProxy`: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理  

