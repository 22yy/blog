import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search"; 
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "FishBlog",
  description: "前端学习笔记",
  base: "/myblog/",
  theme,
  plugins:[
    searchPlugin
  ]
  
});
