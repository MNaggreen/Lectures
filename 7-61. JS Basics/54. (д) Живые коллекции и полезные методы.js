"use strict";

const boxesQuery = document.querySelectorAll('.box');
/* старый метод */
const boxesGet = document.getElementsByClassName('box');
/* новый метод */

console.log(boxesQuery);
/* псевдомассив NodeList(3) данный способ лучше 
так как он генерирует больше больще методов для массива
таких как forEach и т.д.*/
console.log(boxesGet);
/* псевдомассив HTMLCollection(3)
устаревний метож */
console.log(document.body.children);
/* псевдомассив HTMLCollection(4) содержащий в себе все что есть 
в теге body устаревший метод*/

boxesQuery[0].remove();
/* после данного кода вернется наш div до удаления
хотя в самом html div удалится*/
boxesGet[0].remove();
/* после данного кода вернется текущие т.е. один элемент 
так как мы удалили еще один div
т.е. этот метод лучше опимывает актуальную картину
живая коллекция-*/


for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    /* создаем элемент */
    div.classList.add('box');
    /* добавляем класс к нашему div */
    document.body.append(div);
    /* помещаем в наш body
    созданный div */
    /* boxesGet[bosexGet.length] = div
     так нельзя
    в живые коллекции HTMLCollection boxesGet запрещено добавлять */
}

console.log(boxesQuery);
/* псевдомассив NodeList(3) данный способ лучше 
так как он генерирует больше больще методов для массива
таких как forEach и т.д.*/
console.log(boxesGet);
/* псевдомассив HTMLCollection(6)
устаревний метож */

/* создаем массив и массивоподобного объекта(псевдомассива) */
console.log(Array.from(boxesGet));
/* 6  */
/* теперь boxesGet обычный массив в котором можно использовать 
все методы но данный массив будет статичным и уже не будет показывать
изменений в реальном времени*/







/* Поиск элемента который подходит только по css селектору */
const boxesQuery = document.querySelectorAll('.box');
/* старый метод */
const boxesGet = document.getElementsByClassName('box');
/* новый метод */
boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('This one!');
    /* данный метод бустро находит по классу
    и возвращает true false прямо на 
    dom элементах(полученный массив через querySelectorAll) */
});


console.log(boxesQuery[0].closest('.wrapper'));
/* быстрый поиск ближайшего родителя в dom массиве
только вверх т.е. у родителей данный метод ищет
если не находит возвращает null*/

