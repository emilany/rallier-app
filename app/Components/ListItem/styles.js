import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $colorGrey: '$separator',
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10rem',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '15rem',
  },
  circle: {
    width: '40rem',
    height: '40rem',
    borderRadius: '20rem',
    backgroundColor: '$colorPrimary',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    color: '$colorSecondaryDark',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: '$colorSecondaryLight',
  },
  textLetter: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: '$white',
  },
  image: {
    resizeMode: 'contain',
    width: '30rem',
  },
});

export default styles;
