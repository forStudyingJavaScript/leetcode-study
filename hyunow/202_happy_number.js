/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set()

    while(true) {
        let sum = 0
        while (n > 0) {
            const num = n % 10
            sum += num ** 2
            n = Math.floor(n / 10)
        }
    
        if(sum === 1) {
            return true
        }

        if(seen.has(sum)) {
            return false
        }
    
        seen.add(sum)
        n = sum
        
    }
    
};