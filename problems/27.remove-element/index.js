/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let p = 0;
  let q = 0;
  for (; p < nums.length; p++) {
    if (nums[p] === val) {
      continue;
    }
    nums[q] = nums[p];
    q++;
  }
  return q;
};

export default removeElement;
