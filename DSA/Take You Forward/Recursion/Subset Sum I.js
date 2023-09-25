/*

https://www.youtube.com/watch?v=rYkfBRtMJr8

https://takeuforward.org/data-structure/subset-sum-sum-of-all-subsets/

Example 1:

Input: N = 3, arr[] = {5,2,1}

Output: 0,1,2,3,5,6,7,8

Explanation: We have to find all the subset’s sum and print them.in this case the generated subsets are [ [], [1], [2], [2,1], [5], [5,1], [5,2]. [5,2,1],so the sums we get will be  0,1,2,3,5,6,7,8

*/

var subsets = function (nums) {
  const result = [];
  const output = [];

  const helper = (i, subset, sum) => {
    if (i >= nums.length) {
      result.push(subset);
      output.push(sum);
      return;
    }
    // decision to include nums[i]
    helper(i + 1, [...subset, nums[i]], sum + nums[i]);
    // decision to not include nums[i]
    helper(i + 1, subset, sum);
  };

  helper(0, [], 0);

  return output;
};
