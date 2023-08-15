/*

Sheet: 60

https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/
https://www.youtube.com/watch?v=dlt9Gyq6rb0&list=PLDdcY4olLQk0A0o2U0fOUjmO2v3X6GOxX&index=1 

Input: S1 = ABCD, S2 = CDAB
Output: Strings are rotations of each other

Input: S1 = ABCD, S2 = ACBD
Output: Strings are not rotations of each other

*/

function validRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  let newStr = s1 + s1;
  if (newStr.includes(s2)) {
    return true;
  }
  return false;
}
