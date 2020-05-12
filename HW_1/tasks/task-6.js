// debugger;

let input;
let total = 0;

do {
  input = prompt("Введите число:");
  const inputNum = Number(input);
  total = total + inputNum;
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
    }
  if (isNaN(inputNum)) {
  alert('Было введено не число, попробуйте еще раз');
  }
  
} while (true);
