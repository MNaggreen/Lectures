'use strict';
/* когда мы не знаем когда придет ответ от сервера операция идет асинхронно */

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    /* 1 выполнилось 2 отказ */
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
        /* передаем product
        в метод then */
    }, 2000);
});





req.then((product) => {  
    /* принмаем от resolve */  
    return new Promise((resolve, reject) => {
        console.log('Данные получены');  
        setTimeout(() => {
            product.status = 'order';
            /* console.log(product); */
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    /* добовляем новое свойство внаш обЪект */
    return data;/* тут мы передаем данные в след цепочку then */  
}).then((data)/* тут мы приняли */ => {
    console.log(data);
});
/* тут мы создали последовательную цепочку */  
/* 
Запрос данных...
Подготовка данных...
Данные получены
{ name: 'TV', price: 2000, status: 'order' }
*/










/* !!!!!!!!!!!!!!!!!!!!!!дальше идет метод reject */

console.log('Запрос данных...');

const req2 = new Promise((resolve, reject) => {
    /* 1 выполнилось 2 отказ */
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
        /* передаем product
        в метод then */
    }, 2000);
});
req2.then((product) => {  
    /* принмаем от resolve */  
    return new Promise((resolve, reject) => {
        console.log('Данные получены');  
        setTimeout(() => {
            product.status = 'order';
            /* console.log(product); */
            reject();
            /* вызывеам ошибку */
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    /* добовляем новое свойство внаш обЪект */
    return data;/* тут мы передаем данные в след цепочку then */  
}).then((data)/* тут мы приняли */ => {
    console.log(data);
}).catch(() => {
    /* показываем если огибка вызвана пропуская весь код
    всегда ставим catch в конце */
    console.log('Произошла ошибка');
});

















/* !!!!!!!!!!!!!!!!!!!!!!!!!! метод finally позволяет выполнить действие при любом исходе кода*/
console.log('Запрос данных...');

const req3 = new Promise((resolve, reject) => {
    /* 1 выполнилось 2 отказ */
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
        /* передаем product
        в метод then */
    }, 2000);
});

req3.then((product) => {  
    /* принмаем от resolve */  
    return new Promise((resolve, reject) => {
        console.log('Данные получены');  
        setTimeout(() => {
            product.status = 'order';
            /* console.log(product); */
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    /* добовляем новое свойство внаш обЪект */
    return data;/* тут мы передаем данные в след цепочку then */  
}).then((data)/* тут мы приняли */ => {
    console.log(data);
}).finally(() => {
    console.log('Finally');
    /* тут можно сделат очистку формы например */
});


























/* !!!!!!!!!!!!!!!!!!!!!!Promise.all и race*/
const test = time => {
    /* передаем время */
    return new Promise(resolve => {
        /* делаем промис напрямую без реджект */
        setTimeout(() => resolve(), time);
        /* запускаем через указанное время */
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    /* мы это делаем чтобы убедиться что все выполнилось
    и только тогда делаем */
    console.log('All');
    /* этот код запуститься только после того
    как последний промис выполниться */

});
/* принимает массив */



Promise.race([test(1000), test(2000)]).then(() => {
    /* как только один из промисов срабоатет код начнет выводить сообщения */
    console.log('All');
    /* этот код запуститься когда хотя бы один промис выполнится */

});
/* принимает массив */























/* setTimeout(() => {
    console.log('Подготовка данных...');
    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);    
    }, 2000);
}, 2000); */
/* весь код выше называется 
callBack hell потому что в таймере вызывается ещё один таймер
и так может быть очень много */
