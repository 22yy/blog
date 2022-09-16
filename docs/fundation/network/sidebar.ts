module.exports = [{
  text: '基础知识',
  collapsable: true,
  children: require('./basic/sidebar')
},
{
  text: 'HTTP',
  collapsable: true,
  children:require('./HTTP/sidebar')
},
{
  text:"TCP",
  collapsable: true,
  children:require('./TCP/sidebar')
},
{
   text:'IP',
   collapsable: true,
   children:require('./IP/sidebar')
},
{
  text:'other',
  collapsable: true,
  children:require('./other/sidebar')
}
]