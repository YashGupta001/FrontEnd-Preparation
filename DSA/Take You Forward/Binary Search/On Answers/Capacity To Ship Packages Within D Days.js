/*

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

https://www.youtube.com/watch?v=MG-Ac4TAvTY

*/

// BRUTE FORCE: TC: O(arr[max] * n)

var shipWithinDays = function (weights, days) {
  const min = Math.max(...weights);
  const max = weights.reduce((acc, no) => {
    return acc + no;
  }, 0);

  for (let capacity = min; capacity <= max; capacity++) {
    const daysRequired = getDays(weights, capacity);
    if (daysRequired <= days) {
      return capacity;
    }
  }

  return -1;
};

var getDays = function (weights, capacity) {
  let day = 1;
  let load = 0;

  for (let i = 0; i < weights.length; i++) {
    if (load + weights[i] > capacity) {
      day++;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }

  return day;
};

// Optimal: TC: O(log arr[max] * N)

var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((acc, no) => {
    return acc + no;
  }, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const daysRequired = getDays(weights, mid);
    if (daysRequired <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

var getDays = function (weights, capacity) {
  let day = 1;
  let load = 0;

  for (let i = 0; i < weights.length; i++) {
    if (load + weights[i] > capacity) {
      day++;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }

  return day;
};
