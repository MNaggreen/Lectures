const postData = async (url, data) => {
    /* создаем функцию с асинхронностью*/
    const res = await fetch(url, {
        /* делаем делаем запрос await 
        говорит что мы обязательно должны ждать
        ответа от сервера*/
        method: "POST",
        
       headers: {
            'Content-type':
            'application/json'
        },
        
        body: data 
        
    });
    return await res.json();
    /* ждем результат */
};


/* вызов функции */
postData('http://localhost:3000/requests', JSON.stringify(object))
            /* тут вернется промис который мы обработает при помощи then */   
            /* так же после вызова данной функции наш номер телефона и имя сохраняться в db.json */  