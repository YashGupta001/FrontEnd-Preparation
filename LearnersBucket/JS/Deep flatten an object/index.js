/*

https://www.youtube.com/watch?v=z3isDlyMqog&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=46

Input:
{
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
}

Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}

*/

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function deepFlatten(obj, prefix = "") {
  let output = {};

  for (let key in obj) {
    const val = obj[key];
    const newKey = prefix === "" ? key : prefix + "." + key;

    // typeof null is object in javascript so make sure its a truthy value
    if (val && typeof val === "object") {
      const recursiveOutput = deepFlatten(val, newKey);
      output = { ...output, ...recursiveOutput };
    } else {
      output[newKey] = val;
    }
  }
  return output;
}
deepFlatten(obj);
