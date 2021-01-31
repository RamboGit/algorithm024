//189. 旋转数组

/**
 * 1. 暴力破解 pop 后添加到首位置 复杂度：时间复杂度O(n * k) 空间复杂度O(1)
 * 时间：9:56 - 10:02
 * */
(function () {
    var rotate = function (nums, k) {
        for (let i = 0; i < k; ++i) {
            nums.unshift(nums.pop());
        }
        return nums;
    };
})();

/**
 * 2. splice 方法解 空间复杂度 O(1)  时间复杂度 O(11)
 * 时间：10:07 - 10:42
 * */
(function () {
    //k = n 不动 k < n 移动 k次   k > n 移动 k-n 次
    let length = nums.length;
    k %= length; //取余用于 k 大于 length时，获取实际需要移动的个数
    nums.unshift(...nums.splice(length - k, k));
    return nums;
})();
