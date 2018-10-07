import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Container = ({ backgroundColor, children }) => {
  const containerStyle = [];
  if (backgroundColor) {
    containerStyle.push({ backgroundColor });
  }

  return (
    <SafeAreaView style={containerStyle}>
      {children}
    </SafeAreaView>
  );
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
