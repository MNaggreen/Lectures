'uss strict';

function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next());
/* console.log(str.next().value());
вывод будет такой value: S */
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
/* каждый раз когда мы будем запускать данную функцию она нам выдаст след.
результат */
/* React\Projects\Конспекты\tempCodeRunnerFile.js"
{ value: 'S', done: false }
{ value: 'c', done: false }
{ value: 'r', done: false }
{ value: 'i', done: false }
{ value: 'p', done: false }
{ value: 't', done: false } */

console.log(str.next());
/* { value: undefined, done: true } */
/* тут будет такой вывод потому что мы истратили все 6 вызовов функции */


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
/* один вызов функции добовляет +1 к нашему i */
/* { value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false } */


/* можно и так */
for (let k of count(7)) {
    console.log(k);
}
/* 0
1
2
3
4
5
6
цикл сам переберет значения */