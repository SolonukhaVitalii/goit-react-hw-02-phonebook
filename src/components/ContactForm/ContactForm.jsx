import React, { Component } from 'react';
import s from './ContactForm.module.css';
import shortid from 'shortid';
//import PropTypes from 'prop-types';

class ContactForm extends Component {
    
    state = {
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' })
    };
    
    
    render() {
        return (
        <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.nameInputId} className={s.label}>
            Name <input className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            /> 
        </label>
        <label htmlFor={this.numberInputId}>
            Number <input className={s.input}
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
            /> 
        </label>
        <button type="submit" className={s.button} onSubmit={this.addcontact}>Add contact</button>
        </form>
        );
     }
};

export default ContactForm;