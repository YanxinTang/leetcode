/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k = k % nums.length;
  const tails = nums.slice(nums.length - k);
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] = i < k ? tails[i] : nums[i - k];
  }
};

export default rotate;
