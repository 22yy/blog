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