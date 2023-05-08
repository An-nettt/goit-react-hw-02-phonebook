import PropTypes from 'prop-types';
import { ContactListEl, Text, ButtonDel } from './styled';

export const ContactListElem = ({ contactsEl, onDeleteContact }) => {
  return (
    <>
      <ContactListEl key={contactsEl.id}>
        <Text>
          {contactsEl.name} : {contactsEl.number}
        </Text>
        <ButtonDel type="button" onClick={() => onDeleteContact(contactsEl.id)}>
          Delete
        </ButtonDel>
      </ContactListEl>
    </>
  );
};

ContactListElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
