import React, { Component } from 'react';

import {
  Nfc,
} from '../../Components';

class Respond extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onPressRegister = () => {
    console.log('onPressRegister');
  }

  onPressBack = () => {
    console.log('onPressBack');
  }

  render() {
    return (
      <Nfc
        heading="Send Response"
        description="Tap NFC to send response to HQ"
        buttonText="Send Response"
        onPressButton={this.onPressSendResponse}
        onPressBack={this.onPressBack}
      />
    );
  }
}

export default Respond;
