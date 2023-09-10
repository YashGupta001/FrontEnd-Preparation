/*

https://www.youtube.com/watch?v=Z0hwjftStI4

You have to allocate the book to m students such that the maximum number of pages assigned to a student is minimum
If the allocation is not possible return - 1

const arr = [25,46,28,49,24]
const students = 4

*/

// TC: O(sum - max * n)

const arr = [25, 46, 28, 49, 24];
const students = 4;

function bookAllocation(arr, students) {
  let low = Math.max(...arr);
  let high = arr.reduce((acc, value) => {
    return acc + value;
  }, 0);

  for (let pages = low; pages <= high; pages++) {
    const countStudents = getStudents(arr, pages);
    if (countStudents === students) {
      return pages;
    }
  }

  return -1;
}

function getStudents(arr, maxPages) {
  let students = 1;
  let pagesStudent = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= maxPages) {
      pagesStudent += arr[i];
    } else {
      pagesStudent = arr[i];
      students++;
    }
  }

  return students;
}

bookAllocation(arr, students);

// TC: O(log sum - max * n)

function bookAllocation(arr, students) {
  if (students > arr.length) return -1;
  let low = Math.max(...arr);
  let high = arr.reduce((acc, value) => {
    return acc + value;
  }, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const countStudents = getStudents(arr, mid);
    if (countStudents > students) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

function getStudents(arr, maxPages) {
  let students = 1;
  let pagesStudent = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= maxPages) {
      pagesStudent += arr[i];
    } else {
      pagesStudent = arr[i];
      students++;
    }
  }

  return students;
}

bookAllocation(arr, students);
