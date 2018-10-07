import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { GradientButton, ScrollContainer } from '../../Components';
import { BG_LOGO } from '../../Images';
import styles from './styles';

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handlePressExplore = () => {
    const { navigation } = this.props;
    // navigation.navigate('LoginSignup');
  }

  render() {
    return (
      <ScrollContainer>
        <View style={styles.mainContainer}>
          <Image
            source={BG_LOGO}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.text}>Send a response anywhere.</Text>
            <GradientButton
              text="Get Started"
              height={40}
              width="50%"
              onPress={this.handlePressExplore}
            />
          </View>
        </View>
      </ScrollContainer>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.object,
};

export default Onboarding;
