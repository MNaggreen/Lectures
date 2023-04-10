'use strict';
/* пример когда обект удалиться */
let user = {name: 'Ivan'};
user = null;
console.log(user);
/* null */

/*  */

let user1 = {name: 'Ivan'};
const arr1 = [user1];
/* пока arr1 существует будет и сучществовать user1 */
user1 = null;
console.log(user1, arr1);
/* null [ { name: 'Ivan' } ]*/

/*  */

/* 3 пример */

