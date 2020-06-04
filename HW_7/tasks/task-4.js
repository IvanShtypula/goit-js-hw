
'use strict';

// Счетчик состоит из спана и кнопок,
//  которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterSpan = document.querySelector('#value');
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const increment = function(){
  counterSpan.textContent = counterValue +=1;
};

const decrement = function(){
  counterSpan.textContent = counterValue -=1;
};

incBtn.addEventListener('click', increment);
decBtn.addEventListener('click', decrement);


