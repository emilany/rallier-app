import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const SeparatorSpace = ({ width, height = 1 }) => {
  const spaceStyles = [{ width, height }];

  return (
    <View style={spaceStyles} />
  );
};

SeparatorSpace.propTypes = {
  width: PropTypes.string,
  height: PropTypes.number,
};

export default SeparatorSpace;
