/*

https://www.youtube.com/watch?v=ERY9mSPpIOA&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=6

Get different object property value in each access


let obj = {
    i: 0
}

obj.i --> 1
obj.i --> 2
obj.i --> 3
obj.i --> 4


This can be solved by Proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

*/

let obj = {
  i: 0,
};

// obj = new Proxy(obj, {
//   get: (target, property) => {
//     if (property === "i") {
//       target[property] = target[property] + 1;
//       return target[property];
//     }
//   },
// });

// similar way we can also has the set

obj = new Proxy(obj, {
  get: (target, property) => {
    if (property === "i") {
      target[property] = target[property] + 1;
      return target[property];
    }
  },
  set: (target, property, value) => {
    if (property === "j") {
      if (value > 10) {
        target[property] = value;
      } else {
        throw RangeError("Value should be greater than 10");
      }
    }
    return target[property];
  },
});

console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
console.log(obj.i);
obj.j = 10;

// This is how we can use the proxy to modify the value of property when it is accessed
