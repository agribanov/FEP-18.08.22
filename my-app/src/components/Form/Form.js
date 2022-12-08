import React, { Component } from 'react';

export class Form extends Component {
    // state = {
    //     title: 'hello',
    //     author: 'world',
    // };

    // onSaveClick = () => {
    //     console.log('clicked');
    // };

    // onInputChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.elements.title.value);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="title" placeholder="title" />
                <button>Save</button>
            </form>
        );
    }
}

export default Form;

// Controlled input
