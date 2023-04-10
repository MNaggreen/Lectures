/* функция это обхект в который можно записать так же свойства */

const num = new Number(3)
console.log(num)
/* [Number: 3] */

const fun = new Function(3)
console.log(fun)
/* [Function: anonymous] */

function user(name, id) {
  this.name = name
  this.id = id
  this.human = true
  this.hello = function () {
    console.log(`Hello ${this.name}`)
  }
} /* теперь данная функция конструктор */




/* модифицируем нашу функцию 
прототипно жанный метод наслежуется всем*/
user.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушёл`);
};


const ivan = new user('Ivan', 28)
const alex = new user('Alex', 20)
console.log(ivan)
console.log(alex)
/* 
user {
  name: 'Ivan',
  id: 28,
  human: true,
  hello: [Function (anonymous)]
}
user {
  name: 'Alex',
  id: 20,
  human: true,
  hello: [Function (anonymous)]
}
*/
ivan.hello();
alex.hello();
/* 
Hello Ivan
Hello Alex 
*/



ivan.exit();
alex.exit();
/* 
Пользователь Ivan ушёл
Пользователь Alex ушёл
*/


/* классы появилиьс d es5 это синтиксический сахар для красоты */