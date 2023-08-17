/*

https://www.youtube.com/watch?v=jL6fLgf9Urw&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=16 

2 piping related question for JavaScript Interview


Piping in a concept in JS in which either we pass a value through multiple functions or in an object we can have multiple functions and to that we can pass the same values and we can get the result and store it



const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary, // the result of first function is passed to the another function in pipe
  addBonus,
  deductTax 
)(val);

console.log(result);



Note: function x() {
    return () => {}   // we can use the anonomyous function in case if we dont need to call it recursively
}


*/

const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const pipe = (...fns) => {
  return (val) => {
    fns.forEach((fn) => {
      val = fn(val);
    });

    return val;
  };
};

const result = pipe(getSalary, addBonus, deductTax)(val);

console.log(result);

// second question

const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

const pipe2 = (obj) => {
  return (...args) => {
    for (let key in obj) {
      const val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = pipe2(val)(...args);
      }
    }

    return obj; // returning as we are recursively call the pipe
  };
};

console.log(pipe2(obj)(1, 1, 1));

// if any value is not a function then it will be untouched
const obj1 = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: true,
};

const pipe3 = (obj) => {
  return (...args) => {
    for (let key in obj) {
      const val = obj[key];
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = pipe3(val)(...args);
      }
    }

    return obj;
  };
};

console.log(pipe3(obj1)(1, 1, 1));
