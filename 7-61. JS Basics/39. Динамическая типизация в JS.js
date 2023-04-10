/* Динамическая типизация - это возможность одного кода
превращаться в другой
пример число в строку */




/*1 To String */
console.log(typeof(String(null)));
/* string мы переделали null в строку! */



/* 2 конкатенация что то складываем со строкой */
console.log(typeof(5 + ''));
/* string */
const num = 5;
console.log('https://vk.com/catalog/' + num);
/* https://vk.com/catalog/5 */
const fontSize = 26 + 'px';
/* 26px */



/* 3 To Number */
console.log(typeof(Number('4')));
/* number это старый метод не рекомендуется*/
console.log(typeof(+'4'));
/* number это называется унарный плюс он превращает строку в число */
console.log(typeof(parseInt('15px', 10)));
/* number данный метод видит что ему указали десятичное число
и он просто удадяет строку делайт 15 числом */
let answ = +prompt('Hello', '');
/* все что мы получаем от пользователя это строки
и нам придется их преобразовывать в другие типы данных */



/* 4 To Boolean */
/* 0 '' null undefined NaN все это будет превращаться в False */
/* 1 */
let switcher = null;
if (switcher/* тут будет false */) {
    console.log('Working...');
}
switcher = 1;
if (switcher/* тут будет true */) {
    console.log('Working...');
}
/* 2 */
console.log(typeof(Boolean('4')));
/* boolean */
/* 3 */
console.log(typeof(!!"33333"));
/* boolean */