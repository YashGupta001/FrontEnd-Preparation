/*

https://leetcode.com/problems/find-the-difference/description/?envType=daily-question&envId=2023-09-25

*/

var findTheDifference = function (s, t) {
  let x = 0;

  for (const char of s) {
    x ^= char.charCodeAt();
  }

  for (const char of t) {
    x ^= char.charCodeAt();
  }

  return String.fromCharCode(x);
};
