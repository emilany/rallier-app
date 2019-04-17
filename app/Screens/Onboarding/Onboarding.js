import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import {
  GradientButton, ScrollContainer, connectAlert,
} from '../../Components';
import { BG_LOGO } from '../../Images';
import { syncDevice } from '../../Actions/Device';
import styles from './styles';

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: '',
    };
  }

  componentDidMount() {
    const uid = DeviceInfo.getUniqueID();
    this.setState({ uniqueId: uid });
  }

  componentWillReceiveProps(nextProps) {
    const { deviceSync, alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
    if (nextProps.deviceSync && deviceSync !== nextProps.deviceSync) {
      console.log('nextProps.deviceSync', nextProps.deviceSync);
      console.log('deviceSync', deviceSync);
      alertWithType('success', 'Success', 'Successfully synced device');
      this.handleNavigation();
    }
  }

  handlePressSync = () => {
    const { dispatch } = this.props;
    const { uniqueId } = this.state;
    dispatch(syncDevice(uniqueId));
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Authenticated');
  }

  render() {
    const { uniqueId } = this.state;
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
              width="60%"
              onPress={this.handlePressSync}
            />
            <Text style={styles.textId}>{`Device UID: ${uniqueId}`}</Text>
          </View>
        </View>
      </ScrollContainer>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  alertWithType: PropTypes.func,
  error: PropTypes.string,
  deviceSync: PropTypes.object,
};

const mapStateToProps = state => ({
  deviceSync: state.device.deviceSync,
  error: state.device.error,
});

export default connect(mapStateToProps)(connectAlert(Onboarding));
