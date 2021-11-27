/**
 * @param {number[]} cost
 * @return {number}
 * 
 * f(i) = min(f(i-1) + cost[i-1], f(i-2) + cost[i-2])
 */
const minCostClimbingStairs = function(cost) {
  let a = 0, b = 0, r = 0;
  for (let i = 2; i <= cost.length; i++) {
    a = b;
    b = r;
    r = Math.min(a + cost[i-2], b + cost[i-1]);
  }
  return r;
};

export default minCostClimbingStairs;