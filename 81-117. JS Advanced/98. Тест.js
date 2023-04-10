/* 
Question 1:
Каким образом можно превратить JSON-объект, который нам приходит от сервера, в обычный js-объект?

JSON.parse()

Question 2:
Можно ли при помощи fetch и XMLHttpRequest сделать одно и тоже?

Часть функционала придется делать самостоятельно

Question 3:
Что выведет в консоль данный код?

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
  
promise.then((value) => {
    console.log(value);
});

'foo'

Question 4:
Команда Promise.all() необходима для того, чтобы...

Узнать когда будут выполнены все промисы

Question 5:
Какое сообщение будет выведено в консоль при таком коде?

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
  reject("reject");
});
 
Promise.all([p1, p2, p3, p4, p5]).then(value => {
  console.log(value);
}, reason => {
  console.log(reason)
});

'reject'

Question 6:
Полезными свойствами метода массивов filter являются:

(Выберите правильный вариант)

фильтрация массива по заданной формуле
создание нового массива

Question 7:
Какое число будет содержаться в переменной result?

const arr = [5, 6, 11, 20, 3];
 
const result = arr.reduce((sum, curr) => sum + curr, 10);

55

Question 8:
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

Question 9:
Какое сообщение будет выведено в консоль?

console.log('convert me please'.replace(/ /g, '_'))

convert_me_please

Question 10:
Для чего нам может понадобится команда Promise.race() ?

Для определению кто первый выполнится

Question 11:
Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

P.S. В этих вопросах мы готовимся к собеседованиям, там часто дают такие задачки.

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
function one() {
    const promises = [a(), b(), c()];
    Promise.all(promises).then(values => console.log(values))
}
 
one();

через 5 секунд ['a','b','c']

Question 12:
При помощи какой команды можно получить данные из localStorage в поле с названием 'user'?

localStorage.getItem('user')

Question 13:
Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

P.S. В этих вопросах мы готовимся к собеседованиям, там часто дают такие задачки.

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
two().then(console.log);
 
// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

через 100мс, two is done: a

Question 14:
Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
three().then(console.log);
 
// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

больше 5 секунд three is done: a, b, c
если бы тут не было await то тогда через 
three is done: [object Promise] [object Promise] [object Promise]




*/

