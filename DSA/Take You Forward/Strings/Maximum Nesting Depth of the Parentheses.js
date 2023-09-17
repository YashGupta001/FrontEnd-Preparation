/*

https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

https://www.youtube.com/watch?v=IOQi3aJFIaM

*/

var maxDepth = function (s) {
  let maxCount = 0,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      maxCount = Math.max(maxCount, ++count);
    } else if (s[i] === ")") {
      count--;
    }
  }
  return maxCount;
};
