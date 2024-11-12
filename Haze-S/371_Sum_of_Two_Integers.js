/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum (a, b) {
    let carry = 0;
    let result = 0;

    while (b !== 0) {
        let sum = a ^ b;
        carry = (a & b) << 1;

        a = sum;
        b = carry;
    }

    return a;
};