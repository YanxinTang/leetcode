/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n < 2) {
    return n;
  }
  let a = 0, b = 1, r = 1;
  for (let i = 2; i <= n; i++) {
    a = b;
    b = r;
    r = a + b;
  }
  return r;
};

export default climbStairs;