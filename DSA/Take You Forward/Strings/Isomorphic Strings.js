/*

https://leetcode.com/problems/isomorphic-strings/description/

https://www.youtube.com/watch?v=ogTMIFPjNkQ

*/

// TC: O(n), SC: O(n)

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    const original = s[i];
    const replacement = t[i];

    if (!map.has(original)) {
      if (!set.has(replacement)) {
        map.set(original, replacement);
        set.add(replacement);
      } else {
        return false;
      }
    } else {
      const mappedChar = map.get(original);
      if (mappedChar !== replacement) {
        return false;
      }
    }
  }

  return true;
};
