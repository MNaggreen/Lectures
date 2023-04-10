import { Component, Fragment } from 'react';
import styled from 'styled-components;' 
/* вытаскиваем фрагмент */
/* устанавливаем styled components npm install --save styled-components */
/* теперь мы можем прописывать стили сразу в js файле */

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'}/* динамически меняем стили */
    }/* делаем стили с помощью наследования */
    input {
        display: grid
    }

`;

const Header = styled.h2`
      font-size: 22px
      `;

export const Button = styled.button`
    font-size: 30px;
    color: yellow;
`/* можно экспортировать
import {Button} from './App' */

/* как добавить новые стли нашей кнопке */
const BigButton = styled(Button)`
    margin: o auto;
    width: 245px;
    text-align: center;
`

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
        <EmpItem>{/* заменяем div или просто <> </> */}
            {/* 3 способ OnClick={() => this.nextYear()} */}
            <Button onClick={this.nextYear}>{this.state.text}</Button>
            <BigButton as='a'>++++</BigButton>/* создаем кнопку как ссылку с помощью as */
            <Header>My name is {name},
                surname - {surname},
                age - {years},
                position = {position} </Header>
            <a href={link}>My profile</a>      
           <form>
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges} />
            {/* передаем значение при воде в input */}
            {/* onchange={(e) => this.commitInputChanges(e, 'some color)} */}
            {/* передаем аргумент */}

            {/* при вводе текста значение будет отображаться сразу на экране */}
           </form>
    
           </EmpItem>
    )
    }
}

/* React.Fragment key ='233' добавляем ключ к тегу НЕОБЯЗАТЕЛЬНО!*/

/* 143 styled components ниже приведен код с использованием styled components */
const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`/* такую верстку испльзует bbc.com */

function App() {
    return (
        <Wrapper>/*сюда помещаем наш новосозданный Wrapper */
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>            
            <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
            <WhoAmI name='John' surname="Shepard" link="facebook.com"/>            
            <WhoAmI name='Jahn' surname="Shepard" link="facebook.com"/>            
        </Wrapper>
    )
}