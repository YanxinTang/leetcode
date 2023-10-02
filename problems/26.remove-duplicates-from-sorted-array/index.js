/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let p = 1;
  let q = 1;
  for (; p < nums.length; p++) {
    if (nums[p] === nums[p - 1]) {
      continue;
    }
    nums[q] = nums[p];
    q++;
  }
  return q;
};

export default removeDuplicates;
