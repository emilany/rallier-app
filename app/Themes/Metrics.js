import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slideWidth = wp(75);
const itemHorizontalMargin = wp(-5);

const metrics = {
  $deviceWidth: viewportWidth,
  $deviceHeight: viewportHeight,
  $tabWidth: viewportWidth / 4,
  $rem: viewportWidth / 380,
  $sliderWidth: viewportWidth,
  $itemWidth: slideWidth + itemHorizontalMargin * 2,
};

export default metrics;
