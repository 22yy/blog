# 和为s的连续正数序列

[链接](https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/description/)   

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。   

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。    

- 初始化窗口边界，left = 1;right = 2；窗口和 = 3   

- 窗口和小于target时，right不断向右移动增大窗口，窗口值sum+=right ;先增大right，再改变sum

- 窗口和大于target时，left向左缩小窗口，sum-=left; 先改变sum，再增大left  

```js  
var findContinuousSequence = function(target) {
    let result = [];
    if (target <= 2) return result;
    let l = 1;
    let r = 2;
    let sum = 3;
    while (l < r) {
       if (sum === target) {
         let temp = [];
         for (let k = l; k <= r; k++) {
            temp.push(k);
         }
         result.push(temp);
       }
    //    窗口和小于target时，窗口向右扩大
       if (sum < target) {
           r++;
           sum+=r;
       } else {
        //   窗口向左缩小  
           sum-=l;
           l++;
       }
    }
    return result;
   
    
};
```