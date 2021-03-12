/**
 * https://leetcode-cn.com/problems/triangle/
 * 120. 三角形最小路径和
 */

//解法一（时间复杂度O(n*m) 空间复杂度 O(1)）：DP求解
/**  DP推导可以自底向上 或者自上而下推导，根据题解可进行自底向上推导
 * 1. 寻找重复性  本层最小路径和 = Min(下层节点 i, 下层节点 i+1) + 本层i值
 * 2. 定义状态数组  dp = [][]; (本地可直接引用 triangle不用重新申请新的空间)
 * 3. 推导 DP 方程  dp[i][j] = Min(dp[i + 1][j + 1], dp[i][j + 1]) + dp[i][j]
*/
(function () {
    var minimumTotal = function (triangle) {
        const dp = triangle;
        const m = dp.length - 1;
        for (let i = m - 1; i >= 0; i--) {
            for (let j = 0; j < dp[i].length; j++) {
                dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
            }
        }
        return dp[0][0];
    }
})();