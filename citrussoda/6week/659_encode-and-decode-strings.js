class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (let s of strs) {
      res += `${s.length};${s}`;
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let ans = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== ';') j++;

      let length = parseInt(str.substring(i, j), 10);

      i = j + 1;
      j = i + length;

      ans.push(str.substring(i, j));

      i = j;
    }

    return ans;
  }
}
