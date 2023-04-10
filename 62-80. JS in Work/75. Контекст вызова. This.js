/* 'use strict'; */
/* 4 метода вызова контекста функции */




/* 1 Обычная функция this = window, 
но если use strict стоитто this = undefined  */
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;/* this.a + this.b неправильнО!!!! */
    }
    console.log(sum());
}
showThis(4, 5);
/* 9 */


/* 1 Обычная функция this = window, <ref *1> Object [global]
но если use strict стоитто this = undefined */




/* 2 Контекст вызова функции внутри обекта будет ссылать на этот
же объект*/
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
        /* тут будет Undefined такак контекст вызова потерян */        
    }
};
obj.sum();
/* { a: 20, b: 15, sum: [Function: sum] } */
/* контекст вызова обектов сам объект */
/* 2 Контекст вызова функции внутри обекта будет ссылать на этот
же объект*/









/* 3 метод this в констуктарах и классах это новый экземпляр объекта 
частый метод*/
function user(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
} /* теперь данная функция конструктор */
let ivan = new user('Ivan', 28);
console.log(ivan);
/* 3 this в констуктарах и классах это новый экземпляр объекта 
частый метод*/
/* user {
  name: 'Ivan',
  id: 28,
  human: true,
  hello: [Function (anonymous)]
} */






/* 4 метод ручное присвоение this: call, apply, bind */
function SayName(surname) {
    console.log(this);
    console.log(this.name1 + surname);
}
const user1 = {
    name1: 'John'
};/* this */

SayName.call(user1, 'Smith');
SayName.apply(user1, ['Smith']);
/* эти функции делают одно и тоже разница тодько 
всинтаксисе */
/* 
{ name1: 'John' }
John
{ name1: 'John' }
John
*/
/*после добавления surname
 { name1: 'John' }
JohnSmith
{ name1: 'John' }
JohnSmith */
function count(num) {
    return this-num;
}
const double = count.bind(3);
/* это унас будет this */
console.log(double(3));
/* 3 будет num числом */
console.log(double(13));
/* 0
-10 */
/* 4 метод ручное присвоение this: call, apply, bind */









const btn = document.querySelector('button');
btn.addEventLestener('click', function() {/* nтут можно так (e) => {} */
    /* в обработчиках событий можно использовать только обычные
    функции так мы получаем доступ к контекстному меню
    если использовать стрелочную
    this будет равен undefined */
    console.log(this);
    this.style.backgroundColor = 'red';
    /* цвет поменяется на красный */
    /* тут можно такthis будет равен e.target.style.backgroundColor */
});
/* нажимая на кнопку мы получае м саму кнопку
<button></button> */

const obj1 = {
    num: 5,
    sayNumber: function() {
        console.log(this);
        /* { num: 5, sayNumber: [Function: sayNumber] } */
        const say = () => {
            console.log(this);/* this.num выведет 5*/
            /* undefined */
        };
        say();
        /* { num: 5, sayNumber: [Function: sayNumber] } */
    }
};
/* console.log(obj1); */
/* { num: 5, sayNumber: [Function: sayNumber] } 
{ num: 5, sayNumber: [Function: sayNumber] } это вернула функция sayNumber*/
console.log(obj1.sayNumber());
/* { num: 5, sayNumber: [Function: sayNumber] } undefined
 мы вызвали функцию внутри функции которая находиться в другой функции */






const double1 = a => a * 2;
/* если действие помещается в одну строчку то можно убрать скобки и слово return 
+ аргументе если 1 можно без скобок писать*/
/* 
аналог
const double1 = (a) => {
    a * 2;
}
 */

console.log(double1(4));
/* 8 */