/*

https://www.youtube.com/watch?v=2D0D8HE6uak

*/

// BRUTE FORCE: O(n2)

const arr = [4, 3, 6, 2, 1, 1];
// return the missing number and the repeating no

function repeatingMissing(arr) {
  let repeating = -1;
  let missing = -1;
  for (let i = 1; i <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        count++;
      }
    }

    if (count === 2) {
      repeating = i;
    } else if (count === 0) {
      missing = i;
    }

    if (missing !== -1 && repeating !== -1) {
      break;
    }
  }

  return [repeating, missing];
}

repeatingMissing(arr);

// Better : TC: (2n), SC: O(n)

function repeatingMissing(arr) {
  const hashArr = new Array(arr.length + 1).fill(0);
  let missing = -1,
    repeating = -1;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    hashArr[val]++;
  }

  for (let i = 1; i < hashArr.length; i++) {
    if (hashArr[i] === 0) {
      missing = i;
    } else if (hashArr[i] === 2) {
      repeating = i;
    }
    if (missing !== -1 && repeating !== -1) {
      break;
    }
  }

  return [repeating, missing];
}

repeatingMissing(arr);

// Optimal: with maths

function repeatingMissing(arr) {
  const n = arr.length;
  let missing = -1;
  let repeating = -1;

  // S - Sn (sum of array - sum of first n natural no) = x - y
  let SN = (n * (n + 1)) / 2;
  let SN2 = (n * (n + 1) * 2 * (n + 1)) / 6;
  // S2 - S2n (sum of square of array - sum of first n natural no square)

  let S = 0,
    S2 = 0;
  for (let i = 0; i < n; i++) {
    S += arr[i];
    S2 += arr[i] * arr[i];
  }

  let val1 = S - SN; // x - y
  let val2 = S2 - SN2;
  val2 = val2 / val1; // x + y

  repeating = (val1 + val2) / 2;
  missing = repeating - val1;

  return [repeating, missing];
}

repeatingMissing([4, 3, 6, 2, 1, 1]);
