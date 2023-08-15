/*

Circuit breaker in JavaScript | Atlassian interview question

https://www.youtube.com/watch?v=G_drlL4xrUs&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=3  



Implement a circuit breaker that halts the function for x time if it fails for y count


Ex: Lets say you are making an api request to the server, what happen is server is not responding and what you are doing is you are unnecessary bombarding the server with your application request.
So if we have set a limit that if a server get failed three times will stop sending the requests and will send the request lets say after half minute or one minute depending upon the time the server takes to recover and restart

So the circuit breakers are design patterns and widely used in microservices on the server side but we can also implement this on the client side to prevent the request from being sent to the server in case a failure occurs


*/

const circuitBreak = (fn, failureCount, timeThreshold) => {
  let failure = 0;
  let timeSinceLasrFailure = 0;
  let isClosed = false;

  return function (...args) {
    if (isClosed) {
      const diff = Date.now() - timeSinceLasrFailure;

      if (diff > timeThreshold) {
        isClosed = false;
      } else {
        console.error("Services are unavailable");
        return;
      }
    }

    try {
      const result = fn.apply(...args);
      failure = 0;
      return result;
    } catch (error) {
      failure++;
      timeSinceLasrFailure = Date.now();

      if (failure >= failureCount) {
        isClosed = true;
      }
      console.log("Error");
    }
  };
};

const testFunction = () => {
  let count = 0;

  return function () {
    count++;
    if (count < 4) {
      throw "Failed";
    } else {
      return "Hello";
    }
  };
};

let t = testFunction();
let c = circuitBreak(t, 3, 1000);

c();
c();
c();
c();

setTimeout(() => {
  console.log(c());
}, 1100);
