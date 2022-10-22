# 2.移除链表元素

## 203.移除链表元素
[题目链接](https://leetcode.cn/problems/remove-linked-list-elements/)

题目描述：
删除链表中等于给定值 val 的所有节点。

示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]

示例 2：
输入：head = [], val = 1
输出：[]

示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]

### 虚拟头结点
移除头结点和移除其他节点的操作是不一样的，因为链表的其他节点都是通过前一个节点来移除当前节点，而头结点没有前一个节点。

移除头结点要将头结点向后移动一位，再将原头结点从内存中删除。

在单链表中移除头结点 和 移除其他节点的操作方式是不一样，其实在写代码的时候也会发现，
需要单独写一段逻辑来处理移除头结点的情况。
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy=new ListNode(0);
  dummy.next=head;
  let cur=dummy;//记录当前结点的前一个结点
  while(cur.next){
    if(cur.next.val===val){
        cur.next=cur.next.next;
    }else{
        cur=cur.next;
    }
 }
 return dummy.next;
};
```
### 递归
链表的定义具有递归的性质，因此链表题目常可以用递归的方法求解。这道题要求删除链表中所有节点值等于特定值的节点，可以用递归实现。
```js
var removeElements = function(head, val) {
  if(head===null){
      return head;
  }
  head.next=removeElements(head.next,val)
  return head.val===val ? head.next : head;
};
```

## 18.删除链表中的节点

[链接](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/)  

删除链表的节点
1. 头节点,直接返回头结点下一个节点  
2. 非头节点  

用虚拟头结点，不必考虑是不是头结点的问题  
```js
var deleteNode = function(head, val) {
  let dummy=new ListNode(0)
  dummy.next=head;
  let cur=dummy; //不能直接用dummy，要返回dummy.next,dummy不应该变
  while(cur&&cur.next){
     if(cur.next.val===val){
         cur.next=cur.next.next
     }
     cur=cur.next
  }
  return dummy.next
};
```