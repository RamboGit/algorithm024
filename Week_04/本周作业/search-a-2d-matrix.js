/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 74. 搜索二维矩阵
*/

/**
 * 解法一：遍历+二分查找
 * 1. 遍历所在行 时间复杂度 O(n)
 * 2. 二分查找所在行中是否有匹配值
 */
(function () {
    var searchMatrix = function (matrix, target) {
        if (matrix.length === 0) return false;
        let m = matrix.length;
        let line = 0;
        for (line = 0; line < m; ++line) {
            if (matrix[line][0] > target) break;
        }
        if (line > 0) line--;
        let left = 0, array = matrix[line], right = array.length - 1;
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (array[mid] === target) {
                return true;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    };
})();

/**
 * 解法二：一遍二分查找 - 二维矩阵转化成一维进行遍历
*/
(function () {
    var searchMatrix = function (matrix, target) {
        if (!matrix || matrix.length === 0) return false;

        const m = matrix.length, n = matrix[0].length;

        let left = 0, right = m * n - 1;

        while (left <= right) {
            let mid = (left + right) >> 1;
            const [x, y] = getCoordinates(mid);
            if (matrix[x][y] === target) {
                return true;
            } else if (matrix[x][y] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;

        function getCoordinates(pos) {
            const x = (pos / n) << 0;
            const y = pos % n;
            return [x, y];
        }
    };
})();