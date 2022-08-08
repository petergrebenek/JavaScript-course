"use strict";

/**
 * Задание на урок:
 * 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
 * перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
 * Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
 *
 * 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
 * переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
 *
 * 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
 * Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
 * при помощи метода forEach вывести в консоль сообщения в таком виде:
 * "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
 * */

//###########################  1 ПОДЗАДАЧА  ###############################

const personMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDB: (DB) => {
    if (!DB.privat) {
      console.log(personMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}?`);

      if (genre === "" || genre == null) {
        console.log(" Данные отсутствуют");
        i--;
      } else {
        personMovieDB.genres[i - 1] = genre;
      }
    }
    personMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
  //###########################  2 ПОДЗАДАЧА  ###############################
  toggleVisibleMyDB: function () {
    if (personMovieDB.privat) {
      personMovieDB.privat = false;
    } else {
      personMovieDB.privat = true;
    }
  },
  start: () => {
    personMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?", "");
    while (
      personMovieDB.count == "" ||
      personMovieDB.count == null ||
      isNaN(personMovieDB.count)
    ) {
      personMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?", "");
    }
  },
  remembersMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его", "");
      if (
        a != "" &&
        b != "" &&
        a.length < 50 &&
        b.length < 50 &&
        a != null &&
        b != null
      ) {
        personMovieDB.movies[a] = b;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personMovieDB.count >= 10 && personMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
};

/**
 * Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
 * Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно',
 * если нет - 'Бюджета недостаточно'. И все 🙂
 * Но эта задача содержит несколько подзадач внутри:
 * - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
 * - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
 * - определение того, хватает ли бюджета на оплату такого объема;
 * - все числа идут без единиц измерения для упрощения, просто цифры и все;
 * - функция должна продолжать работать, даже если изменяется количество магазинов,
 *  высота, бюджет или подставляется вообще другой объект.
 */
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let S = 0;
  let V = 0;
  data.shops.forEach((el) => {
    S += el.width * el.length;
  });
  V = S * data.height;

  return data.budget - V * data.moneyPer1m3 > 0
    ? `Бюджета достаточно`
    : `Бюджета недостаточно`;
}

console.log(isBudgetEnough(shoppingMallData));

console.log([] + 1 + 2);
let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);

let c = 4;
function addX(x) {
  return function (n) {
    return n + x;
  };
}
const addThree = addX(3);
let d = addThree(c);
console.log("example partial application", d);
