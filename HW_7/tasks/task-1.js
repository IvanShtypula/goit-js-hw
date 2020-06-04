
'use strict';

const allCategoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${allCategoriesRef.length} категории.`);

// console.log(allCategoriesRef);

const showCategoriesContent = items => {
  return items.forEach(item => 
     console.log(`Категория: ${item.firstElementChild.textContent}
     Количество элементов: ${item.lastElementChild.children.length}`),
  )
}
showCategoriesContent(allCategoriesRef);

