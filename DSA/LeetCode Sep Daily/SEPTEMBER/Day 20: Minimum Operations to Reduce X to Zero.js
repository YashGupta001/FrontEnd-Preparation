/*

https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/?envType=daily-question&envId=2023-09-20

https://www.youtube.com/watch?v=3p2fBvxrVQA

*/

// Sliding Window: TC: O(n), SC: O(1)

var minOperations = function (nums, x) {
  if (!nums.length) return nums;

  const target = nums.reduce((acc, curr) => acc + curr) - x;
  let start = 0;
  let out = -1;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum > target) {
      sum -= nums[start];
      start++;
    }

    if (sum === target) {
      let windowSize = end - start + 1;
      out = Math.max(windowSize, out);
    }
  }

  return out === -1 ? out : nums.length - out;
};
