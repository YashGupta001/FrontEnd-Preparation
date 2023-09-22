/*

https://leetcode.com/problems/subsets/description/

https://www.youtube.com/watch?v=REOH22Xwdkk

*/

var subsets = function (nums) {
  const result = [];

  const helper = (i, subset) => {
    if (i >= nums.length) {
      result.push(subset);
      return;
    }
    // decision to include nums[i]
    helper(i + 1, [...subset, nums[i]]);
    // decision to not include nums[i]
    helper(i + 1, subset);
  };

  helper(0, []);
  return result;
};
