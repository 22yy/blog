import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search"; 
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Blog",
  description: "学习笔记",
  base: "/",
  theme,
  plugins:[
    searchPlugin
  ]
  
});
