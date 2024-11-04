class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStrs = "";
    if (strs.length === 0) return encodedStrs;

    strs.forEach(str => {
      encodedStrs += str.length + `#` + str;
    });

    return encodedStrs;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decodedStr = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== `#`) {
        j++;
      }

      let length = parseInt(str.slice(i, j));
      i = j + 1;

      decodedStrs.push(str.slice(i, i + length));
      i += length;
    }
  }
}

// time: 1hr
