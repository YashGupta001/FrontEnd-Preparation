/*

https://www.youtube.com/watch?v=hjR1IYVx9lY

const x = 3
const arr = [1,1,1,2,2,3,3]

ans: 2

*/

// brute force linear search O(n)

// optimal: Binary Search O(logn)

var countOccurences = function (nums, target) {
  let start = [-1, -1];

  start[0] = binarySearch(nums, target, true);
  start[1] = binarySearch(nums, target, false);

  if (start[0] === -1) return 0;

  return start[1] - start[0] + 1;
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
