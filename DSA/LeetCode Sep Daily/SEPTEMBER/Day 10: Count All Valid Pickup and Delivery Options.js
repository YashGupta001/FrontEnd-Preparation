/*

https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/?envType=daily-question&envId=2023-09-10

https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4024842/video-easy-way-to-think-about-this-question-python-javascript-java-and-c/?envType=daily-question&envId=2023-09-10

*/

var countOrders = function (n) {
  const MOD = 10 ** 9 + 7;
  let totalWays = 1;
  for (let orderNumber = 2; orderNumber <= n; orderNumber++) {
    totalWays = (totalWays * (2 * orderNumber - 1) * orderNumber) % MOD;
  }
  return totalWays;
};
