# N叉树遍历  

## 前序遍历   

[589.N叉树前序遍历](https://leetcode.cn/problems/n-ary-tree-preorder-traversal/)   

### 递归  

和二叉树差不多,只是不只两个孩子节点   

```js
var preorder = function(root) {
    let res=[];
    const dfs=function(root){
        if(!root) return;
        res.push(root.val);
        for(let i of root.children){
            dfs(i);
        }
    }
    dfs(root);
    return res;
};
```  

###  迭代  


## 后序遍历  

[590.N叉树后序遍历](https://leetcode.cn/problems/n-ary-tree-postorder-traversal/)   

```js
var postorder = function(root) {
    let res=[];
    const dfs=function(root){
      if(!root) return;  
      for(let item of root.children){
          dfs(item)
      }
      res.push(root.val);

    }
    dfs(root);
    return res;
};
```