/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else {
      const profit = prices[i] - minPrice;
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  return maxProfit;
};

// Runtime:  72 ms  Beats 66.85%
// Memory:   58.99 MB Beats 63.74%
