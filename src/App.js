import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
//import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = {
       
  }
  static propTypes = {
        
  }
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }
  
  formSubmitHandler = data => {
    console.log(data);
  };
  
  handleInputChange = e => {
    this.setState({filter: e.currentTarget.value});
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  render() {
    const { filter } = this.state;
    const { handleInputChange } = this.state;
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onChange={handleInputChange} />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;

