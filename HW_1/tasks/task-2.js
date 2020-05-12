'use strict';

const total = 100;
let ordered = prompt('Ввведите количество товара:');
ordered = Number(ordered);
const message = total >= ordered ? "Заказ оформлен, с вами свяжется менеджер":"На складе недостаточно твоаров!";
console.log(message);
