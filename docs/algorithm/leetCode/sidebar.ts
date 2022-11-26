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
},
{
  text:'二叉树',
  collapsable: true,
  children:require('./binaryTree/sidebar')
},
{
  text:'动态规划',
  collapsable: true,
  children: require('./dynamic/sidebar')
},
{
  text:'其他',
  collapsable: true,
  children:require('./other/sidebar')                                                         
}
]