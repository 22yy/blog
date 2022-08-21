# 6.长度最小的子数组

## 209.长度最小的子数组
[题目链接](https://leetcode.cn/problems/minimum-size-subarray-sum/)  

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

### 暴力解法
 两个for循环，然后不断的寻找符合条件的子序列

 ```js
 var minSubArrayLen = function(target, nums) {
    let result=Infinity;//初始化为无穷大
    let sum=0;
    let sublength=0;//子序列长度
    for(let i=0;i<nums.length;i++){
        sum=0;//重新循环时要重置sum为0
        for(let j=i;j<nums.length;j++){
           sum+=nums[j];
           if(sum>=target){          
           sublength=j-i+1;//子序列长度
           result=Math.min(result,sublength)
           break;
           }
        }
    }
    return result===Infinity ? 0 : result;
};
 ```

 ### 滑动窗口
 可以理解为双指针的一种  

 窗口的起始位置：如果当前窗口的值大于s了，窗口就要向前移动了  

 窗口的结束位置：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。  

 精髓在于动态调节滑动窗口的起始位置

 ```js
 var minSubArrayLen = function(target, nums) {
   let result=Infinity;
   let slow=0;
   let sum=0;
   let sublength=0;//滑动窗口的长度
  for(let fast=0;fast<nums.length;fast++){
    sum+=nums[fast];
    while(sum>=target){//使用while，每次更新slow，不断进行比较
        sublength=fast-slow+1;
        result=Math.min(result,sublength);
        sum-=nums[slow++];//不断变更起始位置
    }
  }
  return result===Infinity ? 0:result;
};
 ```
