import React, { Component } from 'react';

import { Nfc } from '../../Components';

class Register extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onPressRegister = () => {
    console.log('onPressRegister');
  }

  render() {
    return (
      <Nfc
        heading="Register NFC"
        description="Tap NFC to register"
        buttonText="Register NFC"
        onPressButton={this.onPressRegister}
      />
    );
  }
}

export default Register;
