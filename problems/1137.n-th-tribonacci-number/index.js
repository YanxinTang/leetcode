/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  if (n < 2) {
    return n;
  }
  let a = 0;
  let b = 0;
  let c = 0;
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    a = b;
    b = c;
    c = sum;
    sum = a + b + c;
  }
  return sum;
};

export default tribonacci;
