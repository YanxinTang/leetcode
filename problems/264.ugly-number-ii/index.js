/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const nums = Array.from(new Array(n), () => 0);
  nums[0] = 1;
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 1; i < n; i++) {
    const num2 = nums[p2] * 2;
    const num3 = nums[p3] * 3;
    const num5 = nums[p5] * 5;
    nums[i] = Math.min(num2, num3, num5);
    if (num2 === nums[i]) {
      p2++;
    }
    if (num3 === nums[i]) {
      p3++;
    }
    if (num5 === nums[i]) {
      p5++;
    }
  }
  return nums[n - 1];
};

export default nthUglyNumber;
