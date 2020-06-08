
'use strict';

const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputIntoSpan);
  
function inputIntoSpan (event) {
  event.target.value === '' ? textRef.textContent = 'Незнакомец' : textRef.textContent = event.target.value;
}