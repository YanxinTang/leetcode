/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const sum = nums.reduce((sum, cur) => sum + cur, 0);

  let pre = nums[0], max = pre;
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }

  pre = nums[1];
  let min = pre;
  for (let i = 2; i < nums.length - 1; i++) {
    pre = Math.min(pre + nums[i], nums[i]);
    min = Math.min(pre, min);
  }

  return Math.max(max, sum - min);
};

export default maxSubarraySumCircular;