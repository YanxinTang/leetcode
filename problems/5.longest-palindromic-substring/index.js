/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const n = s.length;
  const dp = Array.from(new Array(n), () => Array.from(new Array(n), () => false));
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    if (i + 1 < n) {
      dp[i][i + 1] = s[i] === s[i + 1];
    }
  }

  // dp[i][j] 依赖后一行和前一列，因此先遍历列，再遍历行
  for (let j = 2; j < n; j++) {
    for (let i = 0; i < j - 1; i++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
    }
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (dp[i][j] && j - i > end - start) {
        start = i;
        end = j;
      }
    }
  }
  return s.slice(start, end + 1);
};

export default longestPalindrome;
