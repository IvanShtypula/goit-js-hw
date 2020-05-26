'use strict';

class Storage {
  constructor(items){
    this.items = items;
    }

    getItems = function(){
      return this.items;
   }

   addItem = function(item){
    this.items.push(item);
  }

   removeItem = function(removeItem){
   if(this.items.includes(removeItem)){
     console.log(removeItem);
     this.items.splice(this.items.indexOf(removeItem),1);
   }
  };
};

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]