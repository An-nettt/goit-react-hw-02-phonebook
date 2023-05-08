import { Component } from 'react';
// import PropTypes from 'prop-types';

import { FilterWrapper, Text, Input } from './styled';

export default class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <Text>Find contacts by name</Text>
        <Input></Input>
      </FilterWrapper>
    );
  }
}

// Filter.propTypes = {
//   title: PropTypes.string.isRequired,
// };
