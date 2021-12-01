/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let a = 0; // 没股票，在冷冻
  let b = 0; // 没股票，未冷冻
  let c = -prices[0]; // 有股票
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const newA = c + price; // 有股票，并在当天卖出
    const newB = Math.max(b, a); // 昨天有股票没在冷冻，咋天没股票在冷冻
    const newC = Math.max(c, b - price); // 昨天有股票，昨天没股票并不在冷冻 - 购入今日股票
    a = newA;
    b = newB;
    c = newC;
  }
  return Math.max(a, b);
};

export default maxProfit;
