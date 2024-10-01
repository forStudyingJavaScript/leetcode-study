/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    
    let prev2 = cost[0];
    let prev1 = cost[1];
    
    for (let i = 2; i < n; i++) {
        let curr = Math.min(prev1, prev2) + cost[i];
        prev2 = prev1;
        prev1 = curr;
    }

    return Math.min(prev1, prev2);
};