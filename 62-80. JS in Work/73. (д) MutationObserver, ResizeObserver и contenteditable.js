/* отслеживание изменений */
/* hmtl */
<div contenteditable ></div>
/* теперь внутри этого тега можно писать! */
/* у этого урока есть дополнительный курс смотри описанеи урока */
/* html */


/* script */
let observer = new MutantionObserver(mutationRecords => {
    /* при изменени (введении текста) 
    наше слежение будет срабатывать*/
    console.log(mutationRecords);
})
/* следим за обектом */
observer.observe(box, {
    childList: true/* следим только за текстовым узлом */
})
/* 1 это сам объект
2 это конфигурация например за изменение чего лдибо */


/* перестать следить за обЪектом */
observer.disconnect();
/* script */