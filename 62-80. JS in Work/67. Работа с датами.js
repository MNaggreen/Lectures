'use strict';
const now = new Date('2023-01-27');
console.log(now);
/* 2023-01-27T15:17:55.091Z текущая дата */

const now1 = new Date('2023-01-27');
console.log(now1);
/* 2023-01-27T00:00:00.000Z только дату как мы и показале выще*/

const now2 = new Date(2023, 1, 2, 20);/* год месяц дата часы 
0 это январь */
console.log(now2);
/* 2023-02-02T17:00:00.000Z
 */
/* 20 по гринвичу это 17 */

const now3 = new Date(0);/* 0 мили секунд милисекунды отчитываются с 1970 */
console.log(now3);
/* 
1970-01-01T00:00:00.000Z
 */


const now4 = new Date(+100000);/*мили секунд милисекунды отчитываются с 1970 */
console.log(now4);
/* 
1970-01-01T00:01:40.000Z
 */



const now5 = new Date(-123213123);/* 0 мили секунд милисекунды отчитываются с 1970 */
console.log(now5);
/* 
1969-12-30T13:46:26.877Z
 */



/* получение отдельного компонента даты */
const now6 = new Date();
console.log(now6.getFullYear());
console.log(now6.getMonth());
console.log(now6.getDate());
console.log(now6.getDay());/* воскресенье 0 */
console.log(now6.getHours());
console.log(now6.getMinutes());
console.log(now6.getMilliseconds());
/* 2023
0
27
5
18
28
586 */
console.log(now6.getUTCHours());
/* 15 */



/* получить разницу между часовым поясом и utc */
console.log(now6.getTimezoneOffset());
/* -180 в минутах */





console.log(now6.getTime());/* коло мили секунд прошедших с первого января */
/* 1674833923590 */
/* если это чесло помепстить сюда Date(1674833923590)
мы получим дату обратно */







/* УСТАНОВКА ДАТЫ */
/* все теже методы что и выше только с приставкой set кроме timezoneoffset */
let nowDate = new Date();
console.log(nowDate.setHours(18));/* всегда от этого мы вы вычетаем 3 */
console.log(nowDate);
/* 2023-01-27T15:44:02.405Z */

console.log(nowDate.setHours(18, 12));/*часы дальше минуты */

console.log(nowDate.setHours(40))/* тоже будет нормально работать
просто переведет дату на новое число*/



let nowDate1 = new Date('2020-05-01');
new Date.parse('2020-05-01');
/* оба метода аналогичны */





/* Засекаем время */
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i**3;
}
let end = new Date();
console.log(`Цикл отработал за ${end - start} милисекунд`);
/* Цикл отработал за 19 милисекунд */











