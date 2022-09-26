# webpack优化   

## 开发环境优化    
1. 优化打包构建速度  
### HMR 
  hot module replacement 热模块替换 / 模块热替换  
  作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 极大提升构建速度   

- 样式文件：可以使用HMR功能：因为style-loader内部实现了~   
- js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码    
注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。  
- html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）    
解决：修改entry入口，将html文件引入  

```js
devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true
  }
```


2. 优化代码调试
### source-map  
```js
 plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  devtool: 'eval-source-map'
```  

source-map:  
一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

source-map：外部  
  错误代码准确信息 和 源代码的错误位置  
inline-source-map：内联  
  只生成一个内联source-map  错误代码准确信息 和 源代码的错误位置  
hidden-source-map：外部  
  错误代码错误原因，但是没有错误位置 ，不能追踪源代码错误，只能提示到构建后代码的错误位置   
eval-source-map：内联  
  每一个文件都生成对应的source-map，都在eval ，错误代码准确信息 和 源代码的错误位置   
nosources-source-map：外部   
  错误代码准确信息, 但是没有任何源代码信息  
cheap-source-map：外部    
  错误代码准确信息 和 源代码的错误位置，只能精确的行  
cheap-module-source-map：外部   
  错误代码准确信息 和 源代码的错误位置 module会将loader的source map加入   

内联 和 外部的区别：  
1. 外部生成了文件，内联没有  
2. 内联构建速度更快

开发环境：速度快，调试更友好    
  速度快(eval>inline>cheap>...)   
    eval-cheap-souce-map  
    eval-source-map   
  调试更友好  
    souce-map  
    cheap-module-souce-map  
    cheap-souce-map  

  --> eval-source-map  / eval-cheap-module-souce-map   

生产环境：源代码要不要隐藏? 调试要不要更友好
  内联会让代码体积变大，所以在生产环境不用内联   
  nosources-source-map 全部隐藏    
  hidden-source-map 只隐藏源代码，会提示构建后代码错误信息    


## 生产环境性能优化

- 优化打包构建速度   
  - oneOf  
  - babel缓存  
  - 多进程打包  
  - externals  
  - dll   
- 优化代码运行的性能   
  -  缓存(hash-chunkhash-contenthash)     
  - tree shaking   
  - code split    
  - 懒加载/预加载  
  - pwa   

### tree shaking    
shaking：去除无用代码   
前提：  
1. 必须使用ES6模块化  
2. 开启production环境  
作用: 减少代码体积
在package.json中配置  
```js 
"sideEffects": false 所有代码都没有副作用（都可以进行tree shaking）  
```
问题：可能会把css / @babel/polyfill （副作用）文件干掉  
```js
"sideEffects": ["*.css","*.less"]   
```  


### dll
使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包   
当运行 webpack 时，默认查找 webpack.config.js 配置文件    
需求：需要运行 webpack.dll.js 文件   
      --> webpack --config webpack.dll.js   

```js
// webpack.config.js 
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production'
};
```

```js
// webpack.dll.js 
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 最终打包生成的[name] --> jquery
    // ['jquery'] --> 要打包的库是jquery
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
};
```

### babel缓存  
cacheDirectory: true    
```js
{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ],
              // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          },
```  

### externals  

```js
mode: 'production',
  externals: {
    // 拒绝jQuery被打包进来
    jquery: 'jQuery'
  }
```