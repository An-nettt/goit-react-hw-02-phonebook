import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PhonebookWrapper, Text, Input, Button } from './styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = (event) => {
    this.setState({
      name: event.target.value,
      id: nanoid(),
    });
  };

  addNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    // this.setState({this.state.reset});
  };

  render() {
    return (
      <PhonebookWrapper onSubmit={this.handleSubmit}>
        <Text>Name</Text>
        <Input
          type="text"
          name={this.state.name}
          onChange={this.addContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Text>Number</Text>
        <Input
          type="tel"
          name={this.state.number}
          onChange={this.addNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </PhonebookWrapper>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
