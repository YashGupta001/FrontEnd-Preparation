/*

https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/

*/

// TC: O(n2)

var beautySum = function (s) {
  let beauty = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = {};
    for (let j = i; j < s.length; j++) {
      seen[s[j]] = (seen[s[j]] || 0) + 1;
      beauty += getDiff(seen);
    }
  }

  return beauty;
};

var getDiff = function (freqMap) {
  let mf = -1;
  let lf = Infinity;

  for (let key in freqMap) {
    const val = freqMap[key];
    if (mf < val) mf = val;
    if (lf > val) lf = val;
  }

  return mf - lf;
};
