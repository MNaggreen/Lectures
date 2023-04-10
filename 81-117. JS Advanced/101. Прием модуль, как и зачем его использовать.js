'use strict';
/* vмодули это когда когд раедЪединен на разные файлы
к например мы делали в SASS */

/* html */
    <script src='lib.js'></script>
/* html */

/* lib.js */
 const app = '123';
/* так делать нельзя нужно скрыть в локальной зоне видимости */
 /* lib.js */


 const number = 1;



 (function(){
    let number = 2;
    console.log(number);
    /* 2 */
    console.log(number + 3);
    5
 }());
 /* это анонимная совызывающаяся функция */

 console.log(number);
 /* тут будет 1 такак глобальная переменная не изменилась */



 /* то что снизу должен делать weebpach npm пакет
  он будет все собирать за нас */
 const user = (function(){
    const privat =function(){
        console.log('I am private!');
    };

    return {
        sayHello: privat
    };
 }());

 user.sayHello();
 /* 'I am private!' */
