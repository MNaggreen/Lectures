import { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function useInputWithValidate(initialValue) { 
    // это называется custom hook его желательно выделить в отдельный компонент
    // теперь мы можем использовать функцию чтобы создавать наши стейты
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }
    // Это метод

    const validateInput = () => {
        return value.search(/\d/) >= 0      
     }  
    //  Это метод

    return {value, onChange, validateInput}
    // {value: value, onChange: onChange} тут вернется объект у которого есть функции
    // onChange и функция validateInput
}

const Form = () => {
    // const [text, setText] = useState('');
    // const [textArea, setTextArea] = useState('');
    // код ниже это полный аналог кода выше
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');

    // const validateInput = (text) => {
    //     if (text.search(/\d/) >= 0) {
    //         если вдруг здесь есть число то мы возвращаем правду
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // Ниже представлена версия кода сокращенная и более предпочтительная
    // const validateInput = (text) => {
    //    return text.search(/\d/) >= 0      
    // }   
    
    // const color = validateInput(text) ? 'text-danger' : null
    const color = input.validateInput() ? 'text-danger' : null

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly/>
                    {/* text стоял вместо input.value */}
                    {/* сюда будет записываться сначала текст из основного инута и потом
                    когда мы пере ключимся на блок textarea и начнем его заполнять тут поставится
                    слеш иначнет вставляться текст из этой формы  */}
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input 
                    onChange={input.onChange} 
                    // ниже аналог а выше мы просто берем элемент из объекта и используем на нем метод
                    /* (e) => setText(e.target.value) */
                    type="email" 
                    value={input.value}
                    // text
                    // это контролируемый ипнут все будет записываться как text
                    className={`form-control ${color}`} 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                    onChange={textArea.onChange}
                    // при вводе текста это событие будет срабатывать
                    // e => setTextArea(e.target.value)
                    value={textArea.value}
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"></textarea>
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
