import { useState, useCallback } from 'react';
// это компонет в котором будут наши кастомные хуки

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // тут стояло в щагрузке true а в ошибке false из за этого в компоненте charinfo была постоянно загрузка

    // функция ниже это аналог функции request которая находится в char list
    // эта функци просто берет массив с нашего сайта marvel 11 00 остановился
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        
        setLoading(true);
        
        try {
            const response = await fetch(url, {method, body, headers});
            // сюда помещаем ответ от сервера await нужен чтобы ждать резудьтат работы
            
            if (!response.ok) {
                // если свойство ok не равно true то мы выбросим ошибку
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }/* если запрос не смог выполниться выбрасываем новосозданную ошибку */
            
            const data = await response.json();
            // трансформируем ответ от сервера

            setLoading(false);

            return data;
            // это чистые данные которыем нам приходят от api
            // нам еще предстоит их переделать в объект
        } catch(e) {
            // если ошибка мы её ловим она автоматом придет из браузера
            setLoading(false);
            setError(e.message);
            // передаем свойство ошибки
            throw e;
            // выкидываем непосредственно ошибку
        }
    }, []);
    // запоминаем функцию

    const clearError = useCallback(() => setError(null), [])
    // функция просто запоминается и вызвается один раз даллее просто сохраниться результат

    return {loading, request, error, clearError}
}

