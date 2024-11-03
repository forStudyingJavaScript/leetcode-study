class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = "";
    for (const str of strs) {
      encodedStr += str.length + "#" + str;
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decodedList = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") j++;
      const len = parseInt(str.slice(i, j));
      decodedList.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    return decodedList;
  }
}

// Time taken : 14m
