import React, { Component } from 'react';
import {
  View, Text, Image, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import NfcManager from 'react-native-nfc-manager';

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
    this.state = {
      supported: true,
      enabled: false,
      tag: {},
    };
  }

  componentDidMount() {
    NfcManager.isSupported()
      .then((supported) => {
        this.setState({ supported });
        if (supported) {
          this.startNfc();
          this.startDetection();
        }
      });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }

  startDetection = () => {
    NfcManager.registerTagEvent(this.onTagDiscovered)
      .then((result) => {
        console.log('registerTagEvent OK', result);
      })
      .catch((error) => {
        console.warn('registerTagEvent fail', error);
      });
  }

  onTagDiscovered = (tag) => {
    this.setState({ tag });
  }

  goToNfcSetting = () => {
    if (Platform.OS === 'android') {
      NfcManager.goToNfcSetting()
        .then((result) => {
          console.log('goToNfcSetting OK', result);
        })
        .catch((error) => {
          console.warn('goToNfcSetting fail', error);
        });
    }
  }

  startNfc() {
    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log('ios session closed');
      },
    })
      .then((result) => {
        console.log('start OK', result);
      })
      .catch((error) => {
        console.warn('start fail', error);
        this.setState({ supported: false });
      });

    if (Platform.OS === 'android') {
      NfcManager.getLaunchTagEvent()
        .then((tag) => {
          console.log('launch tag', tag);
          if (tag) {
            this.setState({ tag });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      NfcManager.isEnabled()
        .then((enabled) => {
          this.setState({ enabled });
        })
        .catch((err) => {
          console.log(err);
        });

      NfcManager.onStateChanged((event) => {
        if (event.state === 'on') {
          this.setState({ enabled: true });
        } else if (event.state === 'off') {
          this.setState({ enabled: false });
        }
      })
        .then((sub) => {
          this._stateChangedSubscription = sub;
          // remember to call this._stateChangedSubscription.remove()
          // when you don't want to listen to this anymore
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }

  render() {
    const { tag } = this.state;
    const {
      heading, description, buttonText, onPressButton,
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
              <Text style={styles.text}>
                {description}
              </Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>
              NFC ID
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.textHeading}>
                {tag.id}
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
};

export default Nfc;
