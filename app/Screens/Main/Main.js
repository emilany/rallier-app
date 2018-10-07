import React, { Component } from 'react';
import { View } from 'react-native';

import { Container, ListItem } from '../../Components';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container backgroundColor={styles.$backgroundColor}>
        <View style={{ marginVertical: 30 }}>
          <ListItem
            name="John Doe"
            time="October 4 17:24"
            status="Missed"
          />
        </View>
      </Container>
    );
  }
}

export default Main;
