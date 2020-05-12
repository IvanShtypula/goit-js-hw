'use strict';

const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;
let countryName = prompt('Country:');
countryName = countryName.toLowerCase();
let message;

switch (countryName) {
  case 'china':
message = `Доставка в Китай будет стоить ${china} кредитов`;
break;

case 'chile':
  message = `Доставка в Чили будет стоить ${chile} кредитов`;
break;

case 'australia':
  message = `Доставка в Австралию будет стоить ${australia} кредитов`;
break;

case 'india':
  message = `Доставка в Индию будет стоить ${india} кредитов`;
break;

case 'jamaica':
  message = `Доставка в Ямайку будет стоить ${jamaica} кредитов`;
break;

default:
  message = 'В вашей стране доставка не доступна';
}

alert(message);






