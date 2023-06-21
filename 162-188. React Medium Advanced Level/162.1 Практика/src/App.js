import {useState, useEffect} from 'react';
import './styles.css';

function CounterChange(counterValue) {
  const [value, setValue] = useState(counterValue);

    // Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
    // которые приходят в компонент + аргумент initial поменяйте на 0 или null
  
    useEffect(() => {
         fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
             .then(res => res.text())
             .then(res => setValue(res))
             .catch(err => console.log(err))
     }, [])

    const incCounter = () => {
      return value < 50 ? setValue(value => value + 1) : null      
    }

    const decCounter = () => {
      return value > -50 ? setValue(value => value - 1) : null
    }

    const rndCounter = () => {
      /* setValue(+(Math.random() * (50 - -50) + -50).toFixed(0)) */
      fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
             .then(res => res.text())
             .then(res => setValue(res))
             .catch(err => console.log(err))
    }

    const resetCounter = () => {
      setValue(counterValue)
    }
    return {value, incCounter, decCounter, rndCounter, resetCounter}
  }

  const Counter = () => {
    const counter = CounterChange()
    // с помощью кастомного хука делаем свой объект а также методы для этого обекта
    return (
      <div className="component">
        <div className="counter">{counter.value}</div>
        <div className="controls">
          <button onClick={counter.incCounter}>INC</button>
          <button onClick={counter.decCounter}>DEC</button>
          <button onClick={counter.rndCounter}>RND</button>
          <button onClick={counter.resetCounter}>RESET</button>
        </div>
      </div>
    )
}

const RndCounter = () => {
    const rndiCounter = CounterChange();
    // с помощью кастомного хука делаем свой объект а также методы для этого обекта
    return (
      <div className="component">
        <div className="counter">{rndiCounter.value}</div>
        <div className="controls">
          <button onClick={rndiCounter.rndCounter}>RND</button>
          <button onClick={rndiCounter.resetCounter}>RESET</button>
        </div>
      </div>
    )
}

const App = () => {
    return (
        <>
            <Counter /* counter={0} *//>
            <RndCounter /* counter={0} *//>
            {/* мы ничего не передаем чтобы у нас работал useEffect c запросом с сервера */}
        </>
    )
    }
  
  
  
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
