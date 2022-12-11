import './ContactForm.css';

import React, { Component } from 'react';

const EMAIL_REGEXP =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export class ContactForm extends Component {
    state = {
        values: {
            name: '',
            surname: '',
            email: '',
        },
        errors: {},
        isDirty: {},
        isValid: false,
    };

    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };

        const errors = this.validate(values);

        this.setState({
            values: values,
            errors: errors,
            isValid: !Object.keys(errors).length,
            isDirty: {
                ...this.state.isDirty,
                [e.target.name]: true,
            },
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.values);
    };

    validate({ name, surname, email }) {
        const errors = {};

        if (name === '') {
            errors.name = 'Name is required';
        }
        if (surname === '') {
            errors.surname = 'Surname is required';
        }

        if (!EMAIL_REGEXP.test(email)) {
            errors.email = 'Email is invalid';
        }

        if (email === '') {
            errors.email = 'Email is required';
        }

        return errors;
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onFormSubmit}>
                    <div className="three columns">
                        <input
                            type="text"
                            name="name"
                            className="u-full-width"
                            value={this.state.values.name}
                            onChange={this.onInputChange}
                        />
                        {this.state.isDirty.name && this.state.errors.name ? (
                            <div className="error">
                                {this.state.errors.name}
                            </div>
                        ) : null}
                    </div>
                    <div className="three columns">
                        <input
                            type="text"
                            name="surname"
                            className="u-full-width"
                            value={this.state.values.surname}
                            onChange={this.onInputChange}
                        />
                        {this.state.isDirty.surname &&
                        this.state.errors.surname ? (
                            <div className="error">
                                {this.state.errors.surname}
                            </div>
                        ) : null}
                    </div>
                    <div className="three columns">
                        <input
                            type="text"
                            name="email"
                            className="u-full-width"
                            value={this.state.values.email}
                            onChange={this.onInputChange}
                        />
                        {this.state.isDirty.email && this.state.errors.email ? (
                            <div className="error">
                                {this.state.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="three columns">
                        <button disabled={!this.state.isValid}>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;

// Lifecycle
// Lifecycle hooks
