/*

https://www.youtube.com/watch?v=mLfjzJsN8us

https://leetcode.com/problems/climbing-stairs/

*/

// Tabulation: Bottom up
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(-1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Memoization: Top Down

var climbStairs = function (n, memo = []) {
  if (n <= 2) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};
