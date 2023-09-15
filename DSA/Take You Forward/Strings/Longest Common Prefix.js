/*

https://leetcode.com/problems/longest-common-prefix/description/

https://www.youtube.com/watch?v=wtOQaovlvhY

*/

// BRUTE FORCE: O(n2)

var longestCommonPrefix = function (strs) {
  let output = "";
  let start = 0;

  while (start < strs[0].length) {
    let prev = strs[0][start];

    for (let i = 1; i < strs.length; i++) {
      let letter = strs[i][start];

      if (letter !== prev) {
        return output;
      }
    }

    output += prev;
    start++;
  }

  return output;
};

// Optimal Solution: O(n) After sporting we can just compare first and last letter in the string

var longestCommonPrefix = function (strs) {
  strs.sort();
  let output = "";

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      output += strs[0][i];
    } else {
      return output;
    }
  }

  return output;
};
