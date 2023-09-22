/*

https://leetcode.com/problems/powx-n/

https://www.youtube.com/watch?v=l0YC3876qxg

*/

// Iterative Brute force: TC: O(n)

var myPow = function (x, n) {
  let ans = 1;

  for (let i = 1; i <= Math.abs(n); i++) {
    ans = ans * x;
  }

  return n < 0 ? 1 / ans : ans;
};

// Iterative Optimal: TC: O(logn)

var myPow = function (x, n) {
  let ans = 1;
  let pow = Math.abs(n);

  while (pow > 0) {
    // if pow is odd
    if (pow % 2 === 1) {
      ans = ans * x;
      pow = pow - 1;
    } else {
      x = x * x;
      pow = pow / 2;
    }
  }

  return n < 0 ? 1 / ans : ans;
};

// Recursion

var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};
