/* 
Question 1:
Что будет содержаться в переменной result после завершения кода?

function foo(a,b) {
    const [first, second] = a;
    const {eng, ru} = b;
 
    return `${second}, ${ru}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

Привет, Мир
Explanation
Не забывайте про прием деструктуризации, мы его будем очень часто использовать дальше по курсу.


Question 2:
Что будет выведено в консоль в результате работы функции?

'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);

ошибка!!!!!

Explanation
В данном случае sum - это обычная функция, контекст вызова которой будет undefined (за счет установленного 'use strict';). Отсюда, this.a превращается в undefined.a, что приводит к ошибке.


Question 3:
Какие из методов массивов возвращают новый массив в результате своей работы?

P.S. Это важно знать перед частью с react'ом, да и в работе тоже. 
Попробуйте вспомнить, мы все их обсуждали и использовали.

filter, map, slice



Question 4:
Event loop - это...

Механизм контроля очериди вызовов

Explanation
Событийный цикл и его определение - это не особо сложная задача. Главное держать перед глазами ту схему его работы, которую мы с вами разбирали.





Question 5:
У вас есть функция, которая скрывает номер телефона и имя пользователя до определенного действия. Эта функция выглядит вот так:

const msg = 'My number +12345678, name: Oleg';
 
function transformMsg(str) {
 
    // Пропущенная часть
 
    return b;
}
 
transformMsg(msg)
Результатом вызова этой функции сейчас будет:

My number *****, hidden
Какой код подходит на место пропущенной части функции?

str.replace(/\//////)
Explanation
Сила регулярных выражений в том, что им все равно, какое имя или номер телефона будет использоваться. Они найдут и поменяют их на нужные значения.


Question 6:
Какая основная проблема этого кода?

async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json))
}
 
makeRequest()

Нет преобразования текста от сервера

Explanation
Не забывайте, что запрос при помощи fetch дает нам промис, который еще нужно обработать. В данном случае правильный код будет выглядеть:

async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
 
makeRequest()




Question 7:
Как правильно задать наследование одного класса от другого?

class extend Element



Question 8: Correct
Какой формат экспорта/импорта ES6 модулей в JS записан синтаксически правильно? 

export function sum(a, b)

Explanation
Система экспортов/импортов очень важна в разработке реальных сайтов и приложений. Она позволяет разбивать ваш код на маленькие и удобные кусочки по назначению и дальше по курсу мы много раз еще будем её применять.





Question 9:
Сколько аргументов может быть у функции?
сколько угодно
Explanation
Реальный базовый вопрос с собеседований. Аргументов может быть бесконечно много. (в пределах памяти, конечно же)


Question 11:
a = [1, 2, 3]; b = [1, 2, 3];
нет не равны
Explanation
Всегда помните про то, что каждый объект в js уникален. Даже если у них будет одинаковое содержимое, то это все равно разные объекты. А еще стоит помнить тему передачи данных по ссылке или по значению.


Question 10: Incorrect
Что выведет в консоль данный код?

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});
  
promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e))

bar
Explanation
Обратите внимание на то, что reject запускается быстрее, чем resolve. Это значит, что код из блока catch выполняется и на этом работа промиса окончена. А в консоль выводится как раз то сообщение, которое было передано в эту функцию.

P.S. foo/bar - это классические названия в программировании для описания каких-либо тестовых сущностей, когда мы не знаем их точного имени.




Question 12:
Микрозадачи в событийном цикле - это...
действия которые создаються промисами и await
Explanation
Это важное понятие, которое часто спрашивают на собеседованиях. Не забывайте про разницу между макро- и микрозадачами


Question 13:
Какое значение будет выведено в консоль при выполнении этого кода?

let c = 4;
function addX(x) {
  return function(n) { n == 4 x ==3 наследование
     return n + x
  }
}
 
const addThree = addX(3);
 
let d = addThree(c);
let res = addThree(c);
 
console.log(res)

7
Explanation
Это небольшая задачка на замыкание функций. Обратите внимание на то, что х при вызове функции addX(3), сохраняется в замыкании возвращаемой функции. И теперь, каждый раз при вызове новой функции мы будем добавлять к тройке указанный аргумент.






Question 14:
Какого метода не существует у свойства classList?

includes


Question 15:
Что будет содержаться в переменной result в результате работы кода?

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result)

4500


Question 16:
Что выведет этот код:

let y = 1; 
let x = y = 2; 
alert(x);

2



Question 17:
Какой из команд можно создать элемент на странице?

document.createDivElement()


Question 18:
Как отменить стандартное поведение браузера при работе со ссылками, формами и тп?

event.preventDefault()
Explanation
Один из самых важных методов при работе с формами и ссылками. Забудете про него - и нужный функционал не получится.


Question 19:
Код ниже работает без ошибки. Но опытный разработчик считает его плохим. В чем причина?

const price = 500;
const money = 400;
 
switch (true) {
    case price > money:
        console.log('Мне не хватает денег');
    case price < money:
        console.log('Мне хватает денег!');
}

все выше перечисленное

20 questuion
Какой из вариантов получения этого элемента со страницы будет правильным?

<div id="hi">Hello</div>

document.querySulector('#hi')
Explanation
Не забывайте, что правильное получение элементов - это важный навык. Селектор, где мы указываем # применяется только в командах querySelector и querySelectorAll , а для получения одного элемента подходит только первая из этих команд.

Question 21:
Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');

400 500 'red' 'top'
Explanation
Обратите внимание на spread-оператор при выводе в консоль





Question 22:
Какой результат работы функции combineUrls в данном случае?



combineUrls('https', 'mysite.com');
 
const combineUrls = (protocol, domain) => {
    return `${protocol}://${domain}`;
}

refernce error
Explanation
Обратите внимание на то, что такой способ написания функции - это function expression. А это значит, что она создается только в тот момент, как до неё дойдет код. Поэтому ответом будет ошибка ссылочного типа (ReferenceError). Невозможно использовать то, чего еще не существует в коде.



Question 23:
Как называется прием из кода ниже?

const user = {
    name: 'Alex',
    age: 25
}
const {name, age} = user;

Деструктуризация
Explanation
Деструктуризация - это важный прием, не забывайте про него. Особенно, когда начнем работать с большими данными.





Question 24:
Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?

textContent
Explanation
Это один из вопросов на собеседованиях по безопасности, важно помнить.


Question 25:
Какой командой можно удалить элемент со страницы?

div.remove


Question 26:
Какой результат даст этот код?

0 || 1
0 && 1
0 || NaN || false || null

1
0
null


Question 27:
Какой итоговый результат мы получим в консоли, если запустить этот код?

(Постарайтесь решить без запуска, проанализировав код. Именно так дают его на собеседовании)

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log);
two().then(console.log);
three().then(console.log);

two is doen
Explanation
Это классическая задача на промисы. Внимательно смотрите на команды race() и all(), а так же на наличие async/await. Именно на понимание их работы и направлена данная задач





Question 28:
Что будет выведено в консоль?

if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}
ершкв
Explanation
Не забывайте про те сущности, которые в логическом контексте будут false. А вот строка с пробелом - это уже true, так как содержит 1 символ.


Question 29
Что будет результатом выполнения этого кода на странице?

const msg = 'Заявка №231';

const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
div.textContent(msg);
 
document.body.append(div);
ошибка
Explanation
Обратите внимание на то, что textContent - это свойство блока, его текстовый контент. Это не функция. Поэтому и использовать его нужно вот так:

div.textContent = msg;
Отсюда и возникнет ошибка.

Question 30:
Что такое объект события?

это объект который содержит всю информацию об произошедшем событии
*/


if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}