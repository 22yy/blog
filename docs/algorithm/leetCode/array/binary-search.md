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


## 588.山脉数组的峰顶索引  

[题目链接](https://leetcode.cn/problems/peak-index-in-a-mountain-array/)   

### 枚举   

遍历的过程中，我们最先遍历到的满足arri > arri+1 的下标 i一定也满足 arri-1 < arri    

```js
var peakIndexInMountainArray = function(arr) {
  const n=arr.length;
  let ans=-1;
  for(let i=0;i<n-1;i++){
      if(arr[i]>arr[i+1]){
          ans=i;
          break;
      }
  }
  return ans;
};
```

### 二分查找  

遍历与上面一致   

```js
var peakIndexInMountainArray = function(arr) {
 const n=arr.length;
 let left=1;//不会是0
 let right=n-2;
 let ans=0;
 while(left<=right){
    let mid=Math.floor((right+left)/2);
    if(arr[mid]>arr[mid+1]){
        ans=mid;
        right=mid-1;
    }else{
       left=mid+1;
    }
 }
 return ans;
};
```   


### 367.有效的完全平方数  

[题目链接](https://leetcode.cn/problems/valid-perfect-square/)   

```js
 let left=0;
   let right=num;
   while(left<=right){
       const mid=left+Math.floor((right-left)/2);
       const square=mid*mid;
       if(square<num){
           left=mid+1;
       }else if(square>num){
           right=mid-1;
       }else{
           return true;
       }
   }
   return false;
```

### 69.x的平方根

[题目链接](https://leetcode.cn/problems/sqrtx/)

```js
var mySqrt = function(x) {
   if (x == 0 || x == 1) {
        return x;
    }
 let l=0;
 let r=x;
 let cur=0;
 while(l<=r){
     let mid=l+Math.floor((r-l)/2);
     if(mid*mid>x){
         r=mid-1;
     }else{
         cur=mid;
         l=mid+1;
     }
 }
 return cur;
};
```

### 744.寻找比目标字母大的最小字母

[题目链接](https://leetcode.cn/problems/find-smallest-letter-greater-than-target/)  

注意判断条件，target比letters最后一个字母大时，返回第一个字母

```js
var nextGreatestLetter = function(letters, target) {
  if (target >= letters[letters.length- 1]) {
        return letters[0];
    }
 let left=0;
 let right=letters.length-1;
 while(left<=right) {
   let mid=left+Math.floor((right-left)/2);
   if(letters[mid]>target){
      right=mid-1;
   }else{
      left=mid+1;
   }
 }
   return letters[left];
};
```  

### 34. 在排序数组中查找元素的第一个和最后一个位置  

[链接](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)   

```js
var searchRange = function(nums, target) {
   let low = leftRange(nums, target);
   let high = rightRange(nums, target);
   return [low, high]
};
// 寻找左边界
const leftRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
       let mid = Math.floor((right + left) /2);
       if(nums[mid] >= target) {
           right = mid - 1;
       } else {
           left = mid + 1;
       }
    }
    // target大于数组最大值，left一直向右，下标越界
    if(left === nums.length) return -1;
    // 判断一下nums[left]是不是target
    // target可能位于中间，不在数组中
    return nums[left] === target ? left : -1;
}
const rightRange = function(nums, target) {
   let left = 0;
   let right = nums.length - 1;
    while(left <= right) {
       let mid = Math.floor((right + left) /2);
       if(nums[mid] <= target) {
           left = mid + 1;
       } else {
           right = mid - 1;
       }
   }
//    target不在数组里,left指针越界
   if(left - 1 < 0) return -1;
//    因为在nums[mid] === target时left加了一
   return nums[left - 1] === target ? left - 1 : - 1;
}
```