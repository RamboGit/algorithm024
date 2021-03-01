/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 153. 寻找旋转排序数组中的最小值
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
(function () {
    var findMin = function (nums) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (nums[mid] < nums[left] && nums[mid] < nums[right] && (left + 1) === mid && (right - 1) === mid) return nums[mid];

        }
    };
});