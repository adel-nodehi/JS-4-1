/*
const numbers = [-5, -1, -8, -2];

const result = numbers.reduce((acc, curValue) => {
  // if (acc < curValue) {
  //   return curValue;
  // } else {
  //   return acc;
  // }
  return acc < curValue ? curValue : acc;
}, numbers[0]);

console.log(result);

// STEP 1
// curAcc = 0, curValue = 3, => nextAcc = 3

// STEP 2
// curAcc = 3, curValue = 4, => nextAcc = 7

// STEP 3
// curAcc = 7, curValue = 6, => finalResult = 13

// STEP 4
// return finalResult
*/

/*
// const arr = [[1, 2], [[3], 4], 5];
// console.log(arr);

// console.log(arr.flat());
// //          [1, 2, [3], 4, 5]

// console.log(arr.flat(2));
// //          [1, 2, [3], 4, 5]
// //          [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4];

const mapResult = arr.map((value) => [value]);
const flatMapResult = arr.flatMap((value) => [value]);

console.log(mapResult);
console.log(flatMapResult);
*/

/*
const arr = [5, 12, 84, 36, 2];
// [2, 5, ... , 84]

// -1 => firstNumber secondNumber
// 0 => do nothing
// 1 => secondNumber firstNumber

// const sortedResult = arr.sort((firstNumber, secondNumber) => {
//   if (firstNumber < secondNumber) {
//     return -1; // 5 8 => firstNumber - secondNumber = -3
//   } else {
//     return 1; // 7 5 => firstNumber - secondNumber = 2
//   }
// });

const sortedResult = arr.sort((a, b) => b - a);

console.log(sortedResult);
*/

/*
// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let input = Number(prompt("Enter an number:"));

while (input !== 10) {
  console.log(input);
  input = Number(prompt("Enter an number:"));
}
*/

/*
console.log(Number("23"));
console.log(+"23");

console.log(Number.parseInt("30.5px"));
console.log(Number.parseFloat("30.5px"));

console.log(Number.isNaN(30));
console.log(Number.isNaN("30"));
console.log(Number.isNaN(+"30px"));

console.log(Number.isFinite(5));
console.log(Number.isFinite(5.5));
console.log(Number.isFinite("5"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));

console.log(Number.isInteger(52));
console.log(Number.isInteger(52.5));
console.log(Number.isInteger("5"));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
*/

/*
console.log(Math.sqrt(25));
console.log(Math.max(25, 12, 50));
console.log(Math.min(25, 12, 50));

console.log(Math.random() * 10); // 0 - 9
console.log(Math.trunc(Math.random() * 10) + 1); // 1 - 10

console.log(Math.trunc(Math.random() * 6) + 15); // 15 - 20

console.log((2.3495).toFixed(2));
console.log(typeof (2.2396).toFixed(2));
*/
