'use strict';
/* чтобы все происзодило асинхронно нам и нужна технология AJAX
допустим фильтр на веб сайте который перезагружет только часть нформации
страницы а не всю страницу */

/* HTTP Request старый метод!!!!!!!!!!!! */
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); /* создаем обЪект запрос как переменную ниже передаем в неё аргументы */
    request.open('GET', 'js/current.json');/* запрашиваем информацию */
    /* request.open(method(get or post), url куда посылаем, путь  async, асинхронность пока сервер не ответит все остальное загружается, login, pass); */
    
    request.setRequestHeader('Content-type', 'application.json; charset=utf-8');
    /* загодовок запроса, тип файла, кодировка */
    
    request.send();/* отправляем запрос */

    request.addEventListener('readystatechange', () => {/* аналог выше */
        if (request.readyState == 4 && request.status === 200) {

            console.log(request.response);
            /* если мы успешно связалить то тут
            будет 
            script.js:23 {
                "сurrent": {
                "usd": 74
                }
                         } */
            
            const data = JSON.parse(request.response);
            /* приводим информацию в читабельный вид */
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);/* колво знаков после точки */
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    /* свойства XMLHttpRequest */
    /* status например 404 not found на вики можно смотреть */
    /* statusText текстовое описание ответа от сервера */
    /* response ответ от сервера от BackEnd разработчика */
    /* readyState текущее состояние запроса 4 статуса готовности есть*/

    /* события XMLHttpRequest */
    /*  request.addEventListener('readystatechange', () => { });
    событие отслеживающее статус готовности в текущий момент */
});




/* аналог кода выше */
/* request.addEventListener('load', () => {
        if (request.status === 200) {

            console.log(request.response);
            /
            
            const data = JSON.parse(request.response);
            
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    }); */
