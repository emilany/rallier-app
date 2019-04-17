import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  mainContainer: {
    backgroundColor: '$white',
  },
  headerContainer: {
    marginTop: '5rem',
  },
  detailsContainer: {
    paddingHorizontal: '20rem',
    paddingTop: '30rem',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '30rem',
  },
  textContainer: {
    marginTop: '32rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: '15%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp(40),
    height: wp(40),
    resizeMode: 'contain',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.heading,
    color: '$colorSecondaryLight',
    paddingVertical: '8rem',
  },
  textHeading: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    letterSpacing: 1,
    color: '$colorSecondary',
  },
});

export default styles;
