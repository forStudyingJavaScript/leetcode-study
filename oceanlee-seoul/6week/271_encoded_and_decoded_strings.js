class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = '';

    for (let str of strs) {
      encodedStr += str.length + '#' + str;
    }

    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decodedArr = [];
    let i = 0;

    while (i < str.length) {
      // '#'의 위치를 찾아 문자열 길이를 구함
      const j = str.indexOf('#', i);
      const length = parseInt(str.slice(i, j), 10);

      // 문자열 추출 후 배열에 추가
      const word = str.slice(j + 1, j + 1 + length);
      decodedArr.push(word);

      // 다음 문자열로 이동
      i = j + 1 + length;
    }

    return decodedArr;
  }
}
