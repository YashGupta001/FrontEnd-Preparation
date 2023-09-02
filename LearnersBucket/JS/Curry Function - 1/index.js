/*

https://www.youtube.com/watch?v=QJkltlNkmqs&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=37

The curry function returns a function that sums the input values of each of its invocations.

*/

function curry() {
  let total = 0;

  return function (value) {
    total += value;
    return total;
  };
}

let sum = curry();
sum(5); // 5
sum(3); // 8
sum(2); // 10
sum(5); // 15
