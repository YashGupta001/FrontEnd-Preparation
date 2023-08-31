/*

Request and Response Interceptor

https://www.youtube.com/watch?v=Y7IYt3--Ivk&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=34

*/

const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const updatedRequest = requestInterseptor(args);
  const res = await originalFetch(updatedRequest);
  const updatedResponse = responseInterceptor(res);
  return updatedResponse;
};

window.requestInterseptor = (args) => {
  console.log("I am request interseptor");
  return args;
};

window.responseInterceptor = (res) => {
  console.log("I am response interseptor");
  return res.json();
};

fetch("https://jsonplaceholder.typicode.com/todos/1").then((json) =>
  console.log(json)
);
