
'use strict';

const fontSizeControlRef = document.querySelector('#font-size-control');
const currentTextRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', fontSizeChange);
currentTextRef.setAttribute("style", "font-size:");

function fontSizeChange(event){
  currentTextRef.style.fontSize = event.target.value + 'px';
}

