// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

'use strict';

// debugger;

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
 

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: this.transactions.length + 1,
    }

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    
    const history = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(history);
    
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if(this.balance < amount){
      console.log('снятие такой суммы не возможно, недостаточно средств');
      return;
      } this.balance -= amount;

    const history = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(history);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let allDeposits = 0;
    let allWithdraws = 0;
    for (const transaction of this.transactions){
      if(transaction.type === "deposit"){
        allDeposits += transaction.amount;
      } 
    
    }
    return allDeposits;
  },
};

// console.log(account.createTransaction(30, 'deposit'));
account.deposit(40);
account.withdraw(30);
account.deposit(60);
account.withdraw(20);
account.deposit(50);
account.withdraw(50);
console.log(account.transactions);
console.log(account.balance);
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal("deposit"));