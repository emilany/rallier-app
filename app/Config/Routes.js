import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { Header, TabItem } from '../Components';
import {
  Main, Onboarding, Respond, Register, Details,
} from '../Screens';
import { ICON_NFC, ICON_INFO } from '../Images';
import { Colors } from '../Themes';

const ResponsesRoutes = createMaterialTopTabNavigator(
  {
    Pending: {
      screen: props => <Main title="Pending" status={0} {...props} />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Pending" {...props} />,
      },
    },
    Responded: {
      screen: props => <Main title="Responded" status={1} {...props} />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Responded" {...props} />,
      },
    },
    All: {
      screen: props => <Main title="All" {...props} />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="All" {...props} />,
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
    lazy: false,
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
            // isMain
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
    Details: {
      screen: Details,
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
