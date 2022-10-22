# 1.两个数组的交集

## 349. 两个数组的交集
[题目链接](https://leetcode.cn/problems/intersection-of-two-arrays/)  

给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。


### 暴力解法

用两个循环遍历数组,遇到相同的则加入哈希表中

```js
var intersection = function(nums1, nums2) {
  let res=new Set();
  for(let i=0;i<nums1.length;i++){
      for(let j=0;j<nums2.length;j++){
          if(nums1[i]===nums2[j]){
              res.add(nums1[i])
          }
      }
  }
  return [...res];
};
```  

### 哈希表  

1. 找出长度长的数组，放入哈希表中，同时创建一个存放结果的哈希表  

2. 遍历长度短的数组，如果哈希表中存在，则加入结果中。

3. 将结果转换为数组返回  

```js
var intersection = function(nums1, nums2) {
   if(nums1.length<nums2.length){
       const temp=nums1;
       nums1=nums2;
       nums2=temp;
   }
   let set=new Set(nums1);
   let res=new Set();
   for(let i=0;i<nums2.length;i++){
       set.has(nums2[i])&&res.add(nums2[i])
   }
   return Array.from(res);
};
```  

还可通过filter  

```js
var intersection = function(nums1, nums2) {
  let set1=new Set(nums1);
  let set2=new Set(nums2);
  let res=[...set1].filter(item=>set2.has(item))
  return res;
};
```

### 双指针  

1. 用sort((a,b)=>a-b)排为升序
2. 利用双指针,向后遍历，找到相等的数值保存到集合res中。并继续往后移直至结束
3. 时间复杂度为O（nlogn） 空间复杂度为O(n)  

```js
var intersection = function(nums1, nums2) {
  nums1=nums1.sort((a,b)=>a-b);
  nums2=nums2.sort((a,b)=>a-b);
  let res=new Set();
  let i=0;
  let j=0;
  while(i<nums1.length&&j<nums2.length){
     if(nums1[i]<nums2[j]){
         i++;
     }else if(nums1[i]>nums2[j]){
         j++;
     }else{
         res.add(nums1[i]);
         i++;
         j++;
     }
  }
  return [...res];
};
```


