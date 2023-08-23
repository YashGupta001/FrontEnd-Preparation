/*

 Longest Palindromic Substring

https://www.youtube.com/watch?v=XYQecbcd6_c



 https://leetcode.com/problems/longest-palindromic-substring/description/


*/

// There is one more way to check the palindrome lets say like going outwards     a <--  b -->   a but it will fail in abba edge case
// https://www.youtube.com/watch?v=XYQecbcd6_c

function longestPalindrome(characters) {
  let result = characters[0];

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    // while characters to left and right of current character are the same
    let leftIndex = i;
    let rightIndex = i;
    while (
      characters[leftIndex] === characters[rightIndex] &&
      leftIndex >= 0 &&
      rightIndex <= characters.length - 1
    ) {
      const stringPart = characters.slice(leftIndex, rightIndex + 1);
      result = stringPart.length > result.length ? stringPart : result;

      leftIndex--;
      rightIndex++;
    }

    leftIndex = i;
    rightIndex = i + 1;
    while (
      characters[leftIndex] === characters[rightIndex] &&
      leftIndex >= 0 &&
      rightIndex <= characters.length - 1
    ) {
      const stringPart = characters.slice(leftIndex, rightIndex + 1);
      result = stringPart.length > result.length ? stringPart : result;

      leftIndex--;
      rightIndex++;
    }
  }

  return result;
}
