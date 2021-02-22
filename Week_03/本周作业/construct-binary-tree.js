(function () {
    var buildTree = function (preorder, inorder) {
        let n = preorder.length;
        let map = new Map(); //用于快速定位根节点
        for (let i = 0; i < n; i++) {
            map.set(preorder[i], i);
        }

        // function createNode(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
        //     if (preorder_left > preorder_right)
        //         return
        // }
    }
});