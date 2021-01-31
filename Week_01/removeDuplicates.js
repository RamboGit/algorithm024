/**
 * 26. 删除排序数组中的重复项
 * 解法：快慢指针
 * 复杂度分析：空间复杂度 O(1)  时间复杂度O(n)
 * */
var removeDuplicates = function (nums) {
    let p = 0, q = 1;
    while (q < nums.length) {
        if (nums[p] !== nums[q]) {
            nums[++p] = nums[q];
        }
        q++;
    }
    return ++p;
};