/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 226. 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 */

/**
 * 第一种解法:
 * 时间复杂度 O(n)
 * 找重复子问题- 每个节点的左右节点都互换位置
*/
(function () {
    var invertTree = function (root) {
        if (root) {
            let tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            invertTree(root.left);
            invertTree(root.right);
        }
        return root;
    };
});