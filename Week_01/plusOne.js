/**
 * @param {number[]} digits
 * @return {number[]}
 * 66. 加一
 * 解法：判断比较位是否大于9
 * 时间复杂度 O(n)
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) { //判断比较位是否小于9
            digits[i]++; //加一返回数组
            return digits;
        }
        digits[i] = 0;  //进位
    }
    //走到此，则说明每项都进位了则数组添加一位
    digits.unshift(1);
    return digits;
};