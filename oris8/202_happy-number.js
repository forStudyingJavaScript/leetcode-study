/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  // 무한루프 가능성
  const map = new Map();
  if (n === 1) return true;
  if (map.has(n)) return false;

  map.set(n, true);

  n = [...`${n}`].reduce((acc, digit) => acc + Math.pow(+digit, 2), 0);
  return isHappy(n);
};
