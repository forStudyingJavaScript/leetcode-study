/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  [...s].forEach((str) => {
    frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
  });

  [...t].forEach((str) => {
    frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1;
  });

  if (
    Object.keys(frequencyCounter1).length !==
    Object.keys(frequencyCounter2).length
  )
    return false;

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
};
