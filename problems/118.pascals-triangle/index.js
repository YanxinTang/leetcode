/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const ans = Array.from(new Array(numRows), () => []);
  ans[0] = [1];
  for (let i = 1; i < numRows; i++) {
    ans[i].push(1);
    for (let j = 1; j <= i - 1; j++) {
      ans[i].push(ans[i - 1][j - 1] + ans[i - 1][j]);
    }
    ans[i].push(1);
  }
  return ans;
};

export default generate;
