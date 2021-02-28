/**
 * https://leetcode-cn.com/problems/lemonade-change/description/
 * 860. 柠檬水找零
 */

//解法一：贪心算法
(function () {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    var lemonadeChange = function (bills) {
        /**
             * 遇到5 则 five++
             * 遇到10 则 five-- ten++
             * 遇到20 则
             *  1. ten > 0 则 ten-- five--
             *  2.  否则 five 减三个
             * 这次找零后判断ten 或 five 是不是找超了，超了则返回 false,否则继续知道全部都能正确找零
            */
        let five = 0, ten = 0;
        for (const bill of bills) {
            switch (bill) {
                case 5:
                    five++;
                    break;
                case 10:
                    five--;
                    ten++;
                    break;
                case 20:
                    if (ten > 0) {  //贪心每次比较是否有最大满足数
                        ten--;
                        five--;
                    } else {
                        five -= 3;
                    }
                    break;
            }
            if (ten < 0 || five < 0) return false;
        }
        return true;
    };
})();


//解法二：贪心算法简化版
(function () {
    var lemonadeChange = function (bills) {
        let five = 0, ten = 0;
        for (let bill of bills) {
            if (bill === 5)
                five++;
            else if (bill === 10) {
                five--; ten++;
            }
            else if (ten > 0) {
                ten--; five--;
            }
            else {
                five -= 3;
            }
            if (five < 0) return false;
        }
        return true;
    }
})();