# 6.链表相交

## 02.07链表相交
[题目链接](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/)

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。   

### 双指针
注意，交点不是数值相等，而是指针相等
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA===null||headB===null) return null;
    let curA=headA;
    let curB=headB;
    while(curA!==curB){
       curA=curA===null ? headB:curA.next;
       curB=curB===null ? headA:curB.next; 
    }

    return curA;
};  

时间复杂度：O(m+n)，其中m和n是分别是链表headA和headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。

空间复杂度：O(1)
```

### 哈希表
使用哈希集合存储链表节点  

遍历链表headA,将其每个节点加入哈希表中，然后遍历链表B，判断节点是否在哈希集合中

如果有节点在哈希集合中，则该节点后的节点都在哈希集合中，该节点就是相交的节点
```js
var getIntersectionNode = function(headA, headB) {
    const set=new Set();
    let cur=headA;
    while(cur){
        set.add(cur);
        cur=cur.next;
    }
    cur=headB;
    while(cur){
        if(set.has(cur)){
            return cur;
        }
        cur=cur.next;
    }
    return null;
};

时间复杂度：O(m+n)，其中m和n是分别是链表headA和headB 的长度。需要遍历两个链表各一次。

空间复杂度：O(m)，其中 m是链表headA的长度。需要使用哈希集合存储链表headA中的全部节点。
```