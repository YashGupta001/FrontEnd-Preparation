/*

Set value in object at string path

https://www.youtube.com/watch?v=NZ0JjE97P_U&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=20

This problem is the polyfill for _.set() lodash method.


here if the path does not exist then we have to create one and if the path is exist then we need to update the value

*/

const object = {};

const helper = (obj, pathArr, value) => {
  const [current, ...rest] = pathArr;

  if (rest.length > 0) {
    if (!obj[current]) {
      const isNumeric = `${+rest[0]}` === rest[0]; // checking if next value is numeric or not with the help of + operation
      obj[current] = isNumeric ? [] : {};
    }

    if (typeof obj[current] === "object") {
      const isNumeric = `${+rest[0]}` === rest[0];
      obj[current] = helper(isNumeric ? [] : {}, rest, value);
    } else {
      obj[current] = helper(obj[current], rest, value);
    }
  } else {
    obj[current] = value;
  }

  return obj;
};

const set = (obj, path, value) => {
  let pathArr = path;
  if (typeof path === "string") {
    pathArr = pathArr.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  helper(obj, pathArr, value);
};

set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// 4

set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z);
// 5

console.log(object);
