const Counter = (props) => {
  const [counter, setCounter] = React.useState(props.counter);

  const incCounter = () => {
    if (counter < 50) {
      setCounter(counter => counter + 1)
    }
  }

  const decCounter = () => {
    if (counter > -50) {
      setCounter(counter => counter - 1)
    }
  }

  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
  }

  const resetCounter = () => {
    setCounter(props.counter)
  }

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const RndCounter = (props) => {
  const [counter, setCounter] = React.useState(props.counter);

  const rndCounter = () => {
    setCounter((Math.random() * (50 - -50) + -50).toFixed(0))
  }

  const resetCounter = () => {
    setCounter(props.counter)
  }

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App = () => {
  return (
      <>
          <Counter counter={0}/>
          <RndCounter counter={5}/>
      </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

