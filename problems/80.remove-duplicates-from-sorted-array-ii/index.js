/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let p = 2;
  let q = 1;
  let temp = nums[1];
  for (; p < nums.length; p++) {
    if (nums[p] === nums[p - 1] && nums[p] === nums[p - 2]) {
      continue;
    }
    nums[q] = temp;
    temp = nums[p];
    q++;
  }
  nums[q] = temp;
  q++;
  return q;
};

export default removeDuplicates;
