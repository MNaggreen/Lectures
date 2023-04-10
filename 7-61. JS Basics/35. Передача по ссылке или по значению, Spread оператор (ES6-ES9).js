"use strict";
let a = 5,
    b = a;
b = b + 5;
console.log(b);
/* 10 */
console.log(a);     
/* 5 */






const obj = {
    a: 5,
    b: 1
};
const copy = obj;
/* тут мы передаем знач. по ссылке
трюк как с переменными выше не выйдет
изменяя копию(ссылку) мы изменяем и оригинал */
copy.a = 10;
console.log(obj.a);
/* 10 */
console.log(obj.a);     
/* 10 */
function copyFunc(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copyFunc(numbers);
newNumbers.a = 10;
console.log(newNumbers);
/* { a: 10, b: 5, c: { x: 7, y: 4 } } */
console.log(numbers);
/* { a: 2, b: 5, c: { x: 7, y: 4 } }  */
/* так работает копирование
оригинал остался нетронутым */

/* но теперь проверим вложенный обект */
newNumbers.c.x = 10;
console.log(newNumbers);
/* { a: 10, b: 5, c: { x: 10, y: 4 } } */
console.log(numbers);
/* { a: 2, b: 5, c: { x: 10, y: 4 } }  */
/* изменяется и оригинал и копия */

/* Это называется поверхностаня копия */




/* второй способ добавления */
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
/* { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }  */
/* добавляем ключ значение из одного обЪекта в другой
первый аргумент это объект в который мы передаем
второй аргумент обЪект из которого мы берем */

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);
/* { d: 17, e: 20 }
{ d: 20, e: 20 } */
/* такой спсобо на помог также скопировать
но такая копия тоже поверхностная */




/* создаем копию массива */
const oldArray = ['a', 'b', 'c'];
/* const newArray = oldArray; */
/* если мы так сделаем то в наш новый список просто 
передадиться ссылка на другйо массив */
const newArray = oldArray.slice();
/* тут мы спомощью среза копируем весь массив
и помещаем в новый */
newArray[1] = 'asdasdasd';
console.log(oldArray);
console.log(newArray);
/* 
[ 'a', 'b', 'c' ]
[ 'a', 'asdasdasd', 'c' ]
 */



/* 3 способ для массива ГЛАВНЫЙ
помощзью spread из ES6 и ES8 !!!!!!!!!*/
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);
/* 
[
  'youtube',
  'vimeo',
  'rutube',
  'wordpress',
  'livejournal',
  'blogger',
  'vk',
  'fb'
]
*/
/* таким образом мы получили массив состоящий из элементов
другог массива */

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);
/* 
2
5
7 */
/* то есть мы взяли просто переменные из num
и по одной их вывели в консоль */
const array1 = ['a', 'b'];
const newArray1 = [...array1];
console.log(newArray1);
/* ['a', 'b'] */

const q = {
    one: 1,
    two: 2,
    three: 3
};
const newObj = {...q};
console.log(newObj);
/* { one: 1, two: 2, three: 3 } */








/* 4 способ для обЪекта ГЛАВНЫЙ structuredClone*/

// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved




/* 5 способ если 4 не работает используем JSON  */

/* 
JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.
*/

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data)); 
    
   
    copy.waitors[0] = {name: 'Mike', age: 32};
    console.log(data);
    return copy;
}

console.log(transferWaitors(restorantData));
