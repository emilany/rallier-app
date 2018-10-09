import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import {
  ScrollContainer, DetailsItem, SeparatorLine, connectAlert,
} from '../../Components';
import { ICON_PHONE } from '../../Images';
import styles from './styles';

class Details extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderSectionHeading = text => (
    <Text style={styles.textSectionHeading}>
      {text.toUpperCase()}
    </Text>
  );

  render() {
    const { deviceSync } = this.props;
    console.log('deviceSync', deviceSync.worksite);
    return (
      <ScrollContainer>
        {deviceSync
          && (
          <View>
            <LinearGradient
              colors={[styles.$gradientColorOne, styles.$gradientColorTwo]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.gradientContainer}
            >
              <View style={styles.textContainer}>
                <Text style={styles.textName}>
                  {/* {deviceSync.worksite.name} */}
                </Text>
                <Text style={styles.textName}>
                  {/* {deviceSync.worksite.address} */}
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.aboutContainer}>
              { this.renderSectionHeading('About') }
              <SeparatorLine
                backgroundColor={styles.$colorGrey}
                marginVertical={20}
              />
              <DetailsItem
                // text={deviceSync.worksites.contact}
                image={ICON_PHONE}
                onPress={this.handlePhoneCall}
              />
            </View>
          </View>
          )
        }
      </ScrollContainer>
    );
  }
}

Details.propTypes = {
  deviceSync: PropTypes.object,
};

const mapStateToProps = state => ({
  deviceSync: state.device.deviceSync,
});

export default connect(mapStateToProps)(connectAlert(Details));
