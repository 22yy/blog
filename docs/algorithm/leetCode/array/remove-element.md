# 4.移除元素

## 27.移除元素
[题目链接](https://leetcode.cn/problems/remove-element/)

题目描述：

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。

示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

你不需要考虑数组中超出新长度后面的元素。
### 思路
 数组的元素在内存地址中是**连续**的，不能单独删除数组中的某个元素，只能**覆盖**。
### 暴力解法
 两层for循环，一层遍历数组，一层更新数组
```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) { 
    let size=nums.length;
    for(let i=0;i<size;i++){
        if(nums[i]===val){// 发现需要移除的元素，就将数组集体向前移动一位
            for(let j=i+1;j<size;j++){
                nums[j-1]=nums[j];
            }
            i--;//i后面的元素都前移了一位，i也向前移动一位
            size--;
        }
    }
    return size;
 }
 
```
###  双指针法
双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

定义快慢指针

- 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
- 慢指针：指向更新 新数组下标的位置

```js
var removeElement = function(nums, val) { 
    let slow=0;
    for(let fast=0;fast<nums.length;fast++){
        if(nums[fast]!==val){
           nums[slow++]=nums[fast];
        }
    }
    return slow
 }
 
```
### js解法
 用splice删除相同的元素

```js
var removeElement = function(nums, val) { 
 let index=0;
 let len=nums.length;//后面nums.length会变，要保存初始num.length
 for(let i=0;i<len;i++){
     index=nums.indexOf(val);
     if(index<=-1) {
        break;
     }else{
     nums.splice(index,1);
     }
 }
 return nums.length;
 }

```