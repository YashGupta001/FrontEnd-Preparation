/*

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

https://www.youtube.com/watch?v=hjR1IYVx9lY

*/

// BRUTE FORCE: O(n)

var searchRange = function (nums, target) {
  let firstIdx = -1;
  let lastIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (firstIdx === -1) {
        firstIdx = i;
      }

      lastIdx = i;
    }
  }

  return [firstIdx, lastIdx];
};

// optimal using lower bound and upper bound: TC: 2(Ologn)

var searchRange = function (nums, target) {
  let firstIdx = lowerBound(nums, target);
  let lastIdx = upperBound(nums, target);

  if (firstIdx === nums.length || nums[firstIdx] !== target) {
    return [-1, -1];
  }
  return [firstIdx, lastIdx - 1];
};

function lowerBound(arr, x) {
  let lowerBound = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      lowerBound = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return lowerBound;
}

function upperBound(arr, x) {
  let upperBoun = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > x) {
      upperBoun = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return upperBoun;
}

// optimal: plain binary search, tc: O(logn)

var searchRange = function (nums, target) {
  let start = [-1, -1];

  start[0] = binarySearch(nums, target, true);
  start[1] = binarySearch(nums, target, false);

  return start;
};

function binarySearch(nums, target, isFirstIdx) {
  let ans = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      ans = mid;
      if (isFirstIdx) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return ans;
}
