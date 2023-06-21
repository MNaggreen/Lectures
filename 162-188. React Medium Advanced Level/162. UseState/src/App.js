import {Component, useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const countTotal = (num) => {
    console.log('counting...');
    return num + 10
} 
// 1 (44)

const calcValue = () => {
    console.log('random');

    return Math.random() * (50-1)+1;
}

// const getSomeImages = () => {
//     // функция которая передает массив
//     console.log('fetching')
//     return [
//         "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//         "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//     ]
// }

// функциональный аналог классового компонента выше
const Slider = (props) => {
    // при ререндеринге наш компонент будет всегда перерисовываться и важно сделать так
    // чтобы функции вызываались по необходимости

    const getSomeImages = useCallback(() => {
        // 1 (31) создаем функцию подгрузки изображений
        // функция которая передает массив
        console.log('fetching')
        return [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        ]
        // такую функцию используют нечасто но иногда нужно изменить один компонент если скажем содержимое массива картинок изменилось в функции
    }, [])
    // первый аргумент функция
    // второй аргумент это массив зависимостей тот элемент при изменении которого будет вызвана функция
    // так как мы не передали компонент в список завимимостей то наша функция стала меморизированной
    // она находиться только в памят иначече эта функция будет срабатывать каждый раз
    // как элемент помещенный в список зависимостей изменится
    // // МЫ КЭШИРУЕМ ТОЛЬКО ФУНКЦИЮ С ПОМОЩЬЮ ЭТОЙ ФУНКЦИИ

    const slideStateArray = useState();
    // 1 элем состояние
    // 2 элем функция которая изменяет
    // возвращается массив
    console.log(slideStateArray);
    // [undefined, function()]
    
    const [autoplay, setAutoplay] = useState(false);
    // меняем состояние для переменной autoplay (изначально false)
    const [slide, setSlide] = useState(calcValue); /* формируем значение из другой 
    функции если написать calcValu() то тогда каждый раз будет вызываться эта функция 
    так делать нельзя (() => clacValue так можно) */
    // проводим сразу деструктуризацию
    // кстати 0 тут значение по умодлчанию для slide    
    
    function logging() {
        console.log('log!');
    }

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`   
        
    }, [slide]) 
// useEffect принимает функцию ктороя будет запускать при каждом изменении компонета
// запросы на сервер, таймауты, изменение дом
// вторым аргументом выступает сам элемент который при изменении или обновлении будет 
// запускать useEffect

useEffect(() => {
    console.log('effect');
    document.title = `Slide: ${slide}`;
}, []) 
// так как массив зависимостей пуст
// то такая функция запустить только при создании компонента
// можно создавать много эффетов для их комбинирования


useEffect(() => {
    console.log('effect');
    document.title = `Slide: ${slide}`;
    window.addEventListener('click', logging)
    // при создании сюда навешивается слежение
    return () => {
        window.removeEventListener('click', logging)
        // при удалении компонента слежение уже не будет работать
        // внимание данная функци я не удаляет компонент а просто следит
        // удаление прооисходет ниже в функции App
    }
}, [slide]) 
// так можно удалитькомпонент


useEffect(() => {
    console.log('autoplay');
}, [autoplay])

    function changeSlide(i) {
        setSlide(slide => slide + i)
        // увеличиваем на i наш счетчик используя вызов useState
    }
    // function toggleAutoplay() {
    //     setAutoplay(!autoplay)
    //      setAutoplay(!autoplay)
        // если так сделать то autoplay переключится только один раз
        // так как он не изменяет состояние а берет и показывает
    // }
    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
        // помещаем значение противоположное (переключатель)
        // так делать правильнее так как мы показываем что нужно изменить и сохранить
    }
    
    // const [state, setState] = useState({slide: 0, autoplay: false});
    //  тут уже придется делать все вручную
    // function changeSlide(i) {
    //     setSlide(state => ({...state, slide: state.slide + i}))    
    //      каждый раз полностью нужно полностью передавать обект
    //      иначе он просто удалит точто мы не написали 
    // }   
    // function toggleAutoplay() {
    //     setAutoplay(state => ({...state, autoplay: !state.autoplay}))        
    // }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);
        // 2 (44) если slide не изменинлся то после перерендеринга вернется старое значение,
        // иначе вывозвется функция и запомниться ное значение и так по кругу
        // МЫ КЭШИРУЕМ ТОЛЬКО ЗНАЧЕНИЕ С ПОМОЩЬЮ ЭТОЙ ФУНКЦИИ


    const style = useMemo(() => (
        {
            color: slide > 4 ? 'red' : 'black'
        
    }), [slide])
    // так лучше и теперь use effect не будет путаться

    useEffect(() => {
        console.log('styles!')
    }, [style]);
    // когда стили меняються то выпадает сообщение и так если оставить жо данное сообщение будет выводиться каждый раз перерендеринга
    // решение добавить сверху use memo

     return (
         <Container>
             <div className="slider w-50 m-auto">
                {/* <img classname="d-block w-100" */}
                    {/* // src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    // alt="slide" /> */}
                 
                {/* отображаем если auroplay равно auto */}
                {/* slide теперь можно использоватб без this.state */}
                {/* {
                    getSomeImages().map((url, i) => {
                        // берем функцию которая возвращает массив картинок и сразу его перебираем
                        return (
                            <img 
                            key={i}
                            className="d-block w-100" 
                            src={url} 
                            alt="slide" />
                        )
                    })
                } */}

                <Slide getSomeImages={getSomeImages} /> 
                {/* передаем в компонет нашу функцию которая вызвает фейковое получения массива каритинок */}
                {/* 2 (31) передаем функцию в компонет ниже намного нижу */}
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div style={style} className="text-center mt-5">Total slide: {total}</div>
                {/* 3 44 выводим ответ функции но таким способом она будет постоянно перерендириться */}
                <div className="buttons mt-3">
                     <button 
                         className="btn btn-primary me-2"
                         onClick={() => changeSlide(-1)}>-1</button>
                         {/* отправляем запрос функции а она запускает хук для изменения состояния
                         на -1 */}
                     <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                         className="btn btn-primary me-2"
                         onClick={toggleAutoplay}>toggle autoplay</button>
                         {/* по клику у нас будет вызываться функция которая вызовет хук */}
                 </div>
            </div>
        </Container>
    )
 }

//  ниже представлен компонент который мы вставим
 const Slide = ({getSomeImages}) => {
    // 3 (31) принимаем нашу функцию и выставляем её в список зависимостей 
    const [images, setImages] = useState([])
    // images это наш массив с картинками

    // и если наша функция изменится то вызовется функция по загрузке картинок
    // которая изменит и сделает все заного
    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])
    // при изменении содержимого нашей функции весь компонент перерендериться
    return (
        <>
        {images.map((url, i) => {
            <img 
            key={i}
            className="d-block w-100" 
            src={url} 
            alt="slide" />
        } )}        
        </>
    )
    }

function App() {
    const [slider, setSlider] = useState(true);


  return (
    <>
    <button onClick={() => setSlider(false)}>Click</button>
    {/* тут мы просто изменяем state по клику и потом его запрещаем показывать */}
    {slider ? <Slider/> : null}
    </>
        
  );
}

export default App;


// useEffect это загрузка сторонних изменение компонента, модулей запуск тауймаутов и т.д.

// классовый компонент
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//         // это так называемем эвффект
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
        // ниже эти два метода мы объеденим в один хук который при изменении 
        // компонета будет реагировать useEffect

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }