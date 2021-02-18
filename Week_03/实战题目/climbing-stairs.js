/**
 * @param {number} n
 * @return {number}
 * 70. 爬楼梯
 *  https://leetcode-cn.com/problems/climbing-stairs/
 */

/**
 * 题解 - 找重复子问题
 * 1. 1 种
 * 2. 2 种
 * 3. 分两种情况
    - 3.1 从第一个台阶爬2个台阶
    - 3.2 从第2个台阶爬1个台阶
 * 结论： f(n) = f(n - 1) + f(n - 2)  --> (重复子问题)
 * */

//第一种解法-傻递归 ：时间复杂度 O(2^n) 会超时
(function () {
    var climbStairs = function (n) {

        function getClimbStairs(n) {
            if (n <= 2) return n;
            return climbStairs(n - 1) + climbStairs(n - 2);
        }
        return getClimbStairs(n);  //没有缓存中间问题
    };
});

//第二种解法：递归缓存中间结果 时间复杂度 O(n) 空间复杂度 O(n)
(function () {
    var climbStairs = function (n) {
        var res = [0, 1, 2];
        function getStairs(n) {
            if (n < 2) return res[n];
            if (!res[n]) {
                res[n] = getStairs(n - 1) + getStairs(n - 2);
            }
            return res[n];
        }
        getStairs(n);
        return res[n];
    }
});

//第三种解法： 只记录上一个台阶 和 上上一个台阶的结果即可 时间复杂度 O(n) 空间复杂度 O(1)
(function () {
    var climbStairs = function (n) {
        if (n <= 2) return n;
        let f1 = 1, f2 = 2, f3 = 3;
        for (let i = 3; i <= n; i++) {
            f3 = f2 + f1;
            f1 = f2;
            f2 = f3;
        }
        return f3;
    }
});