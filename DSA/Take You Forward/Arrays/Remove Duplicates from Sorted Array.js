/*

https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/


*/

// brute force --> use new array which has unique characters and then move them in the same array: TC: O(N) + O(N)   SC: O(N)

// optimal use two pointers TC: O(n) SC: O(1)
var removeDuplicates = function (nums) {
  let pos = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  return pos;
};

// Remove duplicates from unsorted array
