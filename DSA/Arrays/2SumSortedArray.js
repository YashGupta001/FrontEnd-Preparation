/*

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


*/

var twoSum = function (nums, target) {
  let p1 = 0;
  let p2 = nums.length - 1;

  while (nums[p1] + nums[p2] !== target) {
    if (nums[p1] + nums[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [p1 + 1, p2 + 1];
};
