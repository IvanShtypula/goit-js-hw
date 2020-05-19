'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood =  'happy';
user.hobby = 'skydiving';
user.premium = false;

const userArr = Object.entries(user);
for(const item of userArr){
  console.log(`${item[0]}: ${item[1]}`);
}


