/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let sum = nums[0], max = sum;
  for (let i = 1; i < nums.length; i++) {
    sum = sum > 0 ? sum + nums[i] : nums[i];
    max = Math.max(sum, max);
  }
  return max;
};

export default maxSubArray;