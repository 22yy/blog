# 3.有效的括号

## 20 有效的括号
[题目链接](https://leetcode.cn/problems/valid-parentheses/)

题目描述：

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 
 有效字符串需满足：
 
 
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 
 
 注意空字符串可被认为是有效字符串。
 
 示例 1:
 
 输入: "()"
 输出: true
 
 
 示例 2:
 
 输入: "()[]{}"
 输出: true
 
 
 示例 3:
 
 输入: "(]"
 输出: false
 
 
 示例 4:
 
 输入: "([)]"
 输出: false
 
 
 示例 5:
 
 输入: "{[]}"
 输出: true
 
### 用栈和map
s长度为奇数时，可直接排除

遍历字符串s,遇到左括号时，会期望在后序遍历中有一个相同类型的
右括号将其闭合，将相应的右括号push进stack

遇到右括号时，取出栈顶的右括号判断是否相等
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 const map=new Map();
 if(s.length%2!==0){
     return false;
 }
 map.set('(',')');
 map.set('[',']');
 map.set('{','}');
 let stack=[];
 for(let i=0;i<s.length;i++){
     if(map.has(s[i])){
         stack.push(map.get(s[i]));
     }else{
         if(stack.pop()!==s[i])
         return false;
     }
 }
return stack.length===0;

};
```

```js
2.大佬的思路
var isValid = function(s) {
    while(true){
       let l=s.length;
       s=s.replace("()","");
       s=s.replace("{}","");
       s=s.replace("[]","");
       if(s.length===l){return l===0;}
    }
 
};
```