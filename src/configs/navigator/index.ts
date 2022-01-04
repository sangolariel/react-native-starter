export const rootSwitch = {
  mainStack: 'MainStack',
  authStack: 'AuthStack',
  appLoading: 'AppLoading',
};

export const mainStack = {
  bottomTabs: 'BottomTabs',
};

export const authStack = {
  login: 'Login',
  confirmCode: 'ConfirmCode',
  forgotPassword: 'ForgotPassword',
  changePassword: 'ChangePassword',
};

export const bottomTabs = {
  feed: 'Feed',
  notif: 'Notifications',
  messages: 'Messages',
};

export const navigationSetting = {
  defaultNavigationOption: {
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      elevation: 2,
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'bold',
      justifyContent: 'space-between',
      textAlign: 'center',
    },
    cardStyle: {backgroundColor: '#fff'},
  },
  configs: {
    initialRouteName: rootSwitch.mainStack,
  },
  stacks: [
    {
      title: {
        vi: '',
        en: '',
      },
      router: rootSwitch.mainStack,
      screen: rootSwitch.mainStack,
      options: {
        headerShown: false,
        animationEnabled: true,
      },
    },
  ],
};

export const tabsSetting = {
  configs: {
    initialRouteName: bottomTabs.feed,
    tabBarBackground: 'white',
    activeColor: '#509B3D',
    inactiveColor: '#200E32',
  },
  tabsNavigator: [
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Feed',
        en: 'Feed',
      },
      screen: bottomTabs.feed,
      option: {
        tabBarIcon: 'FeedIcon',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Notifications',
        en: 'Notifications',
      },
      screen: bottomTabs.notif,
      option: {
        tabBarIcon: 'NotifIcon',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Messages',
        en: 'Messages',
      },
      screen: bottomTabs.messages,
      option: {
        tabBarIcon: 'MessIcon',
      },
    },
  ],
};
