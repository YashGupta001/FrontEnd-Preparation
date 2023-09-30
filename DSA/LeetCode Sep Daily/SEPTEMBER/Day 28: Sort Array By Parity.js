/*

https://leetcode.com/problems/sort-array-by-parity/?envType=daily-question&envId=2023-09-28

*/

// my

var sortArrayByParity = function (nums) {
  let currIdx = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[currIdx];
      nums[currIdx] = nums[i];
      nums[i] = temp;
      currIdx++;
    }
  }

  return nums;
};
