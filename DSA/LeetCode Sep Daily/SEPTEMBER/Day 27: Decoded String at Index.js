/*

https://leetcode.com/problems/decoded-string-at-index/?envType=daily-question&envId=2023-09-27

https://www.youtube.com/watch?v=6iE7QJRMXzs

https://leetcode.com/problems/decoded-string-at-index/solutions/4094647/97-47-reverse-traversal/?envType=daily-question&envId=2023-09-27

We dont want to create a string as it can be very large so we need to do it without using any space

*/

var decodeAtIndex = function (s, k) {
  let length = 0;
  let i = 0;

  while (length < k) {
    if (!isNaN(s[i])) {
      length *= Number(s[i]);
    } else {
      length++;
    }
    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(s[j])) {
      length /= Number(s[j]);
      k %= length;
    } else {
      if (k === 0 || k === length) {
        return s[j];
      }
      length--;
    }
  }

  return "";
};
