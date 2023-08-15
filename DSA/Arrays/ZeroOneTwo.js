/*

https://leetcode.com/problems/sort-colors/

https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1 

*/

var sortColors = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  let k = i;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
      [nums[k], nums[j]] = [nums[j], nums[k]];
      k++;
    }
  }
};

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};
