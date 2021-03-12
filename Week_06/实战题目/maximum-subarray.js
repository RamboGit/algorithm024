/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 53. 最大子序和
 */
(function () {
    var maxSubArray = function (nums) {
        let sum = 0;
        let max = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (sum < 0) sum = 0;
            sum += nums[i];
            sum = Math.max(max, nums[i]);
        }
        return max;
    }
})();

/**
 * DP求解
 * 1. 重复性 max_sum(i) = sub_max_sum(i - 1) + n(i)
 * 2. 定义状态数组 dp = []
 * 3. 推导 dp 方程 dp[i] = Math.max(dp[i - 1], 0) + nums[i]
*/
(function () {
    var maxSubArray = function (nums) {
        const dp = nums;
        let max = nums[0];
        for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(d[i - 1], 0) + nums[i];
            max = Math.max(max, dp[i]);
        }
        return max;
    }
})();