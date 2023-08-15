/*

https://www.youtube.com/watch?v=3jrfDk9k8rY&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=15 

Cached API call

*/

const call1 = cachedApiCall(1500);

call1("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => {
  console.log(a);
});
setTimeout(() => {
  call1("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => {
    console.log(a);
  });
}, 800);

/*

This problem is related to performance as we are aware network request are very expensive, so one way to optimise the performance is minimize the network request

So the problem statement that we have today is related to that only what we have to do is we have to create a function cachedApiCall that will take a time and it will make a api call and it will cache the result of that api call for that duration

*/

const cachedApiCall = (time) => {
  const cache = {}; // we need to create this outside closure
  // async function always returns the promise
  return async (url, config = {}) => {
    //now to cache something we need to create a unique key so that we can identify that this is the key for particular that belongs to particular api call
    const key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];

    // if entry not present or the delay is over we need go for api call --> Date.now() returns the current time in miliseconds
    if (!entry || Date.now() > entry.expiry) {
      console.log("Making a fresh API call");
      try {
        let res = await fetch(url, config);
        res = await res.json();
        cache[key] = {
          value: res,
          expiry: Date.now() + time,
        };
      } catch (e) {
        console.log("error while making an api call", e);
      }
    }
    return cache[key].value;
  };
};

const call = cachedApiCall(1500);

call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => {
  console.log(a);
});
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => {
    console.log(a);
  });
}, 800);
