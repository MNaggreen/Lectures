import { Component } from 'react';

class WhoAmI extends Component  { 
    
    constructor(props) {
        super(props);

        this.state = {
            years: 27,
            text: '+++===',
            position: ''
        }    
        /* this.nextYear = this.nextYear.bind(this); */
        /* жестко привязываем метож класса 1 способ */     
        /* 3 способ OnClick={() => this.nextYear()} */
    }

    nextYear = () => {
        console.log('+++');       
        
        this.setState(state => ({
                years: state.years + 1                
            })            
        )       
    }   

    commitInputChanges = (e/*, color  */) => {
        console.log(color);
        /* аргумент который мы передали */
        this.setState({
            position: e.target.value
        })
        /* получаем значение из input и записываем в переменную position*/


    }

    render() {
        const {name, surname, link} = this.props;

        const {position, years} = this.state;
        /* выносим в переменную из state */
       
        return (
        <div>{/* 3 способ OnClick={() => this.nextYear()} */}
            <button onClick={this.nextYear}>{this.state.text}</button>
            
            <h1>My name is {name},
                surname - {surname},
                age - {years},
                position = {position} </h1>
            <a href={link}>My profile</a>      
           <form>
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges} />
            {/* передаем значение при воде в input */}
            {/* onchange={(e) => this.commitInputChanges(e, 'some color)} */}
            {/* передаем аргумент */}

            {/* при вводе текста значение будет отображаться сразу на экране */}
           </form>
    
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