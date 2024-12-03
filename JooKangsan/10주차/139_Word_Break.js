

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Map();
    
    function dp(str, i = 0) {
        if (str.length === 0) return true;
        if (i >= wordDict.length) return false;
 
        const key = str + ',' + i;
        if (memo.has(key)) return memo.get(key);
        
        let word = wordDict[i];
        if (str.slice(0, word.length) === word) {
            if (dp(str.slice(word.length), 0)) {
                memo.set(key, true);
                return true;
            }
        }
        
        const result = dp(str, i + 1);
        memo.set(key, result);
        return result;
    }
    
    return dp(s);
};