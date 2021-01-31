/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 88. 合并两个有序数组
 *
 * */

/**
 *  解法一：运用原生函数解
 * 复杂度分析：空间复杂度 O（nlogn）时间复杂度 O(logn)
*/
(function () {
    var merge = function (nums1, m, nums2, n) {
        nums1.splice(m, n, ...nums2);
        return nums1.sort((a, b) => { return a - b; })
    }
})


    /**
     * 解法二：从后面往前比较 n 插入完则结束
        11:20 - 11: 45
        复杂度分析：空间复杂度O(1) 时间复杂度 O(m + n)
    */
    (function () {
        var merge = function (nums1, m, nums2, n) {
            let i = m + n - 1;
            m-- , n--;
            while (n >= 0) {
                while (m >= 0 && (nums1[m] > nums2[n])) {
                    nums1[i--] = nums1[m];
                    nums1[m] = 0;
                    m--;
                }
                nums1[i--] = nums2[n];
                n--;
            }
            return nums1;
        };
    });
