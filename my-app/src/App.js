import './App.css';

import React, { Component } from 'react';

class App extends Component {
    state = {
        counts: 10,
        name: 'Alex',
    };

    onBtnClick = () => {
        this.setState({
            counts: this.state.counts + 1,
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>{this.state.counts}</p>
                    <button onClick={this.onBtnClick}>Inc</button>
                </header>
            </div>
        );
    }
}

export default App;
