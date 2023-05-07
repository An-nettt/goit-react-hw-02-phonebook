import PropTypes from 'prop-types';
import { Title } from './styled';

export const ContactList = ({ title }) => {
  return <Title> {title} </Title>;
};

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
};
