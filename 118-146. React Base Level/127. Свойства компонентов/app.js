function WhoAmI ({name, surname, link}) { /* или так (props) */
    /* props это как раз таки свойство компонента */
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
            {name.firstname}{/* если объект то нужно подставить это вместо props.name */}
            {name()}
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            {/* тут мы передаем наши свойства */}
            <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
            <WhoAmI name={{firstName: 'John'}} surname="Shepard" link="facebook.com"/>
            {/* можно передать даже объект */}
            <WhoAmI name={() => {return 'John'}} surname="Shepard" link="facebook.com"/>
            {/* передаем функцию */}
        </div>
    )
}