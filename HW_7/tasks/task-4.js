
'use strict';

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


