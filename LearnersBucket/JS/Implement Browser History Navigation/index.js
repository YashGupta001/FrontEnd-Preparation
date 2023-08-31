/*

Implement Browser History Navigation

https://www.youtube.com/watch?v=R_76ajyvDV4&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=47

https://learnersbucket.com/examples/interview/implement-browser-history-in-javascript/

*/

function BrowserHistory() {
  this.history = [];
  this.index = -1;

  this.visit = function (url) {
    this.history[++this.index] = url;
    this.history.length = this.index + 1;
  };

  this.current = function () {
    if (this.index < 0) {
      return "Blank Page";
    }
    return this.history[this.index];
  };

  this.backward = function () {
    this.index = Math.max(-1, --this.index);
  };

  this.forward = function () {
    this.index = Math.min(this.history.length - 1, ++this.index);
  };
}

const bh = new BrowserHistory();
console.log(bh.current());
bh.visit("google.com");
bh.visit("facebook.com");
bh.forward();
bh.backward();
bh.backward();
console.log(bh.current());
