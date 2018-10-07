import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { Header, TabItem } from '../Components';
import {
  Main, Onboarding, Respond, Register,
} from '../Screens';
import { ICON_NFC, ICON_INFO } from '../Images';
import { Colors } from '../Themes';

const ResponsesRoutes = createMaterialTopTabNavigator(
  {
    All: {
      screen: props => <Main {...props} title="All" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="All" {...props} />,
      },
    },
    Responded: {
      screen: props => <Main {...props} title="Responded" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Responded" {...props} />,
      },
    },
    Missed: {
      screen: props => <Main {...props} title="Missed" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Missed" {...props} />,
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Colors.$white,
      },
      renderIndicator: () => null,
    },
    swipeEnabled: true,
  },
);

const Authenticated = createStackNavigator(
  {
    ResponsesRoutes: {
      screen: ResponsesRoutes,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <Header
            iconLeft={ICON_NFC}
            iconRight={ICON_INFO}
            text="Rallier"
            isMain
            navigation={navigation}
          />
        ),
      }),
    },
    Respond: {
      screen: Respond,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

const createRootNavigator = (isSignedIn: false) => (
  createSwitchNavigator(
    {
      Authenticated: {
        screen: Authenticated,
      },
      NotAuthenticated: {
        screen: Onboarding,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: isSignedIn ? 'Authenticated' : 'NotAuthenticated',
    },
  )
);

export default createRootNavigator;
