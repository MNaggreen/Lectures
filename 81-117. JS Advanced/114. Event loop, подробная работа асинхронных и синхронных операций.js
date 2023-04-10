'use strict';

console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 2000);

setTimeout(() => {
    console.log('timeout__4000');
}, 4000);

console.log(2);

/* 
1
2
timeout
timeout__4000
все эти операции выполняются асинхронно
*/
let k = 0;
function count() {
    for (let i = 0; i < 1000; i++) {
        k++;
    }
    alert('done');
}
count();

/* пока данная задача выполняется сайт будет висеть
для этого лучше разделять наши функции */


/* задача для собеседования */

setTimeout(() => {
    console.log(1);
}, 0);
console.log(2);
/* 2
1
set timeout 
всегда опаздывает на 4 мс */
