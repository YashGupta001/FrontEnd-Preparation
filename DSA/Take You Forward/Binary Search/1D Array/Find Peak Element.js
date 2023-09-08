/*

https://www.youtube.com/watch?v=cXxmbemS6XM

https://leetcode.com/problems/find-peak-element/description/

*/

// BRUTE FORCE: O(n)

var findPeakElement = function (nums) {
  let peak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && nums[i - 1] < nums[i]) {
      peak = i;
    }
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak = i;
    }
  }

  return peak;
};

// OR

var findPeakElement = function (nums) {
  let peak = 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      (i === 0 || nums[i - 1] < nums[i]) &&
      (i === nums.length - 1 || nums[i] > nums[i + 1])
    ) {
      peak = i;
    }
  }

  return peak;
};

// OPTIMAL: O(logn)

var findPeakElement = function (nums) {
  let peak = 0;
  let n = nums.length;
  if (n === 1 || nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      peak = mid;
      break;
    } else if (nums[mid - 1] < nums[mid]) {
      // right side
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return peak;
};

var findPeakElement = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
