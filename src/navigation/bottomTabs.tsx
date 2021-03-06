/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {SvgProps} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as tabs from '~/navigation/tabs';

import {tabsSetting} from '~/configs/navigator';

import * as TabsIcon from '~/layout/svg/bottomTab';

import {IObject, ThemeType} from '~/types/common';
import {TabType} from '~/types/navigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {i18n} = useTranslation();

  const theme: ThemeType = useTheme();

  const lang: string = i18n.language;
  const backBehavior = 'initialRoute';

  const {initialRouteName, headerShown} = tabsSetting.configs;

  const {tabsNavigator} = tabsSetting;

  const listTabs: IObject<any> = tabs;
  const tabbarIcons: IObject<any> = TabsIcon;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      backBehavior={backBehavior}
      sceneContainerStyle={{
        backgroundColor: theme.colors.background,
      }}
      screenOptions={{
        headerShown,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      {tabsNavigator.map((tab: TabType, _i: number) => {
        const TabBarIcon: React.ComponentClass<SvgProps> =
          tabbarIcons[tab.option.tabBarIcon];
        if (!Object.keys(listTabs).includes(tab.screen)) {
          return null;
        }
        return (
          <Tab.Screen
            key={'tabs' + tab.screen}
            name={tab.screen}
            component={listTabs[tab.screen]}
            options={{
              tabBarIcon: ({focused, color}) => {
                return <TabBarIcon width={20} height={24} color={color} />;
              },
              title: (tab.name as IObject<any>)[lang],
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
