/*

fetch with timeout --> so basically we need to override the original fetch function and need to create the new fetch function that will accept a duration in which the api call has to be completed, if the api call is not completed with in that duration then it has to be aborted


*/

const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId;

    // both ways are fine nested then or having single catch block as the second one

    // fetch(url, { signal })
    //   .then((res) => {
    //     res
    //       .json()
    //       .then((e) => {})
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });

    fetch(url, { signal })
      .then((res) => {
        return res.json();
      })
      .then((e) => {
        clearTimeout(timerId);
        resolve(e);
      })
      .catch((error) => {
        reject(error);
      });

    timerId = setTimeout(() => {
      console.log("Aborted");
      controller.abort(); // it will abort the api if not fulfilled in given duration
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then((response) => response.json())
  .then((json) => console.log(json));

// a new property has introcuded for fetch that will help you to abort the network call its known as abortController
