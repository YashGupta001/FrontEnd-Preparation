/*

https://leetcode.com/discuss/interview-question/1188370/google-onsite-software-engineer-london-l4l5

https://www.youtube.com/watch?v=9SwDDaxcUV4&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=19

Implement a function retry(fn, retries, data, successCallback, errorCallback) which retries another function fn up until retries times in case errorCallback of a function fn was triggered.

Function fn has the following signature fn(data, successCallback, errorCallback).

*/

let testPromise = () => {
  let count = 0;

  return () => {
    return new Promise((resolve, reject) => {
      count += 1;

      if (count <= 5) {
        reject(" I am failed api ");
      } else {
        resolve(" I am successful ");
      }
    });
  };
};

// const retry = (fn, retries, finalError) => {
//   return new Promise((resolve, reject) => {
//     fn().then(resolve, (err) => {
//       if (retries === 1) {
//         reject(finalError);
//       }

//       retry(fn, retries - 1, finalError).then(resolve, reject);
//     });
//   });
// };

const retry = async (fn, retries, finalErr) => {
  try {
    const response = await fn();
    return response;
  } catch (e) {
    if (retries === 1) {
      return Promise.reject(finalErr);
    }

    return retry(fn, retries - 1, finalErr);
  }
};

// retry(testPromise(), 5, "I am failure").then(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

retry(testPromise(), 6, "I am failure").then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.error(err);
  }
);

// ORRRRRRRRR

// Execute promises with the Priority , is this solution okay
const promises = [
  { status: "resolve", priority: 4 },
  { status: "reject", priority: 1 },
  { status: "resolve", priority: 2 },
  { status: "reject", priority: 3 },
];
function promiseWithPriprity(promises) {
  promises = promises.sort((a, b) => a.priority - b.priority);
  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      if (element.status === "resolve") resolve(element);
    });
    reject("All promises rejected");
  });
}

promiseWithPriprity(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
