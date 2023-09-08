/*

https://www.youtube.com/watch?v=rjEJeYCasHs

Find the Nth root of M

n = 3 , m = 27  --> ans: 3

n = 4, m = 69 --> ans: -1

*/

//TC: O(m * logn)

function nthRoot(n, m) {
  let ans = -1;

  for (let i = 1; i <= m; i++) {
    if (Math.pow(i, n) === m) {
      ans = i;
      break;
    }
    if (Math.pow(i, n) > m) break;
  }

  return ans;
}

//optimal tc: O(logm * logn)

function calculatePower(number, power) {
  let ans = 1;
  while (power > 0) {
    if (power % 2 === 1) {
      ans = ans * number;
      power--;
    } else {
      number = number * number;
      power = power / 2;
    }
  }

  return ans;
}

function nthRoot(n, m) {
  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = calculatePower(mid, n);
    if (value === m) {
      return mid;
    } else if (value > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// in case the value is so large then

function calculate(mid, n, m) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * mid;
    if (ans > m) return 2;
  }

  if (ans === m) return 1;

  return 0;
}

function nthRoot(n, m) {
  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = calculate(mid, n, m);
    if (value === 1) {
      return mid;
    } else if (value > 2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
