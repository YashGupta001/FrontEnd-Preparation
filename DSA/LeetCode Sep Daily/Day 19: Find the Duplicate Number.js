/*

https://leetcode.com/problems/find-the-duplicate-number/?envType=daily-question&envId=2023-09-19

*/

var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      let pointer = 0;

      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }

      return slow;
    }
  }
};
