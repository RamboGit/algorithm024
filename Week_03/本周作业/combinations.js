/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 77. 组合
 * https://leetcode-cn.com/problems/combinations/
 */

(function () {
    var combine = function (n, k) {
        let ans = [];
        function getCombine(n, k, start, list) {
            if (k === 0) {
                ans.push(list);
                return;
            }
            for (let i = start; i < n - k; i++) {
                list.push(i);
                getCombine(n, k - 1, i + 1, list);
                list.pop();
            }
        }
    }
});