'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const passwordInput = prompt('Введите пароль:');
if (passwordInput===null) {
  message = 'Отменено пользователем!';
} else if (passwordInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
} 

alert(message);