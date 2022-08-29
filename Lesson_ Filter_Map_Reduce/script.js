"use strict";

//================================ FILTER ==================================

/*
const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames);
*/

//================================= MAP ===================================

/*
let answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map((item) => item.toLocaleLowerCase());

console.log(result);
*/

//================================ SOME ===================================

//Eсли хоть один элемент массива подойдут по условию то вернёт true

/*
const some = [4, "qwq", "sdfsgsdg"];

console.log(some.some((item) => typeof (item)  === "number")); //true
*/

//================================ EVERY ==================================

//Eсли все элементы массива подойдут по условию то вернёт true

/*
const every = [4, "qwq", "sdfsgsdg"];
const every1 = [5, 6, 7, 8];

console.log(every.every((item) => typeof item === "number")); // false
console.log(every1.every((item) => typeof item === "number")); // true
*/

//================================ REDUCE ==================================
/*
const arr = [3, 5, 1, 3, 2, 6];

// sum - накопитель
// current - текущий элемент массива arr
const res = arr.reduce((sum, current) => sum + current, 3); // 3 начально значение sum
console.log(res);
*/
// Для строк
// const arr = ["apple", "pear", "plum"];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

//------------------------------ПРИМЕР1------------------------------
/*
const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj) //сформировать массив из объекта
  .filter((item) => item[1] === "persone")
  .map((item) => item[0]);

console.log(newArr);
*/

//_______________________________ПРИМЕР2__________________________________

// У вас есть список фильмов с рейтингом в виде массива объектов.
// Напишите функцию showGoodFilms, которая будет принимать этот массив,
// а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

/**
 *
 * @param {Array} arr
 */
/**
function showGoodFilms(arr) {
  const newArr = arr.filter((item) => item.rating >= 8);
  return newArr;
}

console.log(showGoodFilms(films));
*/

//_______________________________ПРИМЕР3__________________________________

// Напишите функцию showListOfFilms, которая будет принимать этот же массив,
//  возвращать будет строку, которая содержит названия фильмов через запятую.
/*
function showListOfFilms(arr) {
  return arr.reduce(
    (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
  );
  //   const newArr1 = films.map((item) => item.name).join(", ");
  //   return newArr1;
}

console.log(showListOfFilms(films));
*/
//_______________________________ПРИМЕР4__________________________________

// Напишите функцию setFilmsIds, которая будет принимать этот же массив,
// а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id.
// Значение этого поля установите по нумерации фильма.
/**
function setFilmsIds(arr) {
  const newArr2 = arr.map((item, index) => {
    item.id = index;
  });
  return arr;
}

console.log(setFilmsIds(films));

//_______________________________ПРИМЕР5__________________________________

// Запишите результат предыдущей функции в переменную tranformedArray.
// Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id.
// Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться,
// если мы передаем checkFilms(tranformedArray);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((item) => item.hasOwnProperty("id"));
}

console.log(checkFilms(tranformedArray));
*/

//_______________________________ПРИМЕР5__________________________________

//У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount,
//которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  let initValue = 0;
  return data.reduce(
    (sum, current) => sum + (current.amount > 0 ? current.amount : 0),
    initValue
  );
  // return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};

// console.log(getPositiveIncomeAmount(funds));

//_______________________________ПРИМЕР6__________________________________

// Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных.
// Eсли хотя бы один из объектов содержит отрицательное значение поля amount,
// то функция возвращает сумму всех значений. (число)
// Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример: getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
  //return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
  if (data.some((item) => item.amount > 0)) {
    return data.reduce((sum, current) => sum + current.amount, 0);
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getTotalIncomeAmount(funds));
