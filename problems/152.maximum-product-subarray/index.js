/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let preMin = nums[0],
    preMax = preMin,
    max = preMin;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const _preMin = preMin;
    const _preMax = preMax;
    preMin = Math.min(num, _preMin * num, _preMax * num);
    preMax = Math.max(num, _preMin * num, _preMax * num);
    max = Math.max(max, preMax);
  }
  return max;
};

export default maxProduct;
