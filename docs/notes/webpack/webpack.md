# webpack  

## 运行npm run xxx时发生了什么
1. 运行npm run xxx的时候，npm会在当前目录中的node_modules/.bin查找要执行得程序，如果找到则运行；
2. 没有找到则从全局的node_modules/.bin中查找，npm i -g xxx就是安装到全局目录；
3. 如果全局目录还是没找到，那么就从path环境变量中查找有没有其他同名的可执行程序   

## Loader和plugin
1. webpack本身只能打包common.js规范的 js文件，所以针对css、图片等格式的文件没法打包，需要引入第三方模块。因此就会用到loader    
2. 所以loader的作用是让webpack拥有了加载和解析非js文件的能力   
3. plugin也是为了扩展vebpack的功能，但是plugin不仅仅局限于打包资源，它还可以用于打包优化和压缩等，功能比loader强大   
4. Loader运行在打包文件之前，plugins在整个编译周期内都起做作用

1. 不同的作用

- Loader 直译为"加载器"。webpack 将一切文件视为模块，但是 webpack 原生是
只能解析 js 文件，如果想将其他文件也打包的话，就会用到 loader。 所以 Loader 的作用是让
webpack 拥有了加载和解析非 JavaScript 文件的能力。
- Plugin 直译为"插件"，Plugin 可以扩展 webpack 的功能，让 webpack 具有更多
的灵活性。 在 webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在
合适的时机通过 webpack 提供的 API 改变输出结果  

2. 不同的用法

- Loader 在 module.rules 中配置，也就是说他作为模块的解析规则而存在。 类型
为数组，每一项都是一个 Object，里面描述了对于什么类型的文件（test），使用什么加载
(loader)和使用的参数（options）  
- Plugin 在 plugins 中单独配置。 类型为数组，每一项是一个 plugin 的实例，参
数都通过构造函数传入  

## 什么是webpack

webpack是一个打包模块化JavaScript工具，在webpack里一切文件皆模块， 通过loader转换文件，通过Plugin注入钩子，最后输出有由个模块组合而成的文件，webpack专注构建模块化项目，webpack可以看做是模块打包机，他做的事情是： 分析你的项目， 找到JavaScript模块以及其他的一些浏览器不能直接运行的拓展语言(Scss, TypeScript等)  并将其打包为合适的格式以供浏览器使用。

## webpack优点 

1. 专注于处理模块化的项目，能做到开箱即用，一步到位
2. 通过 plugin 扩展，完整好用又不失灵活
3. 使用场景不局限于 web 开发
4. 社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源
扩展
5. 提供了更好的开发体验

## webpack构建流程  

webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
1. 初始化参数 ：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
2. 开始编译 ：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行
对象的 run 方法开始执行编译
3. 确定入口 ：根据配置中的 entry 找出所有的入口文件
4. 编译模块 ：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模
块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译 ：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻
译后的最终内容以及它们之间的依赖关系
6. 输出资源 ：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，
再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机
会
7. 输出完成 ：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写
入到文件系统，在以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到
感兴趣的事件后会执行特定的逻辑，并且插件可以调用 webpack 提供的 API 改变 webpack
的运行结果

## 热更新原理   

1. 基本定义

webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机
制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。 

2. 核心定义

- HMR 的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff
(chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 websocket，当本地资源发
生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对
比  
- 客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、
hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该 chunk 的增量
更新  
- 后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？
)  
由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像 react
hot-loader 和 vue-loader 都是借助这些 API 实现 HMR


## webpack与grunt, gulp的不同

1. 三者之间的区别
三者都是前端构建工具，grunt 和 gulp 在早期比较流行，现在 webpack 相对来说比较
主流，不过一些轻量化的任务还是会用 gulp 来处理，比如单独打包 CSS 文件等  
- grunt 和 gulp 是基于任务和流（Task、Stream）的。类似 jQuery，找到一个（或
一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个
任务就构成了整个 web 的构建流程。
- webpack 是基于入口的。webpack 会自动地递归解析入口所需要加载的所有资
源文件，然后用不同的 Loader 来处理不同的文件，用 Plugin 来扩展 webpack 功能。
2. 构建思路的区别
- gulp 和 grunt 需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所
有`Task`的调用关系  
- webpack 需要开发者找到入口，并需要清楚对于不同的资源应该使用什么
Loader 做何种解析和加工  
3. 从知识背景区别
- gulp 更像后端开发者的思路，需要对于整个流程了如指掌 
- webpack 更倾向于前端开发者的思路

