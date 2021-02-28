/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 122. 买卖股票的最佳时机 II
*/

/**
 * 解法：贪心算法
 *  今天价格大于后天价格则不买入
 *  否则买入到后天卖出，然后比较后天和大后天价格， 依次比较。。。
 * */
(function () {
    var maxProfit = function (prices) {
        let res = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            //计算利润
            let tmp = prices[i + 1] - prices[i];
            res += Math.max(0, tmp);
        }
        return res;
    }
})
