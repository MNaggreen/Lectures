// иногда, нам нужно разделить приложение на части,
//  что бы оно загружалось быстрее

export function logger() {
    console.log('helo world');
}
// так работает динамический экспорт

export function secondLog() {
    console.log('log2');
}





// теперь иден в другой файл
if (loading) {
    import('./somefunc')
        .then(obj => obj.logger())
        .catch();
}
// импорт возвратит промис т.е. его нужно обязательно обработать
// из импорта всегда возвращается объект и мы из него вытаскиваем функцию


// Ниже мы вытаскиваем сразу 2 импорта
const onCharLoading = async () => {
    const { logger, secondLog } = await import('./someFunc')
    logger();
}
// тут нужно использовать async await так как мы выгружаем сразу две функции








export default function loggerDefault() {
    console.log('its a default export');
}
// тут пример и экспортом как default 
// так будет выглядеть импорт внутри
// {
//     default: () {
//         console.log('hello world!')
//     }
// }

// теперь иден в другой файл
if (loading) {
    import('./somefunc')
        .then(obj => obj.default())
        .catch();
}
// тут уже вызываем default функцию

// дальше мы передем к коду на реакте