/*

https://www.youtube.com/watch?v=7CffAoGhKpo&list=PLDdcY4olLQk3zG-972eMoDJHLIz3FiGA6&index=3 

https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/ 


Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35


*/

function maxMin(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return [min, max];
}

maxMin([3, 5, 4, 1, 9]);
