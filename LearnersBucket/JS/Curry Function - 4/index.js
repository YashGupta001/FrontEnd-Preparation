/*

https://www.youtube.com/watch?v=qONGx06Z4_A&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=41

The curry function can keep on accepting arguments in the same or subsequent calls by returning a function. When the value() method is invoked or any primitive operation is performed then only the curry function returns the sum of all the arguments it has received.

*/

/*


function Temp(n) {
  this.number = n;
}

Temp.prototype.valueOf = function () {
  return this.number;
};

const s = new Temp(10);
console.log(s + 1);


*/

function add(...args) {
  const storage = args;

  function helper(...args2) {
    storage.push(...args2);
    return helper;
  }

  helper.valueOf = function () {
    return storage.reduce((a, b) => a + b, 0);
  };

  helper.value = helper.valueOf;

  return helper;
}

console.log(add(1, 2, 3).value() === 6); // true
console.log(add(1, 2)(3).value() === 6); // true
console.log(add(1)(2)(3).value() === 6); // true

console.log(add(1)(2) + 3); // 6
