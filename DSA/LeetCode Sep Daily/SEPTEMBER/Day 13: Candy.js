/*

https://leetcode.com/problems/candy/

https://www.youtube.com/watch?v=h6_lIwZYHQw

*/

// TC and SC: O(N) --> 2N

var candy = function (ratings) {
  let left2Right = new Array(ratings.length).fill(1);
  let right2Left = new Array(ratings.length).fill(1);
  let total = 0;

  for (let left = 1; left < ratings.length; left++) {
    if (ratings[left] > ratings[left - 1]) {
      left2Right[left] = left2Right[left - 1] + 1;
    }
  }

  for (let right = ratings.length - 2; right >= 0; right--) {
    if (ratings[right] > ratings[right + 1]) {
      right2Left[right] = right2Left[right + 1] + 1;
    }
  }

  for (let i = 0; i < ratings.length; i++) {
    total += Math.max(left2Right[i], right2Left[i]);
  }

  return total;
};

// can be written as

var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((a, b) => a + b, 0);
};
