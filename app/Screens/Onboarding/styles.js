import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    alignItems: 'center',
    paddingTop: '20rem',
  },
  image: {
    width: wp(60),
    height: wp(60),
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    lineHeight: '40rem',
    color: '$primaryColor',
    fontFamily: Fonts.type.regular,
    fontSize: '32rem',
    '@media android': {
      paddingBottom: '15rem',
    },
  },
});

export default styles;