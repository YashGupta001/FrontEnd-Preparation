/*

https://www.youtube.com/watch?v=cIyvLL_HPY0 

https://www.youtube.com/watch?v=E7Ie6OlQgN4 --> watch

https://leetcode.com/problems/3sum/


Two Pointer Algo


Array: when the array is sorted, we need to think about the binary search or the two pointer


a + b + c = 0
fix a then b + c = 0 - a (now it converts into 2 sum problem)

*/

// TC: Sort --> O(nLogn) and twoSum is O(n) and we call it n times so its O(n2) --> total is O(n2) + O(nlogn) --> overall O(n2)
// SC: O(logn) to O(n) depending on the implementation of sorting algo

var threeSum = function (nums) {
  if (nums.length < 3) {
    return nums;
  }
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // a + b + c = 0, if a is fixed then b + c = 0 - 1 which is our target
    // skip duplicate a
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSumSorted(i + 1, nums.length - 1, nums, 0 - nums[i], result); // use the 2 sum for sorted array with tweek
    }
  }

  return result;
};

var twoSumSorted = function (b, c, nums, target, result) {
  let a = nums[b - 1];

  while (b < c) {
    // search space
    if (nums[b] + nums[c] > target) {
      c--;
    } else if (nums[b] + nums[c] < target) {
      b++;
    } else {
      let combinations = [];
      combinations.push(a);
      combinations.push(nums[b]);
      combinations.push(nums[c]);
      result.push(combinations);

      // in case b is duplicate

      while (b < c && nums[b] === nums[b + 1]) {
        b++;
      }

      // in case c is duplicate
      while (b < c && nums[c] === nums[c - 1]) {
        c--;
      }

      // we dont need to stop as need to find other combination for a
      b++;
      c--;
    }
  }
};
