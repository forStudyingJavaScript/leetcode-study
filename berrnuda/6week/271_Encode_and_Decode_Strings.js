class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = "";

    for (let i = 0; i < strs.length; i++) {
      encodedStr += strs[i] + "[" + strs[i].length + "]";
    }

    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decodedStrs = [];

    for (let i = 0; i < str.length; ) {
      let firstIndex = str.indexOf("[", i);
      let lastIndex = str.indexOf("]", firstIndex);

      let word = str.substring(i, firstIndex);
      decodedStrs.push(word);

      i = lastIndex + 1;
    }

    return decodedStrs;
  }
}
