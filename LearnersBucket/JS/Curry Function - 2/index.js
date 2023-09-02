/*

https://www.youtube.com/watch?v=7me5z_QNN1M&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=39

The curry function returns a function that sums the input values of each of its invocations until any of the functions does not receive an argument.

*/

function sum(...args) {
  const argumenList = [...args];
  if (args.length === 0) return 0;

  const temp = function (...args2) {
    argumenList.push(...args2);

    if (args2.length === 0) {
      return argumenList.reduce((a, b) => a + b, 0);
    } else {
      return temp;
    }
  };

  return temp;
}

let totalZero = sum();
console.log(totalZero); // 0

let total = sum(10)(20)(30)(40)();
console.log(total); // 100

let total1 = sum(10, 20, 30)(40)();
console.log(total1); // 100

let total2 = sum(10, 20)(30, 40)();
console.log(total1); // 100
