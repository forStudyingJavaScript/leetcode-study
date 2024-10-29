/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let num = String(BigInt(digits.join('')) + BigInt(1));
  let arr = num.split('').map((s) => +s);

  return arr;
}
