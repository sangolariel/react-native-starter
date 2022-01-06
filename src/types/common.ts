export interface IObject<T> {
  [key: string]: T;
}

export type BaseSpacingSetting = {
  base: number;
  small: number;
  large: number;
  big: number;
};

export type FontSizes = {
  base: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  error: number;
};

export type LineHeights = {
  base: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  error: number;
};

export type LetterSpacing = {
  base: number;
};

export type DimensionDevice = {
  width: number;
  height: number;
};

export type SizeButton = {
  small: {
    width: number;
    height: number;
  };
  medium: {
    width: number;
    height: number;
  };
  large: {
    width: number;
    height: number;
  };
};

export type Font = {
  light: {
    fontFamily: string;
    fontWeight: string;
  };
  medium: {
    fontFamily: string;
    fontWeight: string;
  };
  regular: {
    fontFamily: string;
    fontWeight: string;
  };
  bold: {
    fontFamily: string;
    fontWeight: string;
  };
};

export interface ThemeType extends ReactNativePaper.Theme {
  spacing?: {
    borderRadius: BaseSpacingSetting;
    lineHeight: BaseSpacingSetting;
    padding: BaseSpacingSetting;
    margin: BaseSpacingSetting;
  };
  dimension?:
    | {
        sizes: FontSizes;
        lineHeights: LineHeights;
        letterSpacing: LetterSpacing;
        dimensionDevice: DimensionDevice;
        sizeButton: SizeButton;
      }
    | IObject<any>;
  shadow?: {
    elevation: BaseSpacingSetting;
  };
  fontFamily?: Font | IObject<any>;
}
