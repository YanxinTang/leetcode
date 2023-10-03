/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let ele = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ele = nums[i];
      count++;
    }
    count += nums[i] === ele ? 1 : -1;
  }
  return ele;
};

export default majorityElement;
