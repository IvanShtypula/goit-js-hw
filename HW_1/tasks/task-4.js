'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const quantityOfDroids = prompt('Сколько Powerfull Battle Droids ты хочешь купить?');
const totalPrice = quantityOfDroids * pricePerDroid;
let message;

if (quantityOfDroids === null) {
  message = 'Отменено пользователем!';
} else if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
} else if (credits >= totalPrice) {
message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

console.log(message);