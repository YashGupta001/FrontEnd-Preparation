// https://leetcode.com/problems/unique-paths/?envType=daily-question&envId=2023-09-03
// https://leetcode.com/problems/unique-paths/solutions/1635338/clean-recursive-dp-solution-javascript/?envType=daily-question&envId=2023-09-03

var uniquePaths = function (m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
};
