export const rootSwitch = {
  mainStack: 'MainStack',
  authStack: 'AuthStack',
  appLoading: 'AppLoading',
};

export const mainStack = {
  bottomTabs: 'BottomTabs',
  detailedTwitt: 'DetailedTwitt',
};

export const authStack = {
  login: 'Login',
  confirmCode: 'ConfirmCode',
  forgotPassword: 'ForgotPassword',
  changePassword: 'ChangePassword',
};

export const bottomTabs = {
  feed: 'Feed',
  notif: 'Notification',
  messenger: 'Messenger',
  profile: 'Profile',
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
    {
      title: {
        vi: 'Detailed Twitt',
        en: 'Detailed Twitt',
      },
      router: mainStack.detailedTwitt,
      screen: mainStack.detailedTwitt,
      options: {
        headerShown: true,
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
    headerShown: true,
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
        vi: 'Messenger',
        en: 'Messenger',
      },
      screen: bottomTabs.messenger,
      option: {
        tabBarIcon: 'MessIcon',
      },
    },
    {
      title: {
        vi: '',
        en: '',
      },
      name: {
        vi: 'Profile',
        en: 'Profile',
      },
      screen: bottomTabs.profile,
      option: {
        tabBarIcon: 'ProfileIcon',
      },
    },
  ],
};
