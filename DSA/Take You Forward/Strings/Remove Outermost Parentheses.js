/*

Remove Outermost Parentheses

https://leetcode.com/problems/remove-outermost-parentheses/

*/

var removeOuterParentheses = function (S) {
  let parenthesesCount = 0;
  let result = "";

  for (let s of S) {
    if (s === "(") {
      if (parenthesesCount) {
        result += s;
      }
      parenthesesCount++;
    } else {
      parenthesesCount--;
      if (parenthesesCount) {
        result += s;
      }
    }
  }

  return result;
};
