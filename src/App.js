import { Component } from 'react';

import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

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

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addToContacts} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
