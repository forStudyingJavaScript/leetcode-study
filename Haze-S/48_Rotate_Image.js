/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix[i][0].length; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
