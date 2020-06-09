
'use strict';

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input[type="number"]');
const renderBtnRef = document.querySelector('#controls button[data-action="render"]');
const destroyBtnRef = document.querySelector('#controls button[data-action="destroy"]');

inputRef.addEventListener('input', createBoxes);
renderBtnRef.addEventListener('click', renderBoxes);

let arrBoxes = [];

function createBoxes(amount){
  const inputValue = amount.target.value;
  let widthBox = 20;
  let heightBox = 20;
  for(let i = 0; i < inputValue; i += 1){
    const box = document.createElement('div');
    widthBox += 10;
    heightBox += 10;
    box.style.width = widthBox + 'px';
    box.style.height = heightBox + 'px';
    box.style.backgroundColor = randomRgbColor();
    box.classList.add('box');
    arrBoxes.push(box);
    }
}


const colorChanel = function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function randomRgbColor(){
  const randomChanelRed = colorChanel(0, 255);
  const randomChanelGreen = colorChanel(0, 255);
  const randomChanelBlue = colorChanel(0, 255);
  return 'rgb('+randomChanelRed+','+randomChanelGreen+', '+randomChanelBlue+')'
}

// function renderBoxes(){
//   arrBoxes.forEach(box => boxesRef.append(box));
// }

function renderBoxes(){
  boxesRef.append(...arrBoxes);
}

destroyBtnRef.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  const allBoxes = document.querySelectorAll('.box');
  console.log(allBoxes);
  allBoxes.forEach(box => box.remove());
  // boxesRef.innerHTML = '';
  arrBoxes = [];
}