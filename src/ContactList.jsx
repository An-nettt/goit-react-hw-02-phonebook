import PropTypes from 'prop-types';
import { ContactListWrapper, ContactListEl, ButtonDel } from './styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => (
        <>
          <ContactListEl key={id.id}>
            <p>
              {name} : {number}
            </p>
            <ButtonDel type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDel>
          </ContactListEl>
        </>
      ))}
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
};
