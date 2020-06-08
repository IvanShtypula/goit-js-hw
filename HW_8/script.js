import data from './gallery-items.js';
import { galleryItemTemp } from './gallery-item-temp.js';

const refs ={
  galleryList: document.querySelector('.js-gallery'),
  lightBox: document.querySelector('.js-lightbox'),
  lightBoxImg: document.querySelector('.lightbox__image'),
  lightBoxBtn: document.querySelector('.lightbox__button'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
}

console.dir(refs.lightBoxOverlay);

refs.lightBox.addEventListener('click', lightBoxCloseOnOverlayClick);
refs.galleryList.addEventListener('click', clickOnItem);
refs.lightBoxBtn.addEventListener('click', lightBoxClose);

const galleryItems = data.map(item => galleryItemTemp(item)).join('');

refs.galleryList.insertAdjacentHTML('beforeend', galleryItems);

function clickOnItem(event){
  event.preventDefault();
  if(event.target.nodeName !== 'IMG'){
  return;
  }
  refs.lightBox.classList.add('is-open');
  refs.lightBoxImg.src = event.target.dataset.source;
}

function lightBoxClose(event){
  refs.lightBoxImg.src = "";
  refs.lightBox.classList.remove('is-open');
} 

function lightBoxCloseOnOverlayClick(event){
  if(event.target.nodeName !== 'IMG'){
  refs.lightBoxImg.src = "";
  refs.lightBox.classList.remove('is-open');
  }
}
