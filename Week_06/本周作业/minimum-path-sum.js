/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 64. 最小路径和
 * */

var minPathSum = function (grid) {
    const dp = grid;
    const m = grid.length;
    const n = grid[0].length;
    if (m === 0 || n === 0) return 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue;
            } else if (i === 0) {  //遇到行和列的边则加上前一个或上面那个元素的值
                dp[i][j] += dp[i][j - 1];
            } else if (j === 0) {
                dp[i][j] += dp[i - 1][j];
            } else { //正常情况下的 DP方程
                dp[i][j] += Math.min(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return dp[m - 1][n - 1];
}