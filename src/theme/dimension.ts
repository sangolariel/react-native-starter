/* Declare Dimensions */
import {Dimensions} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
const DiviceHeight = Dimensions.get('window').height;

/* Size config Text */
export const sizes = {
  base: 16,
  h1: 24,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  error: 16,
};

/* Line Height for Text */
export const lineHeights = {
  base: 16,
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 22,
  h5: 18,
  h6: 17,
  error: 16,
};

/* letterSpacing for Text */
export const letterSpacing = {
  base: -0.3,
};

/* Device Dimensions */
export const dimensionDevice = {
  width: DeviceWidth,
  height: DiviceHeight,
};

/* Used for buton size (small, medium, large) */
export const sizeButton = {
  small: {
    width: '100%',
    height: 32,
  },
  medium: {
    width: '100%',
    height: 38,
  },
  large: {
    width: '100%',
    height: 46,
  },
};

export default {
  sizes,
  lineHeights,
  dimensionDevice,
  sizeButton,
  letterSpacing,
};
