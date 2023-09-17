/*

https://leetcode.com/problems/roman-to-integer/

https://www.youtube.com/watch?v=3QH-rpcoAoI

*/

var romanToInt = function (s) {
  const myMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = myMap[s[i]];
    let next = myMap[s[i + 1]];

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
};
