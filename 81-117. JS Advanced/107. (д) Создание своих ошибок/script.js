'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        /* тут ошибка так как id пустой быть не может */
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

try {
data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

   if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);
   /* new Error это готовый класс
   throw  если при переборе id обнаружилось что он пустой то мы выведен cjj,otybt*/
    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});
} catch (e) {
    if (e.name === "SyntaxError") {
        /* вывод ошибки если код сверху с ошибкой */
        console.log(e.message);
    } else throw e;
    /* выбрасываем ошибку в общую консоль */
    
    console.error(e.name);
    
    console.log(e.stack);
}



/* const err = new Error('Some Random Message of Error');
console.log(err.name, err.message, err.stack); */