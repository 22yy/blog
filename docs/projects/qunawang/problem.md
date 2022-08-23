# 踩坑记录

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
