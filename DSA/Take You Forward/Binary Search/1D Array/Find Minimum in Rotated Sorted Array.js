/*

 Find Minimum in Rotated Sorted Array

https://www.youtube.com/watch?v=nhEMDKMB44g

*/

// TC: O(logn)

var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // left part is sorted
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }

  return ans;
};

// [4,5,6,7,1,2]

var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
};
