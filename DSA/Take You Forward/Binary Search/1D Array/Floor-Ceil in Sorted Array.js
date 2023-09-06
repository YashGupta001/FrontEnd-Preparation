/*

https://www.youtube.com/watch?v=6zhGS79oQ4k

Floor: The largesrt no in sorted array <= x

Ceil: Smallest no in the array >= x

const arr = [10, 20, 30, 40, 50]
X = 25


Floor:20
Ceil:  30


*/

function ceilCheck(arr, x) {
  let ceil = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      ceil = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ceil;
}

ceilCheck([10, 20, 30, 40, 50], 25);

function floorCheck(arr, x) {
  let floorIdx = arr.length;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= x) {
      floorIdx = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return floorIdx;
}

floorCheck([10, 20, 30, 40, 50], 25);
