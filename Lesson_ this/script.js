//========================================================= КОНТЕКСТ ================================================

// Источник: https://tproger.ru/translations/javascript-this-keyword/#32pitfallseparatingmethodfromitsobject

// отсутствует режим strict, this принимает значение window

// function sum(a, b) {
//   console.log(this === window);
//   this.myNumber = 20;
//   return a + b;
// }

// console.log(sum(15, 16));
// console.log(this.myNumber);

// присутствует режим strict, this принимает значение uhdefined

// function strictSum(a, b) {
//   "use strict";
//   console.log(this === undefined);
//   return a + b;
// }

// strictSum();
// console.log(strictSum(1, 3));

// var numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function () {
//     console.log(this === numbers); // => true
//     function calculate() {
//       // this is window or undefined in strict mode
//       console.log(this === numbers); // => false
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//   },
// };
// console.log(numbers.sum());

//==================================================== ВЫЗОВ МЕТОДА =================================================

// var calc = {
//   num: 0,
//   increment: function () {
//     console.log(this === calc); // => true // контекст this это объект, которому принадлжит метод
//     this.num += 1;
//     return this.num;
//   },
// };
// // method invocation. this is calc
// console.log(calc);
// console.log(calc.increment()); // => 1
// console.log(calc.increment());

// Ловушка: отделение метода от его объекта
// Пример 1

/**function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => false
    console.log("The " + this.type + " has " + this.legs + " legs");
  };
}
var myCat = new Animal("Cat", 4);
// logs "The undefined has undefined legs"
// or throws a TypeError, in strict mode
setTimeout(myCat.logInfo, 1000);*/

// Пример 2

/**function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => true
    console.log("The " + this.type + " has " + this.legs + " legs");
  };
}
var myCat = new Animal("Cat", 4);
// logs "The Cat has 4 legs"
setTimeout(myCat.logInfo.bind(myCat), 1000);*/

//================================================== ВЫЗОВ КОНСТРУКТОРА ===============================================

/**function Country(name, traveled) {
  this.name = name ? name : "United Kingdom";
  this.traveled = Boolean(traveled); // transform to a boolean
}
Country.prototype.travel = function () {
  return (this.traveled = true);
};
// Constructor invocation
var france = new Country("France", false); // вызов контструктора функции Country
// Constructor invocation
var unitedKingdom = new Country();

console.log(france.travel());
console.log(unitedKingdom);
console.log(france);*/

// Определение конструктора ключевым словом class
// Название класса с большоый буквы

/**
class City {
  constructor(name, traveled) {
    // контекст this это только что созданный объект
    this.name = name;
    this.traveled = false;
  }
  travel() {
    return (this.traveled = true);
  }
}
// Constructor invocation
var paris = new City("Paris", false);

console.log(paris.travel());
*/

// Пример 1

/**
 function Foo() {
   console.log(this instanceof Foo); // => true
   this.property = "Default Value";
 }
 // Constructor invocation
 var fooInstance = new Foo();
 console.log(fooInstance.property); // => 'Default Value'
 */

//Ловушка: как не забыть про new

// Неправильный вариант

/**
function Vehicle(type, wheelsCount) {
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Function invocation
var car = Vehicle("Car", 4); //отсутствует NEW
console.log(car.type); // => 'Car'
console.log(car.wheelsCount); // => 4
console.log(car === window); // => true
console.log(car instanceof Vehicle); // => false
*/

// Правильный вариант

/**
function Vehicle(type, wheelsCount) {
  if (!(this instanceof Vehicle)) {
    throw Error("Error: Incorrect invocation");
  }
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Constructor invocation
var car = new Vehicle("Car", 4);
console.log(car.type); // => 'Car'
console.log(car.wheelsCount); // => 4
console.log(car instanceof Vehicle); // => true

// Function invocation. Generates an error.
var brokenCar = Vehicle("Broken Car", 3);
*/

//================================================== НЕПРЯМОЙ ВЫЗОВ ===============================================

/**
 * Непрямой вызов производится, когда функция вызывается методами .call() and .apply()
 */

// Пример 1

/**
function increment(number) { // Контекст это первый аргумент .call() and .apply()
  return ++number;
}
console.log(increment.call(undefined, 10)); // => 11
console.log(increment.apply(undefined, [10])); // => 11
*/

// Пример 2

