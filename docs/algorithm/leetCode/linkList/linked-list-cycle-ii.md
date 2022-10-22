# 环形链表 II

## 142.环形链表 II

[题目链接](https://leetcode.cn/problems/linked-list-cycle-ii/)

给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。

- 不允许修改 链表。


### 哈希表  

利用哈希表，遍历链表的节点并记录下来，如果遇到之前遍历过的节点  

可以判定链表中存在环

```js
var detectCycle = function(head) {
  let set=new Set();
  let cur=head;
  while(cur){
      if(set.has(cur)){
          return cur;
      }
      set.add(cur);
      cur=cur.next;
  }
  return null;
};
```

### 标记法  

给遍历过的节点打记号，遍历过程中遇到有记号的节点说明有环

```js
var detectCycle = function(head) {
    let cur=head;
    while(cur){
        if (cur.isVisited) return cur;
        cur.isVisited=true;
        cur=cur.next;
    }
 return null;
};
```

