/*

Leaders in an Array problem (everything on the right should be smaller)

https://www.youtube.com/watch?v=cHrH9CQ8pmY

const arr = [10,22,12,3,0,6]

output -> [22,12,6]


*/

// BRUTE FORCE: TC: O(n2), havent used any extra space to solve the problem but used to store the output if you want to condiser that thn O(n)

const arr = [10, 22, 12, 3, 0, 6];

function leader(arr) {
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

leader(arr);

// Optimal: O(n)

function leader(arr) {
  const leaders = [];
  let maxNumber = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxNumber) {
      leaders.push(arr[i]);
    }
    maxNumber = Math.max(maxNumber, arr[i]);
  }

  return leaders;
}

leader(arr);
