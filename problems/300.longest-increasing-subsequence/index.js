/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const dp = Array.from(new Array(nums.length), () => 0);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

export default lengthOfLIS;
