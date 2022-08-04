"use strict";

const option = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(option.colors.bg);
// console.log(option["colors"]["border"]);

console.log(Object.keys(option).length);

const { border, bg } = option.colors; // Деструктуризация объекта
console.log(border);

// ################# Массивы #################

const arr = [1, 2, 3, 6, 8];

// arr.pop(); // удаление

// arr.push(10); // добавить элемент в конец массива

// Перебор массива с помощтю for of
// можно остановить с помощью break, conti
for (let value of arr) {
  console.log(value);
}
// Метод forEach
arr.forEach((item, index, arr) => {
  console.log(`${index}: ${item} внутри массива ${arr}`);
});

//########################## Задачи ###########################
/**
 * 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными
 *  и возвращать строку с опытом.
 * Пример:
 * showExperience(personalPlanPeter) => '1 month'
 * P.S. желательно использовать деструктуризацию, но не обязательно
 *
 */

/**
 * 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.
 * При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
 * Пример:
 * personalPlanPeter.showAgeAndLangs(personalPlanPeter)
 * => 'Мне 29 и я владею языками: RU ENG'
 * Заметьте, что возраст и языки подставляются автоматически из объекта,
 * а языки всегда в верхнем регистре (большими буквами).
 * Если данные в объекте поменяются, то и сообщение тоже изменится.
 */
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (a) {
    const { languages } = a.skills;
    const langStr = languages.join(" ").toUpperCase();
    const { age } = a;
    let str = `Мне ${age} и я владею языками: ${langStr}`;
    // languages.forEach((lang) => (str += ` ${lang.toUpperCase()}`));
    return str;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}
console.log(showExperience(personalPlanPeter));

/**
 * 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными
 *  и возвращать строку в нужном виде.
 * Пример:
 * showProgrammingLangs(personalPlanPeter)  =>
 * "Язык js изучен на 20% Язык php изучен на 10%"
 * Причем функция должна работать вне зависимости от количества языков.
 * Если ни один не указан, то возвращается пустая строка.
 * P.S. Для переноса строки используется \n в конце строки.
 */

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

/**
 * 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
 * showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
 * Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
 */

const family = ["Peter", "Ann", "Alex", "Linda"];

// 1 Вариант

// function showFamily(arr) {
//   let str = "";
//   arr.length === 0 ? (str = "Семья пуста") : (str = "Семья состоит из: ");
//   arr.forEach((member) => {
//     str += `${member} `;
//   });
//   return str;
// }

// 2 Вариант

// function showFamily(arr) {
//   if (arr.length !== 0) {
//     return `Семья состоит из: ${arr.join(" ")}`;
//   } else {
//     return `Семья пуста`;
//   }
// }

// 3 Варинт

function showFamily(arr) {
  let str = "";
  arr.length !== 0
    ? (str = `Семья состоит из: ${arr.join(" ")}`)
    : (str = `Семья пуста`);
  return str;
}
console.log(showFamily(family));

/**
 * 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк
 * и будет выводить в консоль эти строки в нижнем регистре.
 * Пример:
 * standardizeStrings(favoriteCities)  выведет в консоль
 * lisbon
 * rome
 * milan
 * dublin
 */

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  return arr.forEach((el) => console.log(el.toLowerCase()));
}

standardizeStrings(favoriteCities);

/**
 * Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
 */
const someString = "This is some strange string";

function reverse(str) {
  let strReverse;
  typeof str === "string"
    ? (strReverse = str.split("").reverse().join("")) //
    : (strReverse = `Ошибка`);

  // split() возвращает массив, к которому применяются методы reverse() и join()
  return strReverse;
}
console.log(reverse(someString));
