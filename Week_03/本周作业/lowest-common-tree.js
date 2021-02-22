
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 236. 二叉树的最近公共祖先
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */
(function () {
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return null;
        if (root.val === p.val || root.val === q.val) return root;
        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);
        if (left && right) return root;
        if (left) return left;
        if (right) return right;
    };
});