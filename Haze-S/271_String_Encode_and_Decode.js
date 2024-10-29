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

// 배열의 문자열을 합칠 때 구분자만 유별난 걸로 구분하면 decode 할 때 쉽게 자를 수 있을 것 같아서 저렇게 구분자를 뒀습니다. 빈 배열일 경우 `'none'` 이라는 문자열을 넘겨 다시 빈 배열로 넘기도록 했어요.
