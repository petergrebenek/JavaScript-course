"use strict";

/**
 * 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
 * (тоже базовая математика, иногда используется в создании анимаций).
 * Эта функция принимает в себя целое число со значением длины ребра куба.
 * Ответ выведите в формате строки, который изображен в примерах.
 *
 *  Примеры
 *
 * calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
 * calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
 * calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
 * calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
 * calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
 */

function calculateVolumeAndArea(a) {
  let V = Math.pow(a, 3);
  let S = 6 * Math.pow(a, 2);
  return Number.isInteger(a) && a > 0 && typeof a === "number"
    ? `Объем куба: ${V}, площадь всей поверхности: ${S}`
    : `При вычислении произошла ошибка`;
}
// console.log(calculateVolumeAndArea("a"));

/**
 * Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
 * Функция принимает только целое число от 1 до 36.
 * Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
 * "Ошибка. Проверьте правильность введенного номера места"
 * Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
 * Пример:
 * getCoupeNumber(33)  => 9
 * getCoupeNumber(7)  => 2
 * getCoupeNumber(300)  => "Таких мест в вагоне не существует"
 * getCoupeNumber(0)  => "Таких мест в вагоне не существует"
 * getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
 * getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
 * getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
 */

function getCoupeNumber(numberTicket) {
  if (
    typeof numberTicket !== "number" ||
    numberTicket < 0 ||
    !Number.isInteger(numberTicket)
  ) {
    return `Ошибка. Проверьте правильность введенного номера места`;
  }
  if (numberTicket === 0 || numberTicket > 36) {
    return "Таких мест в вагоне не существует";
  }
  for (let i = 4; i <= 36; i = i + 4) {
    if (numberTicket <= i) {
      return Math.ceil(i / 4);
    }
  }
}

console.log(getCoupeNumber(33));

/**
 * Создайте функцию, которая принимает в себя целое число минут
 * и возвращает время в нужном формате строки. (Смотри пример).
 * Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
 * Если вместо аргумента приходит не число, дробное или
 * отрицательное число - функция возвращает строку "Ошибка, проверьте данные".
 * Пример:
 * getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
 * getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
 * getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
 * getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
 */

function getTimeFromMinutes(inputMinuts) {
  if (
    typeof inputMinuts !== "number" ||
    inputMinuts < 0 ||
    !Number.isInteger(inputMinuts)
  ) {
    return `Ошибка, проверьте данные`;
  }

  let hours = Math.floor(inputMinuts / 60);
  let minutes = inputMinuts % 60;

  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }
  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(-150));

/**
 * Напишите функцию, которая принимает в себя 4 числа и
 * возвращает самое большее из них.
 * Если один из аргументов не является числом или их меньше 4 - возвращается 0
 * Дробные числа разрешены.
 *
 * Пример:
 * findMaxNumber(1, 5, 6.6, 11); =>  11
 * findMaxNumber(1, 5, '6', '10');  =>  0
 */
function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b != "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return "0";
  }
  return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, 2, 5, 3));
