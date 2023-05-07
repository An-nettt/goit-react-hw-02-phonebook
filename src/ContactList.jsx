import PropTypes from 'prop-types';
// import { Title } from './styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <>
          <li key={id.id}>
            <p>
              {name} : {number}
            </p>
          </li>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
};
