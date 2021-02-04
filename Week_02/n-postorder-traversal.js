/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 590. N叉树的后序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 */
//递归法
(function () {
    var postorder = function (root) {
        let res = [];
        function postorderTraversal(node) {
            if (node === null) return;
            for (let child of node.children) {
                postorderTraversal(child);
            }
            res.push(node.val);
        }
        postorderTraversal(root);
        return res;
    };
})();
//迭代法
(function () {
    var postorder = function (root) {
        let res = [];
        (function preTraversal(node) {
            if (node === null) return;
            res.push(node.val);
            if (node.children.length > 0) {
                for (let child of node.children) {
                    preTraversal(child);
                }
            }
        })(root);
        return res;
    };
})();