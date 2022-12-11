import React, { Component } from 'react';

import ContactTableListItem from '../ContactTableListItem/ContactTableListItem';

export class ContactTableList extends Component {
    render() {
        return this.props.list.map((item) => (
            <ContactTableListItem
                key={item.id}
                contact={item}
                onDelete={this.props.onDelete}
            />
        ));
    }
}

export default ContactTableList;
