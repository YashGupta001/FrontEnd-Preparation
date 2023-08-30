/*

https://www.youtube.com/watch?v=wvcQg43_V8U

Union of Sorted Arrays (means merge both the arrays)


Example:

const arr1 = [1,1,2,2,3,4,5,6]
consr arr2 = [2,3,6, 7]
output: [1,2,3,4,5,6, 7]

*/

// brute force
function unionSortedArr(arr1, arr2) {
  const new1 = [...new Set(arr1)];
  const new2 = [...new Set(arr2)];
  const mergedArr = [...new1, ...new2];

  return [...new Set(mergedArr)];
}

unionSortedArr([1, 1, 2, 2, 3, 4, 5, 6], [2, 3, 6, 7]);

// optimal   TC: O(n +m), SC: O(n + m) to return the answer not for the algorithm

function unionSortedArr(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const union = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[p1]) {
        union.push(arr1[p1]);
      }
      p1++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[p2]) {
        union.push(arr2[p2]);
      }
      p2++;
    }
  }

  while (p1 < arr1.length) {
    if (union.length === 0 || union[union.length - 1] !== arr1[p1]) {
      union.push(arr1[p1]);
    }
    p1++;
  }

  while (p2 < arr2.length) {
    if (union.length === 0 || union[union.length - 1] !== arr2[p2]) {
      union.push(arr2[p2]);
    }
    p2++;
  }

  return union;
}

unionSortedArr([1, 1, 2, 2, 3, 4, 5, 6], [2, 3, 6, 7]);
