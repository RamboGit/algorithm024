/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 */

//1.普通解法 - Math.max 时间复杂度 O(n * klogk)   此方法会超时
(function () {
    var maxSlidingWindow = function (nums, k) {
        let list = nums.slice(0, k);
        let cur = k - 1, res = [];
        while (cur < nums.length) {
            res.push(Math.max(...list));
            list.shift();
            list.push(nums[++cur]);
        }
        return res;
    };
})();

//2.