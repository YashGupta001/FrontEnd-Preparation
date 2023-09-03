/*

https://leetcode.com/problems/4sum/description/

https://www.youtube.com/watch?v=eD95WRfh81c

*/

// Brute force: Same as 3sum TC: O(n4)

// better same like 3sum : l = target - (i + j + k)  TC: O(n3)  use seen SC: O(n)

// need to remove duplicates
var fourSum = function (nums, target) {
  if (nums.length < 4) return nums;
  const quadruplets = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const seen = {};
      for (let k = j + 1; k < nums.length; k++) {
        const find = target - (nums[i] + nums[j] + nums[k]);
        if (seen[find]) {
          quadruplets.push([nums[i], nums[j], nums[k], find]);
        }
        seen[nums[k]] = true;
      }
    }
  }

  return quadruplets;
};

// optimal, TC: O(n3)  SC: O(1)

var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  const quadruplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      k = j + 1;
      l = nums.length - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;

          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        }
      }
    }
  }

  return quadruplets;
};
