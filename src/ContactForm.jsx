import PropTypes from 'prop-types';
import { Title } from './styled';

export const ContactForm = ({ title }) => {
  return <Title> {title} </Title>;
};

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
};
