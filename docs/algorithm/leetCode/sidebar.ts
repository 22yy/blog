module.exports = [{
  text: '数组',
  // sidebarDepth: 2,
  collapsable: true,
  children: require('./array/sidebar')
},
{
  text: '链表',
  collapsable: true,
  children: require('./linkList/sidebar')
},
{
  text: '哈希表',
  collapsable: true,
  children: require('./hashTable/sidebar')
},
{
  text:'字符串',
  collapsable: true,
  children:require('./string/siderbar')
}
]