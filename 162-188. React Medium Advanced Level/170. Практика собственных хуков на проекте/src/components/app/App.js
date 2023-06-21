import { lazy, Suspense } from 'react';
// Suspense Нужен для того чтобы обрабатывать ошибки в него обычно
// оборачивают ленивые элементы
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner"
/* import {  MainPage, ComicsPage,  Page404, SingleComicPage} from '../pages'; */
// web pack настроен так что он ищет в папке которую ему показали, файл Index.js и 
// если находит то берет оттуда все что совпадет

// import Page404 from '../pages/404'; 
// это обычный импорт который съедает именно столько 
// так она весить 751 кило байт 770 на диске 

// ниже показано применение react lazy после использования стало 851 размер
//  + стало больше чанков (страниц которые хранят в себе js код)
// сначала загружаются нужные чанки и уже потом остальные по запросу
// ВСЕ ДИНАМИЧЕСКИЕ ИМПОРТЫ ДОЛЖНЫ БЫТЬ НИЖЕ СТАТИЧЕСКИХ
const Page404 = lazy(() => import('../pages/404'));
// просто создаем переменную и сразу тут записываем по названию 
// нашу страницу 
const MainPage = lazy(() => import('../pages/MainPage'));
// главная особенность такого импорта что страницы будут загружаться только по надобности
// и это увеличит скорость зугрузки сайта т.к. при первом заходе будет работать
// только часть сайта
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

const App = () => {    
    return (
        <Router>
            <div className="app">                
                <AppHeader/>
                <main>                         
                   <Suspense fallback={<Spinner />}>
                    {/* сюда мы помещаем динамический компонент который мы будем загружать
                     пока загружается наш динамический react lazy компонент*/}
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                                {/* под каждым Route может быть еще один Route который
                                    обычно вложенный! */}
                            <Route path="/comics" element={<ComicsPage/>}/> 
                            <Route path="/comics/:comicId" element={<SingleComicPage />}/> 
                                {/* получаем по уникальному идентификатору комикс */}
                            <Route path="*" element={<Page404 />}/>  
                            {/* такая струтура укажет реакту что все 
                            незнакомые страницы введенные пользователем
                            будут распознаваться как ошибка 404 */}
                        </Routes>
                   </Suspense>
                </main>
                {/* так же сюда можно поместить компонет Outlet в котором будет отображаться 
                все куда мы кликнем т.е. это место для отображение контента*/}
            </div>
        </Router>
    )         
}

export default App;