class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((s) => `${s.length}#${s}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let i = 0;
    const result = [];

    while (i < str.length) {
      let j = str.indexOf("#", i);
      let length = parseInt(str.slice(i, j), 10);
      result.push(str.slice(j + 1, j + 1 + length));
      i = j + 1 + length;
    }

    return result;
  }
}
