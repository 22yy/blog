# 踩坑

## vue-awesome-swiper报错  

安装需指定版本

```
npm install vue-awesome-swiper@3 --save-dev
```

## stylus报错   

>Module build failed: TypeError: this.getOptions is not a function at Object.stylusLoader

```
原因：stylus-loader安装的版本过高
解决方案：
1.npm uninstall stylus-loader
2.npm i stylus-loader@3.0.2 -S
```

## 引入styl文件报错

1. 安装stylus sylus-loader后，改了一下webpack的配置在webpack.base.conf.js的module的loaders里加入了

```js
{
  test: /\.styl$/, 
	loader: 'style-loader!css-loader!stylus-loader'，
	include: []  //必须加include：[]
}
```

2. 在resolve的extensions里加入了.styl

```js
extensions: ['', '.js', '.vue','.styl']
```

3. 在resolve的alias加入了

```js
'common': resolve('src/assets')
```

4. 在组件中引入

```js
@import '~common/styles/mixins.styl'
```

## 轮播图播放到最后一个后不动

 在swiper组件加判断this.swiperList.length解决  


## v-for渲染的异步请求数据无法使用better-scroll插件滚动

>使用better-scroll插件实例化滚动列表，但列表中的数据是异步请求，有时插件实例化完毕，但数据还没有渲染完毕
导致bug，解决问题的根源在于令dom全部渲染完成后再实例化插件   

1. 设置定时器，等待一定时间再实例化插件，但这种方法容易浪费时间等待或者等待时间不足仍然导致bug


2. watch+vm.nextTick  

用watch监听v-for渲染的列表数据，一旦该数据发生改变，说明异步请求更新了该数据，再使用this.$nextTick()函数执行回调，执行插件实例的refresh()方法即可

```js
watch: {
    cities () {
      this.$nextTick(function () {
        this.scroll.refresh()
      })
    }
  }
// cities是动态渲染的数据
```

## Chrome监听touch类事件报错，无法被动侦听事件preventDefault

>Unable to preventDefault inside passive event listener due to target being treated as passive  

当浏览器首先对默认的事件进行响应的时候，要检查一下是否进行了默认事件的取消。这样就在响应滑动操作之前有那么一丝丝的耽误时间。  

google就决定默认取消了对这个事件的检查，默认时间就取消了。直接执行滑动操作。这样就更加的顺滑了。但是浏览器的控制台就会进行错误提醒了   


即不让控制台提示，而且 preventDefault() 有效果  :

1. 注册处理函数时，明确声明为不是被动的  
window.addEventListener(‘touchmove’, func, { passive: false })  

2. 用 CSS 属性 `touch-action: none; `这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发。  


## 页面滚动会相互影响 

将一个页面滚动到一定位置后，切换页面也会在相同的位置   

vue-router官网关于滚动行为的描述：<https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html>

在router的index.js添加如下代码

```js
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
```