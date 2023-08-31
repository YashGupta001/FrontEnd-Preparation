/*

https://www.youtube.com/watch?v=ENTl51PsLM8&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=29

Create a localstorage with expiry time

*/

window.localStorageWithExpiry = {
  setItem: function (key, value, expiryTime) {
    const result = {
      value,
      expiryTime: Date.now() + expiryTime,
    };

    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);

    if (data.expiryTime <= Date.now()) {
      localStorage.removeItem(key);
      return null;
    }

    return data.value;
  },
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  },
};

localStorageWithExpiry.setItem("abc", "xyz", 1000);
console.log("before", localStorageWithExpiry.getItem("abc"));

setTimeout(() => {
  console.log("after", localStorageWithExpiry.getItem("abc"));
}, 2000);
