import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $colorGrey: '$separator',
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.heading,
    color: '$colorSecondary',
  },
});

export default styles;
