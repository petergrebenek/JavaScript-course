"use strict";

// console.log("Запрос данных...");

// // Создание промиса:
// // resolve - что-то выполнилось правильно;
// // reject - обещание не выполнилось

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// //.then() - выполняется в случаем успешного выполнения промиса resolve

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = "order";
//       // reject();
//       resolve(product);
//     }, 2000);
//   })
//     .then((data) => {
//       // как-то он понимает. что нужно взять именно product нужно подставить вместо data
//       data.modify = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(() => {
//       // выполняется в случае, когда что-то пошло не так reject
//       console.error("Произошла ошибка");
//     })
//     .finally(() => {
//       //выполняется в любом случае выполнения resolve or reject
//       console.log("Finally");
//     });
// });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000ms"));
// test(2000).then(() => console.log("2000ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//   // ожидает окнчания выполнения всех промисов
//   console.log("ALL");
// });

Promise.race([test(1000), test(2000)]).then(() => {
  // ожидает окнчания выполнения какого-то одного промиса
  console.log("ALL");
});
