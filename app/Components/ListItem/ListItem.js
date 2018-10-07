import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { } from '..';
import { ICON_MISSED, ICON_CHECK } from '../../Images';
import styles from './styles';

const ListItem = ({
  name, time, status,
}) => (
  <View style={styles.rowContainer}>
    <View style={styles.circle}>
      <Text style={styles.textLetter}>
        {name.charAt(0)}
      </Text>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.textName}>
        {name}
      </Text>
      <Text style={styles.text}>
        {time}
      </Text>
    </View>
    <Image
      source={status === 'Missed' ? ICON_MISSED : ICON_CHECK}
      style={styles.image}
    />
  </View>
);

ListItem.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  status: PropTypes.string,
};

export default ListItem;
