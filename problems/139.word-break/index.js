/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * dp[i] 表示将 s[0:i] 拆分为 s[0:j] + s[j:i-1] j ∈ (0, j]，s[0:j] 和 s[j:i-1] 是否能
 * 用 wordDict 中的单词表示
 *
 * 即 dp[i]:
 *   for (j = 0; j < wordDict.length; j++) {
 *     dp[j] && wordDict.includes(s[j:i-1])
 *   }
 *   中，有一个 case 为真即为真
 */
const wordBreak = function (s, wordDict) {
  const dp = Array.from(new Array(s.length + 1), () => false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[dp.length - 1];
};

export default wordBreak;
