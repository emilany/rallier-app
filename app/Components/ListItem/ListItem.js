import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { } from '..';
import { ICON_MISSED, ICON_CHECK, ICON_PENDING } from '../../Images';
import styles from './styles';

const ListItem = ({
  id, name, time, status, onPressResponse,
}) => (
  <TouchableOpacity disabled={status !== '0'} onPress={onPressResponse}>
    <View style={styles.rowContainer}>
      <View style={styles.circle}>
        <Text style={styles.textLetter}>
          {id === '' ? name.charAt(0).toUpperCase() : id}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.textName}>
          {name.toUpperCase()}
        </Text>
        <Text style={styles.text}>
          {time}
        </Text>
      </View>
      <Image
        source={status === '0' ? ICON_PENDING : (status === '1' ? ICON_CHECK : ICON_MISSED)}
        style={styles.image}
      />
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  status: PropTypes.string,
  onPressResponse: PropTypes.object,
};

export default ListItem;
