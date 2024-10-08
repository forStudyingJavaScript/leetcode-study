/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * 좀 어려웠습니다...
 * 아이디어는 떠올랐는데 이걸 코드로 구현하는게 빡센 뇌운동을 하는 느낌이였어요
 * 왼쪽 오른쪽 나눠서 한다는 게 정말 세상 너무 똑똑한 사람들이 많다는걸 조금 느꼈습니다 ㅠ.ㅠ
 * 사람들의 풀이 등을 보고 최대한 깔끔하게 작성해볼려고 노력했어요(처음에 직접 한 후에!)
 *
 */
const productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = new Array(length);

  let L = 1;

  for (let i = 0; i < length; i++) {
    answer[i] = L;
    L *= nums[i];
  }

  let R = 1;

  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }

  return answer;
};
