/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    const str = i.toString(2);
    let count = 0;
    [...str].forEach((char) => {
      if (char === "1") count++;
    });

    result.push(count);
  }

  return result;
};
