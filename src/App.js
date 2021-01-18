import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
//import PropTypes from 'prop-types';
class App extends React.Component {
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
  filter: '',
  name: '',
  number: ''
}

  render() {
  return (
    <div>
     <h1>Phonebook</h1>
     <ContactForm />

     <h2>Contacts</h2>
     <Filter />
     <ContactList />
    </div>
    );
  }
}

export default App;

//Если твое приложение реализовано в одном компоненте <App>, выполни рефакторинг, выделив подходящие части в отдельные компоненты. В состоянии корневого компонента <App> останутся только свойства contacts и filter.
//Достаточно выделить четыре компонента: форма добавления контактов, список контактов, элемент списка контактов и фильтр поиска.
