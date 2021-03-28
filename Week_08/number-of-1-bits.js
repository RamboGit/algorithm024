/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 191. 位1的个数
*/

// x = x & (x - 1) 清零最低位的1
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1);
    }
    return count;
}
