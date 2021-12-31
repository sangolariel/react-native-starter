import React from 'react';
import {Platform} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {getActiveTab} from '~/store/temp/selectors';

import * as tempActions from '~/store/temp/actions';

import * as screens from '~/router/navigator/tab';

import {tabsSetting, bottomTabs} from '~/configs/navigator';

import * as TabsIcon from '~/theme/svg/bottomTab';

import {IObject} from '~/interfaces/common';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const dispatch = useDispatch();
  const {i18n} = useTranslation();
  const theme: IObject<any> = useTheme();

  const lang: string = i18n.language;
  const backBehavior = 'initialRoute';

  const activeTab = useSelector((state) => getActiveTab(state));

  const {initialRouteName} = tabsSetting.configs;

  // const tabbarColor =
  //   theme.darkMode && activeTab === bottomTabs.home
  //     ? tabsSetting.configs.dark
  //     : tabsSetting.configs.light;

  const tabbarColor = tabsSetting.configs.light;

  const {activeColor, inactiveColor, tabBarBackground} = tabbarColor;

  const {tabsNavigator} = tabsSetting;

  const listScreens: IObject<any> = screens;
  const tabbarIcons: IObject<any> = TabsIcon;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      backBehavior={backBehavior}
      sceneContainerStyle={{
        backgroundColor:
          theme.darkMode && activeTab === bottomTabs.home
            ? theme.colors.ads
            : activeTab === bottomTabs.home
            ? undefined
            : theme.colors.bgColor,
      }}
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: inactiveColor,
        keyboardHidesTabBar: Platform.OS === 'android' ? true : false,
        style: {
          backgroundColor: tabBarBackground,
          paddingBottom: theme.spacing.padding.base * 2,
          height: theme.spacing.padding.big * 2 - 8,
        },
      }}>
      {tabsNavigator.map((tab: IObject<any>, _i: number) => {
        const TabBarIcon = tabbarIcons[tab.option.tabBarIcon];
        if (!Object.keys(screens).includes(tab.screen)) {
          return null;
        }
        return (
          <Tab.Screen
            key={'tabs' + tab.screen}
            name={tab.screen}
            component={listScreens[tab.screen]}
            listeners={{
              tabPress: (_) => {
                (theme.darkMode || tab.screen === bottomTabs.home) &&
                  dispatch(tempActions.setActiveTab(tab.screen));
              },
            }}
            options={{
              tabBarIcon: ({focused, color}) => {
                return (
                  <TabBarIcon
                    dotColor={focused ? color : tabBarBackground}
                    width={20}
                    height={24}
                    color={color}
                  />
                );
              },
              title: tab.name[lang],
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
