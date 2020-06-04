
'use strict';

// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const fontSizeControlRef = document.querySelector('#font-size-control');
const currentTextRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', fontSizeChange);
currentTextRef.setAttribute("style", "font-size:");

function fontSizeChange(event){
  currentTextRef.style.fontSize = event.target.value + 'px';
}

