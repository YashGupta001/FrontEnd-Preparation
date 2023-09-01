/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 

https://www.youtube.com/watch?v=EU7ab0ZOddc&list=PLDdcY4olLQk3zG-972eMoDJHLIz3FiGA6&index=12 


Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


https://www.youtube.com/watch?v=34WE6kwq49U&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=14 --> anuj bhaiya

*/

var maxProfit = function (prices) {
  let profit = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

var maxProfit = function (prices) {
  let profit = 0;
  let currentPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < currentPrice) {
      currentPrice = prices[i];
    } else {
      profit = Math.max(prices[i] - currentPrice, profit);
    }
  }

  return profit;
};
