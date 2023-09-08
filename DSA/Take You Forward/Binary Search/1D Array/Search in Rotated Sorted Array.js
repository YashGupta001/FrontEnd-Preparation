/*

https://leetcode.com/problems/search-in-rotated-sorted-array/

*/

// Brute force: Linear search O(n)

//optimal: Binary search O(logn)

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // When dividing the roated array into two halves, one must be sorted.
    // check if left side is sorted
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        // element is present in left
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // otherwise the right side is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        // element is present in right
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
