# React入门

英文官网: <https://reactjs.org/>    
中文官网: <https://doc.react-china.org/>  

## 特点
- Declarative(声明式编码)   
- Component-Based(组件化编码)   
- Learn Once, Write Anywhere(支持客户端与服务器渲染)   
- 高效: 虚拟DOM
- 单向数据流   

## JSX（JavaScript XML)
- react定义的一种类似于XML的JS扩展语法: XML+JS    
- 用来创建react虚拟DOM `var ele = <h1>Hello JSX!</h1>`   
- 浏览器不能解析JSX代码，需要babel转译为纯JS，只要用了 JSX，都要加上 type="text/babel", 声明需要 babel 来处理  

注意:
  * 标签必须有结束
  * 标签的class属性必须改为className属性
  * 标签的style属性值必须为: `{{color:'red', width:12}}`
  * js中直接可以套标签, 但标签要套js需要放在{}中

## 组件化

>创建组件类  

```js
// 方式一：无状态函数
function myComponent(props) {
  return <h1>111111</h1>
}

// 方式二：ES6类语法
class myComponents extends React.Component {
  render() {
    return <h1>111111</h1>
  }
}

```

>渲染组件标签  

```js
ReactDOM.render(<MyComp />,  cotainerEle)   
``` 

>ReactDOM.render()渲染组件标签的基本流程   
- React内部会创建组件实例对象/调用组件函数, 得到虚拟DOM对象  
- 将虚拟DOM并解析为真实DOM  
- 插入到指定的页面元素内部  