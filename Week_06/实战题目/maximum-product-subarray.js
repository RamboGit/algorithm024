/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 152. 乘积最大子数组
 */
var maxProduct = function (nums) {

    let max = Number.MIN_SAFE_INTEGER, imax = 1, imin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            let tmp = imax;
            imax = imin;
            imin = tmp;
        }
        imin = Math.min(imin * nums[i], nums[i])
        imax = Math.max(imax * nums[i], nums[i]);
        max = Math.max(imax, max);
    }
    return max;

};