
'use strict';

// Напиши скрипт, который для каждого элемента массива ingredients
//  создаст отдельный li, после чего вставит все li за одну операцию
  // в список ul.ingredients. Для создания DOM-узлов используй
  //  document.createElement().



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