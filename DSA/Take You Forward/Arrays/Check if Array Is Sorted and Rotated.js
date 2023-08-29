/*

https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/


*/

// for sorted array --> [1,2,2,3,4,4,4,5]
var normalSortedArray = function (nums) {
  if (nums.length === 1) return true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

normalSortedArray([1, 2, 2, 3, 4, 4, 4, 5]);

// but if the array is sorted and rotated

var check = function (nums) {
  let count = 0;
  let len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count > 1 || (count == 1 && nums[0] < nums[len])) {
    return false;
  }
  return true;
};

// this is also good
var check = function (nums) {
  let decreased = false;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      if (decreased) {
        return false;
      }
      decreased = true;
    }
  }
  return decreased ? nums[0] >= nums[nums.length - 1] : true;
};
