import React, { Component } from 'react';

export class ContactTableHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="three columns">Name</div>
                <div className="three columns">Surname</div>
                <div className="three columns">Email</div>
                <div className="three columns">Actions</div>
            </div>
        );
    }
}

export default ContactTableHeader;
