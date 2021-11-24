/**
 * @param {number[]} nums
 * @return {number}
 * 
 * f(n) = Max(f(n-2) + Vn, f(n-1))
 */
const rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let a = nums[0], b = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const t = b;
    b = Math.max(a + nums[i], b);
    a = t;
  }
  return b;
};

export default rob;