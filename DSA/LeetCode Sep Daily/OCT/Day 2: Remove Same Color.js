/*

https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/

*/

var winnerOfGame = function (colors) {
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < colors.length; i++) {
    const currColor = colors[i];
    let count = 0;

    while (i < colors.length && colors[i] === currColor) {
      count++;
      i++;
    }

    if (currColor === "A") {
      countA += Math.max(count - 2, 0);
    }
    if (currColor === "B") {
      countB += Math.max(count - 2, 0);
    }

    i--;
  }

  return countA > countB;
};
