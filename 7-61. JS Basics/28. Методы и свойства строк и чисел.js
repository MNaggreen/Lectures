"use strict";
/* строки */
const str = "test";
const arr = [1, 2, 4];
console.log(str.toUpperCase());
/* TEST Это метод который вызывается 
с помощью скобок */
console.log(str.toLowerCase());
console.log(str.length);
/* метод вызывается на конце со сокобками
console.log()
свойство вызывается без скобок на конце
str.length */
/* чтобы узнать все свойства и методы объекта
пишем  в браузере*/





console.dir(Number);
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
/* выдаст 5 так как fruit начинается с
пятой строки 
если вернется -1 значит такой отрезок
 строки не был найден*/






const logg = "Hello world";
console.log(logg.slice(6, 10));
/* world
если зададим значение больще
то строка может обрезаться больше чем надо слева*/
console.log(logg.slice(-5, -1));
/* worl */

console.log(logg.substring(8, 11));
/* rld */
/* работает как slice
substring не поддерживает отрицательные значения
 поддерживает начальный индекс больше последнего*/

console.log(logg.substr(6, 5));
/* world */
/* Данный метод принимает первое значение 
это начальный индекс второе это колво символов
которые надо вырезать */









/* числа */
const num = 12.2;
console.log(Math.round(num));
/* округляем число
ответ будет 12 */
 
const test = "12.2px";
console.log(parseInt(test));
/* мы получим числовой тип данных 12 */

console.log(parseFloat(test));
/* вернет 12.2 */






































































































































