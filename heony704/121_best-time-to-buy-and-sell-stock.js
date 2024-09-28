/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 30분 초과
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = 10000;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min); 
        }
    }

    return max;
};