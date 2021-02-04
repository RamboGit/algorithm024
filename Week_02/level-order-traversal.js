/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 * 429. N 叉树的层序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 递归 时间复杂度 O(n)  空间复杂度 O(n)
 * 22：20 - 22：26
 */
var levelOrder = function (root) {
    let res = [];
    function bfs(node, level) {
        if (!node) return;
        if (level > res.length) {
            res.push([]);
        }
        res[level - 1].push(node.val);
        for (let item of node.children) {
            bfs(item, level + 1);
        }
    }
    bfs(root, 1);
    return res;
};