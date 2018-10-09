import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  ScrollContainer, SeparatorLine, GradientButton,
} from '..';
import {
  BG_NFC,
} from '../../Images';
import styles from './styles';

class Nfc extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      heading, description, buttonText, onPressButton,
      tag, enabled, onPressEnable,
    } = this.props;
    return (
      <ScrollContainer>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={BG_NFC}
                style={styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textHeading}>
                {heading.toUpperCase()}
              </Text>
              {enabled
                ? (
                  <Text style={styles.text}>
                    {description}
                  </Text>
                )
                : (
                  <TouchableOpacity onPress={onPressEnable}>
                    <Text style={styles.text}>
                      Click here to enable NFC
                    </Text>
                  </TouchableOpacity>
                )
              }
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>
              NFC ID
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.textHeading}>
                {tag}
              </Text>
            </View>
            <SeparatorLine marginVertical={10} />
          </View>
          <View style={styles.buttonContainer}>
            <GradientButton
              text={buttonText}
              onPress={onPressButton}
              width="50%"
            />
          </View>
        </View>
      </ScrollContainer>
    );
  }
}

Nfc.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onPressButton: PropTypes.func,
  onPressEnable: PropTypes.func,
  tag: PropTypes.string,
  enabled: PropTypes.bool,
};

export default Nfc;
