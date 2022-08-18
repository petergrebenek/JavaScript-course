"use strict";

// const now = new Date(); //текущая дата
// const now = new Date(2022, 8, 18, 20); // 9 месяц так как январь 0 месяц, 17 часов так как часовой пояс +3
const now = new Date("2022-08-18"); // ниже 1970 года можно лучить путём указания минуса, например Date(-99999)
// Date.parse("2022-08-18");
// console.log(now);

// console.log(now.getFullYear()); // получит текущий года
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); //номер дня недели, 0 это воскресенье
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.setHours(18, 40)); //установить часыб минуты, 40 указывать не корректно,
// так как указываем часы в методе
// console.log(now);

let start = new Date();
for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
