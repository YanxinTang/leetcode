/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
const matrixBlockSum = function (mat, k) {
  const r = mat.length;
  const c = mat[0].length;
  // 二维前缀和
  const p = Array.from(new Array(r + 1), () => Array.from(new Array(c + 1), () => 0));
  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      p[i][j] = p[i][j - 1] + p[i - 1][j] - p[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }
  const ans = Array.from(new Array(r), () => Array.from(new Array(c), () => 0));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      // 内部矩形坐标
      const a = i - k < 0 ? 0 : i - k;
      const b = j - k < 0 ? 0 : j - k;
      // 外部矩形坐标
      const m = i + k + 1 > r ? r : i + k + 1;
      const n = j + k + 1 > c ? c : j + k + 1;
      ans[i][j] = p[m][n] + p[a][b] - p[a][n] - p[m][b];
    }
  }
  return ans;
};

export default matrixBlockSum;
