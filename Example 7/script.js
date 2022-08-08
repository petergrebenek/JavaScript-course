"use strict";

/**
 * Задание:
 * У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций,
 * которые работают неправильно и он не может понять почему.
 * Нужно исправить функции так, чтобы они давали всегда правильный результат.
 * 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё 
 *- результат все время неправильный. Необходимо найти причины и исправить.

  2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню,
  складывать их и сравнивать с средним чеком (averageLunchPrice).
  Сейчас функция работает, но постоянно выдает неправильный результат.
  Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
  
  3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать
  их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. 
  Сейчас эта функция только в начале разработки и должна менять данные про официантов.
 */

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  !prop ? (answer = "Закрыто") : (answer = "Открыто");

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    parseInt(fDish.price, 10) + parseInt(sDish.price, 10) <
    parseInt(average, 10)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }]s;
  return copy;
}
console.log(restorantData);
console.log(transferWaitors(restorantData));
