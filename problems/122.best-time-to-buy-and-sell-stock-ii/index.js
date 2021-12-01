/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, max + prices[i] - prices[i - 1]);
  }
  return max;
};

export default maxProfit;
