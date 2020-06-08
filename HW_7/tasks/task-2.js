
'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingrList = document.querySelector('#ingredients');

const allIngrs = ingredients.map(item => {
  const ingrListItem = document.createElement('li');
  ingrListItem.textContent = item;
  return ingrListItem;
})

ingrList.append(...allIngrs);