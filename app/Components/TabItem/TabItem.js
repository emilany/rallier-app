import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const TabItem = ({ title, focused }) => {
  const tabIndicator = [styles.tabStyle];
  if (focused) {
    tabIndicator.push({ backgroundColor: styles.$tabIndicator });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tabTitle}>
        {title.toUpperCase()}
      </Text>
      <View style={tabIndicator} />
    </View>
  );
};

TabItem.propTypes = {
  title: PropTypes.string,
  focused: PropTypes.bool,
};

export default TabItem;
