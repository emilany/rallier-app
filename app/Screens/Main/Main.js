import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  ScrollContainer, ListItem, SeparatorLine, connectAlert,
} from '../../Components';
import { getResponsesList } from '../../Actions/Responses';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
    };
  }

  componentDidMount() {
    this.refreshResponseList();
  }

  componentWillReceiveProps(nextProps) {
    const { alertWithType, responses } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
    if (responses && responses !== nextProps.responses) {
      this.setState({ responses });
    }
  }

  onPressResponse = (id) => {
    console.log('ID', id);
    const { navigation } = this.props;
    navigation.navigate('Respond', {
      id,
    });
  }

  refreshResponseList = () => {
    const { dispatch, deviceSync } = this.props;
    dispatch(getResponsesList(deviceSync.worksite.id));
  }

  render() {
    const { status, isLoading } = this.props;
    const { responses } = this.state;
    const data = status != null
      ? responses.filter(obj => (obj.status === status))
      : responses.filter(obj => (obj.status !== 2));
    return (
      <ScrollContainer>
        {data && (
          <FlatList
            data={data !== null ? data : null}
            renderItem={({ item }) => (
              <ListItem
                id={item.responded_by ? '' : `${item.id}`}
                name={item.responded_by ? item.responded_by.username : `Response ${item.id}`}
                time={item.response_time ? item.response_time : item.request_time}
                status={`${item.status}`}
                onPressResponse={() => this.onPressResponse(item.id)}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={SeparatorLine}
            onRefresh={this.refreshResponseList}
            refreshing={isLoading}
          />
        )}
      </ScrollContainer>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.object,
  deviceSync: PropTypes.object,
  responses: PropTypes.array,
  status: PropTypes.number,
  dispatch: PropTypes.func,
  error: PropTypes.string,
  alertWithType: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  deviceSync: state.device.deviceSync,
  responses: state.responses.responses,
  error: state.responses.error,
  isLoading: state.responses.isLoading,
});

export default connect(mapStateToProps)(connectAlert(Main));
