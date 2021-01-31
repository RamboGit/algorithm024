/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 283. 移动零
 * 解法一：快慢针移动 空间复杂度 O(1) 时间复杂度 O(n)
 */
var moveZeroes = function (nums) {
    let p = 0, q = 0;
    while (q < nums.length) {
        if (nums[q] !== 0) {
            let tmp = nums[p];
            nums[p++] = nums[q];
            nums[q] = tmp;
        }
        q++;
    }
};