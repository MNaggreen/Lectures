import {useState, Component, createContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const dataContext = createContext(
    {mail: "name@example.com",
    text: 'some text'}
);
console.dir(dataContext);
// objectв котором есть provider и consumer
// 1 предоставляет доступ к элементам 
// 2 это сами элементы

const {Provider, Consumer} = dataContext;

const Form = (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input /* value={props.mail} */ type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

// ниже показано использование конекста в функционально компоненте
const






// ниже показано использование контескта в классовом компоненте
class inputComponent extends Component {
    /* 3вариант лучший мы задаем тип контескста для всего компонента сразу*/
    static contextType = dataContext
    /* 3вариант */


    render () {
        return (
            {/*1вариант <Consumer>
                {
                value => {
                    return (
                        <input 
                        value={value.mail} 
                        type="email" 
                        className='form-control' 
                        id="exampleFormControlInput1"
                         placeholder="name@example.com"/>
                    )
                }
                } */}
               {/* применение контекста мы передали пропсы в consumer
               из Provider без использания дополнительных средств */}
               {/* При изменении стейта data в Provider тут автоматическиски подгрузятся
               вые значение ! */}
            {/* </Consumer> 1вариант*/}
            
            /* 2вариант */
            <input 
                value={this.context.mail} 
                type="email" 
                className='form-control' 
                id="exampleFormControlInput1"
                placeholder="name@example.com" />
                /* 2вариант */
        )
    }
}

/* 2вариант более простой способ передачи контекста*/
/* inputComponent.contextType = dataContext; */
/* 2вариант */

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <Provider value={data} >
            <Form /* mail={data.mail} */ text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
