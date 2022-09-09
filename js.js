// console.log("Hello!!!");

// ********************************

// Tasks below
// Базовый уровень
// Task 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие
//     (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):
// isAdult(20); // true
// isAdult(4); // false

// Solution task 1

// let isAdult = 5;

// if (isAdult >= 18) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ********************************

// Task 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// Solution task 2
// let checkMultiplicity = 15 % 5;
// if (checkMultiplicity == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ********************************

// Task 3. Проверка возможности треугольника.Создать функцию которая принимает длины сторон треугольника;
// функция возвращает true если треугольник возможен и false если нет

// Solution task 3
// function IsTriangle (a, b, c)
//     {
//         if (a <= 0 || b <= 0 || c <= 0)
//           return false;

//         if (a+b > c && a+c > b && c+b > a)
//           return true;
//         else
//           return false;
//     }

// console.log(5+5>3);

// ********************************

// Task 4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа

// Solution task 4
// function oddSum(n) {
//   let sum = 0;
//   curr = 1;
//   for (let i = 0; i < n; i++) {
//     sum += curr;
//     curr += 2;
//   }
//   return sum;
// }

// let n = 60;
// document.write(
//   " Cумма нечетных чисел от 1 " + " до " +  n + " равна " + oddSum(n)
// );

// ********************************

// 5. Создать функцию, которая будет проверять, является ли число простым.
// Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.

// Solution task 5

// function isPrimeNumber(n) {
//   for (var i = 2; i < n; i++) {

//     if (n % i === 0) return false;
//   }
//   return n > 1;
// }
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(2));
