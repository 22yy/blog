import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/notes/h5c3/": require('../notes/h5c3/sidebar'),

  "/notes/JavaScript/": require('../notes/JavaScript/sidebar'),

  '/notes/nodejs/': require('../notes/nodejs/sidebar'),

  '/notes/vue/': require('../notes/vue/sidebar'),

  '/notes/React/': require('../notes/React/sidebar'),

  '/notes/typeScript/': require('../notes/typeScript/sidebar'),

  '/notes/webpack/': require('../notes/webpack/sidebar'),

  '/notes/Git/':require('../notes/Git/sidebar'),  

  '/notes/axios' :require('../notes/axios/sidebar'),

  '/fundation/network/': require('../fundation/network/sidebar'),

  '/algorithm/leetCode/': require('../algorithm/leetCode/sidebar'),

  '/algorithm/dataStructure/': require('../algorithm/dataStructure/sidebar'),

  '/resources/website/' : require('../resources/website/sidebar'),

  '/projects/qunawang/':require('../projects/qunawang/sidebar')
});
