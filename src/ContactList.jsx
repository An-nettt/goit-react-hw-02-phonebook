import PropTypes from 'prop-types';
import { ContactListElem } from './ContactListElem';
import { ContactListWrapper } from './styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactListElem
          contactsEl={{ id, name, number }}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
};
