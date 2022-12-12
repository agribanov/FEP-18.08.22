import React, { Component } from 'react';

export class CurrentTime extends Component {
    state = {
        ticks: 0,
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                ticks: this.state.ticks + 1,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    shouldComponentUpdate() {
        return this.state.ticks % 10 === 0;
    }

    render() {
        return <div>{this.state.ticks}</div>;
    }
}

export default CurrentTime;
