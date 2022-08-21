# 2.二分查找

## 704.二分查找
[题目链接](https://leetcode.cn/problems/binary-search/)  

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4  

示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1


循环不变量规则:  

区间的定义就是不变量。要在二分查找的过程中，保持不变量，就是在while寻找中每一次边界的处理都要坚持根据区间的定义来操作

写二分法，区间的定义一般为两种，左闭右闭即[left, right]，或者左闭右开即[left, right)。  

### 第一种写法
- while (left <= right) 要使用 <= ，因为left == right是有意义的
- if (nums[middle] > target) right 要赋值为 middle - 1，因为当前这个nums[middle]一定不是target，  
那么接下来要查找的左区间结束下标位置就是 middle - 1

```js
var search = function(nums, target) {
   let l=0;
   let r=nums.length-1;//定义target在左闭右闭的区间里，[left, right]
   while(l<=r){// 当left==right，区间[left, right]依然有效，所以用 <=
       mid=l+Math.floor((r-l)/2);
       if(nums[mid]>target){
           r=mid-1;//target 在左区间，所以[left, middle - 1]
       }else if(nums[mid]<target){
           l=mid+1;//target 在右区间，所以[middle + 1, right]
       }else{
          return mid;
       }
   }
   return -1;
};
```

### 第二种写法
- while (left < right)，这里使用 < ,因为left == right在区间[left, right)是没有意义的
- if (nums[middle] > target) right 更新为 middle，因为当前nums[middle]不等于target，去左区间继续寻找，而寻找区间是左闭右开区间，所以right更新为middle，即：下一个查询区间不会去比较nums[middle]

```js
var search = function(nums, target) {
   let l=0;
   let r=nums.length;
   while(l<r){
       mid=l+Math.floor((r-l)/2);
       if(nums[mid]>target){
           r=mid;// target 在左区间，在[left, middle)中 
       }else if(nums[mid]<target){
           l=mid+1;// target 在右区间，在[middle + 1, right)中
       }else{
          return mid;
       }
   }
   return -1;
};
```