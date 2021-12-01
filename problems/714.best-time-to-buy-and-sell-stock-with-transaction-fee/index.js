/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  let a = -prices[0]; // 有股票
  let b = 0; // 无股票
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    a = Math.max(a, b - prices[i]);
    b = Math.max(b, a + prices[i] - fee);
    ans = Math.max(b, ans);
  }
  return ans;
};

export default maxProfit;
