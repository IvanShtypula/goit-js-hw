// debugger;

let input;
let total = 0;

do {
  input = prompt("Введите число:");
  const inputNum = Number(input);
  total = total + inputNum;
  
  if (Number(isNaN(inputNum))) {
    alert('Было введено не число, попробуйте еще раз');
  }
  
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
