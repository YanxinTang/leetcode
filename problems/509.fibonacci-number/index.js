/**
 * @param {number} n
 * @return {number}
 */
const 递归 = function(n) {
  if (n === 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};


/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
  if (n < 2) {
    return n;
  }

  let a = 0, b = 0, sum = 1;
  for (let i = 2; i <= n; i++) {
    a = b;
    b = sum;
    sum = a + b;
  }
  return sum;
}

export default fib;
export { 递归 };