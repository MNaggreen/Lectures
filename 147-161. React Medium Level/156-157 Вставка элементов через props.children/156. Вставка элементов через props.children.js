/* 1. React Bootstrap или Material Design или Css Modules
npm install react-bootstrap@next bootstrap@5.1.0 --save */
import 'bootstrap/dist/css/bootstrap.min.css';
/* даллее берем компоненты из документации
например сетка */
import { Container, Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
/* каждый раз импортируем компонент */
import { React, Compornent} from 'react'
/* 6 09 остановился */
/* 156 props children */
const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`/* такую верстку испльзует bbc.com */

const DynamicGreating = (props) => {
  return (/* формируем струтуру переданную вызовом */
    <div classNmae={'mb-3 p-3 border-' + props.color}>
      {/* {props.children} */}
       {/* тут появятся все компоненты которые мы передали в DynamicGreating */}
       {
          React.Children.map(props.children, child => {/* если классовый компонент то пишим this.props.children */
            /* копируем объект */
            return React.cloneElement(child, {className: 'shadow p-3 m-3 boreder rounded'})/* мы сделали копию и добавли к ней класс */ 
            /* 1 то что мы приняли элемент 
            2 то что мы будем добавлять конфиг те пропсы которые мы будем добавлять 
            3 Дети children  */
          }) /* это метод React */
       }
    </div>
  )
}

function App() {
    return (
        <Wrapper>/*сюда помещаем наш новосозданный Wrapper */
          <DynamicGreating
          color={'primary'}>
            <h2>Bla bla bla</h2>
            <h2>Bla bla bla</h2>
            {/* именно это будет внутри это и ест props.children */}
          </DynamicGreating>
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>            
            <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
            <WhoAmI name='John' surname="Shepard" link="facebook.com"/>            
            <WhoAmI name='Jahn' surname="Shepard" link="facebook.com"/>            
        </Wrapper>
        <BootstrapTest left = {
                                <DynamicGreating
                                color={'primary'}>
                                  <h2>Left</h2>
                                  <h2>Left</h2>
                                  {/* именно это будет внутри это и ест props.children */}
                                </DynamicGreating>
                               } 
                                right = {
                                  <DynamicGreating
                                  color={'primary'}>
                                    <h2>Right</h2>
                                    <h2>Right</h2>
                                    {/* именно это будет внутри это и ест props.children */}
                                  </DynamicGreating>
                                }
         />
    )
}


export default UncontrolledExample;
const BootstrapTest = (props) => { /* передаем разные пропсы в разные компоненты */
    return (
        <Container>
            <Row>
                <Col>
                  {props.left}{/* это то что мы передали в left смотривыше */}
                </Col>
                <Col>
                  {props.right}{/* это то что мы передали в right смортривыше */}
                </Col>
            </Row>
        </Container>
    )
}

export default BootsrapTest;



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}










/* далее пере ходим в index.js */
import BootsTrapTest from './BootstrapTest'
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
            <BootstrapTest></BootstrapTest>
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















