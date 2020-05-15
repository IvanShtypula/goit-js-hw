'use strict';

// debugger;

let  input;
const numbers = [];
let total = 0;

do {
  input = prompt('Число:');
  const value = Number(input);
  numbers.push(value);
  console.log(numbers);
  if (input === null){
    for (const number of numbers) {
      total += number;
    }
  }
} while (input !== null)
console.log(`Общая сумма чисел равна ${total}`);