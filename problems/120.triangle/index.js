/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  // 复制最后一行
  let sums = [...triangle[triangle.length - 1]];
  // 从底部开始
  for (let i = triangle.length - 2; i >= 0; i--) {
    const row = triangle[i];
    const newSums = Array.from(new Array(row.length), () => 0);
    for (let j = 0; j < row.length; j++) {
      // sums 是上一行的最优解，长度是 row.length + 1
      if (j === row.length) {
        newSums[j] = row[j] + sums[j];
      } else {
        newSums[j] = row[j] + Math.min(sums[j], sums[j + 1]);
      }
    }
    sums = newSums;
  }
  return Math.min(sums);
};

export default minimumTotal;
