/*

https://leetcode.com/problems/search-insert-position/

https://www.youtube.com/watch?v=6zhGS79oQ4k

*/

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

// lower bond

var searchInsert = function (nums, target) {
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
};
