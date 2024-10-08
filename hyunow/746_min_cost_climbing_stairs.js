/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    n = cost.length
    let ans = new Array(n).fill(0)
    ans[0] = cost[0]
    ans[1] = cost[1]

    for (let i = 2; i < n; i++) {
        ans[i] = Math.min(ans[i-2] + cost[i], ans[i-1] + cost[i])
    }

    return(Math.min(ans[n-1], ans[n-2]))
};