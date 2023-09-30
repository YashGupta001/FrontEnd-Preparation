/*

https://leetcode.com/problems/132-pattern/description/?envType=daily-question&envId=2023-09-30

https://leetcode.com/problems/132-pattern/solutions/4107421/99-35-stack-left-approach-binary-search/?envType=daily-question&envId=2023-09-30

*/

var find132pattern = function (nums) {
  let stack = [];
  let third = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < third) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      third = stack.pop();
    }
    stack.push(nums[i]);
  }

  return false;
};
