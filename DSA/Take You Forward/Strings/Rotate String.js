/*

https://leetcode.com/problems/rotate-string/description/

*/

// TC: O(n2)

var rotateString = function (s, goal) {
  if (s === goal) return true;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true;
  }

  return false;
};

//

var rotateString = function (s, goal) {
  let str = s.repeat(2);
  return s.length == goal.length ? str.includes(goal) : false;
};
