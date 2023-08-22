/*

Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

https://www.youtube.com/watch?v=qtVh-XEpsJo


*/

//1. broute force 2 nested loops

//2.  using two pointer with map tc: O(2N) , sc: O(n)

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  let left = 0;
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    const curr = s[right];
    if (map.has(curr)) {
      while (map.has(curr)) {
        map.delete(map.keys().next().value); // working as map retain the orders of the keys
        left++;
      }
    }
    map.set(curr, right);
    longest = Math.max(right - left + 1, longest);
    right++;
  }

  return longest;
};

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  let left = 0;
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    const curr = s[right];
    if (map.has(curr)) {
      while (map.has(curr)) {
        map.delete(s[left]); // removed the last left element
        left++;
      }
    }
    map.set(curr, right);
    longest = Math.max(right - left + 1, longest);
    right++;
  }

  return longest;
};

//3. more optimal TC: O(N)

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  let left = 0;
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    const curr = s[right];
    if (map.has(curr)) {
      left = map.get(curr) + 1;
    }
    map.set(curr, right);
    longest = Math.max(right - left + 1, longest);
    right++;
  }

  return longest;
};

// best

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  let left = 0;
  const seen = {};

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    let lastSeen = seen[char];

    if (lastSeen >= left) {
      left = lastSeen + 1;
    }

    seen[char] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};
