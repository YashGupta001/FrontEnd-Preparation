/*

https://leetcode.com/problems/combination-sum-iv/?envType=daily-question&envId=2023-09-09

*/

var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(-1);
  return helper(nums.length, nums, target, dp);
};

var helper = function (n, nums, target, dp) {
  if (target === 0) {
    return 1;
  }
  if (target < 0) {
    return 0;
  }

  if (dp[target] !== -1) {
    return dp[target];
  }

  let take = 0;

  for (let j = 0; j < n; ++j) {
    take += helper(n, nums, target - nums[j], dp);
  }

  dp[target] = take;
  return take;
};
