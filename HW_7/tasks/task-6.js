
'use strict';

const InputRef = document.querySelector('#validation-input');

InputRef.addEventListener('input', inputValidation);

function inputValidation(event){
  InputRef.value.length === Number(InputRef.dataset.length) ? InputRef.classList.replace('invalid','valid') : InputRef.classList.add('invalid'); 
}




