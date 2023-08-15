/*
Restrict Object Mutation in JavaScript=
https://www.youtube.com/watch?v=EU1Bs_F0fzo&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=7 
*/

const obj = {
  a: 10,
};
function random(obj) {
  obj.a = 20;
}
random(obj);
console.log(obj);

// one way to avoid this is using spread operator
random({ ...obj });

// but when we are dealing with the objects with large scale lets say you are handling a state management in react with redux or anything else so in that case if you want to prevent the mutation it is very diffcult because everytime if you send the new instance of the above object {...obj} , the lib redux or any state management library would not be able to determine what has changed because its creating a fresh instance of the object, so that may result in frequent updates in the component because it will treat it as a new object everytime it receives them

// We can solve this by using a lib named as EmberJS

// Here will learn how we can restrict the mutation of the object in javascopit: 2 ways

// 1. In the seal we can update the defined property value rest is sealed means delete the define property or define new property
const objSeal = {
  a: 10,
};

Object.seal(objSeal);
delete objSeal.a;
console.log(objSeal.a);

// now what if we have a nested object here --> in this case the Object seal wont work it only works on single scope of the object, for the nested objects it wont work
const sealObj = {
  a: 10,
  b: {
    c: 20,
  },
};

Object.seal(sealObj);
sealObj.b.d = 30;
delete sealObj.a;
console.log(sealObj);

// One way to fix this is: by defining a custom function that can recursive seal

const obj1 = {
  a: 10,
  b: {
    c: 20,
  },
};

function deepSeal(obj) {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      deepSeal(val);
    }
  }
  return Object.seal(obj);
}

deepSeal(obj1);
obj1.b.d = 30;
console.log(obj1);

// 2. Now lets say you dont want to allow the updating of existing keys that has been defined, in that case we can use the Object.freeze() it wont allow any kind of mutation adding or deleting

function deepFreeze(obj) {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object") {
      deepFreeze(val);
    }
  }
  return Object.freeze(obj);
}

const obj2 = {
  a: 10,
  b: {
    c: 20,
  },
};

deepFreeze(obj2);

obj2.a = 20;
console.log(obj2);
