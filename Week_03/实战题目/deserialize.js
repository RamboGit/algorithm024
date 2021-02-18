/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 297. 二叉树的序列化与反序列化
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 前序遍历组合结果
 */
var serialize = function (root) {
    if (root === null) return "None";
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + "," + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let list = data.split(",");
    function build(list) {
        let rootval = list.shift();
        if (rootval === 'None') {
            return null;
        }
        //构建当前树
        let root = new TreeNode(rootval);
        //递归构建左右子树
        root.left = build(list);
        root.right = build(list);
        //返回构建好的当前树
        return root;
    }
    return build(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */