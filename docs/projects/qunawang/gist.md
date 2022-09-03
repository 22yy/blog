#

## 图标区域轮播效果

利用swiper组件，将icon放进swiper-slide中   
icon用v-for循环后会看不到第九个图标（被隐藏掉了），没法实现两页展示的效果   
借助computed属性计算生成第一页第二页需要展示的图标

```js
computed:{
  pages(){
  const pages=[];
  this.iconsList.forEach((item,index)=>{
    // 计算每个图标应该在哪一页,比如第二个图标，index=1，Math.floor(1/8)=0
     const page=Math.floor(index/8)
     if(!pages[page]){
      pages[page]=[]
     }
     pages[page].push(item)
  })
  return pages
  }
}
```

## 使用better-scroll插件实现城市列表滚动效果

GitHub连接 <https://github.com/ustbhuangyi/better-scroll>  


## 城市列表点击，滑动切换  

点击切换   

1. 实现兄弟组件的通信，为字母设置监听事件，用$emit事件将点击的字母传给父组件，在由父组件(City.vue)传给子组件（List.vue)（兄弟组件）   

2. 用$refs拿到相应dom元素  this.$refs[this.letter][0]

3. 监听letter改变，用this.scroll.scrollToElement(dom元素)跳转到相应城市模块   

滑动切换    

1. 用computed计算出letters数组

2. 计算A字母离List组件顶部的距离 this.$refs['A'][0].offfsetTop  
   
3. 计算touchmove离List顶部的距离 e.touches[0].clientY-79，79是header组件的高度

4. 两者相减再除以每个字母的高度可以得到移动到第几个字母，在用this.$emit('change',this.letters[index])

```js
computed:{
  letters () {
     let letters=[]
     for(let i in this.cities){
      letters.push(i)
     }
    //  console.log(letters);
     return letters
  }
},


handleTouchMove(e){
    const startY=this.$refs['A'][0].offsetTop
    // console.log(startY);
    if(this.touchStatus){
      // console.log(e.touches);
      const touchY=e.touches[0].clientY-79
      const index=Math.floor((touchY-startY)/20)//20是每个字母的高度
      // console.log(index);
      if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
    }
  },
```

## 列表点击优化

1. startY是一个固定值，不用每次调用touchmove都计算一次，将其放入updated里

2. touchmove函数节流，减少其调用次数

```js
 if (this.timer) {
     clearTimeout(this.timer)
      }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
```

## 搜索功能实现 

input框双向绑定keyword，用watch监听keyword的变化，遍历cities的每个value值，用indexOf判断keyword是否在value中，最后赋值给list，展示list。

同样会遇到list无法滚动的问题，用watch监听list执行this.$nextTick回调更新即可    


## 使用Vuex实现首页和列表页的通信

为城市设置click事件   

注意vuex的版本

vue默认vue3版本，vuex默认vuex4版本，vuex4只能在vue3中使用，在vue2中能使用vuex3,那么不能默认下载最新的版本   

```bash
npm install vuex@3 --save
```  

## 详情页头部渐隐渐现实现

为头部动态绑定样式,监听滚动事件

```js
handleScroll(){
      const top=document.documentElement.scrollTop
      if(top>60){
        let opacity=top / 140
        opacity=opacity>1 ? 1 :opacity
        this.opacityStyle={
          opacity
        }
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
```

## 使用递归组件  

在List组件中使用递归组件
```js
<div class="list">
     <div class="item"  v-for='(item,index) in categoryList' :key="index">
        <div class="item-title">
         <span class="item-title-icon"></span>
          {{item.title}}
        </div>
      <div class="item-children" v-if='item.children'>
           <List :categoryList='item.children'></List>
      </div>
     </div>
  </div>
```

## dev-server能通过ip地址访问

在packge.json>script>dev中加入  

```js
-- host 0.0.0.0
```  

## 兼容性问题

手机浏览器不支持promise  展示白屏
  - 安装babel-polyfill包 npm i babel-polyfill --save
  - main.js中引入  


## 简单打包上线  

1. npm run build 生成dist目录
2. 把dist目录放到后端项目的根目录中
3. 