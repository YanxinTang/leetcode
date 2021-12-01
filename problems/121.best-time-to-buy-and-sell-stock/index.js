/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let pre = prices[0]; // 成本价
  let max = 0; // 最多能卖
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - pre);
    pre = pre < prices[i] ? pre : prices[i];
  }
  return max;
};

export default maxProfit;
