"use strict";
console.log('arr' + ' - object');
/* arr - object */
console.log(4 + ' - object');
/* 4 - object */
console.log(4 + +'5');
/* это унарный плюс который выдаст
 9 */




let incr = 10,
    decr = 10;
incr++;
/* оператор инкрименции увеличения  11*/
decr--;
/* оператор декрименции уменьшения  9*/
/* или */
++incr;
--decr;



console.log(5%2)
/* 1 это остаток от деления */
console.log(2*4 == 8);
/* true */
console.log(2*4 == 8);
/* true */
console.log(2*4 == '8');
/* true */
console.log(2*4 == '8');
/* true */
console.log(2*4 === '8');
/* false т.к. эт острогое сравнение */





const isChecked = true,
      isClose = true;
console.log(isChecked && isClose);
/* True */
console.log(isChecked || isClose);
/* True */
console.log(false && isClose);
/* false */
console.log(false || isClose);
/* True */




const isChecked2 = true,
      isClose2 = true;
console.log(!isChecked2 && isClose2);
/* flase так так как оператор отрицания 
возвращает обратное по значению значение т.е.
 false вместо true */




console.log(2 + 2 * 2 === 8);
/* false так так впримере будет 6
приоритет за умножение и делением
чтобы убрать приоритет нужны скобки */
console.log(2 + 2 * 2 != 8);
/* true так как 6 не равна 8 */



