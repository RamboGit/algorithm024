/**
 * @param {number[]} nums
 * @return {number}
 * 26. 删除排序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let pre = 0, cur = 1;
    while (cur < nums.length) {
        if (nums[pre] !== nums[cur]) {
            let tmp = nums[cur];
            nums[cur] = nums[++pre];
            nums[pre] = tmp;
        }
        cur++;
    }
    return pre + 1;
};