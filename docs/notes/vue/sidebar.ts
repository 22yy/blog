module.exports = [
{
  text: 'vuex',
  collapsable: true,
  children: [{
      text: 'vuex基础',
      link: '/notes/vue/vueNote/vuex',
  }]

}, 
{
  text: 'vue-router',
  collapsable: true,
  children: [{
      text: 'vue-router基础知识',
      link: '/notes/vue/vueNote/vue-router'
  }]

},
{
  text: 'vue3',
  collapsable: true,
  children: require('./vue3/sidebar')

},
{
  text:'vue2',
  collapsable: true,
  children:require('./vue2/sidebar')
},
{
  text: 'vnode',
  collapsable: true,
  children: [{
      text: '虚拟DOM',
      link: '/notes/vue/vueNote/vnode',
  }]

},
]