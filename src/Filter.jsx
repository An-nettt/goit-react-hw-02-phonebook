import PropTypes from 'prop-types';
import { Title } from './styled';

export const Filter = ({ title }) => {
  return <Title> {title} </Title>;
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