/**
var rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log(this === rabbit); // => true
  return string + this.name;
}
// Indirect invocations
console.log(concatName(), this);
console.log(concatName.call(rabbit, "Hello ")); // => 'Hello White Rabbit'
console.log(concatName.apply(rabbit, ["Bye "])); // => 'Bye White Rabbit'
*/

/**
 * Непрямой вызов может пригодиться когда функцию нужно вызвать в особом контексте, напрмер, режшать проблему
 * при вызове функции, где this - всегда window или undefined
 */

//================================================== СВЯЗАННАЯ ФУНКЦИЯ ===============================================

/**
 * Связанная функция - это функция, связанная с объектом. Обычно она создаётся из обычной функции
 * при помощи метода .bind(). У двух функций совпадают тела и области видимости, но различаются контексты.
 */

/**
 * Метод .bind(thisArg[, arg1[, arg2[, ...]]]) принимает в качестве первого аргумента
 * thisArg контекст вызова связанной функции, а необязательный список аргументов arg1,
 * arg2, ... передаётся вызываемой функции. Он возвращает новую функцию, связанную с thisArg.
 */

// Пример 1

/**
function multiply(number) {
  "use strict";
  return this * number;
}
// create a bound function with context
var double = multiply.bind(2);
// invoke the bound function
console.log(double(3)); // => 6
console.log(double(10)); // => 20
*/

// Пример 2
/**
 * Ролью .bind() является создание новой функции, чей вызов будет иметь контекст,
 * заданный в первом аргументе .bind(). Это — мощный инструмент,
 * позволяющий создавать функции с заранее определённым значением this.
 */

/**
var numbers = {
  array: [3, 5, 10],
  getNumbers: function () {
    return this.array;
  },
};
// Create a bound function
var boundGetNumbers = numbers.getNumbers.bind(numbers);
console.log(boundGetNumbers()); // => [3, 5, 10]
// Extract method from object
var simpleGetNumbers = numbers.getNumbers;
console.log(simpleGetNumbers()); // => undefined or throws an error in strict mode
console.log(numbers.getNumbers());
*/

//Пример 3

/**
function getThis() {
  "use strict";
  return this;
}
// console.log(getThis.call(2)); // => 2
var one = getThis.bind(1);
// Bound function invocation
console.log(one()); // => 1
// Use bound function with .apply() and .call()
console.log(one.call(2)); // => 1
console.log(one.apply(2)); // => 1
// Bind again
console.log(one.bind(2)()); // => 1
// Call the bound function as a constructor
console.log(new one()); // => Object
*/

/**
 * Только new one() изменяет контекст связанной функции, в остальных типах вызова this всегда равен 1.
 */

//================================================== СТРЕЛОЧНАЯ ФУНКЦИЯ ===============================================

/**
 * Стрелочная функция не создаёт свой контекст исполнения, а взаимствует this из
 * внешней функции, в которой она определена.
 */
/*
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  log() {
    console.log(this === myPoint);
    setTimeout(() => {
      console.log(this === myPoint); // => true
      console.log(this.x + ":" + this.y); // => '95:165'
    }, 1000);
  }
}
var myPoint = new Point(95, 165);
myPoint.log();
*/

// Пример 2
// Стрелочная функция связывается с лексическим контекстом раз и навсегда.
// this нельзя изменить даже при помощи метод смены контекста

/*
var numbers = [1, 2];
(function() {
  var get = () => {
    return this;
  };
  console.log(this === numbers); // => true
  console.log(get()); // => [1, 2]
  // Use arrow function with .apply() and .call()
  console.log(get.call([0]));  // => [1, 2]
  console.log(get.apply([0])); // => [1, 2]
  // Bind
  console.log(get.bind([0])()); // => [1, 2]
}).call(numbers);
*/

// Ловушка: определение метода стрелочной функцией
// Пример 3

function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = () => {
  console.log(this === window); // => true
  return this.hours + " hours and " + this.minutes + " minutes";
};
var walkPeriod = new Period(2, 30);
console.log(walkPeriod.format()); // undefined hours and undefined minutes

/**
 * Так как format — стрелочная функция, определённая в глобальном контексте, её this — это объект window.
 * Даже если format исполняется в качестве метода объекта walkPeriod.format(), window остаётся контекстом вызова.
 * Так происходит, потому что стрелочная функция имеет статический контекст, не изменяемый другими типами вызовов.
 */
