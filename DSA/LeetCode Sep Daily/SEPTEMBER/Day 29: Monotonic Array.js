/*

https://leetcode.com/problems/monotonic-array/description/?envType=daily-question&envId=2023-09-29

*/

// My own solution

var isMonotonic = function (nums) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return true;

  let isIncresing = nums[0] < nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    if (isIncresing) {
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    } else {
      if (nums[i] > nums[i - 1]) {
        return false;
      }
    }
  }

  return true;
};

// Another solution

var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      decreasing = false;
    } else if (nums[i - 1] > nums[i]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};
