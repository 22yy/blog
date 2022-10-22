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