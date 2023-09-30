/*

https://leetcode.com/problems/remove-duplicate-letters/?envType=daily-question&envId=2023-09-26

https://leetcode.com/problems/remove-duplicate-letters/solutions/4091060/video-how-we-think-about-a-solution-stack-python-javascript-java-c/?envType=daily-question&envId=2023-09-26

https://leetcode.com/problems/remove-duplicate-letters/solutions/4090711/98-53-stack-and-greedy/?envType=daily-question&envId=2023-09-26

https://www.youtube.com/watch?v=2NGFucebfDk

*/

var removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = new Set();
  const lastOcc = {};

  for (let i = 0; i < s.length; i++) {
    lastOcc[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!seen.has(char)) {
      while (
        stack.length &&
        char < stack[stack.length - 1] &&
        i < lastOcc[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop());
      }
      seen.add(char);
      stack.push(char);
    }
  }

  return stack.join("");
};
