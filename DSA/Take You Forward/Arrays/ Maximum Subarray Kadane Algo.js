/*


https://leetcode.com/problems/maximum-subarray/

https://www.youtube.com/watch?v=AHZpyENo7k4


*/

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

// in case inetrview asked to returhn the subarray

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];
  let sum = 0;
  let start;
  let ansStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) {
      start = i;
    }
    sum += nums[i];

    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  console.log("startend", ansStart, ansEnd);

  return max;
};
