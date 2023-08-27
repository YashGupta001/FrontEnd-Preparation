/*

https://leetcode.com/problems/majority-element/

https://www.youtube.com/watch?v=AoX3BPWNnoE

Boyer-Moore Voting Algorithm

*/

var majorityElement = function (nums) {
  let count = 0,
    candidate;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
