var maxProfit = function(prices) {
    let min = 1e4
    let profit = 0

    for (let price of prices) {
        if (price < min){
            min = price
        }
        else {
            profit = Math.max(profit, price - min)
        }
    }

    return profit
};