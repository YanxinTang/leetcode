/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  const dp = Array.from(new Array(n + 1), () => 0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j), dp[i - j] * j, j * (i - j));
    }
  }
  return dp[n];
};

export default integerBreak;
