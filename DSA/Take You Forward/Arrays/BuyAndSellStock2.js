/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

https://www.youtube.com/watch?v=Q7v239y-Tik -> anuj bhaiya

*/

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
