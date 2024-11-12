/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  while (matrix.length > 0) {
    const currentLine = matrix.shift();
    result = [...result, ...currentLine];
    if (!matrix[0]) break;
    matrix = transposeMatrix(matrix).reverse();
  }
  return result;
};

function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}
