import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';

import { SeparatorLine } from '..';
import styles from './styles';

const DetailsItem = ({ text, image, onPress }) => (
  <View>
    <TouchableOpacity
      style={styles.rowContainer}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {text}
      </Text>
      <Image source={image} />
    </TouchableOpacity>
    <SeparatorLine
      backgroundColor={styles.$colorGrey}
      marginVertical={20}
    />
  </View>
);

DetailsItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
};

export default DetailsItem;
