import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

/* ref это ссылка на элемент или компонент в уже отрисованном dom дереве т.е. уже в браузере
когда есть ссылка мы моможем испольховать dom api */

class Form extends Component {
    /* constructor(props) {
        super(props); */
        /* this. */myRef = React.createRef();/* мы создали ссылку и теперь её нужно присвоить к нужному нам элементу */
    /* } */
    mySecondRef = React.createRef();/* можно создавать несколько ссылок */

    componentDidMount() { /* обращаемся к уже созданному элементу который отображается на странице */
        this.myRef.current.focus() /* cсылка на элемент храниться в свойстве current ставим на неё Focus
         когда мы задём на сайт фокус установится сразу на наш input */
    }

    setInputRef = elem => {/* метод принимает элемент и назвначает на него ссылку*/
        this.myRef = elem; /* дальше мы можем использовать её ниже что равняется
        this.myRef.current*/
    }

    /* focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.current.focus();
        }
         */
    /* } переключаем фокус по нажатию на инпут */

    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
        
    }

 /* рефы нельзя назначать на функциональные компоненты нужно обязательно чтобы компонент был классовым */

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        {/* теперь мы привезали ссылку */}
                       {/*  <TextInput ref={this.myRef} /> */}
                        {/* только классовым компонентам можно назначить ref и то, нельзя на функции!*/}
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        {/* делаем ссылку на метод */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            {/* по клику переключиться фокус */}
                    </div>
                </form>
            </Container>
        )
    }
}

class TextInput extends Component {

    doSmth = () => {
        console.log('smth')
    }

    render() {
        return (
            <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
        )
    }
    
}

function App() {
    return (
        <Form/>
    );
}

export default App;
