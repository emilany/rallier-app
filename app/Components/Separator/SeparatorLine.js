import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const SeparatorLine = ({
  backgroundColor = styles.$defaultColor,
  marginVertical,
}) => {
  const lineStyles = [styles.line, { backgroundColor, marginVertical }];

  return (
    <View style={lineStyles} />
  );
};

SeparatorLine.propTypes = {
  backgroundColor: PropTypes.string,
  marginVertical: PropTypes.number,
};

export default SeparatorLine;
