/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const r = matrix.length;
  const c = matrix[0].length;
  const dp = Array.from(new Array(r), () => Array.from(new Array(c), () => 0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
          continue;
        }
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return Math.max(...dp.flat()) ** 2;
};

export default maximalSquare;
