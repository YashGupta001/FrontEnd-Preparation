/*

https://www.youtube.com/watch?v=ebXQA1DJhj8&list=PLBygUld3s6x8sI_H8UYROVMIVcuxUre1e&index=10

*/

const inputs = document.getElementById("inputs");

inputs.addEventListener("input", (e) => {
  const target = e.target;
  const value = target.value;

  if (isNaN(value)) {
    target.value = "";
    return;
  }

  if (value !== "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});

inputs.addEventListener("keyup", (e) => {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key === "backspace" || key === "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
  }
});
