/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let result = 0;
  
  for (let i = 0; i < 32; i++) {
      const bit = n & 1;
      
      result = (result << 1) | bit;
      
      n >>= 1;
  }
  
  return result >>> 0;
};