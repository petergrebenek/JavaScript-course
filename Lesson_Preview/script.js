"use strict";

// const btn = document.querySelector("button");

// Почти не используется в реальности, так как при вызове второй раз первая функция не выполнится.

// btn.onclick = function() { //
//     alert('CLick')
// }

// btn.addEventListener("click", () => {
//   alert("click");
// });
// btn.addEventListener("click", () => {
//   alert("Second click");
// });
// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i === 1) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };
// btn.addEventListener("click", deleteElement);
// btn.removeEventListener("click", deleteElement);

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return `Не корректные данные`;
  }
  if (n <= 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(-3));
