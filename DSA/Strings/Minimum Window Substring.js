/*

Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

https://www.youtube.com/watch?v=jSto0O4AJbM

*/

var minWindow = function (s, t) {
  if (t === "") return "";
  const countT = {};
  const window = {};

  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }

  let have = 0;
  let need = Object.keys(countT).length;
  let result = [-1, -1];
  let resultLen = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;

    // additional check so that we dont worry about the other char that is not present in t
    if (c in countT && window[c] === countT[c]) {
      have++;
    }

    //  while loop so that we can shrink the window while the condition is met
    while (have === need) {
      // update our result
      // window size or length of current string
      const currLength = right - left + 1;
      if (currLength < resultLen) {
        result = [left, right];
        resultLen = currLength;
      }

      // remove from the left of our window and check if we need to update our have
      window[s[left]] -= 1;
      if (s[left] in countT && window[s[left]] < countT[s[left]]) {
        have--;
      }
      left++;
    }
  }

  return resultLen === Infinity ? "" : s.slice(result[0], result[1] + 1);
};
