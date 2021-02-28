/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description
 * 102. 二叉树的层序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//解法一：递归写法 - 深度优先算法 BFS
(function () {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    var levelOrder = function (root) {

        function DFS(level, node, res) {
            if (node === null) return [];
            if (level >= res.length) res.push([]);;
            res[level].push(node.val);
            DFS(level + 1, node.left, res);
            DFS(level + 1, node.right, res);
            return res;
        }

        return DFS(0, root, []);
    };
})();


//解法二: 广度优先算法-迭代法
(function () {
    var levelOrder = function (root) {
        if (root === null) return [];
        let queue = [root], out = [];
        while (queue.length) {
            let child = [], node = [];
            for (let item of queue) {
                child.push(item.val);
                if (item.left) node.push(item.left);
                if (item.right) node.push(item.right);
            }
            queue = node;
            out.push(child);
        }
        return out;
    };
})();