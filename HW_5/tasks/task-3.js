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
    this.items = this.items.filter(item => item !== removeItem);
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