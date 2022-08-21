# 3.反转链表

## 206.反转链表
[题目链接](https://leetcode.cn/problems/reverse-linked-list/)

题意：反转一个单链表。

示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

### 双指针
首先定义一个cur指针，指向头结点，再定义一个pre指针，初始化为null
反转时要把cur->next结点用temp保存一下
因为要改变cur->next指向，将cur->next指向pre，反转第一个结点
继续移动pre和cur指针
最后cur指向null循环结束，pre指向新的头结点
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
 * @return {ListNode}
 */
var reverseList = function(head) {
   let pre=null;
   let cur=head;
   while(cur){
      let temp=cur.next;
      cur.next=pre;
      pre=cur;
      cur=temp;
   }
   return pre;
};
```
### 递归
大佬的解释：
   - 第一轮出栈，head为5，head.next为空，返回5
   - 第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
             把当前节点的子节点的子节点指向当前节点
             此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
             此时链表为1->2->3->4<-5
             返回节点5
   - 第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
             此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
             此时链表为1->2->3<-4<-5
             返回节点5
   - 第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
             此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
             此时链表为1->2<-3<-4<-5
             返回节点5
   - 第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
             此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
             此时链表为1<-2<-3<-4<-5
             返回节点5
   出栈完成，最终头节点5->4->3->2->1

```js
var reverseList = function(head) {
 if(head===null||head.next===null) return head;
//递归传入下一个节点，目的是为了到达最后一个节点
 const newHead=reverseList(head.next);
 head.next.next=head;
 head.next=null;
 return newHead;
};
```

```js
3. 大佬思路
值颠倒
var reverseList = function(head) {
  let cur=null;
  let pre=head;
  while(pre){
      cur=new ListNode(pre.val,cur);
      pre=pre.next;
  }
  return cur
};
```