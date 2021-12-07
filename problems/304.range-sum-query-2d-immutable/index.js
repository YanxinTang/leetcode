/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  this.matrix = matrix;
  this.r = matrix.length; // 行数
  this.c = matrix[0].length; // 列数
  const p = Array.from(new Array(this.r + 1), () => Array.from(new Array(this.c + 1), () => 0));
  for (let i = 1; i <= this.r; i++) {
    for (let j = 1; j <= this.c; j++) {
      p[i][j] = p[i][j - 1] + p[i - 1][j] - p[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }
  this.p = p; // 二维前缀和
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.p[row2 + 1][col2 + 1] + this.p[row1][col1] - this.p[row2 + 1][col1] - this.p[row1][col2 + 1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export default NumMatrix;
