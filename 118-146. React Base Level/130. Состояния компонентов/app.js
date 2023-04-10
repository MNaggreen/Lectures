import { Component } from 'react';

class WhoAmI extends Component  { 
    /* передаем props */
    constructor(props) {
        super(props);

        this.state = {
            years: 27,
            text: '+++==='
        }
        /* создаем состояние которое можно менять */
    }

    nextYear = () => {
        console.log('+++');
        /* this.state.years++ */
        
        this.setState(state => ({
                years: state.years + 1
                /* другой способ более  привильный
                может собежать много свойств */
            })

            /* years: ++this.state.years данный метод работает асинхронно
            т.е. иногда могут пропускать нажатия*/
        )
        /* увеличиваем возвраст запуская перерисовку компонета*/
    }
    /* при нажатии данная функция будет срабатывать */

    render() {
        const {name, surname, link} = this.props;
        /* получаем переменные из наших props */
        return (
        <div>
            <button onClick={this.nextYear}>{this.state.text}</button>
            {/* меняем наше состояние аналог addEventListener*/}
            <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
            <a href={link}>My profile</a>          
        </div>
    )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>            
            <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
            <WhoAmI name='John' surname="Shepard" link="facebook.com"/>            
            <WhoAmI name='Jahn' surname="Shepard" link="facebook.com"/>            
        </div>
    )
}