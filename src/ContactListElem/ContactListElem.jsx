import { ContactListEl, Text, ButtonDel } from '../styled';

export const ContactListElem = ({ contactsEl, onDeleteContact }) => {
  return (
    <>
      <ContactListEl>
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
