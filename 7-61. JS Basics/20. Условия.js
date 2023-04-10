"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}



const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}



(num === 50) ? console.log*('Ok!') : console.log('Error');
/* аналог условия которое показано выше тернарный оператор*/



const nums = 51;
switch (nums) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
/* ещё один аналог if else
если не один case не сработает условие вернется из default 
данный вид условий распросранен в redux*/