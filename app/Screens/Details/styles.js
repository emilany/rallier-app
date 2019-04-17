import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$colorPrimaryLight',
  $gradientColorTwo: '$colorPrimary',
  gradientContainer: {
    height: '265rem',
  },
  textContainer: {
    marginTop: '32rem',
    marginHorizontal: '20rem',
  },
  aboutContainer: {
    paddingTop: '5%',
  },
  textName: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.worksiteName,
    color: '$white',
  },
  textSectionHeading: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.small,
    letterSpacing: 1,
    color: '$colorSecondary',
  },
});

export default styles;
