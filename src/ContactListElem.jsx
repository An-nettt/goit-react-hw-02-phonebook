import PropTypes from 'prop-types';
import { ContactListEl, Text, ButtonDel } from './styled';

export const ContactListElem = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ContactListEl key={id}>
          <Text>
            {name} : {number}
          </Text>
          <ButtonDel type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDel>
        </ContactListEl>
      ))}
    </>
  );
};

ContactListElem.propTypes = {
  contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
};
