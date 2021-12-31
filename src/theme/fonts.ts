import {Platform} from 'react-native';
// Font family
export const fontFamily = 'BebasNeuePro-Regular';
export const fontFamilyBold = 'BebasNeuePro-Bold';

export const fontFamilyOpenSans = 'OpenSans-Regular';
export const fontFamilyOpenSansBold = 'OpenSans-Bold';

export const fontWeightNormal = '400';
export const fontWeightBold = '700';

export default {
  light: {
    fontFamily,
    fontWeight: fontWeightNormal,
  },
  medium: {
    fontFamily,
    fontWeight: fontWeightNormal,
  },
  regular: {
    fontFamily,
    fontWeight: fontWeightNormal,
  },
  bold: {
    fontFamily: fontFamilyBold,
    fontWeight: Platform.OS === 'android' ? null : fontWeightBold,
  },
  secondaryFont: {
    light: {
      fontFamily: fontFamilyOpenSans,
      fontWeight: fontWeightNormal,
    },
    medium: {
      fontFamily: fontFamilyOpenSans,
      fontWeight: fontWeightNormal,
    },
    regular: {
      fontFamily: fontFamilyOpenSans,
      fontWeight: fontWeightNormal,
    },
    bold: {
      fontFamily: fontFamilyOpenSansBold,
      fontWeight: Platform.OS === 'android' ? null : fontWeightBold,
    },
  },
};
