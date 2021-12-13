/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  const dp = Array.from(new Array(n + 1), () => n);
  dp[0] = 0;
  for (let i = 1, square = i ** 2; square <= n; i++, square = i ** 2) {
    dp[square] = 1;
    for (let j = i; j <= n; j++) {
      if (j >= square) {
        dp[j] = Math.min(dp[j], dp[j - square] + 1);
      }
    }
  }
  return dp[n];
};

export default numSquares;
