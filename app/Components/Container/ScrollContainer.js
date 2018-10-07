import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from './styles';

const { height } = Dimensions.get('window');

class ScrollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: height,
    };
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const { children } = this.props;
    const { screenHeight } = this.state;
    const scrollEnabled = screenHeight > height;
    return (
      <SafeAreaView style={styles.flex}>
        <ScrollView
          style={styles.grow}
          contentContainerStyle={styles.grow}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={styles.flex}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ScrollContainer.propTypes = {
  children: PropTypes.any,
};

export default ScrollContainer;
