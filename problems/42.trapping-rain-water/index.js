/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const n = height.length;
  const lMax = Array.from(new Array(n), () => 0); // i 及 i 左边的最大高度
  const rMax = Array.from(new Array(n), () => 0); // i 及 i 右边的最大高度
  lMax[0] = height[0];
  rMax[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(lMax[i - 1], height[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(rMax[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    ans += Math.min(lMax[i], rMax[i]) - height[i];
  }

  return ans;
};

export default trap;
