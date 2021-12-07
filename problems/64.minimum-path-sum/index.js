/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const r = grid.length;
  const c = grid[0].length;
  const dp = Array.from(new Array(r), () => Array.from(new Array(c), () => 0));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = grid[0][0];
        continue;
      }
      if (i === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
        continue;
      }
      if (j === 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
        continue;
      }
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[r - 1][c - 1];
};

export default minPathSum;
