import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import styles from './styles';

const Button = ({
  height = 48, width, text, logo, color, onPress,
}) => {
  const buttonStyles = [
    styles.button,
    {
      height,
      width: wp(width),
      flexDirection: logo ? 'row' : null,
    },
  ];

  const textStyles = [
    styles.text,
    { lineHeight: height },
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        {logo && (
          <Image
            style={styles.logo}
            source={logo}
          />
        )}
        <Text style={[textStyles, { color }]}>
          {text.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  logo: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
