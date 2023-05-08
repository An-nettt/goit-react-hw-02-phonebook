import { Component } from 'react';

import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import Filter from './Filter';

import { Wrapper, Title, ContactsTitle } from './styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToContacts = ({ id, name, number }) => {
    const newContact = {
      id,
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  // deleteContact = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => id !== id),
  //   }));
  // };

  render() {
    const { contacts } = this.state;
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addToContacts} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList contacts={contacts} />
      </Wrapper>
    );
  }
}

// onDeleteContact={this.deleteContact}
