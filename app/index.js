import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
// import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';

import createRootNavigator from './Config/Routes';
import { Colors, Metrics } from './Themes';
// import configureStore from './Config/Store';
import { AlertProvider } from './Components';

EStyleSheet.build({
  ...Colors,
  ...Metrics,
});

// const { store } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: true,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    // check auth available in redux store
    // persistStore(store, {}, () => {
    //   this.setState({
    //     checkedSignIn: true,
    //     isSignedIn: store.getState().user.auth !== undefined,
    //   });
    // });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { isSignedIn, checkedSignIn } = this.state;
    // if (!checkedSignIn) {
    //   return null;
    // }
    const Layout = createRootNavigator(isSignedIn);
    return (
      <AlertProvider>
        <Layout />
      </AlertProvider>
    );
  }
}

export default App;
