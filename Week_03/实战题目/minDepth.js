
/**
 * @param {TreeNode} root
 * @return {number}
 * 111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */
(function () {
    var minDepth = function (root) {

        function depth(root) {
            if (root === null) return 0;
            //判断叶子节点
            if (root.left === null && root.right === null) return 1;
            //判断左右子树的深度
            let min = Number.MAX_SAFE_INTEGER;
            if (root.left) min = Math.min(depth(root.left), min);
            if (root.right) min = Math.min(depth(root.right), min);
            return min + 1;
        }
        return depth(root);
    };
});