/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const arr = [];
    const bits = n.toString(2).padStart(32, '0');
    for (let i = 31; i >= 0; i--) {
        arr.push(bits[i]);
    }
    const answer = parseInt(arr.join(''), 2);
    return answer;
};

var reverseBits = function(n) {
    const bits = n.toString(2).padStart(32, '0');
    const reversedBits = bits.split('').reverse().join('');
    const answer = parseInt(reversedBits, 2);
    return answer
};
