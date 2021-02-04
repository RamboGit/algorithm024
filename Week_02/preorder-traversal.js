/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 144. 二叉树的前序遍历
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 迭代法
 */
(function () {
    var preorderTraversal = function (root) {
        let res = [], stack = [];
        while (stack.length > 0 || root !== null) {
            while (root !== null) {  //添加节点
                res.push(root.val);
                stack.push(root);
                root = root.left;
            }
            let tmp = stack.pop();
            root = tmp.right;
        }
        return res;
    };
})();
//第二种迭代法
(function () {
    var preorderTraversal = function (root) {
        if (root === null) return [];
        let res = [], stack = [root];
        while (stack.length > 0) {
            let node = stack.pop();
            res.push(node.val);
            //根据栈特性：先进后出，则需先把右节点入栈，再把做节点入栈
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        return res;
    }
});


//理解迭代法
(function () {

})