/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const n = nums.length;
  // 包含 i 的元素的最长摆动序列
  const dp = Array.from(new Array(n), () => 0);
  // 第 i 个元素的最长摆动序列最后做差的符号
  const sign = Array.from(new Array(n), () => 0);
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] - nums[j] !== 0) {
        if (
          (nums[i] - nums[j]) * sign[j] < 0 || // 可以衔接 j 处的摆动序列
          sign[j] === 0 // 只有一个元素，直接衔接
        ) {
          if (dp[j] + 1 > dp[i]) {
            dp[i] = dp[j] + 1;
            sign[i] = nums[i] - nums[j] > 0 ? 1 : -1;
          }
        }
      }
    }
  }
  return dp[n - 1];
};

export default wiggleMaxLength;
