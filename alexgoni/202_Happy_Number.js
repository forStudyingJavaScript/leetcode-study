/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let sum;
    if (n === 1 || n === 7 ) return true;
    while (n > 9) {
        sum = 0;
        const strN = String(n); 
        for (let i = 0; i < strN.length; i++) {
            sum += strN[i] * strN[i]; 
        }
        n = sum;
        if (n === 1 || n === 7 ) return true;
    }
    return n === 1 || n === 7;
};

// 기존 코드
var isHappy = function (n) {
    let sum;
    if (n === 1) return true;
    while (n > 1) {
        sum = 0;
        const strN = String(n); 
        for (let i = 0; i < strN.length; i++) {
            sum += strN[i] * strN[i]; 
        }
        n = sum;
        if (n === 1) return true;
    }
    return n === 1
};
