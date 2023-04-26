import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/* нужно для связи реакта с дом деревом */
import {Container} from 'react-bootstrap';
import './App.css';

/* Порталы позволяют отрендерить любые элементы вне своего родительскокго компонента */

class Form extends Component {

    state = {
        advOpen: false
    }

    componentDidMount() {
        setTimeout(this.handleClick, 3000)
        /* запускаем через 3 сек функцию*/
    }

    handleClick = () = {
        this.setState(({advOpen}) => ({
            advOpen: !advOpen
        }))
        /* console.log('click'); */
        /* будем пробовать навесить клик на наш портал */
    }/* также данная функцию будеи переключать видимость нашего элемента */

    render() {
        return (
            <Container>
                <form onCLick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    { this.state.advOpen ? 
                    /* проверяем state и если он true то рендерим */
                                    <Portal>
                                            {/* сюда мы помещаем пропсы для const Portal */}
                                            <Msg/>
                                            {/* при клике на данный элемент наш клик отобразится
                                            так как прортал находится в ннутри тега form */}
                                    </Portal>
                                        :
                                        null
                }
                    <Portal>
                        {/* сюда мы помещаем пропсы для const Portal */}
                        <Msg/>
                        {/* при клике на данный элемент наш клик отобразится
                        так как прортал находится в ннутри тега form */}
                    </Portal>
                </form>
            </Container>
        )
    }
}


const Portal = (props) => {
    const node = document.createElement('div')
    /* создаем div на нативном Js */
    document.body.appendChild(node)
    /* помещаем в body */

    return ReactDOM.createPortal(props.children, node)
    /* 1 элемент который рендерим (Msg элемент)
       2 контейнер в который поместим */
}

const Msg = () => {
    return (
            <div 
            style={{'width': '500px', 
                    'height': '150px', 
                    'backgroundColor': 'red', 
                    'position': 'absolute', 
                    'right': '0%', 
                    'bottom': '0%'}}>
                Hello
            </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
