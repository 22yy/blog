# vue 相关  


## Vue生命周期   

Vue生命周期就是Vue实例从创建到销毁的过程，主要分四个阶段，创建，挂载，更新，销毁，每个阶段包括两个钩子  

beforeCreate和created之间`挂载data`和`绑定事件`，接下来`根据el挂载页面元素`，没有el就会结束生命周期直到手动挂载，然后解析tempalte生成虚拟dom，根据template渲染页面   

beforeMount前虚拟dom已创建完成，mounted前将`vm.$el替代el`，mounted将虚拟dom转换为真实dom挂载到真实页面，`html页面渲染完成`     

数据发生变化时触发beforeUpdate和updated，最后主调用销毁函数或者组件自动销毁时beforeDestroy，手动撤销监听事件

![life-cycle](./images/life-cycle.png)

## 全局事件总线（GlobalEventBus）  

>一种组件间通信的方式，适用于任意组件间通信。

1. 安装全局事件总线： 

```js
new Vue({
 ......
 beforeCreate() {
  Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
 },
    ......
}) 
```

2. 使用事件总线：   

接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。   

```js
methods(){
  demo(data){......}
}
mounted() {
  this.$bus.$on('xxxx',this.demo)
}
```  

3. 提供数据：`this.$bus.$emit('xxxx',数据)` 

4. 最好在beforeDestroy钩子中，用`$off`去解绑当前组件所用到的事件。   


## 消息订阅与发布（pubsub）   

>一种组件间通信的方式，适用于任意组件间通信。

使用步骤：  

1. 安装pubsub：npm i pubsub-js  

2. 引入: import pubsub from 'pubsub-js'  

3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。  

```js
methods(){
  demo(data){......}
}
......
mounted() {
  this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
}
```  

4. 提供数据：`pubsub.publish('xxx',数据)`  

5. 最好在beforeDestroy钩子中，用`pubsub.unsubscribe(pid)`去取消订阅。   


## nextTick  
1. 语法：this.$nextTick(回调函数)  
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。  
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行   


## Vue封装的过度与动画  

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 写法： 

- 元素进入的样式：
```js
v-enter：进入的起点
v-enter-active：进入过程中
v-enter-to：进入的终点
```

- 元素离开的样式：
```js
v-leave：离开的起点
v-leave-active：离开过程中
v-leave-to：离开的终点
```

- 使用`<transition>`包裹要过度的元素，并配置name属性：

```js
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```   

 
## 插槽   
1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ===> 子组件 。  

2. 分类：默认插槽、具名插槽、作用域插槽  

3. 使用：

作用域插槽 ；  

- 理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

```js
//父组件中：
		<Category>
			<template scope="scopeData">
				<!-- 生成的是ul列表 -->
				<ul>
					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category>
			<template slot-scope="scopeData">
				<!-- 生成的是h4标题 -->
				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
			</template>
		</Category>
//子组件中：
        <template>
            <div>
                <slot :games="games"></slot>
            </div>
        </template>
		
        <script>
            export default {
                name:'Category',
                props:['title'],
                //数据在子组件自身
                data() {
                    return {
                        games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                    }
                },
            }
        </script>
```
## object.defineProperty()  

```js
object.defineProperty(obj, prop, descriptor)
```

三个参数：  
- 属性所在对象  
- 定义或修改的属性名  
- 被定义或修改的属性描述符对象（对属性的操作）   

描述符有两种主要形式：


- 数据属性    
   - writable : 属性值是否可修改，默认false
   - enumeratable : 属性是否可被for...in循环访问到,默认false    
   - configurable:  能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为false
   - value: 属性的数据值，默认undefined  


- 访问器属性
   - set  ： 读取属性时调用，默认undefined  
   - get  ： 写入属性时调用，默认undefined  


## mixin(混入)   

1. 功能：可以把多个组件共用的配置提取成一个混入对象   

2. 使用方式：  

```js
第一步定义混合：

{
    data(){....},
    methods:{....}
    ....
}
第二步使用混入：

​ 全局混入：Vue.mixin(xxx)
​ 局部混入：mixins:['xxx'] 
```  
