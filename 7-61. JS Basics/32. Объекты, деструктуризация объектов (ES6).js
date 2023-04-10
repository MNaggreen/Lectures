"use strict";

/* const obj = new Object(); */
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'    
    },
    makeTest: function() {
        console.log("Test");
        /* это называется самодельный метод обекта
        чтобы обратиться пишем
        options.makeTest(тут значение); */
    }
};
console.log(options.name);
/* test */



console.log(options["colors"]["border"]);
/* black */




delete options.name;
/* удаляет свойство 
    name из объекта  */    



let counter = 0;
/* у объектов нету метода length
пожтому мы заводим счетчик */
/* перебор всех свойств объекта */
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }    
}
/* Свойство width имеет значение 1024
Свойство height имеет значение 1024
Свойство colors имеет значение [object Object] */
/*  for (let key of options) {}
для объекта не работает*/




console.log(Object.keys(options).length);
/* 4 */
/* так мы получаем массив со всеми ключами */
/* у которого уже можно запросить его длину */





/* ДЕСТРУКТУРИЗАЦИЯ */
console.log(options["colors"]["border"]);
/* black */
/* чтобы так не делать как показано выше
нужно произвести деструктуризацию */
const {border, bg} = options.colors;
console.log(border, bg);
/* black red */



/* все в js является обектом
смотри в браузере console.dir(String)
и вот в свойстве prototype мы можем увидеть 
все встроенные методы строки 
или другого интересующего нас обьекта*/

/* js это прототипно(обектно) ориентированный язык */