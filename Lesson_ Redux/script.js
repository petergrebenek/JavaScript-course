"use strict";

//----------------------------Регулярные выражения-------------------------------

// new RegExp('pattern', 'flag'); // никто не пользуется данной формой записи

// /pattern/f // использумая форма записи

// const ans = prompt("Введите ваше число");

const reg = /\d/;
// console.log(reg.test(ans));

//Флаги: i
//       g
//       m
// флаги можно комбинировать, например igm, gim, mgi

// console.log(ans.search(reg)); // search ищет только первое совпадение поэтому g не сработает

// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/\./g, "*")); //  "\" спецсимвол экранирование

// console.log("12-34-56".replace(/-/g, ":")); // Замена - на :

// Классы регулярных выражений

/**
 * \d - ищем все цифры
 * \w - ищем все слова
 * \s - ищем все пробелы
 */
// console.log(ans.match(reg));
const str = "My name id R2D2";
// console.log(str.match(/\w\d\w\d/i));

// Обратные классы

/**
 * \D - ищем не цифры
 * \W - ищем не слова
 * \S - ищем не пробелы
 */

console.log(str.match(/\D/gi));
