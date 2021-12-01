/**
 * @param {number[]} nums
 * @return {number}
 *
 * f(n) = Max(f(n-2) + Vn, f(n-1))
 */
const rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length <= 3) {
    return Math.max(...nums);
  }

  const robRange = (start, end) => {
    let a = nums[start];
    let b = Math.max(nums[start], nums[start + 1]);
    for (let i = 2; i < end - start; i++) {
      const t = b;
      b = Math.max(a + nums[i + start], b);
      a = t;
    }
    return b;
  };

  return Math.max(robRange(0, nums.length - 1), robRange(1, nums.length));
};

export default rob;
