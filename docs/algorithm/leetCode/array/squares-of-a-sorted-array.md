# 5.有序数组的平方

## 977.有序数组的平方
[题目链接](https://leetcode.cn/problems/squares-of-a-sorted-array/)

题目描述：
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]

### 暴力排序
每个数平方后排序
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   for(let i=0;i<nums.length;i++){
       nums[i]=nums[i]*nums[i]
   }
   return nums.sort((a,b)=>a-b);
};
```

### 双指针法
数组有序，负数平方之后可能成为最大数，因为是非递减数组，所以数组

平方的最大值就在数组的两端，不是最左边就是最右边

可以考虑双指针法了，i指向起始位置,j指向终止位置

定义新数组result,和nums数组一样大小，k指向result数组终止位置
```js
var sortedSquares = function(nums) {
 let i=0;
 let j=nums.length-1;
 let k=nums.length-1;
 let result=[];
 while(i<=j){
  if(nums[i]*nums[i]<nums[j]*nums[j]){
     result[k--]=nums[j]*nums[j];
     j--;
 }else{
     result[k--]=nums[i]*nums[i];
     i++;
 }
 }
 return result;
};
```
也可以这样写：
```js
var sortedSquares = function(nums) {
 let i=0;
 let j=nums.length-1;
 let result=[];
 while(i<=j){
  if(-nums[i]<nums[j]){//首尾双指针法进行比较时，不用平方，直接左值取负与右值进行比较也能判断，精简了代码
     result.unshift(nums[j]**2)
     j--;
 }else{
     result.unshift(nums[i]**2)
     i++;
 }
 }
 
 return result;
};
```