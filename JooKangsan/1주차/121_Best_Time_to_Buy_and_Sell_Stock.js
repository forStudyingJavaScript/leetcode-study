/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let bestProfit = 0; 
    for(let i = 0 ; i < prices.length ; i ++){
        if (prices[i] < minPrice) {
        minPrice = prices[i];
        }
        else if(prices[i] - minPrice > bestProfit){
            bestProfit = prices[i] - minPrice;
        }
    }
    return bestProfit;
};

