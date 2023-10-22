/*

https://leetcode.com/problems/house-robber/

https://www.youtube.com/watch?v=GrMBfJNk_NY

*/

// TC: O(2 power N)

var rob = function (nums) {
  function helper(idx) {
    if (idx === 0) return nums[idx];
    if (idx < 0) return 0;

    const pick = nums[idx] + helper(idx - 2);
    const nonPick = 0 + helper(idx - 1);
    return Math.max(pick, nonPick);
  }

  return helper(nums.length - 1);
};

// TC: O(N), SC: O(N) + O(N) for recursion stack and memo

var rob = function (nums) {
  const dp = new Array(nums.length).fill(-1);
  function helper(idx) {
    if (idx === 0) return nums[idx];
    if (idx < 0) return 0;
    if (dp[idx] !== -1) {
      return dp[idx];
    }
    const pick = nums[idx] + helper(idx - 2);
    const nonPick = 0 + helper(idx - 1);
    return (dp[idx] = Math.max(pick, nonPick));
  }

  return helper(nums.length - 1);
};

// TC: O(N), SC: O(N)

var rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i === 1 ? 0 : dp[i - 2]);
    const notPick = 0 + dp[i - 1];
    dp[i] = Math.max(pick, notPick);
  }
  return dp[nums.length - 1];
};

// TC: O(N), SC:O(1) with space optimization

var rob = function (nums) {
  let prevOne = nums[0];
  let prevTwo = 0;

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i === 1 ? 0 : prevTwo);
    const notPick = 0 + prevOne;
    prevTwo = prevOne;
    prevOne = Math.max(pick, notPick);
  }
  return prevOne;
};
