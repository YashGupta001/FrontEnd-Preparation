/*

https://leetcode.com/problems/two-sum/

*/

var twoSum = function (nums, target) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    let find = target - nums[i];
    if (seen[find] || seen[find] === 0) {
      return [seen[find], i];
    } else {
      seen[nums[i]] = i;
    }
  }

  return [];
};
