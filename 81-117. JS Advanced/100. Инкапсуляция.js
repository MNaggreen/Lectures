'use strict'

/* скрытие наших данных от внешнего мира 
называется инкапсуляцией */

/* храним приватно */


function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age} `);
    };
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
/* Ivan */

console.log(ivan.age);
/* 27 */

ivan.age = 30;
ivan.name = 'Alex';

ivan.say();
/* Имя пользователя: Alex, возраст 30  */





function User(name, age) {
    this.name = name;
    let userAge = age;
    /* возраст уже не изменяем */

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge} `);
    };
    
    this.getAge = function() {
        return userAge;
        /* только так мы можем обращаться к нашим Let переменным */
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }     
        /* только так мы можемe устанавливать наши значения к нашим Let переменным */
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
/* Ivan */

console.log(ivan.getAge);
/* 27 */

ivan.Userage = 30;/* undefined */
ivan.setAQge(30); /* 30 будет */
ivan.setAQge(300); /* Недопустимое значение! */
ivan.name = 'Alex';

console.log(ivan.getAge);
/* 30 сохраниться даже после 300 так как сработала защита*/

ivan.say();
/* Имя пользователя: Alex, возраст 30  */








/* Классы */

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;/* так мы скрываем */ /* при изменеии переменных
         подчеркивание ставить нельзя!!! */
       /*  let userAge = age; так делать нельзя в классах
       */
    }   

    #surname = 'Petrychenko';/* это эксперементальная функция теперь данное свойство приватно*/

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age} `);
    }
    
    get age() {
        return this._age;
        /* только так мы можем обращаться к нашим Let переменным */
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }     
        /* только так мы можемe устанавливать наши значения к нашим Let переменным */
    }
}

const ivan = new User('Ivan', 27);
 console.log(ivan.age); 
/*  27 */ 

ivan.age = 99;/* теперь наш код публичный */
 console.log(ivan.age()); /* console.log(ivan._age); так делать нельзя так как мы воруем значение */
/*  99  */

ivan.say();
/* Имя пользователя: Ivan, возраст 99  */

console.log(ivan.surname);
/* undifined снаружи теперь мы не можем получить данное значение

но внутри нашеего класса мы смогли добавить в строку данное свойство*/ 
/* console.log(ivan.#surname);  так тоже не получить*/

