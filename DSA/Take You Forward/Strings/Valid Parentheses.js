/*

https://leetcode.com/problems/valid-parentheses/

*/

var isValid = function (s) {
  const params = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // it will tell if we have a opening param as it checks to find the key
    if (s[i] in params) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = params[leftBracket];

      if (s[i] !== correctBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
