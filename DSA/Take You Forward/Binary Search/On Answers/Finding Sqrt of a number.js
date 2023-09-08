/*

https://www.youtube.com/watch?v=Bsv3FPUX_BA

return the integer value or the floor value


30 --> 5
25 --> 5


*/

// brute force: O(n)

function squareRoot(n) {
  let ans = 1;

  for (let i = 0; i <= n; i++) {
    if (i * i <= n) {
      ans = i;
    } else {
      break;
    }
  }

  return ans;
}

// optimal: O(logn)

function squareRoot(n) {
  let low = 1;
  let high = n;
  let ans = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = mid * mid;
    if (value <= n) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}
