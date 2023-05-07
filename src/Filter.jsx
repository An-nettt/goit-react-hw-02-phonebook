import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Text } from './styled';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <Text>Find contacts by name</Text>
        <input></input>
      </div>
    );
  }
}

// Filter.propTypes = {
//   title: PropTypes.string.isRequired,
// };
