/*

Create analytics SDK ( Swiggy) frontend interview question 

https://www.youtube.com/watch?v=0T3Qwtot9D0&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=9

https://leetcode.com/discuss/interview-question/1857338/swiggy-phone-design-analytics-sdk-sde2 


Write an analytics SDK that exposes logEvent, it takes in analytics events and queues them
- pass a function sendAnalyticsEvent as a parameter(implement a stub function that resolves in 1 second and fails every n%10 times)
- send the next event to sendAnalyticsEvent when only after it resolves
- when the failure occurs attempt a retry

*/

const SDK = function () {
  this.logs = [];
  this.count = 1;

  this.logEvent = function (event) {
    this.logs.push(event);
  };

  this.wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });

  this.sendAnalyticsEvent = async function () {
    // base condition
    if (this.logs.length === 0) {
      return;
    }
    const current = this.logs.shift();
    try {
      await this.wait();
      console.log("Logged:", current);
      this.count++;
    } catch (error) {
      console.log("------------");
      console.log("Failed", current);
      console.log("Retrying", current);
      console.log("------------");
      this.count = 1;
      this.logs.unshift(current);
    } finally {
      this.sendAnalyticsEvent();
    }
  };
};

const sdk = new SDK();
sdk.logEvent("Event 1");
sdk.logEvent("Event 2");
sdk.logEvent("Event 3");
sdk.logEvent("Event 4");
sdk.logEvent("Event 5");
sdk.logEvent("Event 6");
sdk.logEvent("Event 7");
sdk.logEvent("Event 8");
sdk.logEvent("Event 9");
sdk.logEvent("Event 10");
sdk.logEvent("Event 11");
sdk.logEvent("Event 12");
sdk.sendAnalyticsEvent();
