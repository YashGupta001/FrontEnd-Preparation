/*

https://leetcode.com/problems/reverse-words-in-a-string-iii/?envType=daily-question&envId=2023-10-01

*/

var reverseWords = function (s) {
  s = s.split(" ");

  for (let word = 0; word < s.length; word++) {
    s[word] = reverseString(s[word]);
  }

  return s.join(" ");
};

var reverseString = function (word) {
  word = word.split("");
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
  return word.join("");
};
