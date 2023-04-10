for  (let i = 0; i < 3; i++) {
    console.log(i, i);
    for  (let j = 0; j < 3; j++) {
        console.log(j);
    }
}
/* 
0  i
0
1
2

1 i
0
1
2

2 i 
0
1
2 */

let result = '';
const len = 7;
for  (let i = 1; i < len; i++) {
    for  (let j = 0; j < i; j++) {
        result += '*';        
    }
    result += '\n';
}
console.log(result);
/* 
*
**
***
****
*****
******
 */




for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 3; k++) {
            console.log(`Third level: ${k}`);
        }
    }
}
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
First level: 1
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
First level: 2
Second level: 0
Third level: 0
Third level: 1
Third level: 2
Second level: 1
Third level: 0
Third level: 1
Third level: 2
Second level: 2
Third level: 0
Third level: 1
Third level: 2
*/




first: for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 5; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}
/* first это метка */
/* каждый раз когда 3 цикл стоит как 2
мы пропускаем 2 и переходим сразу к первому циклу */
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1
First level: 1
Second level: 0
Third level: 0
Third level: 1
First level: 2
Second level: 0
Third level: 0
Third level: 1 
*/






first: for  (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for  (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for  (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
/* break полностью прерывает цикл */
/* 
First level: 0
Second level: 0
Third level: 0
Third level: 1 
*/



/* Задачи */

// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++ ){
        console.log(i);
    }
    // Пишем решение вот тут
    
    
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i-- ){
        if (i === 13) {
         break;
     } else {
         console.log(i);
     }
    // Пишем решение вот тут
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i <= 10; i++ ){
        if (i % 2 === 0) {
         console.log(i);
     } else {
         continue; }
    // Пишем решение вот тут
    
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let  num = 2;
    while (num <= 15){
        num++;
        if (num % 2 !== 0) {
        console.log(num);
        } else {
            continue;
        }
        
    }
    // Пишем решение вот тут
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++)
    {
    arrayOfNumbers[i - 5] = i;
    // Пишем решение вот тут
    }
    
    // Не трогаем
    return arrayOfNumbers;
}

/* test */
const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    const len = arr.length;
    // Пишем решение вот тут
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
        
    }
    console.log(result);

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const lens = data.length;
    // Пишем решение вот тут
    for (let i = 0; i < lens; i++) {
        if (typeof(data[i]) === 'number'){
            data[i] = data[i] * 2;
        } else {
                data[i] = data[i] + ' - done';
            }
    }
    console.log(data);
    const res = typeof('K')
    console.log(typeof(res));


    // Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    const len = arr.length;
    // Пишем решение вот тут
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const lens = data.length;
    // Пишем решение вот тут
    for (let i = 0; i < lens; i++) {
        if (typeof(data[i]) === 'number'){
            data[i] = data[i] * 2;
        } else {
                data[i] = data[i] + ' - done';
            }
    }
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    const lend = data.length - 1;
    let count = 0;
    // Пишем решение вот тут
    for (let i = lend; i >= 0; i--) {        
            result[count] = data[i];
            count++;              
    }
    
    
    // Не трогаем
    return result;
}



const lines = 5;
let result = '';
let count = 5;
let str = ' ';
// Проверяется именно переменная result, формируйте строку в ней
for  (let i = 0; i <= lines + 6; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
    result += str.repeat(count);
    count--;    
    for  (let j = 2; j <= i+1; j++) {
        
        result += '*';
               
    }
    result += '\n';
}

}
console.log(result);

