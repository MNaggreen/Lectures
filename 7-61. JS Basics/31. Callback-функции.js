"use strict";
/* callback функция это функция которая 
запускается после выполнение другой функции
проще говоря функция которая вызывает другую функцию */
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}
/* устанавливаем задержку и таким образом
при вызове сначала вызовется функция second */

function second() {
    console.log(2);
}


first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

console.log(learnJS('JavaScript', function() {
    /* тут у нас function
    является анонимной функцией */
    console.log('Я прошел этот урок!');
}));

/* Я учу: JavaScript
Я прошел этот урок!
undefined Это из за того 
что мы забыли вставить return */

/* еще пример */

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log(console.log('Я прошел этот урок!'););
}

console.log(learnJS('JavaScript', done 
    /* здесь мы передаем в функцию еще одну функцию */));

    /* все серверное программирование построено на Node.js
    и callback функциях */

    /* например функция вызовет только после клика пользователя */