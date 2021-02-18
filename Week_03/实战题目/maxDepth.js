/**
 * @param {TreeNode} root
 * @return {number}
 * 104. 二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

(function () {
    var maxDepth = function (root) {
        return depth(node, level);
        function depth(node, level) {
            if (node === null) return 0;
            //处理当前层逻辑
            if (node.left === null && node.right === null) return level;
            let left = depth(node.left, level + 1);
            let right = depth(node.right, level + 1);
            return Math.max(left, right);
        }
    }
})