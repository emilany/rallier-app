import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$colorPrimaryLight',
  $gradientColorTwo: '$colorPrimary',
  $colorWhite: '$white',
  $colorLogo: '$colorSecondary',
  gradientWrapper: {
    borderRadius: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small,
    letterSpacing: 1,
  },
  lightText: {
    color: '$white',
  },
  buttonText: {
    letterSpacing: 1,
    marginVertical: '10rem',
    opacity: 0.7,
  },
  buttonImageText: {
    textAlign: 'center',
    color: '$white',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    letterSpacing: 1,
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default styles;
