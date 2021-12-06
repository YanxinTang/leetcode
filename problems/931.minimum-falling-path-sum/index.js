/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  const r = matrix.length; // 行
  const c = matrix[0].length; // 列

  let sums = Array.from(new Array(c), () => 0);
  for (let i = 0; i < r; i++) {
    const row = matrix[i];
    const newSums = Array.from(new Array(c), () => 0);
    for (let j = 0; j < c; j++) {
      const _ = [];
      if (j - 1 >= 0) {
        _.push(sums[j - 1]);
      }
      if (j + 1 < c) {
        _.push(sums[j + 1]);
      }
      _.push(sums[j]);

      newSums[j] = row[j] + Math.min.apply(this, _);
    }
    sums = newSums;
  }
  return Math.min.apply(this, sums);
};

export default minFallingPathSum;
