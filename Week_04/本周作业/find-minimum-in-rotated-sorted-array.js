/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 153. 寻找旋转排序数组中的最小值
*/
/**
 * @param {number[]} nums
 * @return {number}
 *  解法：二分查找，需要始终将目标值套住，并不断收缩左边界或右边界
 */
(function () {
    var findMin = function (nums) {
        if (nums.length === 0) return 0;
        let left = 0, right = nums.length - 1;
        while (left < right) {
            const mid = (left + right) >> 1;
            //中间值和最右侧值比较
            //1. 中 < 右 则最小值在左区间，收缩右，中间值可能也是最小值则让（right = mid）
            //2. 中 > 右 则最小值在右区间，收缩左边，中间值肯定不是最小值则 left = mid + 1；
            //2. 中 = 右 无此情况
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        //left=right 则为最小值
        return nums[left];
    };
});