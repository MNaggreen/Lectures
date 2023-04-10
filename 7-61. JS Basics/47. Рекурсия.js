/* 8 9 7 7 8+ */
/* когда функция вызывает сама себя это и называется рекурсия
или в функии вызывается эта же функция */
/* пример вызова возденение в степень */
function pow(x, n) {
    let result = 1;
    for (let i =0; i < n; i++) {
        result *= x;
    }
    return result;
}
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
        /* pow(2, 3) 2 * 4 так это будет */
        /*8  */
    }
};
/* есть база рекурсии это наше первое условие c 1
шаг рекурсии это наш вызов вложенной функции уменьшение n на один
и глубина общее колво вызовов число n аргумент*/
/* это и есть рекурсия! функция сама себя внутри запускает*/
/* релультаты теже */
console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));
/* 4  */



/* РЕКУРСИЯ ЭТО УПРОЩЕНИЕ ФУНКЦИИ ТЕМ
ЧТО МЫ ДЕЛЕМ ЕЁ НА ДВЕ МАЛЕНЬКИЕ */
let students = {
    js: [{
         name: 'John',
         progress: 100
        },
        {name: 'Ivan',
         progress: 60
        }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {   
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        /* дальше идет код только для рекурсии */
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};
/* задача посчитать кол во студентов и среднюю оценку */
function getTotalProgresByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        /* получить только значения элементов обекта */
        console.log(course);
        /* перебираем эдементы обекта js html
           получиться массив 
           [ { name: 'John', progress: 100 }, { name: 'Ivan', progress: 60 } ]
{
            basic: [ { name: 'Peter', progress: 20 }, { name: 'Ann', progress: 18 } ],
            pro: [ { name: 'Sam', progress: 18 } ] */
        if (Array.isArray(course)) {
            /* проверка массив ли это */
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
                /* перебираем наш список и расрываем его обекты */
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                    /* перебираем наш обект и расрываем
                    его внутренние обекты */
                }    

            }
        }
    }
    return total / students;
};
/* console.log(getTotalProgresByIteration(students)); */
/* 41.6 */






/* теперь таже функция но с рекурсией  упрощаем функцию**/
function getTotalProgresByRecursion(data) {
    if (Array.isArray(data)) {
        /* проверка массив ли это */
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
            /* перебираем наш список и расрываем его обекты */
        }
        return [total, data.length];
    } else {
        let total =[0, 0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgresByRecursion(subData);
            /* тут мы запускаем функцию занаго которая
            будет принимать массив и вычеслять total */
            total[0] += subDataArr[0];
            /* прогресс */
            total[1] += subDataArr[1];
            /* общее количество студентов */
        }
        return total;
    }
};
/* краткое описания каждый раз функция будет проверят массив ли это
если нет то переходит блоку else
и оттуда она опять запускает функцю и перепрыгивает вверх на проверку массива
пока не наткнется на массив
и так может быть много раз много вложенностей */
const result = getTotalProgresByRecursion(students);
console.log(result[0] / result[1]);
/*общий прогресс делим на общее кол во студентов */
/* 41.6 */

/* Данная функция работает с любой вложенностью */
