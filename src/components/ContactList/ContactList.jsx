import React from 'react';
import './ContactList.module.css';
//import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact}) => (
    <ul className="list">
        {contacts.map(({ id, name, number }) => (
            <li key={id} className="item">
                <p className="name">{name}:</p>
                <p className="namber">{number}</p>
                <button className="button" onClick={(() => onDeleteContact(id))}>Удалить</button>
            </li>
        ))}
    </ul>
);


ContactList.propTypes = {
    
};

export default ContactList;