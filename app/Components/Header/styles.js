import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$colorPrimaryLight',
  $gradientColorTwo: '$colorPrimary',
  $colorWhite: '$white',
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: '20rem',
    marginHorizontal: '10rem',
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10rem',
  },
  middleText: {
    fontSize: Fonts.size.heading,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.type.bold,
    letterSpacing: 1,
    color: '$colorSecondaryDark',
  },
  heading: {
    fontSize: Fonts.size.small,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
