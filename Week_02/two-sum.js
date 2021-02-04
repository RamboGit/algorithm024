/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * 解法一：哈希 时间 O(n)  空间 O(n)  空间换时间
 * 解法二: 暴力解法 时间复杂度O(N^2)
 * 22:06 - 22:11
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];
        if (map.has(val)) {
            return [map.get(val), i];
        } else {
            map.set(nums[i], i);
        }
    }
}; 