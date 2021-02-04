/**
 * 解法二：迭代
 * 
 * */
var inorderTraversal = function (root) {
    let res = [];
    let stack = [];
    while (stack.length > 0 || root !== null) {
        //不断往左子树方向走，每走一次就将当前节点保存在栈中
        //stack 用于模拟递归调用
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            //当前节点为空，说明左边走到头了, 从栈中弹出节点并保存
            //然后转向右边节点，继续上面整个过程
            let tmp = stack.pop();
            res.push(tmp.val);
            root = tmp.right;
        }
    }
    return res;
};