## 常见loader 

1. file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
2. url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件
内容注入到代码中去
3. source-map-loader：加载额外的 Source Map 文件，以方便断点调试
4. image-loader：加载并且压缩图片文件
5. babel-loader：把 ES6 转换成 ES5
6. css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
7. style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
8. eslint-loader：通过 ESLint 检查 JavaScript 代码

## 分别介绍bundle chunk module 的作用

1. module：开发中的每一个文件都可以看作是 module，模块不局限于 js，也包含 css，
图片等
2. chunk：表示代码块，一个 chunk 可以由多个模块组成
3. bundle：最终打包完成的文件，一般就是和 chunk 一一对应的关系，bundle 就是对
chunk 进行编译压缩打包等处理后的产出  

## 如何利用 webpack 来优化前端性能
1. 压缩代码。uglifyJsPlugin 压缩 js 代码， mini-css-extract-plugin 压缩 css 代码
2. 利用 CDN 加速，将引用的静态资源修改为 CDN 上对应的路径，可以利用 webpack 对
于 output 参数和 loader 的 publicpath 参数来修改资源路径
3. 删除死代码（tree shaking），css 需要使用 Purify-CSS
4. 提取公共代码。webpack4 移除了 CommonsChunkPlugin (提取公共代码)，用
optimization.splitChunks 和 optimization.runtimeChunk 来代替

## 写Loader和Plugin 的思路  

1. 基本定义

Loader 像一个"翻译官"把读到的源文件内容转义成新的文件内容，并且每个 Loader
通过链式操作，将源文件一步步翻译成想要的样子。  

2. 编写思路

- 编写 Loader 时要遵循单一原则，每个 Loader 只做一种"转义"工作， 每个
Loader 的拿到的是源文件内容（source），可以通过返回值的方式将处理后的内容输出，也可
以调用 this.callback()方法，将内容返回给 webpack，还可以通过 this.async()生成一个 callback
函数，再用这个 callback 将处理后的内容输出出去，此外 webpack 还为开发者准备了开发
loader 的工具函数集——loader-utils
- 相对于 Loader 而言，Plugin 的编写就灵活了许多， webpack 在运行的生命周期
中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改
变输出结果

3. 编写注意事项

- Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader
只负责自己需要负责的事情
- Loader 运行在 node.js 中，我们可以调用任意 node.js 自带的 API 或者安装
第三方模块进行调用
- webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下
Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 webpack 该 Loader 是否需要
二进制数据
- 尽可能的异步化 Loader，如果计算量很小，同步也可以
- Loader 是无状态的，我们不应该在 Loader 中保留状态
- 使用 loader-utils 和 schema-utils 为我们提供的实用工具
- 加载本地 Loader 方法

## webpack3和webpack4的区别

1. mode/–mode 参数，新增了 mode/--mode 参数来表示是开发还是生产
（development/production）
2. Production，侧重于打包后的文件大小，development 侧重于 goujiansud
3. 移除 loaders，必须使用 rules（在 3 版本的时候 loaders 和 rules 是共存的但是到 4 的
时候只允许使用 rules
4. 移除了 CommonsChunkPlugin (提取公共代码)，用 optimization.splitChunks，
optimization.runtimeChunk 来代替
5. 支持 es6 的方式导入 JSON 文件，并且可以过滤无用的代码
let jsonData = require('./data.json')
import jsonData from './data.json'
import { first } from './data.json' // 打包时只会把 first 相关的打进去
6. 升级 happypack 插件（happypack 可以进行多线程加速打包）
ExtractTextwebpackPlugin 调整，建议选用新的 CSS 文件提取 kiii 插件 mini-css-extract
plugin，production 模式，增加 minimizer