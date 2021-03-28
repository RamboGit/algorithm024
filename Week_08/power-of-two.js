/**
 * https://leetcode-cn.com/problems/power-of-two
 * 231. 2的幂
*/

// 位运算解法
var isPowerOfTwo = function (n) {
    // 2的幂次方满足两个条件
    // 1. n > 0
    // 2. 二进制位中有且只有一个1 其他都为0  (n & (n - 1))  === 0
    return n > 0 && (n & (n - 1)) === 0;
}