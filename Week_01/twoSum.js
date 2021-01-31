/**
 * https://leetcode-cn.com/problems/two-sum/submissions/
 * 1.两数之和
 * */

//解法一：暴力解法 空间复杂度 O(1) 时间复杂度O(n^2)
(function () {
    var twoSum = function (nums, target) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === target - nums[j]) {
                    return [i, j];
                }
            }
        }
    }
});

//哈希解法 空间复杂度 O(n) 时间复杂度 O(1)
(function () {
    var twoSum = function (nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const x = target - nums[i];
            if (map.has(x))
                return [map.get(x), i];
            map.set(nums[i], i);
        }
    }
})