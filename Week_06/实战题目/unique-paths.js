/**
 * 62. 不同路径
 * https://leetcode-cn.com/problems/unique-paths/
*/

//解法一：动态规划
/** 时间复杂度 O(m*n) 空间复杂度(m*n)
 * 思路：机器人只能向右或这向下移动一步 从 start 走到 (i,j)的不同路径和
 * 1. 找重复性,由于只能向下和向右 则 递推公式dp[i][j] = dp[i - 1][j]+ dp[i][j - 1];
 * 2. 由于横坐标 i所在行只能向下走所以 d[0][j] = 1 
 * 3. 由于竖坐标 j所在列只能向右移动所以 d[i][0] = 1
 * 4. 
 * */
(function () {
    var uniquePaths = function (m, n) {
        let dp = new Array(m);
        for (let i = 0; i < m; i++) {
            dp[m][0] = new Array(n);
            for (let j = 0; j < n; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = d[i - 1][j] + d[i][j - 1];
                }
            }
        }
        return d[m - 1][n - 1];
    }
})();


//解法二：与解法一思路一样只不过是反向走从 end 走到(i, j)
(function () {
    var uniquePaths = function (m, n) {
        let dp = new Array(m);
        for (let i = m - 1; i >= 0; i--) {
            dp[i] = new Array(n);
            for (let j = n - 1; j >= 0; j--) {
                if (i === m - 1 || j === n - 1) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
                }
            }
        }
        return dp[0][0];
    }
})();

//解法三：动态规划
(function () {
    var uniquePaths = function (m, n) {
        let dp = new Array(n + 1).fill(0);  //记得初始化为0
        dp[1] = 1;
        for (let i = 0; i < m; i++) {
            for (let j = 1; j <= n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        return dp[n];
    }

})();