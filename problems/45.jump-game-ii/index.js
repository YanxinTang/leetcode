/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let end = 0; // 当前跳的最大位置
  let max = 0; // 下一跳的最大位置
  let n = 0; // 已经跳的次数
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === end) {
      n++;
      end = max;
    }
  }
  return n;
};

export default jump;
