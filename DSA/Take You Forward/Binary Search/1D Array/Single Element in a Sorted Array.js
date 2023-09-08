/*

https://leetcode.com/problems/single-element-in-a-sorted-array/description/

https://www.youtube.com/watch?v=AZOmHuHadxQ


[1,1,2,3,3,4,4,8,8]

*/

// BRUTE FORCE: O(n)

var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      if (nums[i] !== nums[i + 1]) {
        return nums[i];
      }
    } else if (i === nums.length - 1) {
      if (nums[i] !== nums[i - 1]) {
        return nums[i];
      }
    } else if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

// optimal: TC: O(logn)

var singleNonDuplicate = function (nums) {
  const n = nums.length;
  if (nums.length === 1 || nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // left half will be even and odd and right half will be odd and even
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 === 1 && nums[mid - 1] === nums[mid]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      // means mid is at odd index and if even idx is same then we can eliminate the left part
      low = mid + 1;
    } else {
      high = mid - 1; // eliminate the right half
    }
  }

  return -1;
};
