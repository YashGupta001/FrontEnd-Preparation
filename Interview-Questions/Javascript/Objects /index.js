/*

https://www.youtube.com/watch?v=XnFIX3c7xoI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=6

*/

//1.  Whats the output?

function name(a) {
  delete a;
  return a;
}

const nameFunc = name(5);

console.log(nameFunc);

const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);

// 2.  How to add the property like: like this video as a key

const user = {
  name: "Yash Gupta",
  age: 24,
  // like this video: true // for this we need to keep this inside the double quotes
  "like this video": true,
};

// now how to access the above key ? can not use the . notation here

user["like this video"];

// for delete also we need to use in the same way

delete user["like this video"];

// how to add dynamic key value pairs in object

const property = "firstName";
const names = "Yash";

const users = {
  property: names,
};

users;

// to fix above we have to wrap the property like below

const property1 = "firstName";
const names1 = "Yash";

const users1 = {
  [property1]: names1,
};

users1;

// 3. What will be the output ?

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

obj;

// 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of nums by 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

multiplyNumeric(nums);
nums;

// 5. What is the output of following code ?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
console.log(a);
a[c] = 456;
console.log(a);

console.log(a[b]);

// 6. What is JSON.stringify and JSON.parse ?

const jsonObj = {
  name: "Yash Gupta",
  age: 30,
};

// to convert this object into string we can use JSON.stringify

const stringifyObj = JSON.stringify(jsonObj);
stringifyObj;
const normalObj = JSON.parse(stringifyObj);
normalObj;

// 7. Where you can use these things and how are these useful ?

// The most common use case fo this is storing it in our local storage

const jsonobj = {
  name: "Yash Gupta",
  age: 30,
};

// to convert this object into string we can use JSON.stringify

const strObj = JSON.stringify(jsonobj);
localStorage.setItem("test", strObj);
JSON.parse(localStorage.getItem("test"));

// 8. Whats the output ?

console.log([..."Lydia"]);

// 9. Whats the output ?

const userss = { name: "Lydia", age: 21 };
const admin = { admin: true, ...userss };
admin;

// 10. Whats the output ?

const settings = {
  name: "Yash",
  level: 85,
  health: 98,
};

const data = JSON.stringify(settings, ["level", "health"]);
data;

// and now ?

JSON.parse(data);

// 11. Whats the output ?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  parameter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.parameter();

// 12. Destructuring

const name = "old";

const des = {
  name: "yash",
};

// const { name } = des;
// console.log(name);

const { name: myName } = des;
console.log(myName);

// in nestecd objects

const destr = {
  name: "yash",
  fullName: {
    firstName: "Yash",
    lastName: "Gupta",
  },
};

const {
  fullName: { firstName },
} = destr;

console.log(firstName);

// const {
//   fullName: { firstName: original },
// } = destr;

// console.log(original);

// 13. Whats the output ?

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, ...favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");

// 14. Whats the output ?

let x = { greetings: "Hey!" };
let y;

y = x;
x.greetings = "Hello";
y.greetings;

// 15. Whats the output ?

let person = { name: "Lydia" };
const members = [person];
person = null;
members;

// now ?

let person1 = { name: "Lydia" };
const members1 = [person1];
person1.name = null;
members1;

// 16. Whats the output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

// 17. Whats the ooutput ?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "Yash",
    age: 30,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 29,
};

const personObj2 = changeAgeAndReference(personObj1);

personObj1;
personObj2;

// 18. Whats is shallow vs deep copy ?

// in theory shallow copy basically means when we copy an object to another object but that particular object has still got the reference at least some of the properties of the original object
// But when we completely clone an object to another that is called as deep copy

// so how to create a deep copy of an object or how to clone an object? there are three ways

let originalObj = {
  name: "yash",
  age: 30,
};

const clonedObj1 = Object.assign({}, originalObj); // but this will not clone nested objects
clonedObj1.name = "gupta";

const clonedObj2 = JSON.parse(JSON.stringify(originalObj));
clonedObj2.name = "yash gupta";

const clonedObj3 = { ...originalObj };
clonedObj3.name = "destructure";

console.log(originalObj, clonedObj1, clonedObj2, clonedObj3);
