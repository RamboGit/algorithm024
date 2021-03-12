/**
 * 509. 斐波那契数
 * https://leetcode-cn.com/problems/fibonacci-number/
*/

//解法一: 傻递归不缓存任何条件 时间复杂度O(2^n)
(function () {
    var fib = function (N) {
        if (N < 2) return N;
        return fib(N - 1) + fib(N - 2);
    }
})();

//解法二: 缓存递归过程中的重复值，用数组缓存 时间复杂度 O(n) 空间复杂度 O(n)
(function () {
    var fib = function (N) {
        function F(N, nums) {
            if (N < 2) return N;
            if (!nums[N]) {
                nums[N] = F(N - 1, nums) + F(N - 2, nums);
            }
            return nums[N];
        }
        return F(N, []);
    }
})();

//解法三： 动态规划只缓存结果的前两个值即可， 时间复杂度 O(n) 空间复杂O(1)
(function () {
    var fib = function (N) {
        let a = [];
        a[0] = 0, a[1] = 1;
        for (let i = 2; i <= N; i++) {
            a[i] = a[i - 1] + a[i - 2];
        }
        return a[N];
    }
})();