/*

https://www.youtube.com/watch?v=eZr-6p0B7ME

Find the number of subarrays with XOR as K


4 ^ 6

100
110
_____
010 --> 2

*/

const arr = [4, 2, 2, 6, 4];
const k = 6;

/*

ans = 4
[4,2]   4 ^ 2 --> 6
[6]
[2,2,6]
[4,2,2,6,4]

*/

// Brure force: TC: O(n2), SC:O(1)

function xor(arr, k) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    let XOR = 0;
    for (let j = i; j < arr.length; j++) {
      XOR = XOR ^ arr[j];

      if (XOR === k) {
        ans++;
      }
    }
  }

  return ans;
}

xor(arr, k);

// Optimal Solutin: TC:O(n), SC:O(n)

// x ^ k = xr , x^k^k = xr ^ k, x = xr ^ k

function xor(arr, k) {
  let count = 0;
  let xr = 0;
  let frontMap = { 0: 1 };

  for (let i = 0; i < arr.length; i++) {
    xr = xr ^ arr[i];
    const x = xr ^ k;
    if (frontMap[x]) {
      count += frontMap[x];
    }
    frontMap[xr] = (frontMap[xr] || 0) + 1;
  }

  return count;
}

xor(arr, k);
