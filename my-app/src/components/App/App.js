import './App.css';

import React, { Component } from 'react';
import {
    addTodo,
    getTodosList,
    removeTodo,
    updateTodo,
} from '../../services/todosService';

import CurrentTime from '../CurrentTime/CurrentTime';
import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
    state = {
        list: [],
        showTime: true,
    };

    toggleTodo = (id) => {
        const todo = this.state.list.find((item) => item.id === id);
        updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
            this.setState({
                list: this.state.list.map((item) =>
                    item.id !== id ? item : data
                ),
            });
        });
    };

    deleteTodo = (id) => {
        removeTodo(id).then(() =>
            this.setState({
                list: this.state.list.filter((item) => item.id !== id),
            })
        );
    };

    createTodo = (newTodo) => {
        addTodo({
            ...newTodo,
            isDone: false,
        }).then((data) => {
            this.setState({
                list: [...this.state.list, data],
            });
        });
    };

    onToggleTime = () => {
        this.setState({
            showTime: !this.state.showTime,
        });
    };

    componentDidMount() {
        getTodosList().then((data) =>
            this.setState({
                list: data,
            })
        );
    }

    render() {
        return (
            <>
                {this.state.showTime ? <CurrentTime /> : null}
                <button onClick={this.onToggleTime}>Toggle Time</button>
                <List
                    list={this.state.list}
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}
                />
                <Form onSave={this.createTodo} />
            </>
        );
    }
}

export default App;
