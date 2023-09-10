/*

https://www.youtube.com/watch?v=rS_4YfbEo2U&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=11

 ( Event Propagation ) - Bubbling, Capturing, and Deligation

*/

// 1 What is event propogation --> event propogates to parent or child based on bubbling or capturing as in bubbling events are executing from bottom to up (its a default behaviour) and in capturing from up to bottom

// 2. What is bubbling

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", () => {
//   console.log("DIV");
// });

// form.addEventListener("click", () => {
//   console.log("FORM");
// });

// button.addEventListener("click", () => {
//   console.log("BUTTON");
// });

// the above is example of event bubbling but there are few events that do not bubble like focus, blur etc

// 3. this.target vs event.target vs event.currentTarget

// div.addEventListener("click", func);

// form.addEventListener("click", func);

// button.addEventListener("click", func);

// function func(event) {
//   console.log("Current Target", event.currentTarget);
//   console.log("Current Target", event.currentTarget.tagName);
//   // event.currentTarget tells current target for the event that bubble up
//   console.log("Event target", event.target);
//   console.log("Event target", event.target.tagName);
//   // event.target tells the target for which the event executes and bubbled up

//   console.log("this target", this.tagName);
//   // works same as currentTarget
// }

//4. What is event capturing or trickling

// try to remove the captue for some events
// div.addEventListener(
//   "click",
//   () => {
//     console.log("DIV");
//   },
//   {
//     capture: true,
//   }
// );

// form.addEventListener(
//   "click",
//   () => {
//     console.log("FORM");
//   },
//   {
//     capture: true,
//   }
// );

// button.addEventListener(
//   "click",
//   () => {
//     console.log("BUTTON");
//   },
//   {
//     capture: true,
//   }
// );

//5. How do you stop bubbling or capturing ?
// The way to do that is with stopPropogation

// div.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("DIV");
// });

// form.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("FORM");
// });

// button.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("BUTTON");
// });

//6. What is event delegation ? (Means do not add individual event on child we can put it in parent as all event bubble up by default that is known as event delegation)
// event delegation is where we add event listener to parent element intead of adding them to the descendent element

// const products = document.querySelector(".products");
// products.addEventListener("click", (event) => {
//   console.log(event.target);
//   if (event.target.tagName === "SPAN") {
//     window.location.href += "/" + event.target.className;
//   }
// });

// 7. Create a modal which closes by clicking on negagtive space (means space outside the modal)?

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  console.log(e.target.className);

  if (e.target.className === "modalContainer") {
    toggleModal(false);
  }
});
