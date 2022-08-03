"use strict";

/**
 * Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа
 * и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
 * */

// function returnNeighboringNumbers(num) {
//   const myArray = [num - 1, num, num + 1];
//   return myArray;
// }
// console.log(returnNeighboringNumbers(5));

/**
 * Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
 * Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии.
 * (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже),
 * где эти числа идут по порядку, разделенные тремя дефисами "---".
 * После последнего числа их не должно быть.
 * Вызов функции getMathResult(5, 3) даст ответ 5---10---15
 * Вызов функции getMathResult(10, '5') даст ответ 10
 * */

// function getMathResult(a, b) {
//   if (typeof b !== "number" || b <= 0) {
//     return a;
//   }
//   let str = "";
//   for (let i = 1; i <= b; i++) {
//     if (i === b) {
//       str += `${a * i}`;
//     } else {
//       str += `${a * i} --- `;
//     }
//   }
//   return str;
// }
// console.log(getMathResult(2, "a"));

/**
 * Lessons Методы и свойства строк и чисел
 *
 */

//СТРОКИ

// const logg = "Hello world";

// console.log(logg.slice(6, 10)); // worl будет вырезано до 10 символа, но не включая его.
// console.log(logg.slice(6)); // с 6 символа и до конца
// console.log(logg.slice(-5, -1)); // начинается с правой стороны 5 симбол, заканчивается 1 символом с правой стороны

// console.log(logg.substring(6, 10));

// console.log(logg.substr(6, 5)); //6 c какого символа, 5 - сколько символов удалить

//ЧИСЛА

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// // console.log(parseFloat(test));

/**
 *  Задание на урок:
 *
 * 1) Первую часть задания повторить по уроку
 *
 * 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
 * false - выводит в консоль главный объект программы
 *
 * 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
 * "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
 * P.S. Функции вызывать не обязательно
 *
 *  */

const personMovieDB = {
  count: 45,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//###########################  2 ПОДЗАДАЧА  ###############################

const showMyDB = (DB) => {
  if (!DB.privat) {
    console.log(DB);
  }
};

showMyDB(personMovieDB);

// #########################   3 ПОДЗАДАЧА  ###############################

function writeYourGenres() {
  let numberGenreMovie;
  for (let i = 1; i < 4; i++) {
    personMovieDB.genres[i - 1] = +prompt(
      `Ваш любимый жанр под номером ${i}?`,
      ""
    );
  }
  console.log(personMovieDB.genres);
}
writeYourGenres();

let numberOfFilms;

//################## 1 ПОДЗАДАЧА - примеры для оборачиванию в функцию взяти из папки Example 2 ######################

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
//   }
// }

// start();

// function remembersMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его", "");
//     if (
//       a != "" &&
//       b != "" &&
//       a.length < 50 &&
//       b.length < 50 &&
//       a != null &&
//       b != null
//     ) {
//       personMovieDB.movies[a] = b;
//       console.log("Done");
//     } else {
//       console.log("Error");
//       i--;
//     }
//   }
// }

// remembersMyFilms();

// function detectPersonalLevel() {
//   if (personMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
//   } else if (personMovieDB.count > 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }

// detectPersonalLevel();
