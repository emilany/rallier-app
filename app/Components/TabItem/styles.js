import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $tabIndicator: '$colorPrimary',
  container: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tabTitle: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.tabNavigator,
    letterSpacing: 1.1,
    color: '$colorSecondary',
  },
  tabStyle: {
    backgroundColor: '$white',
    width: '$tabWidth',
    height: '2rem',
  },
});

export default styles;
