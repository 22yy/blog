import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  "/home",
  {
    text: "前端学习",
    prefix: '/notes/',
    icon: 'edit',
    children: [
      {
        text: "基础",
        children: [
          { text: 'HTML&CSS', link: 'h5c3/CSS/css', },
          { text: 'JavaScript', link: 'JavaScript/JS/js' },
        ]
      },
      {
        text: '框架',
        children: [
          { text: 'Vue', link: 'vue/vueNote/vuex' },
          { text: 'React', link: 'react/React' },
        ]
      },
      {
        text: '其他',
        children: [
          { text: 'Node.js', link: 'nodejs/node基础' },
          { text: 'TypeScript', link: 'typeScript/ts' },
          { text: 'webpack', link: 'webpack/webpack' },
          { text:'Git', link: 'Git/git'},
          { text:'axios',link:'axios/axios'}
        ]
      }
    ]
  },

  {
    text: "算法",
    icon: "script",
    prefix: "/algorithm/",
    children: [
      {
        text: "leetCode",
        icon: "edit",
        link: 'leetCode/array/twoSum'
      },
      {
        text: "数据结构",
        icon: "edit",
        link: 'dataStructure/array'
      },
    ],
  },


  {
    text: '计算机基础',
    icon: 'strong',
    children: [
      { text: '计算机网络', link: '/fundation/network/basic/OSI' },
      { text: '操作系统', link: '/fundation/opreting-system/进程管理/基础知识' }
    ]
  },

  {
    text: '项目',
    icon: 'info',
    children: [
      { text: 'Vue2.5开发去哪网', link: '/projects/qunawang/problem' }
    ]
  },

  {
    text: 'Other',
    icon: 'code',
    children: [
      { text: 'Python', link: '/other/python/快速入门' },
      { text: '部署', link:'/other/problem/部署'},
      { text:'Javaweb',link:'/other/Javaweb/maven'}
    ]
  },
  {
    text: '学习资源',
    icon: 'link',
    link: '/resources/website/websites_recom'
  }
]);
