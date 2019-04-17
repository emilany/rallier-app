import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NfcManager from 'react-native-nfc-manager';

import { Nfc, connectAlert } from '../../Components';
import { respondNfc } from '../../Actions/Respond';

class Respond extends Component {
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

  componentWillReceiveProps(nextProps) {
    const { alertWithType, navigation } = this.props;
    if (nextProps.error) {
      if (nextProps.error.includes('400')) {
        alertWithType('info', 'Info', 'Already responded');
      } else {
        alertWithType('error', 'Error', nextProps.error);
      }
    }
    if (nextProps.status === 201 || nextProps.status === 200) {
      alertWithType('success', 'Success', 'Successfully sent response');
      navigation.state.params.onNavigateBack();
      navigation.goBack(null);
    }
  }

  componentWillUnmount() {
    this.stopDetection();
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

  stopDetection = () => {
    NfcManager.unregisterTagEvent()
      .then((result) => {
        console.log('unregisterTagEvent OK', result);
      })
      .catch((error) => {
        console.warn('unregisterTagEvent fail', error);
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

  onPressEnable = () => {
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

  onPressSendResponse = () => {
    const { tag } = this.state;
    const { navigation, dispatch } = this.props;
    const id = navigation.getParam('id', '');
    dispatch(respondNfc(id, tag.id));
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
    }
  }

  render() {
    const { tag, enabled, supported } = this.state;
    return (
      <Nfc
        heading="Send Response"
        description="Tap NFC to send response to HQ"
        buttonText="Send Response"
        onPressButton={this.onPressSendResponse}
        tag={tag.id}
        enabled={enabled}
        supported={supported}
        onPressEnable={this.onPressEnable}
      />
    );
  }
}

Respond.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  alertWithType: PropTypes.func,
  status: PropTypes.number,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  status: state.respond.status,
  error: state.respond.error,
});

export default connect(mapStateToProps)(connectAlert(Respond));
