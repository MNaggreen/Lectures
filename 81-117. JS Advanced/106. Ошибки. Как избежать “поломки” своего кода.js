'use strict';

try {
    console.log('Normal');
    /* если все нормально нам выдаст это сообщение */
    console.log(a);
    console.log('result');
} catch(error) {
    console.log('error');
    /* если нет мы увидим это */
    console.log(error.message);
    /* сообщение от ошибке */
    console.log(error.stack);
    /* каккие функции привели к этой ошибке */
} finally {
    /* 'этот код выполниться абсолютьно всегда! */

}


console.log('Still Ok');
/* данный код будет работать даже если выше выпадет ошибка */


/* Normal
error
a is not defined
ReferenceError: a is not defined
    at Object.<anonymous> (c:\Users\nicko\Downloads\Петреченко JS + React\Projects\Конспекты\tempCodeRunnerFile.js:6:17)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
Still Ok */

/* еще один пример */

try {
    document.querySelector('active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}
console.log(normal)