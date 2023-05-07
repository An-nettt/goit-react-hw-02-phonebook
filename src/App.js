import { Component } from 'react';

import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import { Wrapper, Title } from './styled';

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

  // deleteContact = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => id !== id),
  //   }));
  // };

  render() {
    const { contacts } = this.state;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />

        <Title>Contacts</Title>
        <Filter />
        <ContactList contacts={contacts} />
      </Wrapper>
    );
  }
}

// onDeleteContact={this.deleteContact}
