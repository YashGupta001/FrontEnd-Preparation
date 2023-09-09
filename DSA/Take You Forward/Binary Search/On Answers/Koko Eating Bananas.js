/*

https://www.youtube.com/watch?v=qyfekrNni90

https://leetcode.com/problems/koko-eating-bananas/

*/

// BRUTE FORCE: TC: O(max element * n) --> more than n2

var minEatingSpeed = function (piles, h) {
  let maxPile = piles[0];
  for (let i = 0; i < piles.length; i++) {
    if (maxPile < piles[i]) {
      maxPile = piles[i];
    }
  }

  for (let i = 1; i <= maxPile; i++) {
    let requireTime = getRequireTime(piles, i);
    if (requireTime <= h) {
      return i;
    }
  }
};

var getRequireTime = function (piles, bananaPerHour) {
  let timeNeeded = 0;

  for (let i = 0; i < piles.length; i++) {
    const banana = piles[i];
    timeNeeded += Math.ceil(banana / bananaPerHour);
  }

  return timeNeeded;
};

// optimal: TC: O(log max element * n)

var minEatingSpeed = function (piles, h) {
  let k = Infinity;
  let low = 1;
  let high = piles[0];
  for (let i = 0; i < piles.length; i++) {
    if (high < piles[i]) {
      high = piles[i];
    }
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let requireTime = getRequireTime(piles, mid);
    if (requireTime <= h) {
      k = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return k;
};

var getRequireTime = function (piles, bananaPerHour) {
  let timeNeeded = 0;

  for (let i = 0; i < piles.length; i++) {
    const banana = piles[i];
    timeNeeded += Math.ceil(banana / bananaPerHour);
  }

  return timeNeeded;
};

// OR return low

var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = piles[0];
  for (let i = 0; i < piles.length; i++) {
    if (high < piles[i]) {
      high = piles[i];
    }
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let requireTime = getRequireTime(piles, mid);
    if (requireTime <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

var getRequireTime = function (piles, bananaPerHour) {
  let timeNeeded = 0;

  for (let i = 0; i < piles.length; i++) {
    const banana = piles[i];
    timeNeeded += Math.ceil(banana / bananaPerHour);
  }

  return timeNeeded;
};
