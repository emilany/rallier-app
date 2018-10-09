import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import createRootNavigator from './Config/Routes';
import { Colors, Metrics } from './Themes';
import configureStore from './Config/Store';
import { AlertProvider } from './Components';

EStyleSheet.build({
  ...Colors,
  ...Metrics,
});

const { store } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSynced: false,
      checkedSync: false,
    };
  }

  componentWillMount() {
    // check auth available in redux store
    persistStore(store, {}, () => {
      this.setState({
        checkedSync: true,
        isSynced: store.getState().device.isSynced,
        deviceSync: store.getState().device.deviceSync,
      });
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { isSynced, checkedSync, deviceSync } = this.state;
    console.log('deviceSync', deviceSync);
    if (!checkedSync) {
      return null;
    }
    const Layout = createRootNavigator(isSynced);
    return (
      <Provider store={store}>
        <AlertProvider>
          <Layout />
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
