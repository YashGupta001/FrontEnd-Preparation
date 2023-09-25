/*

https://leetcode.com/problems/subsets-ii/description/

https://www.youtube.com/watch?v=RIn3gOkbhQE

*/

// brute force: generate all the subsets and then remove duplicates
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  function helper(idx, subset) {
    if (idx >= nums.length) {
      result.push(subset);
      return;
    }
    // pick
    helper(idx + 1, [...subset, nums[idx]]);
    // not pick
    helper(idx + 1, subset);
  }

  helper(0, []);
  // remove duplicates array from array
  const ans = Array.from(new Set(result.map(JSON.stringify)), JSON.parse);

  return ans;
};

// optimal
var subsetsWithDup = function (nums) {
  const res = [];

  function findSubset(arr, curr) {
    res.push([...curr]);
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || arr[i] != arr[i - 1]) {
        curr.push(arr[i]);
        findSubset(arr.slice(i + 1), curr);
        curr.pop();
      }
    }
  }

  nums.sort((a, b) => a - b);
  findSubset(nums, []);
  return res;
};
