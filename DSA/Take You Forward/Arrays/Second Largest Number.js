/*

https://www.codingninjas.com/studio/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

*/

// Brute force Sort and find from last if duplicate then loop from end and check if arr[i] !=== largest then it will be second largest --> TC: nlogn + n

// Better --> first pass find the largest and then another pass to find the second largest --> TC: O(n) + O(n)

// Optimal solution --> TC: O(n)
function secondLargestElement(arr) {
  let firstLargest = -Infinity; // or put arr[0] and start loop from i = 1
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (secondLargest < arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

secondLargestElement([5, 16, 12, 34, 20, 18]);
