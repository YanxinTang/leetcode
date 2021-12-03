/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  let ans = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const newAns = [1];
    for (let j = 1; j <= i - 1; j++) {
      newAns.push(ans[j - 1] + ans[j]);
    }
    newAns.push(1);
    ans = newAns;
  }
  return ans;
};

export default getRow;
