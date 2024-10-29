class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (strs.length === 0) return 'none';
    return strs.join(' ^0^ ');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === 'none') return [];
    return str.split(' ^0^ ');
  }
}
