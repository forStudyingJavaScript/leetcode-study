/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let bitsOf32 = "";
  const binaryStr = n.toString(2);

  for (let i = 0; i < 32 - binaryStr.length; i++) {
    bitsOf32 += "0";
  }
  bitsOf32 += binaryStr;

  const reversedBitsOf32 = [...bitsOf32].reverse().join("");
  return parseInt(reversedBitsOf32, 2);
};
