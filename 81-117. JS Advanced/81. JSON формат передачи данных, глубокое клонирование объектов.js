'use strick';
/* JSON это простой набор ключ значение */
const persone = {
    name: 'Alex',
    tel: +74444444444
};
/* нам нужно передать это на сервер */
/* нужно изучить php! */

console.log(JSON.stringify(persone));
/* {"name":"Alex","tel":74444444444} 
теперь такой формат данных можно отправить на сервер!*/


/* теперь мы принимаем данные с сервера */
console.log(JSON.parse(JSON.stringify(persone)));
/* { name: 'Alex', tel: 74444444444 } самы обычный объект */



/* создаем глубокую копию объекта */
const personeOne = {
    name: 'Alex',
    tel: +74444444444,
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(personeOne));
console.log(clone);
/* {
  name: 'Alex',
  tel: 74444444444,
  parents: { mom: 'Olga', dad: 'Mike' }
}
в результате нам вернеться объкт который 
при изменении не поменяет оригинал */

