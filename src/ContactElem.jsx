import PropTypes from 'prop-types';
// import { Title } from './styled';

export const ContactElem = ({ name }) => {
  return (
    <input
      type="text"
      name="{name}"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};

ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
};
