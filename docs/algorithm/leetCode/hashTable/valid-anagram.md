# 3.有效的字母异位词  

## 242.有效的字母异位词

[题目链接](https://leetcode.cn/problems/valid-anagram/)

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

### 排序再比较

依题意，有效的字母异位词即两个字符串排好序后相等，可先转化为数组，排序后进行比较，注意比较时应再次转化为字符串  

```js
var isAnagram = function(s, t) {
  s=[...s].sort();
  t=[...t].sort();
  return s.toString()==t.toString();
};
```

### 哈希

1. 用map记录字符串中每个字符出现了几次
2. 比较两个map是否相等

```js
function getMap(string){
     let map=new Map();
  for(let i of string){
      if(map.has(i)){
          map.set(i,map.get(i)+1);
      }else{
          map.set(i,1)
      }
  }
  return map;
 }

function matchMap(map1,map2){
  if(map1.size!==map2.size) return false;
  for(let i of map1.keys()){
      if(!map2.has(i)) return false;
      if(map1.get(i)!==map2.get(i)) return false
  }
  return true;
 }
var isAnagram = function(s, t) {
  return matchMap(getMap(s),getMap(t));  
};
```