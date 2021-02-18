/**
 * @param {number} n
 * @return {string[]}
 * 22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 */

/**
 * 第一种解法：
 * 1. 先把所有结果得出然后去掉不合适的组合
 * 时间复杂度O(2^n)指数复杂度  空间复杂度 O(n)
 * */
(function () {
    var generateParenthesis = function (n) {
        let res = [];
        //找重复子问题 2*n 个格子，每个格子有两种放法
        generate(0, 2 * n, "");
        return res;
        function generate(level, max, s) {
            if (level >= max) {
                //建立一个栈,判断是否是有效的组合
                let stack = [];
                for (let char of s) {
                    if (char === "(") {
                        stack.push(char);
                    } else {
                        if (stack.length === 0) return;
                        stack.pop();
                    }
                }
                if (stack.length === 0) res.push(s);
                return;
            }
            generate(level + 1, max, s + "(");
            generate(level + 1, max, s + ")");
        }
    }
});

/**
 * 第二种解法： 括号生成过程种去掉无效组合
 * 时间复杂度 O(2^n) 空间复杂度 O(1)
*/
(function () {
    var generateParenthesis = function (n) {
        let res = [];
        //左右括号出现的次数最多为 n
        //最开始必须出现的是左括号
        //右括号出现的位置条件是left > right
        function generate(left, right, n, s) {
            if (left >= n && right >= n) {
                //输出结果
                res.push(s);
                return;
            }
            //添加左括号的条件
            if (left < n) generate(left + 1, right, n, s + "(");
            if (right < left) generate(left, right + 1, n, s + ")");
        }
        generate(0, 0, n, "");
        return res;
    };
});