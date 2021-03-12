/**
 * 1143. 最长公共子序列
 * https://leetcode-cn.com/problems/longest-common-subsequence/
*/

//动态规划求解
var longestCommonSubsequence = function (text1, text2) {
    //找 dp 公式
    /**
     * 1. text1 和 text2 长度都为0 则最长子序列为0
     * 2. text1 = "任意字符" text2 = "" 则最长子序列为0
     * 3. text1 = "....A"  text2 = "..A" 最后一个字母相等则最长子序列为 dp[i][j] = 1 + dp[i - 1][j - 1]
     * 4. text1 = "....B"  text2 = "..B" 则最长子序列为 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    */
    const m = text1.length;
    const n = text2.length;
    const dp = new Array(m + 1);
    dp[0] = new Array(n + 1).fill(0);
    //为什么从1开始遍历是防止数组越界
    for (let i = 1; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {  //从起始位置比较，减一防止数组越界
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); //取较大者
            }
        }
    }
    return dp[m][n];
}