/*

https://www.youtube.com/watch?v=kjohGEZjco8&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=29


Its a SDK or library that can be injected in any website

*/

// const block = document.querySelector(".blocks");
// console.log(block.getBoundingClientRect());

const inViewPort = (ele) => {
  const eleDim = ele.getBoundingClientRect();
  const viewHieght =
    window.innerHeight || document.documentElement.clientHeight;

  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    eleDim.top >= 0 &&
    eleDim.left >= 0 &&
    eleDim.right <= viewWidth &&
    eleDim.bottom <= viewHieght
  );
};

const detect = () => {
  const result = [];
  const blocks = document.querySelectorAll(".blocks");
  blocks.forEach((block) => {
    if (inViewPort(block)) {
      result.push(block.innerText);
    }
  });
  console.log(result);
  return result;
};

// detect();

const debounce = (fn, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const debounceDetect = debounce(detect, 1000);

window.addEventListener("scroll", debounceDetect, false);

// we can convert this to SDK just needing the entry point as we have done it for blocks with delay and then it can inject in any application
