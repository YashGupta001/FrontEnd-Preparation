/*

https://www.youtube.com/watch?v=Dr1-ixxYwdY&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=23

We have to create a simple Javascript library that does a step-by-step walk-through of the website functionalities and features for first-time users.

https://introjs.com/


https://codesandbox.io/s/serene-water-vxnqkd?file=/src/index.js

*/

// highlight section
// popover with next and prev button to move steps
// scroll to element if not in viewport to highlight

const steps = ["3", "header", "8", "12", "footer", "5"];
let index = 0;

const wrapper = document.getElementById("wrapper");
const highlight = (id) => {
  document.getElementById("yg-highlight") &&
    document.getElementById("yg-highlight").remove();
  document.getElementById("yg-popover") &&
    document.getElementById("yg-popover").remove();
  const element = document.getElementById(id);

  scrollTo(element);
  // based on viewport
  const elementDimension = element.getBoundingClientRect();
  highlightHelper(elementDimension);
  popover(elementDimension);
};

const highlightHelper = (elementDimension) => {
  let { top, left, width, height } = elementDimension;
  top += window.scrollY;
  left += window.scrollX;
  const ele = document.createElement("div");
  ele.id = "yg-highlight";
  ele.style = `
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: ${width}px;
    height: ${height}px;
    // background: #000;
    transition: border .2s ease;
  `;

  wrapper.appendChild(ele);

  setTimeout(() => {
    ele.style.border = "4px solid black";
  });
};

const popover = (elementDimension) => {
  let { bottom, left, right } = elementDimension;
  bottom += window.scrollY;
  left += window.scrollX;

  const ele = document.createElement("div");
  ele.id = "yg-popover";
  ele.style = `
  position: absolute;
  top: ${bottom}px;
  left: ${(left + right) / 2 - 75}px;
  background: #fff;
  width: 150px;
  height: 100px
  `;

  ele.appendChild(navigationButton());
  wrapper.appendChild(ele);
};

const navigationButton = () => {
  const nextBtn = document.createElement("button");
  const prevBtn = document.createElement("button");

  nextBtn.textContent = "Next";
  prevBtn.textContent = "Previous";

  nextBtn.addEventListener("click", () => {
    if (index < steps.length - 1) {
      highlight(steps[++index]);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      highlight(steps[--index]);
    }
  });

  const fragment = document.createDocumentFragment();
  fragment.appendChild(prevBtn);
  fragment.appendChild(nextBtn);

  return fragment;
};

const scrollTo = (element) => {
  const eleTop = element.offsetTop;
  window.scrollTo({ top: eleTop, behavior: "smooth" });
};

highlight(steps[index]);
