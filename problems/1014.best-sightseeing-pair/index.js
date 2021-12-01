/**
 * @param {number[]} values
 * @return {number}
 *
 * values[i] + values[j] + i - j = (values[i] + i) + (values[j] - j)
 *
 * 假设 f(i) 表示 i ∈ [0, i+1) 时 values[i] + i 的最大值
 * 则有 f(i) = Max(f(i-1), values[i] + 1)
 *
 */
const maxScoreSightseeingPair = function (values) {
  let a = values[0]; // f(i)
  let ans = values[0] + values[1] - 1;
  for (let i = 2; i < values.length; i++) {
    a = Math.max(values[i - 1] + i - 1, a);
    ans = Math.max(ans, a + values[i] - i);
  }
  return ans;
};

export default maxScoreSightseeingPair;
