/**
 * https://leetcode.com/problems/rotate-image/
 * 37m
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] =
        matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] =
        matrix[j][matrix.length - 1 - i];
      matrix[j][matrix.length - 1 - i] = tmp;
    }
  }
};
