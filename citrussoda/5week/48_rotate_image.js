/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let ans = [];

  for (let i = 0; i < matrix.length; i++) {
    let clock = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      clock.push(matrix[j][i]);
    }
    ans.push(clock);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = ans[i][j];
    }
  }
};
