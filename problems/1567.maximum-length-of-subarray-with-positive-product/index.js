/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
  // nums[0:i] 中，最后一个乘积为负数的子串长度
  let preNegLen = nums[0] < 0 ? 1 : 0;
  // nums[0:1] 中，最后一个乘积为正数的子串长度
  let prePosLen = nums[0] > 0 ? 1 : 0;

  let max = prePosLen;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      prePosLen++;
      preNegLen = preNegLen > 0 ? preNegLen + 1 : 0;
    } else if (num < 0) {
      const t = prePosLen;
      prePosLen = preNegLen > 0 ? preNegLen + 1 : 0;
      preNegLen = t + 1;
    } else {
      preNegLen = prePosLen = 0;
    }
    max = Math.max(prePosLen, max);
  }
  return max;
};

export default getMaxLen;
