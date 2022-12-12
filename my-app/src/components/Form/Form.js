import React, { Component } from 'react';

import TextField from '../common/TextField/TextField';

export class Form extends Component {
    state = {
        values: {
            title: '',
        },
        touched: {},
        errors: {},
        isValid: false,
    };

    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };
        const errors = this.validate(values);

        this.setState({
            values,
            errors,
            touched: {
                ...this.state.touched,
                [e.target.name]: true,
            },
            isValid: Object.keys(errors).length === 0,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.values);

        e.target.reset();
    };

    validate({ title, author }) {
        const errors = {};

        if (title === '') {
            errors.title = 'Title is required';
        }

        if (title.length > 25) {
            errors.title = 'Title is too long';
        }

        if (author === '') {
            errors.author = 'Author is required';
        }

        return errors;
    }

    componentDidMount() {
        console.log('Form mounted');
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <TextField
                    name="title"
                    placeholder="Title"
                    value={this.state.values.title}
                    onChange={this.onInputChange}
                    isTouched={this.state.touched.title}
                    error={this.state.errors.title}
                />
                <button disabled={!this.state.isValid}>Save</button>
            </form>
        );
    }
}

export default Form;

// Controlled input
