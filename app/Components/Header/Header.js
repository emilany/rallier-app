import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Container, ImageButton, GradientButton } from '..';
import styles from './styles';

class Header extends Component {
  onPressIconLeft = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  }

  onPressIconRight = () => {
  }

  onPressSendResponse = () => {
    const { navigation } = this.props;
    navigation.navigate('Respond');
  }

  render() {
    const {
      iconLeft, iconRight, text, isMain,
    } = this.props;
    return (
      <Container backgroundColor={styles.$colorWhite}>
        <View style={styles.topContainer}>
          <ImageButton
            source={iconLeft}
            onPress={this.onPressIconLeft}
            width={25}
          />
          {text && (
          <Text style={styles.middleText}>
            {text.toUpperCase()}
          </Text>
          )}
          <ImageButton
            source={iconRight}
            onPress={this.onPressIconRight}
            width={23}
          />
        </View>
        {isMain && (
        <View style={styles.bottomContainer}>
          <GradientButton
            text="Send Response"
            height={40}
            width="90%"
            color={styles.$colorWhite}
            onPress={this.onPressSendResponse}
          />
        </View>
        )}
      </Container>
    );
  }
}

Header.propTypes = {
  iconLeft: PropTypes.number,
  iconRight: PropTypes.number,
  text: PropTypes.string,
  isMain: PropTypes.bool,
  navigation: PropTypes.object,
};

export default Header;
