import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/home",
  {
    text: "前端学习",
    prefix: '/notes/',
    children: [
      {
        text: "基础",
        children: [
          { text: 'HTML&CSS', link: 'h5c3/CSS/css', },
          { text: 'JavaScript', link: 'JavaScript/JS/js_basis' },
        ]
      },
      {
        text: '框架',
        children: [
          { text: 'Vue', link: 'vue/vue2/vue_basis' },
          { text: 'React', link: 'React/react_basis' },
        ]
      },
      {
        text: '其他',
        children: [
          { text: 'Node.js', link: 'nodejs/node_basic' },
          // { text: 'TypeScript', link: 'typeScript/ts' },
          { text: 'webpack', link: 'webpack/basic/config' },
          { text:'Git', link: 'Git/git'},
          { text:'axios',link:'axios/axios'}
        ]
      }
    ]
  },

  {
    text: '计算机基础',
    children: [
      { text: '计算机网络', link: '/fundation/network/basic/OSI' },
      // { text: '操作系统', link: '/fundation/opreting-system/进程管理/基础知识' }
    ]
  },

  {
    text: "算法",
    prefix: "/algorithm/",
    children: [
      // {
      //   text: "leetCode",
      //   link: 'leetCode/array/twoSum'
      // },
      {
        text: "数据结构",
        link: 'dataStructure/array'
      },
    ],
  },

  {
    text: '项目',
    children: [
      { text: 'Vue2.5开发去哪网', link: '/projects/qunawang/problem' },
      { text:'电子书后台管理系统', link:'/projects/reading/gist'}
    ]
  },

  {
    text: 'Other',
    children: [
      // { text: 'Python', link: '/other/python/快速入门' },
      { text: '部署', link:'/other/problem/部署'},
      // { text:'Javaweb',link:'/other/Javaweb/maven'}
    ]
  },
  {
    text: '学习资源',
    icon: 'link',
    link: '/resources/website/websites_recom'
  }
]);
