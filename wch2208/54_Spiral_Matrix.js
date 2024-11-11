var spiralOrder = function (matrix) {
  let answer = [];

  while (matrix.length > 0 && matrix[0].length > 0) {
    // 전체 matrix가 비어있지 않은지 확인

    // 오른쪽으로 이동
    answer = answer.concat(matrix.shift()); // 첫 번째 행을 가져와서 answer에 추가

    // 아래로 이동
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        // 행이 빈 배열인지 확인
        answer.push(matrix[i].pop());
      }
    }

    // 왼쪽으로 이동
    if (matrix.length > 0) {
      answer = answer.concat(matrix.pop().reverse()); // 마지막 행을 가져와 역순으로 추가
    }

    // 위로 이동
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) {
        answer.push(matrix[i].shift());
      }
    }
  }

  return answer;
};

//time: 1hr
//memory: 48.48MB
