import { Component } from 'react';
// import { ContactElem } from './ContactElem';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import { Wrapper } from './styled';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Wrapper>
    );
  }
}
