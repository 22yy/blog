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
ReactDOM.render(<MyComp />,  containerEle)   
``` 

>ReactDOM.render()渲染组件标签的基本流程   
- React内部会创建组件实例对象/调用组件函数, 得到虚拟DOM对象  
- 将虚拟DOM并解析为真实DOM  
- 插入到指定的页面元素内部    


## 组件实例三大属性   

### state

>通过更新组件的state来更新对应的页面显示  

```js
class Like extends React.Component {
   constructor (props) {
      super(props)
      // 初始化状态
      this.state = {
        isLikeMe: true
      }
      // 绑定this为组件对象,也可以不写这个，直接将change改为箭头函数
      this.change = this.change.bind(this)
    }

     change() {
      // 更新状态: this.setState()
      // this.state.isLikeMe = !this.state.isLikeMe // 不能更新更新某个状态
      console.log('change',this);
      this.setState({
        isLikeMe: !this.state.isLikeMe
      })
    }
    render () {
      console.log('render()',this)
      const text = this.state.isLikeMe ? '你爱我' : '我爱你'
      return <h2 onClick={this.change}>{text}</h2>
    }
  }
  ReactDOM.render(<Like />, document.getElementById('example'))
```

### props  

>每个组件对象都会有 props(properties 的简写)属性,组件标签的所有属性都保存在 props 中