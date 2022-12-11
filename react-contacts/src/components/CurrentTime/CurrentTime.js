import React, { Component } from 'react';

export class CurrentTime extends Component {
    state = {
        ticks: 0,
    };

    componentDidMount() {
        this.itervalId = setInterval(() => {
            console.log('triger');
            this.setState({
                ticks: this.state.ticks + 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.itervalId);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextState.ticks % 10);
    }

    render() {
        return <div>{this.state.ticks}</div>;
    }
}

export default CurrentTime;
