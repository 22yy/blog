# 1.两数相加

## 2.两数相加
[题目链接](https://leetcode.cn/problems/add-two-numbers/)
  
题目描述：

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

### 思路
同时遍历两个链表，如果两链表长度不同，短链表会先为空，此时可以用0来代替，需要在while内部判断一下链表是否为空，若是则为0

 用一个变量carry表示溢出的进位，当两个链表都遍历结束，若carry为1，则需要再将进位算进去。

 解法中将carry放在了while循环条件上，当p1=null, p2=null, carry为1时，依然进入循环
```js
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 let dummy=new ListNode(0);
 let p=dummy;
 let p1=l1,p2=l2;
 let carry=0;//暂存进位
 while(p1||p2||carry){
     let p1val=0;
     let p2val=0;
     let cur;//暂存结果
     if(p1){
         p1val=p1.val;
         p1=p1.next
     }
     if(p2){
         p2val=p2.val;
         p2=p2.next;
     }
     cur=p1val+p2val+carry;
     if(cur>=10){
         cur%=10;
         carry=1;
     }
     else{
         carry=0;
     }
     dummy.next=new ListNode(cur);
     dummy=dummy.next;
 }
 return p.next;
};
```