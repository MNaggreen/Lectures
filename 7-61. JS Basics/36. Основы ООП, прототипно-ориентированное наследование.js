"use strict";
/* JS Это объектно ориентированный язык */
/* при использовании любого метода наша переменная будь
то строка или число превращается в объект делает заданное действие и
опять возвращается в свой тип данных */
let str = 'some';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));
/* 
string
object
*/



console.dir([1, 2, 3]);
/* данныя команда покажет 
Array у которого есть элемент 
prototype который содержит всебе все методы массива
*/



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const john = {
    health: 100
};
/* john.__proto__ = soldier; */
/* старый способ добавления методов к обЪекту */
console.log(john);
/* { health: 100 } */
console.log(john.armor);
/* 100  хотя в самом обекте это не отображается */

john.sayHello();
/* Hello*/



/* Современный способ назначения прототипа */
Object.setPrototypeOf(john, soldier);
/* первое это объект которому мы внедряем прототип
а второе объект из которого мы берем прототип
эта запись идентична этой
 john.__proto__ = soldier;*/
const henry = Object.create(soldier);
/* тут мы создаем обект который сразу будет наследовать
прототип от солдата */
henry.sayHello();
/* Hello */


