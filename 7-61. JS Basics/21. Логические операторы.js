/* таблица приоритета операторов
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт');
}

console.log((hamburger && fries));
/* вернет true так как true true */

/* 0, пустая сртрока '' null, undefined, not a number 
все это false*/

const hamburger2 = 2;
const fries2 = 1;
const cola2 = 0;
console.log(hamburger2 === 3 && cola2 === 2 && fries2);
/* вернет 0 т.к. это последний элемент в сравнении
оператор && всегда возвращает последний аргумент
или первое неправдивое выражение*/

console.log(1 && 0);
/* 0 */
console.log(1 && 5);
/* 5 */
console.log(null && 5);
/* null первое неправдивое выражение */
console.log(0 && 'dsfsdfsdfsb');
/* вернет 0 т.к. это последний элемент в сравнении*/





const hamburger3 = 3;
const fries3 = 3;
const cola3 = 0;
const nuggets3 = 2;
if (hamburger3 === 3 && cola3 === 2 || fries3 === 3 && nuggets3) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}
/* условие выполненно Все довольны */
/* оператор || возвращает также последнее лложно значение
если все значения ложны */
console.log(hamburger3 === 3 && cola3 === 2 || fries3 === 3 && nuggets3);
/* вернет 3 это последнее правдивое значение тиз правой части кода */

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);
/* оператор || возвращает первое правдивое значение */


console.log(!0);
/* вернет true d
!возвращает противоположное значение */


console.log( NaN || null && !3 && undefined || 5);
/* 5 */

console.log(5 === 5 && 3 > 1 || 5);
/* true */

