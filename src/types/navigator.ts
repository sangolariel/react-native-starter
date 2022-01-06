export type LangType = {
  vi: string;
  en: string;
};

export interface StackType {
  title: LangType;
  router: string;
  screen: string;
  options: {
    headerShown: boolean;
    animationEnabled: boolean;
  };
}

export interface TabType {
  title: LangType;
  name: LangType;
  screen: string;
  option: {
    tabBarIcon: string;
  };
}
