import React, { Component } from 'react';
//import shortid from 'shortid';
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
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  
  formSubmitHandler = data => {
    console.log(data);
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  /*addcontact = text => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };*/
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    //const normalizedFilter = this.state.filter.toLowerCase();
    /*const visibleContacts = this.state.contacts.filter(contact =>
      contact.text.toLowerCase().includes(normalizedFilter),
    );*/

      return(
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          onSubmits={this.addcontact} />

        <h2>Contacts</h2>
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact} />
      </>
    );
  };
};


export default App;

