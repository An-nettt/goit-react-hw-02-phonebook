import { ContactListElem } from './ContactListElem';
import { ContactListWrapper } from './styled';

export const ContactList = (contacts) => {
  return (
    <ContactListWrapper>
      <ContactListElem contacts={contacts} />
    </ContactListWrapper>
  );
};
