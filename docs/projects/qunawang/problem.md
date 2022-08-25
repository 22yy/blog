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

