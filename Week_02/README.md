学习笔记
** 1. 二叉树的前序遍历 -迭代法
  -我们先看一下前序遍历。
    - 前序遍历是中左右，每次先处理的是中间节点，那么先将跟节点放入栈中，然后将右孩子加入栈，再加入左孩子
    - 为什么要先加入 右孩子，再加入左孩子呢？ 因为这样出栈的时候才是中左右的顺序。
  注：要访问的元素和要处理的元素顺序是一致的，都是中间节点。
```
var preorderTraversal = function(root) {
    if(root === null) return [];
    let res = [], stack = [root];
    while (stack.length > 0) {
        let tmp = stack.pop();
        res.push(tmp.val);
        //先右后左入栈，
        if (tmp.right) stack.push(tmp.right);
        if (tmp.left) stack.push(tmp.left);
    }
    return res;
};
```
** 2. 二叉树的中序变来 - 迭代法
    - 中序遍历的左中右，先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左边的最底部，在开始处理节点值，这就造成处理顺序和访问顺序是不一样的。
    - 需要借助指针的遍历来帮助访问节点，栈则用来处理节点上的元素
