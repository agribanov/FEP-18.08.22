import React, { Component } from 'react';

export class ContactTableListItem extends Component {
    constructor() {
        super();
        console.log('contructor');
    }

    render() {
        const { id, name, surname, email } = this.props.contact;
        return (
            <div className="row">
                <div className="three columns">{name}</div>
                <div className="three columns">{surname}</div>
                <div className="three columns">{email}</div>
                <div className="three columns">
                    <button onClick={() => this.props.onDelete(id)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ContactTableListItem;
