# webpack
## 运行npm run xxx时发生了什么
1. 运行npm run xxx的时候，npm会在当前目录中的node_modules/.bin查找要执行得程序，如果找到则运行；
2. 没有找到则从全局的node_modules/.bin中查找，npm i -g xxx就是安装到全局目录；
3. 如果全局目录还是没找到，那么就从path环境变量中查找有没有其他同名的可执行程序
