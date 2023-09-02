/*

https://leetcode.com/problems/pascals-triangle/description/

https://www.youtube.com/watch?v=bR7mQgwQ_o8




                                         1
                                      1     1
                                  1      2      1
                               1     3       3      1
                            1     4      6       4      1

In this there can be three types of problem:

1. Given the row and column what will be the element at that place ex: r= 5, c= 3 -->   6

2. Print any nth row of pascal triangle ex: n = 3 --> 1,3,3,1

3. Print the entire pascal traingle given n --> n = 5 print all as above diagram


*/

/* 1. Brute force can be create the pascal traingle and then see the row and col but there is a simple formula for it


Better:

  r-1, c- 1,  nCr = n! / r! * (n-r)!
 
  ex: r = 5, c = 3 --> r = 4, c = 2 --> 4C2 = 4! / 2! * (4-2)!  ------> 6



Shortcut: 7C2 --> 7 * 6 * 5 * 4 * 3 * 2 * 1 / 2 * 1 * (5 * 4 * 3 * 2 * 1) --> will only go upto r position
          10C3 --> 10 * 9 * 8 / 3 * 2 * 1 (shortcut)   --> 10/2 * 9/2 * 8/3

*/

// TC: O(r), SC: O(1)
const r = 5,
  c = 3; // as we start row by 1 and col by 2 not like array

function nCr(n, r) {
  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }

  return result;
}

nCr(r - 1, c - 1);

// 2. Print any nth row of pascal triangle ex: n = 3 --> 1,3,3,1
// Brute force TC: O(n * r), SC: O(1)

function print(n) {
  const result = [];
  for (let c = 1; c <= n; c++) {
    const val = nCr(n - 1, c - 1);
    result.push(val);
  }
  return result;
}

print(5);

// Better (see image) TC: O(n), SC: O(1)

function print(n) {
  const result = [1];
  let ans = 1;
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    result.push(ans);
  }
  return result;
}

print(5);

// 3. Print the entire pascal traingle given  1 ---> n

// brute force using the formula r-1Cc-1 , tc: O(n*n*r) ~ O(n3), SC: O(1)

var generate = function (numRows) {
  const result = [];
  for (let row = 1; row <= numRows; row++) {
    let current = [];
    for (let col = 1; col <= row; col++) {
      current.push(nCr(row - 1, col - 1));
    }
    result.push(current);
  }
  return result;
};

// Better O(n2)

var generate = function (numRows) {
  const result = [];
  for (let row = 1; row <= numRows; row++) {
    result.push(print(row));
  }
  return result;
};

// Better Leetcode: O(n2)

var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < numRows; i++) {
    let currRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }

    result.push(currRow);
  }

  return result;
};
