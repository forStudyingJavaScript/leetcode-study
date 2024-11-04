/**
 * https://neetcode.io/problems/string-encode-and-decode
 * 17m
 */

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (const str of strs) {
      result += `${encodeURIComponent(str)}?`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const arr = str.split("?");
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
      arr[i] = decodeURIComponent(arr[i]);
    }

    return arr;
  }
}
