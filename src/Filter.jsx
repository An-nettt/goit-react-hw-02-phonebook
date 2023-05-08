import PropTypes from 'prop-types';

import { FilterWrapper, Text, Input } from './styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <Text>Find contacts by name</Text>
      <Input value={value} onChange={onChange}></Input>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
