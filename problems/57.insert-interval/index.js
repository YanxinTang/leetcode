/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  const ans = [];
  let a = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const b = intervals[i];
    // 有三种情况
    // a 包含 b
    if (a[0] <= b[0] && a[1] >= b[1]) {
      continue;
    }
    // a 相交于 b
    if (a[0] <= b[0] && a[1] >= b[0]) {
      a = [a[0], b[1]];
      continue;
    }
    // a、b 分离
    ans.push(a);
    a = b;
  }
  ans.push(a);

  return ans;
};

export default insert;
