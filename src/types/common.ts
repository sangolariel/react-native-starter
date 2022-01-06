export interface IObject<T> {
  [key: string]: T;
}

export type ThemeType = ReactNativePaper.Theme | IObject<any>;
