/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  let maxIndex = nums.length - 1;
  for (let i = maxIndex - 1; i >= 0; i--) {
    const value = nums[i];
    if (value >= maxIndex - i) {
      maxIndex = i;
    }
  }
  return !maxIndex;
};

export default canJump;