/*

Valid Anagram

https://leetcode.com/problems/valid-anagram/description/


*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charMap = {};

  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charMap[char]) return false;
    charMap[char]--;
  }

  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

isAnagram("abcdB", "cdabB");
