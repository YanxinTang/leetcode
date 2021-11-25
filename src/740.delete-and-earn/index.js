/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const values = Array.from(new Array(Math.max(...nums) + 1), x => 0);
  for (const num of nums) {
    values[num] += num;
  }

  // 打家却舍
  let a = values[0], b = Math.max(values[0], values[1]);
  for (let i = 2; i < values.length; i++) {
    const t = b;
    b = Math.max(a + values[i], b);
    a = t;
  }
  return b;
};

export default deleteAndEarn;