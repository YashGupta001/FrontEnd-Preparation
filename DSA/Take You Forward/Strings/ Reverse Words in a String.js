/*

https://leetcode.com/problems/reverse-words-in-a-string/description/

https://www.youtube.com/watch?v=g9xgkIjfpWY

*/

var reverseWords = function (s) {
  let output = "";
  let i = s.length - 1;

  while (i >= 0) {
    while (i >= 0 && s[i] === " ") i--;
    let j = i;
    if (i < 0) break;
    while (i >= 0 && s[i] !== " ") i--;

    if (output === "") {
      output += s.substring(i + 1, j + 1);
    } else {
      output += " " + s.substring(i + 1, j + 1);
    }
  }
  return output;
};
