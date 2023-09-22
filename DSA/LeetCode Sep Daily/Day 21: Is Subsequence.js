/*

https://leetcode.com/problems/is-subsequence/?envType=daily-question&envId=2023-09-22

*/

var isSubsequence = function (s, t) {
  if (s === "") return true;
  if (s.length > t.length) return false;
  let idx = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[idx]) {
      idx++;
    }
  }

  return s.length === idx;
};
