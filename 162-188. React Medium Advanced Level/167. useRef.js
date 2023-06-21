import {useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// useRef очень мощный хук
// обновление компонента с помощью useRef не вызывает useEffect 

const Form = () => {
const [text, setText] = useState('');

    const myRef = useRef(1);
    // создает обект в котором изначально будет записываться Null
    // далее мы записываем ссылку на dom елемент
    // ref обект сохраняется при любом перерендеринге
    // изменение ref обекта не вызывает другие хуки такие как useEffect

    // const focusFirstTI = () => {
    //     myRef.current.focus();
    // }

    useEffect(
        () => {
            console.log(myRef.current)
            // можно каждый раз записывать предыдущее состояния используя useEffect
            myRef.current = text;
        }
    )
    // так делать нелязя потомучто каждое изменение на странице будет вызывать данную функцию

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    {/* тут каждый раз при вводе будет срабатывать useEffect */}
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea /*1 onClick={() => myRef.current++} */ value={myRef.current} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        {/*1 езменение current на +1 не вызовет перерисовку всего компонента
                        это главной плюс useRef */}
                        {/* 2 при изменении ввода сверху onChange будет записываться значение в наше поле здесь! */}
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
