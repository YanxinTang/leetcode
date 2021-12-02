/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) {
    return 0;
  }

  let ans = 0;
  let diff = nums[1] - nums[0]; // 前两个数的差值
  let t = 0; // 子等差数组的排列个数
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === diff) {
      t++;
    } else {
      diff = nums[i] - nums[i - 1];
      t = 0;
    }
    ans += t;
  }
  return ans;
};

export default numberOfArithmeticSlices;
