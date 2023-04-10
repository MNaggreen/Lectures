/* es 6 стандарт */
/* классы это красивая обертка функций конструкций */
/* создаем шаблон */
class Rectangle {
    /* создаем класс всегда с большой */
    constructor(height, width) {
        /* сюда принимаем аргументы как в функцию */
            this.height = height;
            this.width = width;
            /* это были свойства класов */
    }
    /* тут будут методы классов */
    calcArea() {
        return this.height * this.width;
    }
}



const square = new Rectangle(10, 10);
console.log(square);
/* Rectangle { height: 10, width: 10 } */
console.log(square.calcArea());
/* 100 */

const long = new Rectangle(20, 100);
console.log(long);
/* Rectangle { height: 20, width: 100 } */
console.log(long.calcArea());
/* 2000 */

/* 1 принцип разделяем концепцию от экземпляра
2 прицнцип наследование способность нашего обекта базироваться на другом
 обекте или классе */


class ColoredRectangleWithText extends Rectangle {
    /* наследуем методы и свойства класса Rectangle */
    constructor(height, width, text, bgColor) {
        super(height, width);
        /* super вызовет все строчки родителя
            this.height = height;
            this.width = width;*/
            this.text = text;
            this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor} `);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
/* 
Текст: Hello World, цвет: red 
*/
console.log(div.calcArea());
/* 
250
*/