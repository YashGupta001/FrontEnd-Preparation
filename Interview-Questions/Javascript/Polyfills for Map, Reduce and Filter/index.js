/*

https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2

Whats is Map?

The map method is used to create a new array from an existing array by applying the function to each one of the element to original array 

*/

const nums = [1, 2, 3, 4];
const multipleBy3 = nums.map((num, i, arr) => num * 3);

// Filter method takes each element in an array and it applies a conditional statement against it, if the condition returns true then the element is pushed in the output array (create a new array)

const moreThan2 = nums.filter((num, i, arr) => num > 2);

// Reduce: It reduces the array of values down to just one value, it receives two things the accumulator and the element

const sum = nums.reduce((acc, current, i, array) => acc + current, 0); // accumulator is the result of previous computation

const sum1 = nums.reduce((acc, current, i, array) => acc + current); // If the initial value is not present then it takes the first value as the initial value and current will start from second value

// Polyfill for Map

Array.prototype.myMap = function (cb) {
  const temp = [];

  // nums.map so this points to nums
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// Polyfill for Filter

Array.prototype.myFilter = function (cb) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(cb(this[i]));
    }
  }

  return temp;
};

// Reduce

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

// map vs forEach (these both the array functions to loop through items array)

const arr = [2, 5, 3, 4, 6];
arr.map((num) => num + 1); // it does not modify the actual array   .map().split()

arr.forEach((num) => num + 1); // it modifies the actual array and does not return anything and we can not chain them like map

// Return only names of student who score more than 60

const students = [
  { name: "Yash Gupta", marks: 94 },
  { name: "Yash Gupta 1", marks: 60 },
  { name: "Yash Gupta 2", marks: 61 },
  { name: "Yash Gupta 3", marks: 50 },
];

students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
