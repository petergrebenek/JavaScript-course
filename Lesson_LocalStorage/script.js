"use strict";

/**
localStorage.setItem("number", 5); // отправить данные

localStorage.removeItem("number"); // удалить данные

console.log(localStorage.getItem("number")); // получить дынные

localStorage.clear(); //очистить
*/

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isCheked")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isCheked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "#ffff";
  } else {
    localStorage.setItem("bg", "chenged");
    form.style.backgroundColor = "red";
  }
});

const persone = {
  name: "Alex",
  age: 25,
};

const serilizedPersone = JSON.stringify(persone);
localStorage.setItem("alex", serilizedPersone);
console.log(JSON.parse(localStorage.getItem("alex")));
