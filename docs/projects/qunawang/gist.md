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