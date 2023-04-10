import { Component } from "react";
import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
            /* нам нужно доднять это состояние до компонента app */
        }
    }

    onUpdateSearch = (e) => {
        /* новый метод это не тот который мы передаем */
        const term = e.target.value;
        /* то что ввел пользователь */
        this.setState({term});
        /* меняем состояние локального состояние тут же нетого
        которое в app */
        this.props.onUpdateSearch(term)
        /* передаем компоненту app наш term локльный */
    }

    render() {
    return (
        <input 
            type="text"
            className="form-control serach-input"
            placeholder="Найти сотрудника" 
            value={this.state.term}
            /* если стркоа пустая то будет отображаться placeholder */
            onChange={this.onUpdateSearch}/>
    )
}
}

export default SearchPanel;