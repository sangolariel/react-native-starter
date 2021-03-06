/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useEffect, useCallback, useMemo} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';

/* check Internet */
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

/* Context */
import {PreferencesContext} from '~/contexts/preferencesContext';

/* State Redux */
import {useSelector, useDispatch} from 'react-redux';
import {languageSelector} from '~/store/language/selectors';
import {fetchSetting} from '~/store/common/actions';

/* FlashMessage */
import FlashMessage from 'react-native-flash-message';

/* Theme */
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
  Provider as ThemeProvider,
} from 'react-native-paper';
import {useColorScheme} from 'react-native-appearance';
import {colors, fonts, spacing, dimension, shadow} from '~/theme';

/* Router @react-navigation v6 */
import RootNavigator from '~/navigation';

/* Types */
import {ThemeType} from '~/types/common';

export default () => {
  /* Localization */
  const {i18n} = useTranslation();

  /*Declare redux and sagas*/
  const dispatch = useDispatch();
  const language = useSelector((state) => languageSelector(state));

  /* Change language */
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }

  /* Theme Setup */
  const colorScheme = useColorScheme();
  const [theme, switchTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  const toggleTheme = () => {
    switchTheme((theme: string) => (theme === 'light' ? 'dark' : 'light'));
  };

  const toggleRTL = useCallback(() => {
    I18nManager.forceRTL(!rtl);
  }, [rtl]);

  const [stateCurrent, setState] = React.useState({
    isUpdate: false,
    loaded: false,
  });

  const [isConnected, setConnected] = React.useState<boolean>(true);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL],
  );

  const setupResource = async () => {
    let stateNew = {
      isUpdate: false,
      loaded: false,
    };
    try {
      /*Fetch setting*/
      dispatch(fetchSetting());

      /*Set loading success*/
      stateNew.loaded = true;
      setState(stateNew);
    } catch (error) {
      console.error(`Setup error : ${error}`);
    }
  };

  /*Check internet*/
  NetInfo.fetch().then((state: NetInfoState | any) => {
    if (isConnected !== state.isConnected) {
      setConnected(state.isConnected);
    }
  });

  useEffect(() => {
    setupResource();
  }, []);

  //Set config theme
  let themeConfig: ThemeType =
    theme === 'light'
      ? {
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, ...colors.light.colors},
        }
      : {
          ...DarkTheme,
          colors: {...DarkTheme.colors, ...colors.dark.colors},
        };

  themeConfig.fontFamily = stateCurrent.loaded ? fonts : DefaultTheme.fonts;
  themeConfig.spacing = {...spacing};
  themeConfig.dimension = {...dimension};
  themeConfig.shadow = {...shadow};

  if (stateCurrent.loaded) {
    /*Hide splash screen*/
  } else {
    return null;
  }

  return (
    <ThemeProvider>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor="transparent"
      />
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={themeConfig}>
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
      <FlashMessage position="top" />
    </ThemeProvider>
  );
};
