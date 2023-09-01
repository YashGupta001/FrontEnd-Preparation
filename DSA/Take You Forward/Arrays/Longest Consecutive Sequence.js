/*

https://leetcode.com/problems/longest-consecutive-sequence/description/

https://www.youtube.com/watch?v=oO5uLE7EUlM

*/

// brute force: 2 loops --> check for next of each element TC: O(n2)

// better TC: (nlogn) SC: O(1)

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  // brute force
  nums.sort((a, b) => a - b);
  let max = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      current++;
      max = Math.max(max, current);
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      current = 1;
    }
  }

  return max;
};

// optimal TC: O(3n), SC: O(n)

var longestConsecutive = function (nums) {
  if (nums.length <= 0) return 0;
  let maxLen = 1;
  let map = new Map();

  for (let num of nums) {
    map.set(num, true);
  }

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i] - 1)) {
      let count = 1;
      while (map.has(nums[i] + count)) {
        count++;
      }
      maxLen = Math.max(maxLen, count);
    }
  }

  return maxLen;
};
