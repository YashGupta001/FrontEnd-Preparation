/*

https://leetcode.com/problems/max-consecutive-ones/

*/

// TC: O(N) SC: O(1)
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let current = 0;

  for (let num of nums) {
    if (num === 1) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }

  return max;
};
