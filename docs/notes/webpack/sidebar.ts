module.exports = [
  {
    text:'基础知识',
    collapsable: true,
    children:require('./basic/sidebar')
  },
  
  {
  text: 'webpack',
  collapsable: true,
  children: [{
    text: 'Webpack相关',
    link: '/notes/webpack/webpack',
  }]

}]