/* 
Question 1:
Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');

400 500 'red' 'top'






Question 2:
Что будет выведено в консоль в результате работы функции?

'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);






'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);

тут будет ошибка так как 'use strict'; включен
если его убрать то будет udefined и 9




Question 3:
Делегирование событий - это прием, который позволяет...

уменьшить коло обработчиков

проще взаимодействовать с dom













Question 4:
Что выведет в консоль данный код?

class Slider {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
 
    showSliderWidth() {
        console.log(this.width);
    }
}
 
const slider = new Slider('500px', '150px');
 
slider.showSliderWidth();

500 так как мы вызываем первую вложенную функцию








Question 5:
Какого метода не существует у свойства classList?

.includes()



Question 6:
Какое свойство отвечает за ширину элемента, включая только сам контент и padding?

clientWidth



Question 7:
Как правильно задать наследование одного класса от другого?

class slider extends Element




Question 8:
В чем ключевая разница между методами call и apply?

call принимает в себя дополнительные аргументы в виде строки
apply в виде массива





Question 9:
Что выведет в консоль данный код?

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function() {
        const extractCurrDomain = () => {
            return this.domain;
        }
        const extractCurrProtocol = () => {
            return this.protocol;
        }
 
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
    }
}
 
urlObj.showCurrentURL()

https://mysite.com



Question 10:
Что выведет в консоль этот код при запуске?

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
}
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    }
    const extractCurrProtocol = () => {
        return this.protocol;
    }
 
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
}
 
const url = showCurrentURL.bind(urlObj);

[function: bound showCurrentURL]
или вызов самой функции




Question 11:
Свойство объекта события event.code позволяет получить...

Код физической коавиши, которая была нажата. Вне зависимости от
зажатых shift alt


Question 12:
Для чего необходимо сохранять уникальный идентификатор таймера?

const timerId = setInterval(func, 2000);

Для того тчобы иметь возможность остановить этот таймер

*/

 
