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
