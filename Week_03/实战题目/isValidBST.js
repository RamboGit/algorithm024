/**
 * @param {TreeNode} root
 * @return {boolean}
 * 98. 验证二叉搜索树
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * 解法一：递归过程中判断是否合法
 * 思路：利用二叉搜索树特性，中序遍历为升序，则通过依次比较前一个节点的值是否小于当前节点的值即可
 * 时间复杂度 O(n) 空间复杂度 O(1)
 * */
(function () {
    var isValidBST = function (root) {
        //记录前一个节点
        let pre = null;
        function isValid(node) {
            //终结者
            if (root === null) return true; //空树则是二叉搜索树

            //处理当前层，中序遍历
            let left = isValid(root.left);
            //判断前节点与当前节点的值
            if (pre !== null && pre.val >= root.val) return false;
            //继续更新前一个节点
            pre = root;
            let right = isValid(root.right);

            return left && right;
        }
    }
});


/**
 * 解法二：数组保存值遍历数组是否为升序数组
 * 时间复杂度 O(n) 空间复杂度 O(n)
 */

(function () {
    var isValidBST = function (root) {
        var reslist = [];

        function isValid(res) {
            for (let i = 1; i < res.length; i++) {
                if (res[i - 1] >= res[i]) return false;
            }
            return true;
        }
        //中序遍历二叉搜索树
        (function traversalTree(node) {
            if (node === null) return;
            //处理当前逻辑
            traversalTree(node.left);
            reslist.push(node.val);
            traversalTree(node.right);
        })(root);

        return isValid(reslist);
    }
})