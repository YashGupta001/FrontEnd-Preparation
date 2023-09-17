/*

 https://leetcode.com/problems/longest-palindromic-substring/description/


 https://www.youtube.com/watch?v=lo8n0ivbhog


*/

var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i);
    let evenPalindrome = expandFromCenter(s, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
};

var expandFromCenter = function (s, left, right) {
  let pal = "";

  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }

  return s.slice(left + 1, right);
};
