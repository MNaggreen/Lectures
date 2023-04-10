"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}
/* пока деиствие выполняется
мы будем выводить num
и увеличивать его на 1 */





do {
    console.log(num);
    num++;
}
while (num < 55);
/* тоже самое немного в другом виде */




for (let i = 1; i < 8; i++) {
    console.log(i);
}
/*классмческий цикл который используют чаще всего  */







for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}
/* 12345
как только переменная i доходит до 6 цикл останавливается
 */





for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}
/* 12345789 
оператор continue позволяет пропустить 1 число */