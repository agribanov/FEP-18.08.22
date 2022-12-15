import React from 'react';

function Form({ onSave, contact }) {
    function onFormSubmit(e) {
        e.preventDefault();
        const form = e.target.elements;

        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
        });

        e.target.reset();
    }

    return (
        <div className="row">
            <form onSubmit={onFormSubmit}>
                <div className="three columns">
                    <input name="id" type="text" defaultValue={contact.id} />
                    <input
                        name="name"
                        placeholder="name"
                        type="text"
                        defaultValue={contact.name}
                    />
                </div>
                <div className="three columns">
                    <input
                        name="surname"
                        placeholder="surname"
                        type="text"
                        defaultValue={contact.surname}
                    />
                </div>
                <div className="three columns">
                    <input
                        name="email"
                        placeholder="email"
                        type="text"
                        defaultValue={contact.email}
                    />
                </div>
                <div className="three columns">
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
