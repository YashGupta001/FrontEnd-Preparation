/*

PAttern: min(max) or max(min)

https://www.youtube.com/watch?v=R_Mfw4ew-Vo


Aggressive Cows (Minimum distance between cows) is max

const arr  = [0, 3, 4, 7, 10, 9]
cows = 4

Place 4 cows in such a way that the minimum distance between any cows is max

*/

// TC: O(max - min * n)

const arr = [0, 3, 4, 7, 10, 9];
const cows = 4;

function aggressiveCows(arr, cows) {
  arr.sort((a, b) => a - b);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = 1; i <= max - min; i++) {
    if (canCowsPlaced(arr, i, cows)) {
      continue;
    } else {
      return i - 1;
    }
  }
  return -1;
}

function canCowsPlaced(stales, dis, cows) {
  let countCows = 1;
  let lastCow = stales[0];

  for (let i = 1; i < stales.length; i++) {
    if (stales[i] - lastCow >= dis) {
      countCows++;
      lastCow = stales[i];
    }
  }

  return countCows >= cows;
}

aggressiveCows(arr, cows);

// Optimal: TC: O(log max * n)

function aggressiveCows(arr, cows) {
  arr.sort((a, b) => a - b);
  let low = 1;
  let high = arr[arr.length - 1] - arr[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canCowsPlaced(arr, mid, cows)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

function canCowsPlaced(stales, dis, cows) {
  let countCows = 1;
  let lastCow = stales[0];

  for (let i = 1; i < stales.length; i++) {
    if (stales[i] - lastCow >= dis) {
      countCows++;
      lastCow = stales[i];
    }
  }

  return countCows >= cows;
}
