import React from 'react';
import {useTranslation} from 'react-i18next';

/*Theme*/
import {useTheme} from 'react-native-paper';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

/* @react-navigation v6 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/*Import config navigation*/
import * as screens from '~/navigation/screens';
import {navigationSetting} from '~/configs/navigator';
import {navigationRef} from '~/utils/refNavigator';

import {StackType} from '~/types/navigator';
import {IObject} from '~/types/common';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();
  const {i18n} = useTranslation();

  const lang: string = i18n.language;

  const initialRoute: string = navigationSetting.configs.initialRouteName;
  // const cardStyleConfig = navigationSetting.defaultNavigationOption.cardStyle;

  /* StackNavigator  */
  const StackNavigators = navigationSetting.stacks;

  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  // const containerRef = React.useRef(null);
  const ref: any = navigationRef;

  const listScreens: IObject<any> = screens;

  return (
    <NavigationContainer theme={navigationTheme} ref={ref}>
      <Stack.Navigator initialRouteName={initialRoute}>
        {StackNavigators.map((stack: StackType) => {
          if (!Object.keys(screens).includes(stack.screen)) {
            return null;
          }
          return (
            <Stack.Screen
              key={'screen' + stack.screen}
              name={stack.router}
              component={listScreens[stack.screen]}
              options={{
                title: lang === 'en' ? stack.title.en : stack.title.vi,
                headerShown:
                  stack.options && stack.options.headerShown
                    ? stack.options.headerShown
                    : false,
                headerStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
