/*

https://www.youtube.com/watch?v=wvcQg43_V8U

Intersection means the element that is present in both arrays

Example:

const arr1 = [1,1,2,2,3,4,5,7]
consr arr2 = [2,2,3,6,7]
output: [2,2,3,7]



*/

// Brute force TC: O(n * m)  SC: O(n)
function intersectionArr(a, b) {
  const visited = new Array(b.length).fill(0);
  const intersection = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] && visited[j] === 0) {
        intersection.push(a[i]);
        visited[j] = 1;
        break;
      }

      if (b[j] > a[i]) break;
    }
  }
  return intersection;
}

intersectionArr([1, 1, 2, 2, 3, 4, 5, 7], [2, 2, 3, 6, 7]);

// Optimal TC: O(n + m)  SC: O(1) only using minimal to return the answer only
function intersectionArr(a, b) {
  const intersection = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < a.length && p2 < b.length) {
    console.log("pointer", p1, p2);
    console.log("value", a[p1], b[p2]);

    if (a[p1] < b[p2]) {
      p1++;
    } else if (b[p2] < a[p1]) {
      p2++;
    } else {
      intersection.push(a[p1]);
      p1++;
      p2++;
    }

    console.log("_____________________");
  }
  return intersection;
}

intersectionArr([1, 1, 2, 2, 3, 4, 5, 7], [2, 2, 3, 6, 7]);
