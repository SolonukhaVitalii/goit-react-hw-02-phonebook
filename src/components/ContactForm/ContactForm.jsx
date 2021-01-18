import React, { Component } from 'react';
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
        <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
            Name <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            /> 
        </label>
        <label htmlFor={this.numberInputId}>
            Number <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
            /> 
        </label>
        <button className="button">Add contact</button>
        </form>
        );
     }
};

export default ContactForm;