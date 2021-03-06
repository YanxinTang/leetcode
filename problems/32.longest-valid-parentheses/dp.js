/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const n = s.length;
  const dp = Array.from(new Array(n), () => 0);
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i >= 2 ? dp[i - 2] + 2 : 2;
      } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] + dp[i - 1] + 2 : dp[i - 1] + 2;
      }
      ans = Math.max(ans, dp[i]);
    }
  }
  return ans;
};

export default longestValidParentheses;
