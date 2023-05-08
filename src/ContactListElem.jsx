import PropTypes from 'prop-types';
import { ContactListEl, Text } from './styled';

export const ContactListElem = ({ contactsEl }) => {
  return (
    <>
      <ContactListEl key={contactsEl.id}>
        <Text>
          {contactsEl.name} : {contactsEl.number}
        </Text>
      </ContactListEl>
    </>
  );
};

ContactListElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

// onDeleteContact;
//  {
//    /* <ButtonDel type="button" onClick={() => onDeleteContact(id)}>
//               Delete
//             </ButtonDel> */
//  }
